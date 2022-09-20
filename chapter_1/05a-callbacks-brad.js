// DEMO_1 ----------------------------------------------
// Callbacks
{
  console.log("------------- DEMO_1 -------------");
  console.log("Callbacks");
}
{
  /*
  1. Use the getCats, getDogs, and getBirds functions to retrieve data.
  2. Call the superSecretOrder function and pass it a single (flat) array of all the animals.
  3. Log to the console the result that superSecretOrder returns.
*/
  getCats(function (cats) {
    // now we have array cats[]

    getDogs(function (dogs) {
      // now we have cats[] and dogs[]

      getBirds(function (birds) {
        // no we have cats[] , dogs[], birds[]
        const allAnimals = cats.concat(dogs, birds);
        console.log(allAnimals);
      });
    });
  });

  // getCats();  TODO: now we invoke function without callback ERROR: cb is not a function
  // ----------------------------------------------------
  // ----------------------------------------------------
  // ----------------------------------------------------

  // Callback functions you can use
  function getCats(cb) {
    const random = Math.random() * 1000;
    setTimeout(function () {
      cb(["Meowsalot", "Purrsloud", "BiscuitMaker"]);
    }, random);
  }

  function getDogs(cb) {
    const random = Math.random() * 1000;
    setTimeout(function () {
      cb(["EatsAnything", "Barksalot", "HeadTilt"]);
    }, random);
  }

  function getBirds(cb) {
    const random = Math.random() * 1000;
    setTimeout(function () {
      cb(["Scruffy", "Baldy", "Screech"]);
    }, random);
  }

  function superSecretOrder(items, cb) {
    const random = Math.random() * 1000;
    setTimeout(function () {
      cb([...items].sort());
    }, random);
  }
}
