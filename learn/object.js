/*let rabbit =[
{
    name: 'Mimi',
    breed: 'Lion Head',
    color: 'White',
    weight: 1.2
},
{
    name: 'Momo',
    breed: 'Mimi loop',
    color: 'White',
    weight: 1.2
},
{
    name: 'Mumu',
    breed: 'Netherland',
    color: 'White',
    weight: 1.2
}];

rabbit.forEach((rabbit) => {
    console.log(rabbit.name + ' , '+ rabbit.breed);
});

//Object Methods ความสามารถที่อยากให้ทำ
let rabbit = {
    name: 'Mimi',
    breed: 'Lion Head',
    color: 'White',
    weight: 1.2,
    talk() {
        console.log(this.name + ', ดีจ้า');
    },
    weightDetail() {
        if (this.weight < 1){
            return 'น้อยเกิ๊นนนน';
        }
        else if (this.weight > 2) {
            return 'มากเกิ๊นนนน';
        }
        return 'ปกติจ้าาา';
    }
};

console.log(rabbit.weightDetail());*/

function Rabbit(name, breed, color, weight) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.weight = weight;
    this.talk = function() {
        console.log(this.name + ', ดีจ้า');
    }

}
let rabbit1 = new Rabbit('Mimi', 'Lion Head', 'White', 1.2);
let rabbit2 = new Rabbit('Momo', 'Mimi loop', 'Brown', 1.2);
rabbit1.talk();
rabbit2.talk();