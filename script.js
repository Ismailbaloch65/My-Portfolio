// ================= TYPING ANIMATION =================

const typingText =
    document.getElementById("typing");


if (typingText) {

    const words = [

        "Full-Stack Developer",
        "Web Developer",
        "Creative Developer",
        "Software Engineering Student"

    ];


    let wordIndex = 0;

    let charIndex = 0;

    let deleting = false;


    function typeEffect() {

        const currentWord =
            words[wordIndex];


        if (!deleting) {

            typingText.textContent =
                currentWord.substring(
                    0,
                    charIndex + 1
                );


            charIndex++;


            if (
                charIndex ===
                currentWord.length
            ) {

                deleting = true;

                setTimeout(
                    typeEffect,
                    1500
                );

                return;

            }

        }

        else {

            typingText.textContent =
                currentWord.substring(
                    0,
                    charIndex - 1
                );


            charIndex--;


            if (charIndex === 0) {

                deleting = false;

                wordIndex++;


                if (
                    wordIndex ===
                    words.length
                ) {

                    wordIndex = 0;

                }

            }

        }


        setTimeout(

            typeEffect,

            deleting ? 60 : 100

        );

    }


    typeEffect();

}


// ================= DARK / LIGHT MODE =================

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    document.getElementById("themeIcon");


// Check Saved Theme

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add(
        "light-mode"
    );


    themeIcon.classList.remove(
        "bi-moon-stars-fill"
    );


    themeIcon.classList.add(
        "bi-sun-fill"
    );

}


// Toggle Theme

if (themeToggle) {

    themeToggle.addEventListener(

        "click",

        () => {

            document.body.classList.toggle(
                "light-mode"
            );


            if (

                document.body.classList.contains(
                    "light-mode"
                )

            ) {

                themeIcon.classList.remove(
                    "bi-moon-stars-fill"
                );


                themeIcon.classList.add(
                    "bi-sun-fill"
                );


                localStorage.setItem(
                    "theme",
                    "light"
                );

            }

            else {

                themeIcon.classList.remove(
                    "bi-sun-fill"
                );


                themeIcon.classList.add(
                    "bi-moon-stars-fill"
                );


                localStorage.setItem(
                    "theme",
                    "dark"
                );

            }

        }

    );

}


// ================= SCROLL REVEAL =================

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    revealElements.forEach(

        (element) => {

            const windowHeight =
                window.innerHeight;


            const elementTop =
                element
                .getBoundingClientRect()
                .top;


            const revealPoint = 100;


            if (

                elementTop <

                windowHeight -
                revealPoint

            ) {

                element.classList.add(
                    "active"
                );

            }

        }

    );

}


window.addEventListener(

    "scroll",

    revealOnScroll

);


// Run when page loads

revealOnScroll();