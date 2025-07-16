
const form = document.querySelector('.booking_form');
const statusMessage = document.getElementById('status_message');

form.addEventListener('submit', async (e) => {
e.preventDefault();
statusMessage.style.display = 'flex'

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
    statusMessage.style.display = 'none'
}, 2000);
});