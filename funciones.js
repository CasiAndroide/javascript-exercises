function fibonacci (number) {
    var x = 1;
    var y = 0;
    if (number === 0) {
        return console.log("invalid number");
    }
    else {
        console.log("Sucesión de fibonnaci ejecutada "+number+" veces:");
        for (var i = 1; i <= number; i++) {
            z = x + y;
            console.log(z);
            y = x;
            x = z;
        }
    }
    
}

for (var i = 1; i <=4; i++) {
    fibonacci(i);
}

