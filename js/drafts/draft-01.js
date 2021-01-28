const numbers = [1, 2, 3, 4, 5, 6, 12, 123]
const specialNumbers = []
console.log(numbers)
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 3) {
        specialNumbers.push(numbers[i])  }
}
console.log(specialNumbers)