document.addEventListener("DOMContentLoaded", function () {
    const contactLink = document.getElementById("contact-link");

    if (contactLink) {
        contactLink.addEventListener("click", function (event) {
            event.preventDefault();

            const confirmed = confirm("Emails trying to sell me services will be ignored. Do you still want to continue?");
            
            if (confirmed) {
                // Replace this with your actual email address
                window.location.href = "mailto:contact@typicalnerds.uk";
            }
        });
    }
});
