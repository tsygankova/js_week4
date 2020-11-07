//контекст this

//this как метод обїекта

// const user = {
//     tag: 'Mango',
//     showTag () {
//         console.log ('this', this);
//         console.log ('this.tag', this.tag);
//     }
// };

// user.showTag();

// // вызов без контекста

// const foo = function (){
//     console.log ('this', this)
// };

// foo();

// const showTag = function () {
//         console.log ('this', this);
//         console.log ('this.tag', this.tag);
//     };

//     // user.showTag = showTag;

//     // console.log (user);
//     // user.showTag();

//     const outerShowTag = user.showTag;
//     console.log (outerShowTag)

//     outerShowTag();

    //контекст и коллбек

    // const makeChangeColor = function (){
    //     const changeColor  = function (color) {
    //     this.color = color;
    //     };

    //     const sweater = {
    //         color: 'teal',
    //     };

    //     sweater.changeColor = changeColor;
    //     return sweater.changeColor;
    // }

    // const changeColor = makeChangeColor ();
    // changeColor('blue')

    const makeChangeColor = function ( ) {
        const changeColor = function (color) {
            console.log (this);
            this.color = color;
        };

        return changeColor};

        const hat = {
            color: 'blue',
            changeColor: makeChangeColor(),
        };

    hat.changeColor ('orange')