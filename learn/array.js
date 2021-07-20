let = fruits = ['Apple', 'Banana', 'Carrot'];
console.log(fruits);

//fruits.push('Watermelon');//เพิ่มต่อ
//fruits.pop();//ถอดตัวสุดท้ายออก
fruits.splice(1, 0, 'Watermelon');//เพิ่มระบุตำแหน่ง
fruits.splice(1,1);//ตัดระบุตำแหน่ง,จำนวนที่จะลบ
//console.log(fruits);
console.log(fruits.length);