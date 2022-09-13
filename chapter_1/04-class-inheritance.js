// DEMO_1 ----------------------------------------------
// Class Inheritance
{
  console.log();
  console.log("------------- DEMO_1 -------------");
  console.log("Class Inheritance");
  // ----------------------------------------------------

  class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return "I have a " + this.carname;
    }
  }

  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ", it is a " + this.model;
    }
  }

  let myCar = new Model("Ford", "Mustang");
  document.getElementById("demo_1").innerHTML = myCar.show();
}

// DEMO_2 ----------------------------------------------
// Getters and Setters
{
  console.log();
  console.log("------------- DEMO_2 -------------");
  console.log("Getters and Setters");
  // ----------------------------------------------------

  class Car {
    constructor(brand, model) {
      this._carname = brand;
      this._carmodel = model;
    }

    get carname() {
      return this._carname;
    }
    set carname(x) {
      this._carname = x;
    }
    get carmodel() {
      return this._carmodel;
    }
    set carmodel(y) {
      this._carmodel = y;
    }
  }

  let myCar = new Car("Ford");

  document.getElementById("demo_2a").innerHTML =
    myCar.carname + " " + myCar.carmodel;

  console.log("LOG_2a: myCar{} --> : " + JSON.stringify(myCar));

  // CHange an object property using a setter:
  myCar.carname = "Fiat";

  // Set an object property using a setter:
  myCar.carmodel = "126p";

  console.log("LOG_2b: myCar{} --> : " + JSON.stringify(myCar));

  // Display data from the object using a getter:
  document.getElementById("demo_2b").innerHTML =
    myCar.carname + " " + myCar.carmodel;
}
