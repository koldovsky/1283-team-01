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
