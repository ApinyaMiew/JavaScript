/* map
let scores = [82, 75, 48, 64, 36];
let passFailScores = scores.map((score) => {
    if (score >= 50) {
        return 'passed';
    }
    return 'failed';
});

console.log(scores);
console.log(passFailScores);

//filter
let scores = [82, 75, 48, 64, 36];
let passFailScores = scores.filter((score) => {
    return score >= 50;
});

console.log(scores);
console.log(passFailScores);
*/

//reduce
let scores = [82, 75, 48, 64, 36];
let sumScores = scores.reduce((sum, score) => {
    return sum + score;
})

console.log(scores);
console.log(sumScores);