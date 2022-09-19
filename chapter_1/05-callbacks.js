// DEMO_1 ----------------------------------------------
//Functions are executed in the sequence they are called.
{
  console.log();
  console.log("------------- DEMO_1 -------------");
  console.log("Functions are executed in the sequence they are called.");
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
//   CALL ONE FUNCTION BY INITIATE VARIABLE --> THEN PASS RETURNED VALUE TO FUNCTION TWO
{
  console.log();
  console.log("------------- DEMO_2 -------------");
  console.log(
    " CALL ONE FUNCTION BY INITIATE VARIABLE --> THEN PASS RETURNED VALUE TO FUNCTION TWO"
  );
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
// PUT FUNCTION TWO AT THE END OF CODE FUNCTION ONE
{
  console.log();
  console.log("------------- DEMO_3 -------------");
  console.log("PUT FUNCTION TWO AT THE END OF CODE FUNCTION ONE");
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
// Pass argument with function and then callback
{
  console.log();
  console.log("------------- DEMO_4 -------------");
  console.log("Pass argument with function and then callback");
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

// DEMO_5 ----------------------------------------------
// Callbacks in JavaScript Explained - Ania Kubów
{
  console.log();
  console.log("------------- DEMO_5 -------------");
  console.log("Callbacks in JavaScript Explained - Ania Kubów");
}
{
  const button = document.querySelector("button");

  function toggle(color) {
    button.classList.toggle("color");
  }

  button.addEventListener("click", toggle("altColor"));

  // toggle();

  /* button.addEventListener("click", function () {
    button.classList.toggle("altColor");
  });
 */

  /* 
  button.addEventListener("click", () => {
    button.classList.toggle("altColor");
  });
   */
}
