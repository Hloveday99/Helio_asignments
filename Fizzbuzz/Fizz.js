  for (var f = 1; f <= 100; f++) {

    var output = "";
    
    if( f % 3 == 0 ) { output += "Fizz"; }

    if( f % 5 == 0 ) { output += "buzz"; }

    if(output == "") { output = f; }

    console.log(output)
  }
