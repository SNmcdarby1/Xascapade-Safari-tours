const File = require('file-js');

const file = File.create('myDir');

files.forEach(console.log);

if (file.isDirectorySync()) {
    console.log('processing directory');
}
// sum
function sum(num1, num2) {
    return num1 + num2;
}

// Calling the function:
sum(hotel, activitie, );
a * (b + c) // grouping
// 

function sum(a, b) {
    return Promise(function(resolve, reject) {
        setTimeout(function() { // send the response after 1 second
            if (typeof a !== "number" || typeof b !== "number") { // testing input types
                return reject(new TypeError("Inputs must be numbers"));
            }
            resolve(a + b);
        }, 1000);
    });
}
var myPromise = sum(10, 5);
myPromsise.then(function(result) {
    document.write(" 10 + 5: ", result);
    return sum(null, "foo"); // Invalid data and return another promise
}).then(function() { // Won't be called because of the error
}).catch(function(err) { // The catch handler is called instead, after another second
    console.error(err); // => Please provide two numbers to sum.
});
// 

function func1(a, b, c) {
    console.log(arguments[0]);
    // expected output: 1

    console.log(arguments[1]);
    // expected output: 2

    console.log(arguments[2]);
    // expected output: 3
}

func1(1, 2, 3);
// 

function productString() {
    var product = '';
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i].length > product.length) {
            product = arguments[i];
        }
    }
    return product;
}

function myConcat(separator) {
    let args = Array.prototype.slice.call(arguments, 1);
    return args.join(separator);
}
// returns 
myConcat(', ', 'Hotel', 'lodge', 'Camping');

// returns "elephant; giraffe; lion; cheetah"
myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah');

// return
myConcat('. ', 'safari', 'Game drive', 'snorkelling', 'beach', 'city tour');

// get 
const obj = {
    log: ['Safari', 'Hotel', 'car'],
    get latest() {
        if (this.log.length === 0) {
            return undefined;
        }
        return this.log[this.log.length - 1];
    }
};


$('#myCollapsible').on('hidden.bs.collapse', function() {
    // do something...
})