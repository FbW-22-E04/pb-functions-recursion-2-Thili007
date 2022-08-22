// Exercise01
console.log("  -----------------------------------");
console.log("   ++++++++++ 01 Exercise ++++++++++");

function calFactorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * calFactorial(n - 1);
  }
}
console.log(calFactorial(5));
