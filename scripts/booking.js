document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.booking_form');
    const statusMessage = document.getElementById('status_message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // THIS stops page reload
        e.stopPropagation(); // stop any other submit handlers

        statusMessage.style.display = 'flex';
        statusMessage.textContent = "Sending...";

        const formData = new FormData(form);

        try {
            const response = await fetch('/gateway/contact.php', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const text = await response.text();

                if (text.includes("captcha_error")) {
                    statusMessage.textContent = "Incorrect answer to the math question.";
                } else {
                    statusMessage.textContent = "Message sent!";
                    form.reset();
                }
            } else {
                statusMessage.textContent = "Something went wrong.";
            }
        } catch (error) {
            statusMessage.textContent = "Network error.";
            console.error(error);
        }

        setTimeout(() => {
            statusMessage.style.display = 'none';
            statusMessage.textContent = "";
        }, 2000);
    });
});
