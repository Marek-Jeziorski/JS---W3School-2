1; // DEMO_1 copy ----------------------------------------------
// Callbacks
{
  console.log("------------- DEMO_1 COPY -------------");
  console.log("Callbacks");
}
{
  /*
  1. Use the getCats, getDogs, and getBirds functions to retrieve data.
  2. Call the superSecretOrder function and pass it a single (flat) array of all the animals.
  3. Log to the console the result that superSecretOrder returns.
*/
  getCats(function (cats) {
    console.log(cats);
  });

  // ----------------------------------------------------
  // ----------------------------------------------------
  // ----------------------------------------------------

  // Callback functions you can use
  function getCats(cb) {
    const random = Math.random() * 1000;
    setTimeout(function () {
      if (cb) {
        cb(["Meowsalot", "Purrsloud", "BiscuitMaker"]);
      }
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
