"use strict";
// DEMO_1 ----------------------------------------------
// How to use Classes
{
  console.log("------------- DEMO_1 -------------");
  console.log("How to use Classes");
  // -----------------------------------------------------

  class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }

  const myCar = new Car("Ford", 2014);
  document.getElementById("demo_1").innerHTML = myCar.name + " " + myCar.year;
}

// DEMO_2 ----------------------------------------------
// How to define and use a Class method
{
  console.log();
  console.log("------------- DEMO_2 -------------");
  console.log("How to define and use a Class method");
  // -----------------------------------------------------

  class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }

    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }

  let myCar = new Car("Ford", 2014);

  document.getElementById("demo_2a").innerHTML = JSON.stringify(
    myCar,
    null,
    " "
  );
  console.log("LOG_1: display objec --> : " + JSON.stringify(myCar));

  document.getElementById("demo_2b").innerHTML =
    "My car is " + myCar.age() + " years old.";
}

// DEMO_3 ----------------------------------------------
// Pass a parameter into the "age()" method
{
  console.log();
  console.log("------------- DEMO_3 -------------");
  console.log('Pass a parameter into the "age()" method');
  // ----------------------------------------------------

  class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(x) {
      return x - this.year;
    }
  }

  let date = new Date();
  let year = date.getFullYear();

  let myCar = new Car("Ford", 2014);

  document.getElementById("demo_3").innerHTML =
    "My car is " + myCar.age(year) + " years old.";
}
