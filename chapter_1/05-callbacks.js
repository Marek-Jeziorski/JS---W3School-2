// DEMO_1 ----------------------------------------------
// Functions are executed in the sequence they are called.
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
// CALL ONE FUNCTION BY INITIATE VARIABLE --> THEN PASS RETURNED VALUE TO FUNCTION TWO
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
  const button = document.querySelector(".btn");

  button.addEventListener("click", toggle);

  function toggle() {
    button.classList.toggle("altColor");
  }
}

// DEMO_6 ----------------------------------------------
// Asynchr code
{
  console.log();
  console.log("------------- DEMO_6 -------------");
  console.log("Asynchr code");
}
{
  function firstAction() {
    document.getElementById("demo_6a").innerHTML = "I'm the FIRST action";
    setTimeout(secondAction, 3000);
  }

  function secondAction() {
    document.getElementById("demo_6b").innerHTML = "I'm the SECOND action";
  }

  // Wywołaj funkcję setTimeout (NIECH DZIAŁA), która po 2 sek wywoła funkcję firstAciotn;
  setTimeout(firstAction, 2000);
  // TODO:TYMCZASEM PRZEJDŹ DO KOLEJNEJ LINIJKI CODU
}
// DEMO_7 ----------------------------------------------
// Passing callback function with parameter as argument of parent function
{
  console.log();
  console.log("------------- DEMO_7 -------------");
  console.log(
    " Passing callback function with parameter as argument of parent function"
  );
}
/* FIXME: uporządkuj / nowy ładny przykład*/
{
  function thirdAction(callbackAction) {
    document.getElementById("demo_7a").innerHTML = "I'm the THIRD action";
    setTimeout(callbackAction, 1000);
  }

  function messageDisplayer(message) {
    console.log(message);
    document.getElementById("demo_7b").innerHTML = message;
  }

  //TODO: invoke thirdAction() and pass into it call for messageDisplayer with some message
  setTimeout(
    () =>
      thirdAction(() =>
        messageDisplayer(
          "To jest wiadomość od messageDisplayer() wywołana przez thirdAction"
        )
      ),
    3000
  );
}

// DEMO_8 ----------------------------------------------
// Clean Example of Callback functions with parameters passed as parameters
{
  console.log();
  console.log("------------- DEMO_8 -------------");
  console.log(
    "Clean Example of Callback functions with parameters passed as parameters"
  );
}
{
  function firstAction(message, callback) {
    document.getElementById("demo_8a").innerHTML = message;
    setTimeout(callback, 2000);
  }

  function secondAction(message) {
    document.getElementById("demo_8b").innerHTML = message;
  }

  setTimeout(
    () =>
      firstAction("Im the first action", () =>
        secondAction("Im the second action")
      ),
    3000
  );
}
