let scores = [82, 75, 48, 64, 36];
let passedCount = 0;
 
/*
for(let i = 0; i < scores.length; i++){
    if (scores[i] >= 50){
        passedCount++;
    }
}*/
scores.forEach((score) => {//เอาค่าใน aaray ั้งหมดมาใช้ทุกตัว
    if (score >= 50) {
        passedCount++;
    }
})


console.log(passedCount);