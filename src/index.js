module.exports = function toReadable (number) {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const exception = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

let result = '';
if (number == 0) return 'zero';

if (number >= 100) {
    result += units[Math.floor(number/100)] + ' hundred ';
    number %= 100;
}

if (number >= 10 && number < 20) {
    result += exception[number%10];
    return result.trim();
}
else if (number >= 20) {
    result += dozens[Math.floor(number/10)] + ' ';
    number %= 10;
}

result += units[number];

return result.trim();
}
