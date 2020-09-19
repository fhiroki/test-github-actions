
module.exports = function fizzbuzz(n) {
    let s = '';
    if (n % 5 == 0) {
        s += 'Fizz';
    }
    if (n % 3 == 0) {
        s += 'Buzz';
    }
    return s === '' ? String(n) : s;
}

