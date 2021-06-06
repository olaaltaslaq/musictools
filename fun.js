var musictool = prompt("WHAT IS YOUR FAVORITE MUSIC TOOL: guiter OR piano ?");

function musictoolfun() {

  while (musictool != "guiter" && musictool != "piano") {

    musictool = prompt("PLEASE CHOOSE YOUR FAVORITE MUSIC TOOL: guiter OR piano ?");
  }

  document.write("<img   style='color:green; height: 500px;width: 100%;'src='http://blog.siib.ac.in/wp-content/uploads/2013/07/siib-music.jpg'/>")

  if (musictool == "guiter" ||  musictool == "piano") {
    console.log(musictool);

  } else {
     musictool = prompt("please enter on of :  guiter, piano");
    console.log(musictool);

  }


}

musictoolfun();



var toolsimgfun = function ()
 {
  var x = prompt("HOW MANY TIMES DO YOU WANT TO SEE A MUSIC TOOLS IMAGE?")
  var output= "" ;
  for (var i=0 ; i < x ;i++) {
    console.log(i)
    console.log(i < x)
    output=output+"<img  style='color:green; height: 500px;width: 100%;'src='https://i.ytimg.com/vi/x5S9RPVZyRw/maxresdefault.jpg'/>"

  }

 document.write(output) 

}


toolsimgfun();

