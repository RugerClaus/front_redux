document.addEventListener("DOMContentLoaded", () => {
    const captchaInput = document.getElementById('captcha_input');
    const form = document.querySelector('.booking_form');
    const statusMessage = document.getElementById('status_message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        statusMessage.style.display = 'flex';
        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
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
            statusMessage.textContent = "";
            statusMessage.style.display = 'none';
        }, 2000);
    });
});
