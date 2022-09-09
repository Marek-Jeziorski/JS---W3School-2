/* ---------------------------------------------------- */
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
      console.log(this.name + " " + x);
      return x; // brak linii to consola nie będzie miała co zwrócić z funkcji do callera
    },
  };

  // wywołaj i wykonaj polecenia funkcji
  objectOne.methodOne();

  // pokaż co zwraca funkcja
  console.log(objectOne.methodOne());
}

/* ---------------------------------------------------- */
// HOISTING DECLARATION
{
  let a = 4;
  let x = 5;
  const objectCar = {};
  const arrayRecords = [];
}
