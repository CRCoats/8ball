function createInput() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", "I can foresee all");
    document.body.appendChild(x);
  };
  
  function getRandom() {
    min = 0;
    max = 1;
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  function chooseResponse(randomInt) {
      if (randomInt == 1) {
        alert("1");
        document.getElementById("ball").src = "/img/magic8ball_1.png";
      }
      if (randomInt == 2) {
        alert("2");
      }
      if (randomInt == 3) {
        alert("3");
      }
      if (randomInt == 4) {
        alert("4");
      }
      if (randomInt == 5) {
        alert("5");
      }
      if (randomInt == 6) {
        alert("6");
      }
      if (randomInt == 7) {
        alert("7");
      }
      if (randomInt == 8) {
        alert("8");
      }
      if (randomInt == 9) {
        alert("9");
      }
      if (randomInt == 10) {
        alert("10");
      }
      if (randomInt == 11) {
        alert("11");
      }
      if (randomInt == 12) {
        alert("12");
      }
      if (randomInt == 13) {
        alert("13");
      }
      if (randomInt == 14) {
        alert("14");
      }
      if (randomInt == 15) {
        alert("15");
      }
      if (randomInt == 16) {
        alert("16");
      }
      if (randomInt == 17) {
        alert("17");
      }
      if (randomInt == 18) {
        alert("18");
      }
      if (randomInt == 19) {
        alert("19");
      }
      if (randomInt == 20) {
        alert("20");
      }
  }

  createInput();
  let y = chooseResponse(getRandom());
