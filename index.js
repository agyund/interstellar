$(document).ready(function () {

    (function () {

        // Star Numbers
        var starsNumber = 700,
            canvas = document.getElementById('divCanvas'),
            context = canvas.getContext('2d'),
            width = window.innerWidth,
            height = window.innerHeight,
            x = 100,
            y = 100,
            i = 0,
            t = 0,
            stars = [],
            colors = [
                '#ffffff', // Sirius        (Canis Major)
                '#ffffff', // Rigel         (Orion)
                '#ffffff', // Sun & Capella (Auriga)
                '#ffffff', // Albedaran     (Taurus)
                '#ffffff'  // Betelgeuse    (Orion)
            ];

        function Star() {

            // Random Position
            this.x = Math.random() * width;
            this.y = Math.random() * height;

            // Location Starting
            this.speed = 0;

            // Colors
            this.color = colors[Math.floor(Math.random() * colors.length)];

            // Size Limits
            this.size = Math.random();
        }

        function draw() {

            // Colors
            var star;

            // Canvas Size
            canvas.width = width;
            canvas.height = height;

            for (t = 0; t < stars.length; t += 1) {

                // Getting Star
                star = stars[t];

                // Building
                context.beginPath();
                context.fillStyle = star.color;
                context.arc(star.x, star.y, star.size, Math.PI * 2, false);
                context.fill();

                // Animation
                star.x -= star.speed;

                // Keeping Stars on canvas
                if (star.x < -star.size) {
                    star.x = width + star.size;
                }

                if (star.size < 7) {
                    star.speed = 2;
                }

                if (star.size < 6) {
                    star.speed = 1;
                }

                if (star.size < 4) {
                    star.speed = 0.5;
                }
            }
        }

        for (i = 0; i < starsNumber; i += 1) {
            stars.push(new Star());
        }

        setInterval(draw, 20);

    }());
})
//interstellar music on/off
$(document).ready(function () {
    $(".sound-play").on("click", function () {
        $(".sound")[0].play();
    })
    $(".sound-pause").on("click", function () {
        $(".sound")[0].pause();
    })
})
