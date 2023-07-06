export function fizzbuzz(n: number): string {
  if (n < 1 || n > 100) {
    throw new Error('n must be between 1 and 100')
  }

  if (n % 3 === 0 && n % 5 === 0) {
    return 'FizzBuzz'
  }

  if (n % 3 === 0) {
    return 'Fizz'
  }

  if (n % 5 === 0) {
    return 'Buzz'
  }

  return String(n)
}
