function createBase(incrementValue) {
    return (function (initialValue) {
        return (initialValue + incrementValue);
    });
}

function counter(){
    console.time('time taken');
    let _counter = 0;

    function incrementCounter(value){
        _counter += value;
    }
    function getCounterValue(){
        return "Counter = " + _counter;
    }

    console.timeEnd('time taken');
    return{
        incrementCounter,
        getCounterValue
    }
}

function someLongLoop(){
    
    console.time('timer 1');
    let sum = 0;
    for(let i = 0; i < 10000000; i++){
        sum += i*i;
    }
    console.timeEnd('timer 1');


    return function(incrementValue){
        console.log(incrementValue + sum)
    } ;
}

const anotherFunc = someLongLoop();

console.time('timer 2');
anotherFunc(3);
anotherFunc(2);
anotherFunc(1);
console.timeEnd('timer 2');

