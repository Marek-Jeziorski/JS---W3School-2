// DEMO_0 ----------------------------------------------
// console configuration
{
  console.log("------------- CONSOLE CONFIGURATION -------------");
  console.log("CONSOLE CONFIGURATION");

  let x;
  function myFunOne() {
    x = 5;
  }

  // nie mam dostępu do x
  console.log("LOG_1: nie mam dostępu do x --> : " + x);
  myFunOne();
  console.log("LOG_2: mam dostęp do x --> : " + x);
}

// DEMO_1A,1B ----------------------------------------------
// code flow
// hoisting declaration
{
  console.log();
  console.log("------------- DEMO_1A,1B -------------");
  console.log("CODE FLOW AND HOISTING DECLARATION");

  let a = 4;
  let x = 5;

  // powołaj funkcję ()
  function myFunOne() {
    let x = a * 5;
    document.getElementById("demo_1a").innerHTML = x;
  }

  // wywołaj funkcję
  myFunOne();

  // stwórz obiekt
  const objectOne = {
    name: "objecOne",
    methodOne: function () {
      document.getElementById("demo_1b").innerHTML = a * a;
      x += 3;
      console.log("LOG_3:  --> : " + this.name + " " + x);
      return x; // brak linii to consola nie będzie miała co zwrócić z funkcji do callera
    },
  };

  // wywołaj i wykonaj polecenia funkcji
  objectOne.methodOne();

  // pokaż co zwraca funkcja
  console.log("LOG_4:  --> : " + objectOne.methodOne());
}

// DEMO_2A ----------------------------------------------
// nested function
{
  console.log();
  console.log("------------- DEMO_2A -------------");
  console.log("NESTED FUNCTIONS");

  let x = "x";
  function myFunOne() {
    let y = "y";
    console.log("LOG_5: parent function --> : " + x);
    myFunTwo();
    function myFunTwo() {
      console.log("LOG_6: nested function  --> : " + x);
      console.log("LOG_7: nested function  --> : " + y);
    }
  }
  myFunOne();
}

// DEMO_2B ----------------------------------------------
// CLOSURES
{
  console.log();
  console.log("------------- DEMO_2B -------------");
  console.log("CLOSURES");

  // powołaj i zainicjuj zmienną ADD
  // w chwili inicjacji niech samo-wywoła się funkcja
  // samo-wywołana funkcja niech ustawi COOUNTER = 0
  // następnie niech ZWRÓCI do zmiennej ADD nową funkcję
  // teraz zmienna ADD jest funkcją ADD() z dostępem do ZAMKNIĘTEJ zmiennej COUNTER

  // FUNKCJA CLOSURE - ZAMYKA W SOBIE ZMIENNĄ ZEWNĘTRZNĄ
  const add = (function () {
    let counter = 0;
    return function () {
      counter += 1;
      return counter;
    };
  })();

  function myFunction() {
    document.getElementById("demo_2b").innerHTML = add();
  }
}
