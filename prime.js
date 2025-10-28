// prime.js
// Program to check if a number is prime

function isPrime(num) {
  if (num <= 1) return false;     // 0 and 1 are not prime
  if (num === 2) return true;     // 2 is prime
  if (num % 2 === 0) return false; // Even numbers > 2 are not prime

  // Check divisibility up to sqrt(num)
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// ---- Main Execution ----
const number = parseInt(prompt("Enter a number: "), 10);

if (isPrime(number)) {
  console.log(`${number} is a prime number ✅`);
} else {
  console.log(`${number} is not a prime number ❌`);
}
