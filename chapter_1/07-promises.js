// DEMO_1 ----------------------------------------------
// Promise
{
  console.log();
  console.log("------------- DEMO_1 -------------");
  console.log("Promise");
}
{
  function myDisplayer(some) {
    document.getElementById("demo_1").innerHTML = some;
  }

  let myPromise = new Promise(function (myFunResolve, myFunReject) {
    let x = 5;

    // "Producing Code" (May take some time)
    //  (try to change x to 5)

    if (x == 5) {
      myFunResolve(x);
    } else {
      myFunReject("x = " + x + " Error - Something is wrong !!!");
    }
  });

  // "Consuming Code" (Must wait for a fulfilled Promise)

  myPromise.then(
    function (value) {
      myDisplayer(value);
      console.log("LOG_1:  --> : " + value);
    },

    function (error) {
      myDisplayer(error);
      console.log("LOG_2:  --> : " + error);
    }
  );
}

// DEMO_2 ----------------------------------------------
// Waiting for a Timeout
{
  console.log();
  console.log("------------- DEMO_2 -------------");
  console.log("Waiting for a Timeout");
}
