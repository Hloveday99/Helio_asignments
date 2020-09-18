  for (var f = 1; f <= 1000; f++) {

    var output = "";
    
    if( f % 3 == 0 ) { output += "Fizz"; }

    if( f % 5 == 0 ) { output += "Buzz"; }

    if( f % 70 == 0 ) { output += "Black"; }

    if(output == "") { output = f; }

    console.log(output)
  }



  // for (var r = 1; r <= 150; r++) {

  //   var output= "";

  //   if (f % 4 == 0) { output += Booty}

  