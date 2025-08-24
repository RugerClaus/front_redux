document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.booking_form');
    const sendButton = form.querySelector('.send_message_button');
    const statusMessage = document.getElementById('status_message');

    const sendForm = async () => {
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
    };

    // Handle button click
    sendButton.addEventListener('click', sendForm);

    // Handle Enter keypress anywhere in the form
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // prevent page reload
        sendForm();
    });
});
