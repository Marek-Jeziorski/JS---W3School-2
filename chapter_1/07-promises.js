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

  let myPromise = new Promise(function (myResolve, myReject) {
    let x = 5;

    // "Producing Code" (May take some time)
    //  (try to change x to 5)

    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error - Something is wrong !!!");
    }
  });

  // "Consuming Code" (Must wait for a fulfilled Promise)

  myPromise.then(
    function (value) {
      myDisplayer(value);
    },

    function (error) {
      myDisplayer(error);
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
{
  // CALLBACK

  /*   setTimeout(function () {
    myFunction("I love You !!!");
  }, 3000);

  function myFunction(value) {
    document.getElementById("demo_2").innerHTML = value;
  } */

  //   PROMISE

  const myPromise = new Promise(function (myResolve, myReject) {
    setTimeout(function () {
      myResolve("I love You !!");
    }, 3000);
  });

  myPromise.then(function (value) {
    document.getElementById("demo_2").innerHTML = value;
  });
}
