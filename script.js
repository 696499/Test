
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

function encrypt(){


	let chars = {'a':'!', 'b':'@', 'c':'#', 'd':'$','e':'%','f':'^', 'g':'&', 'h':'*', 'i':'(', 'j':')', 'k':'-', 'l':'+', 'm':'/', 'n':'>', 'o':'<', 'p':'þ', 'q':'◘', 'r':'?','s':'{','t':'}','u':'☺','v':'|','w':'☻','x':'♥', 'y':'•', 'z':'♣'}
	let message = prompt('write your message!');
	text = message.replace(/[abcdefghijklmnopqrstuvwxyz]/g, m => chars[m]);
	document.getElementById("ok").innerHTML=text;
}

function decrypt(){

	let chars = {'!':'a', '@':'b', '#':'c', '$':'d','%':'e','^':'f', '&':'g', '*':'h', '(':'i', ')':'j', '-':'k', '+':'l', '/':'m', '>':'n', '<':'o', 'þ':'p', '◘':'q', '?':'r','{':'s','}':'t','☺':'u','|':'v','☻':'w','♥':'x', '•':'y', '♣':'z'}
	let message = prompt('paste your encrypted message here!');
	text = message.replace(/[!@#$%^&*()-+/><þ◘?{}☺|☻♥•♣]/g, m => chars[m]);
	document.getElementById("symbol").innerHTML=text;
}


