document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.booking_form');
    if (!form) return; // sanity check

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log('Form submit intercepted'); // debug

        const statusMessage = document.getElementById('status_message');
        const formData = new FormData(form);

        statusMessage.style.display = 'flex';

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
            });

            const text = await response.text();

            if (text.includes("captcha_error")) {
                statusMessage.textContent = "Incorrect answer to the math question.";
            } else {
                statusMessage.textContent = "Message sent!";
                form.reset();
            }
        } catch (err) {
            statusMessage.textContent = "Network error.";
            console.error(err);
        }

        setTimeout(() => {
            statusMessage.textContent = "";
            statusMessage.style.display = 'none';
        }, 2000);
    });
});
