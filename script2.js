// лекция 1 на неделе 4

//обычная функция

const greet = function (name){
    console.log (`hello, ${name}`);
};

// callback функция

const greetWithName = function(callback){
    const name = 'Papaya';
    console.log (callback);
    callback (name);
};

greetWithName (greet);

//callback button click - в ответ на событие

// const buttonRef = document.querySelector ('button');

// const handleButtonClick = function () {
// console.log ('click');
// };

// buttonRef .addEventListener ('click', handleButtonClick);

// отложеннй вызов: интервалы

console.log ( 'перед таймаутом');

setTimeout (function (){  console.log ('а вот и таймаут')}, 3000) 

console.log ( 'после таймаута');

//лексическое окружение - все доступные функции

const x = 10;
const y = 20;

const foo = function (z) {
    const x = 100;

    return x + y + z
};

console.log (foo (30));

//замыкание

const foon = function () {
    const x = 5;

    return function () {
        console.log (x);
    };
};

const outerFn = foon ();

console.log (outerFn);

outerFn();

// готовим блюдо

const makeSheff = function (name) {
    return function (dish){
console.log (`${name} готовит ${dish}`);};}

const mango = makeSheff ('Mango');
const poly = makeSheff ('Poly');    


mango ('котлеты')

//сложнее

const fnA = function (a){
    return function fnB (b){
        return function fnC (c){
            console.log  (a, b, c)
        }
    }
}


const res = fnA();
res()
console.log (res());

