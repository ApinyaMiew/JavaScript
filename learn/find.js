let score = [82, 75, 48, 64, 36];
/*
//let failedScore = score.find((score) => {
let failedScore = score.findIndex((score) => {
    return score < 50 ;
});

console.log(failedScore);*/

let everyonePassed = score.every((score) => {//ตรวจสอบถูกทุกต้องตามเงื่อนไขทุกตัว
    return score >= 50;
});

console.log(everyonePassed);
//คำสั่ง some ถูกต้องตัวนึงก็ส่ง true
    