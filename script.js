document.addEventListener('DOMContentLoaded', (event) => {
    const imageElement = document.getElementById('hoverImage1');

    imageElement.addEventListener('mouseenter', () => {
        imageElement.src = 'eva-01-alt.jpg';
    });

    imageElement.addEventListener('mouseleave', () => {
        imageElement.src = 'eva-01.jpg';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const imageElement = document.getElementById('hoverImage2');

    imageElement.addEventListener('mouseenter', () => {
        imageElement.src = 'eva-02-alt.jpeg';
    });

    imageElement.addEventListener('mouseleave', () => {
        imageElement.src = 'eva-02.jpg';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const imageElement = document.getElementById('hoverImage0');

    imageElement.addEventListener('mouseenter', () => {
        imageElement.src = 'eva-00-alt.jpg';
    });

    imageElement.addEventListener('mouseleave', () => {
        imageElement.src = 'eva-00.jpg';
    });
});
