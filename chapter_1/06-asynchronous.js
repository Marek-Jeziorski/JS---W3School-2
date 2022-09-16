// DEMO_1 ----------------------------------------------
// Wait 3 seconds (3000 milliseconds) for this page to change.
{
  console.log();
  console.log("------------- DEMO_1 -------------");
  console.log("Wait 3 seconds (3000 milliseconds) for this page to change.");
}
{
  setTimeout(myFunction, 3000);

  function myFunction() {
    document.getElementById("demo_1").innerHTML =
      "It's me Ann <br> I love You !!";
  }
}

// DEMO_2 ----------------------------------------------
// Using setInterval() to display the time every second (1000 milliseconds)
{
  console.log();
  console.log("------------- DEMO_2 -------------");
  console.log(
    "Using setInterval() to display the time every second (1000 milliseconds)"
  );
}
{
  setInterval(myFunction, 1000);

  function myFunction() {
    let d = new Date();
    document.getElementById("demo_2").innerHTML =
      d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  }
}

// DEMO_3 ----------------------------------------------
// Waiting for Files
{
  console.log();
  console.log("------------- DEMO_3 -------------");
  console.log("Waiting for Files");
}
{
  function myDisplayer(some) {
    document.getElementById("demo_3").innerHTML = some;
  }

  function getFile(myCallback) {
    let req = new XMLHttpRequest();

    req.open("GET", "mycar.html");

    req.onload = function () {
      if (req.status == 200) {
        myCallback(this.responseText);
      } else {
        myCallback("OH MY GOD Error: " + req.status);
      }
    };

    req.send();
  }

  getFile(myDisplayer);
}
