// let cat = Object.create({ type: 'lion' });
// // cat.size = 'large';

// let copyCat = { ...cat };
// // cat.type = 'tiger';

// console.log(copyCat.type);

// let animals = [{ type: 'lion' }, 'tiger'];
// let clones = animals.slice();

// clones[0].type = 'bear';
// // clones[1] = 'sheep';


// console.log(clones);
// console.log(animals);
// console.log(animals[0].type, clones[0].type);
// console.log(animals[1], clones[1]);


const lion = 1;
let tiger = 2;
var bear;

// ++lion;
bear += lion + tiger;
tiger++;
console.log(bear);