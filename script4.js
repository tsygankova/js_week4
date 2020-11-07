//call apply bind

const showTag = function (arg1, arg2, arg3){
    console.log ('args', arg1, arg2, arg3);
    console.log ('this', this);
    console.log ('this tag', this.tag);
};

const mango = {
    tag: "Mango",
    showTag,
};

const poly = {
    tag: 'Poly',
    showTag
};

const ajax = {
    tag: 'Ajax',
}

const petro = {
    tag: 'Petro',
}

mango.showTag();
poly.showTag();

showTag.call (petro, 7, 12, 4);
showTag.call (ajax, 4, 8, 10);

// bind создает копию функции и позволяет навсегда привязать к ней контекст

const showMangoTag = showTag.bind(mango)

showMangoTag();

showTag.apply (mango, [1,2,3])