//Carousel
function loadModuleFromCDN(url, callback) {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = url;
    script.onload = () => {
        if (window.EmblaCarousel) {
            callback();
        }
    };
    script.onerror = () => {}; 
    document.head.appendChild(script);
}

function initAllEmblas() {
    const emblaNodes = document.querySelectorAll('.projects__carousel');
    const OPTIONS = { loop: true, dragFree: true };

    emblaNodes.forEach((emblaNode) => {
        const viewportNode = emblaNode.querySelector('.projects__carousel-viewport');
        if (viewportNode) {
            const emblaApi = EmblaCarousel(viewportNode, OPTIONS);
            emblaApi.scrollTo(0); 
        }
    });
}

window.onload = function() {
    loadModuleFromCDN('https://unpkg.com/embla-carousel/embla-carousel.umd.js', () => {
        initAllEmblas();
    });

    document.body.addEventListener('htmx:afterSwap', initAllEmblas);
};


//Galery
const modal = document.getElementById('projects__imageModal');
const modalImage = document.getElementById('projects__modalImage');
const closeModal = document.querySelector('.projects__close');
const modalPrev = document.querySelector('.projects__modal-prev');
const modalNext = document.querySelector('.projects__modal-next');

let currentImageIndex = 0;
let currentImages = [];

function openModal(imageSrc, images) {
    modal.style.display = 'flex';
    modalImage.src = imageSrc;
    currentImages = images;
    currentImageIndex = currentImages.indexOf(imageSrc);
}

closeModal.onclick = function() {
    modal.style.display = 'none';
}

document.querySelectorAll('.projects__image').forEach((image) => {
    image.onclick = function() {
        const images = Array.from(image.closest('.projects__carousel').querySelectorAll('.projects__image')).map(img => img.src);
        openModal(image.src, images);
    };
});

modalNext.onclick = function() {
    currentImageIndex = (currentImageIndex + 1) % currentImages.length; // loop back to first image
    modalImage.src = currentImages[currentImageIndex];
};

modalPrev.onclick = function() {
    currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length; // loop back to last image
    modalImage.src = currentImages[currentImageIndex];
};

modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};