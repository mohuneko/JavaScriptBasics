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

// function showAd(message = 'AD') { // 仮引数
//   console.log('----------');
//   console.log(`--- ${message} ---`);
//   console.log('----------');
// }

// showAd('Header Ad'); // 実引数
// console.log('Tom is great!');
// console.log('Bob is great!');
// // showAd('Ad');
// showAd();
// console.log('Steve is great!');
// console.log('Richard is great!');
// showAd('Footer Ad');


// function sum(a, b, c) {
//   return a + b + c;
// }
// const sum = function(a, b, c) {
//   return a + b + c;
// };

// const sum = (a, b, c) => a + b + c;


// const total = sum(1, 2, 3) + sum(3, 4, 5);
// console.log(total);

// const double = function(a) {
//   return a * 2;
// }
// const double = a => a * 2;
// console.log(double(12));

// const x = 2;

// function f() {
//   const x = 1;
//   console.log(x);
// }

// f();
// console.log(x);

// {
// const x = 100;
// console.log(x);
// }

// {
//   const scores = [80, 90, 40, 70];
//   scores.splice(1, 1, 40, 50);
  // scores.push(60, 50);
  // scores.shift();
  //90, 40, 70, 60, 50

  // console.log(scores[1]);

  // scores[2] = 44;
  // console.log(scores);

  // console.log(scores.length);

  // console.log(`Score: ${scores[0]}`);
  // console.log(`Score: ${scores[1]}`);
  // console.log(`Score: ${scores[2]}`);

  // for (let i = 0; i < 3; i++) {
//   for (let i = 0; i < scores.length; i++) {
//     console.log(`Score ${i}: ${scores[i]}`);
//   }
// }

// {
//   const otherScores = [10, 20];
//   const scores = [80, 90, 40, 70, ...otherScores];
//   // console.log(scores);

//   function sum(a ,b) {
//     console.log(a + b);
//   }

//   sum(...otherScores);
// }

// {
//   const scores = [80, 90, 40, 70];

//   // scores.forEach((score) => {
//   scores.forEach((score, index) => {
//     console.log(`Score ${index}: ${score}`);
//   });

//   // const [a, b, c, d] = scores;
//   // console.log(a);
//   // console.log(b);
//   // console.log(c);
//   // console.log(d);

//   // const [a, b, ...others] = scores;
//   // console.log(a);
//   // console.log(b);
//   // console.log(others);

//   // let x = 30;
//   // let y = 70;
//   // [x, y] = [y, x];
//   // console.log(x);
//   // console.log(y);

// }

// {
//   const prices = [180, 190, 200];

//   // const updatedPrices = prices.map((price) => {
//   //   return price + 20;
//   // });
//   const updatedPrices = prices.map(price => price + 20);
//   console.log(updatedPrices);



// {
//   const numbers = [1, 4, 7, 8, 10];

//   // const evenNumbers = numbers.filter(number => {
//   //    if (number % 2 === 0) {
//   //      return true;
//   //    } else {
//   //      return false;
//   //    }
//   // });
//   const evenNumbers = numbers.filter(number => number % 2 === 0);

//   console.log(evenNumbers);
// }

// {
//   // const point = [100, 180];
//   // const point = {x: 100, y:180};
//   const point = {
//     x: 100,
//     y:180
//   };
//   point.x = 120;
//   // point['y'] = 120;

//   // console.log(point.x);
//   // console.log(point['y']);

//   point.z = 90;
//   delete point.y;
//   console.log(point);
// }

// {
//   const otherProps = {
//     r: 4,
//     color: 'red',
//   };

//   const point = {
//     x: 100,
//     y:180,
//     ...otherProps,
//   };

//   // console.log(point);

//   const {x, r, ...others} = point;
//   console.log(x);
//   console.log(r);
//   console.log(others);
// }

// {
//   const point = {
//     x: 100,
//     y: 100,
//   };

//   // const keys = Object.keys(point);
//   // keys.forEach(key => {
//   //   console.log(`Key: ${key} Value: ${point[key]}`);
//   // });

//   const points = [
//     {x: 30, y: 20},
//     {x: 10, y: 50},
//     {x: 40, y: 40},
//   ];
//   console.log(points[1].y); 
// }


