// DEMO_1 ----------------------------------------------
//  Functions are executed in the sequence they are called.
{
  console.log();
  console.log("------------- DEMO_1 -------------");
  console.log(" Functions are executed in the sequence they are called.");
}
{
  function myDisplayer(some) {
    document.getElementById("demo_1").innerHTML = some;
  }

  function myFirst() {
    myDisplayer("Hello");
  }

  function mySecond() {
    myDisplayer("Goodbye");
  }

  // CHANGE SEQUENCE OF CALLING
  myFirst();
  mySecond();
}

// DEMO_2 ----------------------------------------------
// Do a calculation and then display the result FUNCTION

{
  console.log();
  console.log("------------- DEMO_2 -------------");
  console.log("Do a calculation and then display the result FUNCTION");
}
{
  function myDisplayer(some) {
    document.getElementById("demo_2").innerHTML = some;
  }

  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }

  let result = myCalculator(5, 5);

  myDisplayer(result);
}

// DEMO_3 ----------------------------------------------
// Do a calculation and then display the result CALLBACK
{
  console.log();
  console.log("------------- DEMO_3 -------------");
  console.log("Do a calculation and then display the result CALLBACK");
}
{
  function myDisplayer(some) {
    document.getElementById("demo_3").innerHTML = some;
  }

  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);
  }

  myCalculator(5, 5);
}

// DEMO_4 ----------------------------------------------
// Do a calculation and then display the result. - Pass argument with function and then callback
{
  console.log();
  console.log("------------- DEMO_4 -------------");
  console.log(
    "Do a calculation and then display the result. - Pass argument with function and then callback"
  );
}
{
  function myDisplayer(something) {
    document.getElementById("demo_4").innerHTML = something;
  }

  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }

  myCalculator(5, 5, myDisplayer);
}
