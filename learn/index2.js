let dicountButton = document.getElementById('discount-button');
let message = document.getElementById('message');

function showMessage() {
    message.innerHTML = 'หมดเวลาแล้ว';
}

discountButton.addEventListener('click', showMessage);