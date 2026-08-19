// =====================================================
// RISE METHOD
// JAVASCRIPT
// =====================================================


// =====================================================
// 1. ROLAGEM SUAVE
// =====================================================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// =====================================================
// 2. ANIMAÇÃO AO APARECER NA TELA
// =====================================================

const animatedElements = document.querySelectorAll(
    ".method-card, .testimonial-card, .social-card, .photo, .highlight"
);


animatedElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform = "translateY(18px)";

    element.style.transition =
        "opacity .6s ease, transform .6s ease";

});


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


animatedElements.forEach(function (element) {

    observer.observe(element);

});


// =====================================================
// 3. ANIMAÇÃO DOS NÚMEROS
// =====================================================

const numbers = document.querySelectorAll(
    ".number strong, .profile-numbers strong"
);


const numberObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (!entry.isIntersecting) {
                return;
            }

            entry.target.style.transition =
                "transform .5s ease, opacity .5s ease";

            entry.target.style.transform =
                "scale(1.08)";

            setTimeout(function () {

                entry.target.style.transform =
                    "scale(1)";

            }, 500);

            numberObserver.unobserve(
                entry.target
            );

        });

    },

    {
        threshold: 0.5
    }

);


numbers.forEach(function (number) {

    numberObserver.observe(number);

});


// =====================================================
// 4. BOTÕES
// =====================================================

const buttons = document.querySelectorAll(
    ".main-button"
);


buttons.forEach(function (button) {

    button.addEventListener(
        "touchstart",
        function () {

            button.style.transform =
                "scale(.98)";

        },
        {
            passive: true
        }
    );


    button.addEventListener(
        "touchend",
        function () {

            button.style.transform =
                "scale(1)";

        },
        {
            passive: true
        }
    );

});


// =====================================================
// 5. ANO AUTOMÁTICO DO FOOTER
// =====================================================

const copyright = document.querySelector(
    ".copyright"
);


if (copyright) {

    const year = new Date().getFullYear();

    copyright.innerHTML =
        "© " +
        year +
        " Rise Method. Todos os direitos reservados.";

}


// =====================================================
// 6. PREVENIR CLIQUE EM LINKS "#"
// =====================================================

document.querySelectorAll('a[href="#"]').forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

            }
        );

    }
);


// =====================================================
// FIM
// =====================================================
