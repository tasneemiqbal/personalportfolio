// ==========================================
// 3D PIPES - Windows screensaver homage (three.js)
// Pipes grow and turn through a 3D grid in XP colors.
// Mouse rotates the scene; it clears and regrows when full.
// ==========================================

(function () {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas || typeof THREE === 'undefined') {
        return;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Warm/varied glossy pipe colors (kept off the blue/gray text palette so they pop)
    const PALETTE = [0x2f9e44, 0xe8a33d, 0xc0392b, 0x9b59b6, 0x16a085, 0xe06ea8];
    const CELL = 26;          // world units between grid nodes
    const EXT = 6;            // grid extent (-EXT..EXT) on each axis
    const R = 3.4;            // pipe radius
    const MAX_SEGMENTS = 230; // clear + regrow after this many
    const STEP_EVERY = 2;     // grow one segment every N frames

    const DIRS = [
        new THREE.Vector3(1, 0, 0), new THREE.Vector3(-1, 0, 0),
        new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, -1, 0),
        new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, -1)
    ];

    // ---- Scene / camera / renderer ----
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 3000);
    camera.position.set(0, 0, EXT * CELL * 2.0);

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: false });
    renderer.setPixelRatio(1); // chunky / retro
    renderer.setSize(window.innerWidth, window.innerHeight);

    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const key = new THREE.DirectionalLight(0xffffff, 0.85);
    key.position.set(1, 1, 1);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0x9bbcff, 0.4);
    fill.position.set(-1, -0.5, 0.5);
    scene.add(fill);

    const group = new THREE.Group();
    scene.add(group);

    // Cache one material per color
    const matCache = {};
    function matFor(color) {
        if (!matCache[color]) {
            matCache[color] = new THREE.MeshPhongMaterial({
                color: color, shininess: 80, specular: 0x444444
            });
        }
        return matCache[color];
    }

    const UP = new THREE.Vector3(0, 1, 0);
    function worldOf(g) {
        return new THREE.Vector3(g.x * CELL, g.y * CELL, g.z * CELL);
    }
    function gkey(g) { return g.x + ',' + g.y + ',' + g.z; }
    function inBounds(g) {
        return Math.abs(g.x) <= EXT && Math.abs(g.y) <= EXT && Math.abs(g.z) <= EXT;
    }

    function addCylinder(p1, p2, color) {
        const dir = new THREE.Vector3().subVectors(p2, p1);
        const len = dir.length();
        const geo = new THREE.CylinderGeometry(R, R, len + 1, 14);
        const m = new THREE.Mesh(geo, matFor(color));
        m.position.copy(p1).add(p2).multiplyScalar(0.5);
        m.quaternion.setFromUnitVectors(UP, dir.normalize());
        group.add(m);
    }
    function addJoint(p, color) {
        const geo = new THREE.SphereGeometry(R * 1.35, 14, 12);
        const m = new THREE.Mesh(geo, matFor(color));
        m.position.copy(p);
        group.add(m);
    }

    // ---- Pipe state ----
    let occ = new Set();
    let cur, curDir, color, segCount = 0, resetting = false;
    let runLen = 0, runMax = 0;

    function randCell() {
        return {
            x: Math.floor(Math.random() * (EXT * 2 + 1)) - EXT,
            y: Math.floor(Math.random() * (EXT * 2 + 1)) - EXT,
            z: Math.floor(Math.random() * (EXT * 2 + 1)) - EXT
        };
    }

    function startPipe() {
        // find a free starting cell
        for (let tries = 0; tries < 40; tries++) {
            const c = randCell();
            if (!occ.has(gkey(c))) {
                cur = c; curDir = null;
                // new color each pipe; never repeat the previous one
                let next;
                do { next = PALETTE[Math.floor(Math.random() * PALETTE.length)]; } while (next === color);
                color = next;
                runLen = 0;
                runMax = 16 + Math.floor(Math.random() * 22); // short-ish runs -> many colors on screen
                occ.add(gkey(c));
                addJoint(worldOf(c), color);
                return true;
            }
        }
        return false;
    }

    function grow() {
        // End this pipe run after a while so a fresh color starts elsewhere
        if (runLen >= runMax) {
            if (!startPipe()) scheduleReset();
            return;
        }
        const options = DIRS.filter(function (d) {
            const n = { x: cur.x + d.x, y: cur.y + d.y, z: cur.z + d.z };
            return inBounds(n) && !occ.has(gkey(n));
        });
        if (options.length === 0) {
            if (!startPipe()) scheduleReset();
            return;
        }
        let nd;
        const straight = curDir && options.find(function (d) {
            return d.x === curDir.x && d.y === curDir.y && d.z === curDir.z;
        });
        if (straight && Math.random() < 0.62) {
            nd = straight;
        } else {
            nd = options[Math.floor(Math.random() * options.length)];
            if (curDir) addJoint(worldOf(cur), color); // elbow at turn
        }
        const nxt = { x: cur.x + nd.x, y: cur.y + nd.y, z: cur.z + nd.z };
        addCylinder(worldOf(cur), worldOf(nxt), color);
        occ.add(gkey(nxt));
        cur = nxt; curDir = nd; segCount++; runLen++;
        if (segCount >= MAX_SEGMENTS) scheduleReset();
    }

    function clearGroup() {
        for (let i = group.children.length - 1; i >= 0; i--) {
            group.remove(group.children[i]);
        }
        occ = new Set();
        segCount = 0;
        resetting = false;
        startPipe();
    }

    function scheduleReset() {
        if (resetting) return;
        resetting = true;
        setTimeout(clearGroup, 900);
    }

    startPipe();

    // ---- Mouse parallax ----
    const target = { x: 0, y: 0 };
    const eased = { x: 0, y: 0 };
    window.addEventListener('mousemove', function (e) {
        target.x = (e.clientX / window.innerWidth) * 2 - 1;
        target.y = (e.clientY / window.innerHeight) * 2 - 1;
    });

    let frame = 0;
    function animate() {
        frame++;
        if (!resetting && frame % STEP_EVERY === 0) grow();

        eased.x += (target.x - eased.x) * 0.05;
        eased.y += (target.y - eased.y) * 0.05;
        group.rotation.y += 0.0016 + (eased.x * 0.5 - group.rotation.y) * 0.02;
        group.rotation.x += (eased.y * 0.35 - group.rotation.x) * 0.02;

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    if (reduceMotion) {
        // Build a static tangle once, no animation loop.
        for (let i = 0; i < 120; i++) grow();
        group.rotation.set(0.3, 0.5, 0);
        renderer.render(scene, camera);
    } else {
        animate();
    }

    // ---- Resize ----
    window.addEventListener('resize', function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
})();