// {
//   // let x = 1;
//   // let y = x;
//   // x = 5;
//   // console.log(x); //5
//   // console.log(y); //1

//   // let x = [1, 2];
//   // let y = x;
//   // x[0] = 5;
//   // console.log(x); //[5, 2]
//   // console.log(y); //[5, 2]

//   let x = [1, 2];
//   let y = [...x];
//   x[0] = 5;
//   console.log(x); //[5, 2]
//   console.log(y); //[1, 2]
// }

// {
//   const str = 'hello';

//   // console.log(str.length);

//   // str.substring(開始位置, 終了位置);
//   // console.log(str.substring(2, 4));

//   console.log(str[1]);
//   // str[1] = 'a';
// }

// {
//   const d = [2019, 11, 14];

//   // console.log(d.join('/'));
//   // console.log(d.join(''));

//   const t = '17:08:24';
//   // console.log(t.split(':'));
//   const [hour, minute, second] = t.split(':');
//   console.log(hour);
//   console.log(minute);
//   console.log(second);
// }

// {
//   const scores = [10, 3, 9];

//   let sum = 0;

//   scores.forEach(score => {
//     sum += score;
//   });

//   const avg = sum / scores.length;

//   // console.log(sum);
//   // console.log(avg);

//   console.log(Math.floor(avg)); //7
//   console.log(Math.ceil(avg)); //8
//   console.log(Math.round(avg)); //7
//   console.log(avg.toFixed(3)); //7.333

//   console.log(Math.random());
// }

// {
//   // console.log(Math.random());
//   // 0, 1, 2
//   //Math.foor(Math.random() * 3)
//   //0, ...,2
//   //Math.foor(Math.random() * (n + 1))
//   //min, ..., max
//   //Math.foor(Math.random() * (max + 1 - min)) + nin
//   console.log(Math.floor(Math.random() * 6 + 1));
// }

// {
//   const d = new Date(2019, 10);//2019/11/01 00:00:00
//   d.setHours(10, 20, 30); //2019/11/01 10:20:30
//   d.setDate(31); //2019/12/01 10:20:30
//   d.setDate(d.getDate() * 3); //2019/12/04 10:20:30
//   console.log(d);
//   // console.log(`${d.getMonth() + 1} 月 ${d.getDate()} 日`);
// }

// {
//   // alert('hello');
//   const answer = confirm('削除しますか');
//   if (answer) {
//     console.log('削除しました');
//   } else {
//     console.log('キャンセルしました');
//   }
// }

// {
//   let i = 0; //カウンター用の変数を用意

//   function showTime() {
//     console.log(new Date());
//     i++;
//     if (i > 2) {
//       clearInterval(intervalId);
//     }
//   }

//   const intervalId = setInterval(showTime, 1000);

// }

// {
//   let i = 0;

//   function showTime() {
//     console.log(new Date());
//     const timeoutId = setTimeout(showTime, 1000);
//     i++;
//     if (i > 2) {
//       clearTimeout(timeoutId);
//     }
//   }

//   showTime();

// }

// {
//   const name = 5;
//   // const name = 'taguchi';

//   try {
//     console.log(name.toUpperCase());
//   } catch (e) {
//     console.log(e);
//   }

//   // console.log(name.toUpperCase());
//   console.log('finish!');

// }

// {
//   class Post { //親クラス
//     constructor(text) {
//       this.text = text;
//       this.likeCount = 0;
//     }

//     show() {
//       console.log(`${this.text} - ${this.likeCount} likes`);
//     }

//     like() {
//       this.likeCount++;
//       this.show();
//     }

//   }

//   class SponsoredPost extends Post { //子クラス
//     constructor(text, sponsor) {
//       super(text);
//       this.sponsor = sponsor;
//     }

//     show() {
//       super.show();
//       console.log(`...sponsored by ${this.sponsor}`);
//     }
//   }

//   const posts = [
//     new Post('JavaScriptの勉強中…'),
//     new Post('プログラミング楽しい！'),
//     new SponsoredPost('3分動画でマスターしよう', 'dotinstall'),
//   ];

