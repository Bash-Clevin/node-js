// console.log('synchronus');

// setTimeout(_=> console.log('timeout-2')); 

// const greet = function(){
//      return 'hello, world';
// };

// arrow function

const greet = () => 'hello, world';

const result = console.log(greet());

// const bill = function(products, tax){
//     let total = 0;
//     for(let i =0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

const bill = (products,tax) => {
    let total = 0;
    for(let i =0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([10,15,30], 0.2));

