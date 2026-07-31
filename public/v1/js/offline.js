// ==========================================
// OFFLINE PAGE
// Only loaded by offline.html.
// ==========================================

/*
 * Click-to-load video. An embedded YouTube iframe costs about a megabyte of
 * script and sets third-party cookies before anyone has decided to watch, so
 * the player shows only the poster frame (one image from img.youtube.com) and
 * swaps in the real iframe on the first click. The player, its scripts and its
 * cookies never load for the visitors who do not press play.
 */
function initVideoFacade() {
    const screen = document.getElementById('djScreen');
    if (!screen) return;

    const id = screen.dataset.videoId;
    const title = screen.dataset.videoTitle || 'Video';

    // No clip wired up yet: leave the empty state in place and take the button
    // out of the tab order rather than offering a control that does nothing.
    if (!id) {
        screen.disabled = true;
        return;
    }

    screen.disabled = false;

    // oardefault is the frame at the video's original aspect, which for a Short
    // is the full 1080x1920. hqdefault always exists but is a 4:3 centre crop,
    // so it is the fallback rather than the first choice.
    const poster = document.createElement('img');
    poster.src = 'https://i.ytimg.com/vi/' + id + '/oardefault.jpg';
    poster.alt = '';
    poster.width = 1080;
    poster.height = 1920;
    poster.addEventListener('error', function () {
        poster.src = 'https://img.youtube.com/vi/' + id + '/hqdefault.jpg';
    }, { once: true });

    const play = document.createElement('span');
    play.className = 'mp-play';
    play.setAttribute('aria-hidden', 'true');
    play.textContent = '▶';

    screen.replaceChildren(poster, play);
    screen.setAttribute('aria-label', 'Play ' + title);

    screen.addEventListener('click', function () {
        const frame = document.createElement('iframe');
        frame.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
        frame.title = title;
        frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture';
        frame.allowFullscreen = true;
        screen.replaceWith(frame);
        // The button is gone, so move focus somewhere sensible.
        frame.focus();
    }, { once: true });
}

/*
 * Photo lightbox. A native <dialog> gets the top layer, the backdrop, focus
 * trapping and Escape for free; the only work left is filling it in and giving
 * focus back to the thumbnail that opened it.
 */
function initLightbox() {
    const dialog = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    const name = document.getElementById('lightboxName');
    const caption = document.getElementById('lightboxCaption');
    const close = document.getElementById('lightboxClose');
    if (!dialog || !img) return;

    let opener = null;

    document.querySelectorAll('.pic-btn').forEach(btn => {
        const text = btn.dataset.caption || '';
        const thumb = btn.querySelector('img');

        // One caption per photo does two jobs: it names the thumbnail for a
        // screen reader in the grid, where nothing else describes it.
        if (thumb && text && !thumb.alt) thumb.alt = text;

        btn.addEventListener('click', function () {
            const full = btn.dataset.full || (thumb && thumb.src);
            if (!full) return;

            opener = btn;
            img.src = full;
            // The caption sits right under the photo, so alt would only repeat it.
            img.alt = '';
            if (name) name.textContent = full.split('/').pop();
            if (caption) {
                caption.textContent = text;
                caption.hidden = !text;
            }
            dialog.setAttribute('aria-label', text || 'Photo');
            dialog.showModal();
        });
    });

    if (close) close.addEventListener('click', () => dialog.close());

    // Clicking the backdrop lands on the dialog element itself, not its content.
    dialog.addEventListener('click', function (e) {
        if (e.target === dialog) dialog.close();
    });

    dialog.addEventListener('close', function () {
        img.removeAttribute('src');
        if (opener) opener.focus();
    });
}

/*
 * Taskbar clock. XP showed the time, so this shows the time. It is the one
 * thing on the page that has to be live to be believable.
 */
function initClock() {
    const clock = document.getElementById('tbClock');
    if (!clock) return;

    function tick() {
        clock.textContent = new Date().toLocaleTimeString([], {
            hour: 'numeric',
            minute: '2-digit',
        });
    }

    tick();
    setInterval(tick, 15000);
}

document.addEventListener('DOMContentLoaded', function () {
    initVideoFacade();
    initLightbox();
    initClock();
});
