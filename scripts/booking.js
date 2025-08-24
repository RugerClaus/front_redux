document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.booking_form');
    const sendButton = form.querySelector('.send_message_button');
    const statusMessage = document.getElementById('status_message');

    const submitForm = async () => {
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

    // Click event for the button
    sendButton.addEventListener('click', submitForm);

    // Submit form when Enter is pressed in any input or textarea
    form.addEventListener('keydown', (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault(); // prevent default Enter behavior
            submitForm();
        }
    });
});
