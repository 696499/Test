
 function myFunction(){
 	alert("hello");
 	let a1 = parseInt (prompt("enter first angle"));
 	let a2 = parseInt (prompt("enter second angle"));
 	let a3 = 180 - (a1 + a2);
 	alert("The third angle is:" + " " + a3);
 }

  function century (){
 	let year = parseInt (prompt("Write a year and I will tell you the century it belongs in!"));
 	let century1 = parseInt((year - 1) / 100) + 1;
 	alert("The century is" + " " + century1);

 }

function integers(){
	alert("check the console");

	for (let i = 1; i < 101; i++){
	
		if (i % 4 == 0){
	      console.log("Four");
	    }
	    else if (i % 10 == 0){
	      console.log("Ten");
	    }
	    else if (i % 10 && i % 4 == 0){
	    	console.log("TenFour");
	    }
	    else {
	    	console.log(i);
	    }
	}
}

