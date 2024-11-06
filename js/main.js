document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor");
    const links = document.querySelectorAll('a[href]:not([href="#"])');
    const backToTopButton = document.querySelector('.back-to-top');
    const iframe = document.querySelector("iframe");

    let mouseX = 0, mouseY = 0;

    const updateCursor = () => {
        cursor.style.left = (mouseX + window.scrollX) + "px";
        cursor.style.top = (mouseY + window.scrollY) + "px";
    };

    // Update cursor position based on mouse move
    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX; // Use clientX and clientY for correct positioning within the viewport
        mouseY = e.clientY;

        updateCursor();
    });

    // Update cursor position on scroll
    document.addEventListener("scroll", updateCursor);

    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            cursor.classList.add("large");
        });

        link.addEventListener("mouseleave", () => {
            cursor.classList.remove("large");
        });
    });

    if (backToTopButton) {
        backToTopButton.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        backToTopButton.addEventListener("mouseenter", () => {
            cursor.classList.add("large");
        });

        backToTopButton.addEventListener("mouseleave", () => {
            cursor.classList.remove("large");
        });
    }

    // Change cursor style on iframe hover
    if (iframe) {
        iframe.addEventListener("mouseenter", () => {
            cursor.classList.add("hidden");
            iframe.style.cursor = "crosshair"; // Change this to any cursor style you prefer
        });

        iframe.addEventListener("mouseleave", () => {
            cursor.classList.remove("hidden");
            iframe.style.cursor = "default"; // Revert to default cursor
        });
    }
});
