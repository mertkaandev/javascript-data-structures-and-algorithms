// Big-O Nonation:

// O(1) 

const numbers = [92];
console.log(numbers);

const numbers_big = [3, 6, 9, 123, 123456, 123456789];
console.log(numbers_big)

// O(n) 

const getTargetNumber = (target) => {
    const numbers = [1,2,3,4,5];
    let index;
    for (i = 0; i< numbers.length; i++){
        if(numbers[i] == target) {
            index = i;
        };
    };
    console.log(index);
};

console.log(getTargetNumber(5));

// O(logn) -> log10(10); - log10(100); 

// O(n^2)

for (let index = 0; index < numbers.length; index++) {
    const element = array[index];
    for (let index = 0; index < numbers.length; index++) {
        const element = array[index];
    };
};

// O(n!) -> 50*49*48...1 