const form = document.getElementById('subscriptionForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const subscribeButton = document.getElementById('subscribeButton');
const successMessage = document.getElementById('successMessage');


function validateName() {
    return /^[a-zA-Zа-яА-Я]+$/.test(nameInput.value.trim());
}


function validateEmail() {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
}

function validatePhone() {
    return /^\d{11}$/.test(phoneInput.value.trim());
}


function validateForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();

    subscribeButton.disabled = !(isNameValid && isEmailValid && isPhoneValid);
}


nameInput.addEventListener('input', validateForm);
emailInput.addEventListener('input', validateForm);
phoneInput.addEventListener('input', validateForm);


nameInput.addEventListener('focus', () => {
    document.getElementById('nameHint').style.display = 'block';
});
nameInput.addEventListener('blur', () => {
    document.getElementById('nameHint').style.display = 'none';
});

emailInput.addEventListener('focus', () => {
    document.getElementById('emailHint').style.display = 'block';
});
emailInput.addEventListener('blur', () => {
    document.getElementById('emailHint').style.display = 'none';
});

phoneInput.addEventListener('focus', () => {
    document.getElementById('phoneHint').style.display = 'block';
});
phoneInput.addEventListener('blur', () => {
    document.getElementById('phoneHint').style.display = 'none';
});

form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const name = nameInput.value.trim();
    successMessage.textContent = `Спасибо за подписку, ${name}!`;
    form.reset();
    subscribeButton.disabled = true;
});
