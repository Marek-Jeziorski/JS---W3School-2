// DEMO_1 ----------------------------------------------
// console.log configuration
{
  {
    let x;

    function myFunOne() {
      x = 5;
    }

    // nie mam dostępu do x
    console.log("LOG_1: nie mam dostępu do x --> : " + x);
    myFunOne();
    console.log("LOG_2 --> mam dostęp do x: " + x);
  }
}
// code flow
{
  let a = 4;
  let x = 5;

  // powołaj funkcję ()
  function myFunOne() {
    let x = a * 5;
    document.getElementById("demo_1").innerHTML = x;
  }

  // wywołaj funkcję
  myFunOne();

  // stwórz obiekt
  const objectOne = {
    name: "objecOne",
    methodOne: function () {
      document.getElementById("demo_2").innerHTML = a * a;
      x += 3;
      console.log("LOG_3:  --> : " + this.name + " " + x);
      return x; // brak linii to consola nie będzie miała co zwrócić z funkcji do callera
    },
  };

  // wywołaj i wykonaj polecenia funkcji
  objectOne.methodOne();

  // pokaż co zwraca funkcja
  console.log("LOG_4:  --> : " + objectOne.methodOne());
  console.log();
}
// DEMO_2 ----------------------------------------------
// hoisting declaration
{
  let a = 4;
  let x = 5;
  const objectCar = {};
  const arrayRecords = [];

  function myFunOne(p1, p2) {
    let x = p1;
    let y = p2;
    let z = p1 + p2;
    document.getElementById("demo_3").innerHTML = "Hello Dolly";
  }
}
// DEMO_3 ----------------------------------------------
// counter dilema
{
  const add = (function () {
    let counter = 0;
    return function () {
      counter += 1;
      return counter;
    };
  })();

  function myFunction() {
    document.getElementById("demo_3").innerHTML = add();
  }
}
//
