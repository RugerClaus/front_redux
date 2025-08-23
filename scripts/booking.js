const captchaLabel = document.getElementById('captcha_label');
const captchaInput = document.getElementById('captcha_input');

const a = Math.floor(Math.random() * 10) + 1;
const b = Math.floor(Math.random() * 10) + 1;

captchaLabel.textContent = `What is ${a} + ${b}?`;

captchaInput.dataset.correct = a + b;

const form = document.querySelector('.booking_form');
const statusMessage = document.getElementById('status_message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (parseInt(captchaInput.value) !== parseInt(captchaInput.dataset.correct)) {
        statusMessage.textContent = "Incorrect answer to the math question.";
        statusMessage.style.display = 'flex';
        return;
    }

    statusMessage.style.display = 'flex';
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
        });

        if (response.ok) {
            statusMessage.textContent = "Message sent!";
            form.reset();
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
