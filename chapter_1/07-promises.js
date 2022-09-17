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

    if (x == 0) {
      console.log("LOG_1a: RESOLVE of myPromise --> : " + x);
      myFunResolve(x);
    } else {
      console.log("LOG_1b: REJECT of myPromise ERROR --> : " + x);
      myFunReject("x = " + x + " Error - Something is wrong !!!");
    }
  });

  // "Consuming Code" (Must wait for a fulfilled Promise)

  myPromise.then(
    function (value) {
      myDisplayer(value);
      console.log(
        "LOG_1a: delayed result of myPromise Object DEMO_1  --> : " + value
      );
    },

    function (error) {
      myDisplayer(error);
      console.log(
        "LOG_1b: delayed result of myPromise Object DEMO_1 --> : " + error
      );
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
  const myPromise = new Promise(function (myResolve, myReject) {
    setTimeout(function () {
      myResolve("I love You !!");
    }, 3000);
  });

  myPromise.then(function (value) {
    document.getElementById("demo_2").innerHTML = value;
  });
}

// DEMO_3a ----------------------------------------------
// Promise - Waiting for a file
{
  console.log();
  console.log("------------- DEMO_3a -------------");
  console.log("Promise - Waiting for a file ");
}
{
  function myDisplayer(some) {
    document.getElementById("demo_3a").innerHTML = some;
  }

  let myPromise = new Promise(function (myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open("GET", "mycar.html");
    req.onload = function () {
      if (req.status == 200) {
        myResolve(req.response);
      } else {
        myReject("File not Found");
      }
    };
    req.send();
  });

  myPromise.then(
    function (value) {
      myDisplayer(value);
    },
    function (error) {
      myDisplayer(error);
    }
  );
}

// DEMO_3b ----------------------------------------------
// Callback - Waiting for a file
{
  console.log();
  console.log("------------- DEMO_3b -------------");
  console.log(" Callback - Waiting for a file");
}
{
  function myDisplayer(some) {
    document.getElementById("demo_3b").innerHTML = some;
  }

  function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open("GET", "mycar.html");
    req.onload = function () {
      if (req.status == 200) {
        myCallback(this.responseText);
      } else {
        myCallback("Error: " + req.status);
      }
    };
    req.send();
  }

  getFile(myDisplayer);
}
