// =============================================
// HAVEN PRINTING – GALLERY & LIGHTBOX JS
// =============================================

document.addEventListener('DOMContentLoaded', () => {

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.getElementById('lightboxClose');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');

    // Collect only tiles that have a real image
    const tiles = Array.from(document.querySelectorAll('.gallery-tile img, .gallery-featured-img img'));
    let current = 0;

    function openLightbox(index) {
        if (!tiles[index]) return;
        current = index;
        lightboxImg.src = tiles[index].src;
        lightboxImg.alt = tiles[index].alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        lightboxImg.src = '';
    }

    function showPrev() {
        current = (current - 1 + tiles.length) % tiles.length;
        lightboxImg.src = tiles[current].src;
        lightboxImg.alt = tiles[current].alt;
    }

    function showNext() {
        current = (current + 1) % tiles.length;
        lightboxImg.src = tiles[current].src;
        lightboxImg.alt = tiles[current].alt;
    }

    // Attach click to each real image tile
    tiles.forEach((img, i) => {
        img.closest('.gallery-tile, .gallery-featured-img').style.cursor = 'zoom-in';
        img.closest('.gallery-tile, .gallery-featured-img').addEventListener('click', () => openLightbox(i));
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', showPrev);
    if (nextBtn) nextBtn.addEventListener('click', showNext);

    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
    });

});
