document.addEventListener("DOMContentLoaded", function () {
    // Mobile navigation menu
    const menuButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", function () {
            navLinks.classList.toggle("show");
        });
    }

    // High contrast mode
    const contrastButton = document.getElementById("contrastToggle");

    if (contrastButton) {
        contrastButton.addEventListener("click", function () {
            document.body.classList.toggle("high-contrast");

            if (document.body.classList.contains("high-contrast")) {
                contrastButton.textContent = "Normal Contrast";
            } else {
                contrastButton.textContent = "High Contrast";
            }
        });
    }

    // Newsletter form validation
    const newsletterForm = document.getElementById("newsletterForm");
    const newsletterMessage = document.getElementById("newsletterMessage");

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("newsletterEmail").value.trim();

            if (email === "") {
                newsletterMessage.textContent = "Please enter your email address.";
                newsletterMessage.style.color = "#8b0000";
                return;
            }

            if (!email.includes("@") || !email.includes(".")) {
                newsletterMessage.textContent = "Please enter a valid email address.";
                newsletterMessage.style.color = "#8b0000";
                return;
            }

            newsletterMessage.textContent = "Thank you for signing up for the GreenTech newsletter!";
            newsletterMessage.style.color = "#1f6b2a";

            newsletterForm.reset();
        });
    }

    // Contact form validation
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const interest = document.getElementById("interest").value;
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || interest === "" || message === "") {
                formMessage.textContent = "Please complete all fields before submitting.";
                formMessage.style.color = "#8b0000";
                return;
            }

            if (!email.includes("@") || !email.includes(".")) {
                formMessage.textContent = "Please enter a valid email address.";
                formMessage.style.color = "#8b0000";
                return;
            }

            formMessage.textContent = "Thank you! Your message has been submitted successfully.";
            formMessage.style.color = "#1f6b2a";

            contactForm.reset();
        });
    }

    // Product search and category filter
    const productSearch = document.getElementById("productSearch");
    const categoryFilter = document.getElementById("categoryFilter");
    const productCards = document.querySelectorAll(".product-card");
    const noResults = document.getElementById("noResults");

    function filterProducts() {
        if (!productSearch || !categoryFilter) {
            return;
        }

        const searchText = productSearch.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        let visibleProducts = 0;

        productCards.forEach(function (card) {
            const productText = card.textContent.toLowerCase();
            const productCategory = card.getAttribute("data-category");

            const matchesSearch = productText.includes(searchText);
            const matchesCategory = selectedCategory === "all" || productCategory === selectedCategory;

            if (matchesSearch && matchesCategory) {
                card.style.display = "block";
                visibleProducts++;
            } else {
                card.style.display = "none";
            }
        });

        if (noResults) {
            if (visibleProducts === 0) {
                noResults.style.display = "block";
            } else {
                noResults.style.display = "none";
            }
        }
    }

    if (productSearch && categoryFilter) {
        productSearch.addEventListener("input", filterProducts);
        categoryFilter.addEventListener("change", filterProducts);
    }

    // Read More buttons for resource cards
    const readMoreButtons = document.querySelectorAll(".read-more-btn");

    readMoreButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const card = button.closest(".resource-card");
            const extraInfo = card.querySelector(".extra-info");

            if (extraInfo) {
                extraInfo.classList.toggle("show");

                if (extraInfo.classList.contains("show")) {
                    button.textContent = "Show Less";
                } else {
                    button.textContent = "Read More";
                }
            }
        });
    });
});