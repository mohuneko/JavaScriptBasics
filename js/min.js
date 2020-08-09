'use strict';

// console.log('Hello');
// console.log("Hello");

// console.log('it's me!');
// console.log("it\'s me!");

// console.log('hel\nlo wor\tld!');

// console.log('hello' + 'world');

// console.log(10 + 3); //13
// console.log(10 - 3); // 7
// console.log(10 * 3); // 30
// console.log(10 / 3); //3.3333
// console.log(10 % 3); //1
// console.log(10 ** 3); //10の3乗

// console.log(2 + 10 * 3); //32
// console.log((2 + 10) * 3); //36

//定数 const
// console.log(150 * 140);
// console.log(150 * 160);
//変数 let

// let price = 150;
// console.log(price * 140);
// console.log(price * 160);

// price = 170;
// console.log(price * 140);
// console.log(price * 160);


//変数 let
// let price = 500;

// //price = price + 100;
// price += 100;

// //price = price * 2;
// price *= 2;

// //proce = price +1;
// //price += 1;
// price++;

// //price -1;
// price--;

// console.log(price);

// console.log(typeof 'hello');
// console.log(typeof 5);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);

// console.log('5' * 3);
// console.log('5' - '3');
// console.log(parseInt('5', 10) + 3);

// console.log(parseInt('hello', 10));

// const price = 1200;

// console.log(price > 1000); //true
// console.log(price < 1000); //false
// console.log(price >= 1000); //true
// console.log(price <= 1000); //false
// console.log(price === 1000); //false
// console.log(price !== 1000); //true


//false <- 0, null, undefined, '',false
//true <~ それ以外

// console.log(Boolean(0)); //false
// console.log(Boolean('hello')); //true

// const score = 40;

// if (score >= 80) {
//   console.log('Great!');
// } else if (score >= 60) {
//   console.log('Good');
// } else {
//   console.log('OK...');
// }

// const score = 85;

// if (score >= 80) {
//   console.log('Great!');
// } else {
//   console.log('OK...');
// }

// score >= 80 ? console.log('Great!') : console.log('OK...');

// const score = 60;
// const name = 'taguchi';

// if (score >= 50) {
//   if (name === 'taguchi') {
//     console.log('Good job!');
//   }
// }

// && 尚且つ (AND)
// || もしくは (OR)
// ! 〜ではない (NOT)

// if (score >= 50 && name === 'taguchi') {
//   console.log('Good job!');
// }

// const signal = 'pink';

// if (signal === 'red') {
//   console.log('Stop!');
// } else if (signal === 'yellow') {
//   console.log('Caution!');
// } else if (signal === 'blue') {
//   console.log('Go!');
// }

// switch (signal) {
//   case 'red' :
//     console.log('Stop!');
//     break;
//   case 'yellow' :
//     console.log('Caution!');
//     break;
//   case 'blue' :
//   case 'green' :
//     console.log('Go!');
//     break;
//   default:
//     console.log('Wrong signal!');
//     break;
// }

// for (let i = 1; i <= 10; i++) {
//   // console.log('hello');
//   // console.log('hello' + i);
//   console.log(`hello ${i}`);
// }

// let hp = 100;

// while (hp > 0) {
//   console.log(`${hp} HP left!`);
//   hp -= 15;
// }


// let hp = -50;

//  do {
//   console.log(`${hp} HP left!`);
//   hp -= 15;
// } while (hp > 0);

// for (let i =1; i <= 10; i++) {
//   // if (i === 4) {
//   //   if (i % 3 === 0) {
//   //   continue;
//   // }
//   if (i === 4) {
//     break;
//   }
//   console.log(i);
// }