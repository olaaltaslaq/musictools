
var musictool = prompt("WHAT IS YOUR FAVORITE MUSIC TOOL: GUITAR OR PIANO ?");

function musictool() {

  while (musictool != "guiter" && musictool != "piano") {
    musictool = prompt("PLEASE CHOOSE YOUR FAVORITE MUSIC TOOL: GUITAR OR PIANO ?");
  }

  document.write("<img scr='https://openai.com/content/images/2020/04/2x-no-mark-1.jpg'/>")

  if (musictool == "guiter" || musictool == "piano") {
    console.log(musictool);

  } else {
    musictool = prompt("PLEASE CHOOSE YOUR FAVORITE MUSIC TOOL: GUITAR OR PIANO ?");
    console.log(musictool);

  }

}

musictoolfun();


var x = prompt("HOW MANY TIMES DO YOU WANT TO SEE A MUSIC TOOLS IMAGE?")
var toolsimgFun = function () {

  var i = 0;
  while (i < x) {
    document.write("<img scr='https://i.ytimg.com/vi/x5S9RPVZyRw/maxresdefault.jpg'/>")
    i++;

    console.log(i, "----", x)
  }

}

toolsimgFun();
