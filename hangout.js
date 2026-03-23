document.addEventListener("DOMContentLoaded", function() {

    // Selects the cards (works for our new 'hangout-card' or your old 'card')
    const cards = document.querySelectorAll(".card, .hangout-card, .restaurant-card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            
            // 1. Your original click animation
            card.classList.add("active");
            setTimeout(() => {
                card.classList.remove("active");
            }, 300);

            // 2. Grab the custom message and website link from the HTML
            const customMessage = card.getAttribute("data-message");
            const websiteLink = card.getAttribute("data-url");

            // 3. If both exist, show the pop-up
            if (customMessage && websiteLink) {
                // confirm() creates a pop-up with "OK" and "Cancel"
                const userAgreed = confirm(customMessage);
                
                // If they click "OK", open the link in a new tab
                if (userAgreed) {
                    window.open(websiteLink, "_blank");
                }
            }
        });
    });

});