//   posts[2].show();
//   posts[2].like();
// }



    // document.querySelector('p').textContent = 'Changed!';
    // document.querySelectorAll('p')[1].textContent = 'Changed!';
    // document.querySelectorAll('p').forEach((p, index) => {
      //   p.textContent = `${index}番目のpです！`;
      // });


    // document.querySelector('button').addEventListener('click', () => {

      // const item0 = document.querySelectorAll('li')[0];
      // const copy = item0.cloneNode(true);

      // const ul = document.querySelector('ul');
      // const item2 = document.querySelectorAll('li')[2];
      // ul.insertBefore(copy, item2);

      // const item2 = document.createElement('li');
      // item2.textContent = 'item2';

      // // const ulNode = document.querySelector('ul');
      // const ul = document.querySelector('ul');
      // ul.appendChild(item2);
      // const targetNode = document.getElementById('target');

      // targetNode.className = 'my-color my-border';
      // targetNode.classList.add('my-color');
      // if (targetNode.classList.contains('my-color') === true ) {
      //   targetNode.classList.remove('my-color');
      // } else {
      //   targetNode.classList.add('my-color');
      // }
      // targetNode.classList.toggle('my-color');
      // targetNode.textContent = 'Dotinstall';
      // targetNode.textContent = targetNode.dataset.translation;

// {
//   document.querySelector('button').addEventListener('click', () => {
//     const item1 = document.querySelectorAll('li')[1];

//     // item1.remove();
//     //親Node.removeChild(削除するNode)
//     document.querySelector('ul').removeChild(item1);
//   });
// }

// {
//   document.querySelector('button').addEventListener('click', () => {
//     const li = document.createElement('li');
//     const text = document.querySelector('input');
//     li.textContent = text.value;
//     document.querySelector('ul').appendChild(li);

//     text.value = '';
//     text.focus();
//   });
// }
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const li = document.createElement('li');
//     const color = document.querySelector('select');
//     li.textContent = `${color.value} - ${color.selectedIndex}`;
//     document.querySelector('ul').appendChild(li);

//   });
// }
// {
//   document.querySelector('button').addEventListener('click', () => {
//     const colors = document.querySelectorAll('input');
//     let selectedColor;


//     colors.forEach(color => {
//       if (color.checked === true) {
//         selectedColor = color.value;
//       }
//     });

//     const li = document.createElement('li');
//     li.textContent = selectedColor;
//     document.querySelector('ul').appendChild(li);
//   });
// }


// {
//   document.querySelector('button').addEventListener('click', () => {
//     const colors = document.querySelectorAll('input');
//     const selectedColors = [];

//     colors.forEach(color => {
//       if (color.checked === true) {
//         selectedColors.push(color.value);
//       }
//     });

//     const li = document.createElement('li');
//     // li.textContent = selectedColors.join(',');
//     li.textContent = selectedColors;
//     document.querySelector('ul').appendChild(li);

//   });
// }

// {
//   document.querySelector('button').addEventListener('dblclick', () => {
//     console.log('Doucle Clicked!');
//   });

//   document.addEventListener('mousemove', () => {
//     console.log('moved!');
//   });
// }

// {
//   document.querySelector('button').addEventListener('dblclick', () => {
//     console.log('Doucle Clicked!');
//   });

//   // document.addEventListener('mousemove', e => {
//   //   // console.log('moved!');
//   //   console.log(e.clientX, e.clientY);
//   // });

//   document.addEventListener('keydown', e => {
//     console.log(e.key);
//   });
// }

// {
//   const text = document.querySelector('textarea');

//   // text.addEventListener('focus', () => {
//   //   console.log('focus');
//   // });

//   // text.addEventListener('blur', () => {
//   //   console.log('blur');
//   // });
//   text.addEventListener('input', () => {
//     // console.log('input');
//     console.log(text.value.length);
//   });

//   text.addEventListener('change', () => {
//     console.log('change');
//   });
// }

// {
//   document.querySelector('form').addEventListener('submit', e => {
//     e.preventDefault();
//     console.log('submit');
//   });
// }

{
  document.querySelector('ul').addEventListener('click', e => {
    if (e.target.nodeName === 'LI') {
      e.target.classList.toggle('done');
    }
  });
}