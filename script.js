const divider = document.querySelector('.divider');
const beforeImage = document.querySelector('#before-image');
const afterImage = document.querySelector('#after-image');
const container = document.querySelector('.before-after');

let isDragging = false;

divider.addEventListener('mousedown', () => {
    isDragging = true;
});

container.addEventListener('mouseup', () => {
    isDragging = false;
});

container.addEventListener('mousemove', (event) => {
    if (isDragging) {
        let xPos = event.clientX - container.getBoundingClientRect().left;
        let percentage = (xPos / container.offsetWidth) * 100;
        divider.style.left = percentage + '%';
        beforeImage.style.width = percentage + '%';
        afterImage.style.width = (100 - percentage) + '%';
    }
});
