$(document).ready(function () {

    function createMeteor() {
        const meteor = document.createElementNS("http://www.w3.org/2000/svg", "image");
        meteor.setAttribute("class", "meteor");
        meteor.setAttribute("width", "20");
        meteor.setAttribute("height", "20");
        meteor.setAttribute("x", Math.random() * window.innerWidth);
        meteor.setAttribute("y", 0);
        meteor.setAttribute("href", "img/metplease.png");
        $('#meteors-container').append(meteor);
        animateMeteor(meteor);
    }


    function animateMeteor(meteor) {
        const speed = 2 + Math.random() * 3;
        const angle = (5 / 6) * Math.PI;
        const deltaX = Math.cos(angle) * speed;
        const deltaY = Math.sin(angle) * speed;

        function move() {
            const currentX = parseFloat(meteor.getAttribute("x"));
            const currentY = parseFloat(meteor.getAttribute("y"));

            meteor.setAttribute("x", currentX + deltaX);
            meteor.setAttribute("y", currentY + deltaY);

            if (currentY < window.innerHeight) {
                requestAnimationFrame(move);
            } else {
                meteor.remove();
            }
        }

        requestAnimationFrame(move);
    }


    setInterval(createMeteor, 1000);
});
function butoniFazat() {
    var div = document.getElementById('paragrafHena');
    if (div.style.display === 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector('header');

    function toggleHeaderBackground() {
        header.classList.toggle('scrolled', window.scrollY > 50);
    }

    window.addEventListener('scroll', toggleHeaderBackground);
});

$(document).ready(function () {
    function generateMeteor() {
        const meteorElement = document.createElementNS("http://www.w3.org/2000/svg", "image");
        meteorElement.setAttribute("class", "meteor");
        meteorElement.setAttribute("width", "20");
        meteorElement.setAttribute("height", "20");
        meteorElement.setAttribute("x", Math.random() * window.innerWidth);
        meteorElement.setAttribute("y", 0);
        meteorElement.setAttribute("href", "img/metplease.png");
        $('#meteors-container3').append(meteorElement);
        moveMeteor(meteorElement);
    }

    function moveMeteor(meteorElement) {
        const speed = 2 + Math.random() * 3;
        const angle = (5 / 6) * Math.PI;
        const deltaX = Math.cos(angle) * speed;
        const deltaY = Math.sin(angle) * speed;

        function move() {
            const currentX = parseFloat(meteorElement.getAttribute("x"));
            const currentY = parseFloat(meteorElement.getAttribute("y"));

            meteorElement.setAttribute("x", currentX + deltaX);
            meteorElement.setAttribute("y", currentY + deltaY);

            if (currentY < window.innerHeight) {
                requestAnimationFrame(move);
            } else {
                meteorElement.remove();
            }
        }

        requestAnimationFrame(move);
    }

    setInterval(generateMeteor, 1000);
});