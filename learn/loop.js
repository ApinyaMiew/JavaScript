for ( let i = 1 ; i <= 12; i++) {
    //if (i % 2 == 0){
    //    continue; //ให้ข้ามไปไม่เอาไปคิด
    if(i % 10 === 0){
        break; 
    }
    let answer = i ** 2;
    console.log(answer);
}