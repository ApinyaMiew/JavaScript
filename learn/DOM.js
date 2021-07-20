/* 1
let messages = document.getElementsByClassName('message');//ดึงแท็ก HTML มาเก็บเป็น list
for (let i = 0; i < messages.length; i++) {
    messages[i].innerHTML = 'ไม่ต้องห่วงฉัน';
}
let messages = document.querySelectorAll('.message');
//let message = document.querySelector('.message');
messages.forEach((message) => {
    message.innerHTML  = 'ไม่ต้องห่วงฉัน';
}); 
//2
let message = document.querySelector('.message');
message.style.color = ' red';
message.style.backgroundColor = 'black';
message.style.fontSize = '20px';

let message = document.querySelector('.message');
let spoilButton = document.querySelector('.spoil-button');

spoilButton.addEventListener('click',() => {
    // show/Hide message
    if (message.style.display === 'none') {
        message.style.display = 'block';
    }
    else {
        message.style.display = 'none';
    }
});
*/
