/*
    Name: Abigail Scott
    Date Created: 9/25/18
    Most recent revision: 9/26/18 10:21pm
*/



function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function startGame(){
	//var startingbet= prompt("How many dollars do you have to bet?", "0");
	var startingbet= document.getElementById("bet-in").value;
	
	if(isNaN(startingbet)) {

		var prompt1=prompt("A number is required.");
		document.getElementById("bet-in").value= prompt1;
       
    }
    
    else if (startingbet<=0) {
         var prompt2 = prompt("Please enter a number greater than 0.");
         document.getElementById("bet-in").value= prompt2;
    }
    
    else{
		startingbet = +startingbet;
		maxDollars=startingbet;
		document.getElementById("bet-in").value =startingbet;
		document.getElementById("current").innerHTML=startingbet;
		document.getElementById("progress").style.display="block";
		document.getElementById("bet-in").disabled =true;
		
    }	
	
}

rollCount=0;
highestRoll=0;
maxDollars=0;

function playGameSlow(){
	var dollars=document.getElementById("current").innerHTML;
	
	if(dollars<=0)
	{
		alert("You're broke!");
		gameResult();
	}
	else{
		var dice1= rollDice();
		var dice2= rollDice();
		rollCount++;
		
		document.getElementById("dicesum").innerHTML= dice1+dice2;
		if(dice1+dice2==7)
		{
			document.getElementById("current").innerHTML=Number(dollars)+4;
		}
		else{
			document.getElementById("current").innerHTML=dollars-1;
		}
		
		if (maxDollars<Number(dollars)){
			maxDollars=dollars;
			highestRoll=rollCount;
		}
	}
}

function playGame(){
	
	var dollars=document.getElementById("current").innerHTML;
	while(dollars>0)
	{
		var dice1= rollDice();
		var dice2= rollDice();
		rollCount++;
		
		document.getElementById("dicesum").innerHTML= dice1+dice2;
		if(dice1+dice2==7)
		{
			document.getElementById("current").innerHTML=Number(dollars)+4;
		}
		else{
			document.getElementById("current").innerHTML=dollars-1;
		}
		
		
		if (maxDollars<Number(dollars)){
			maxDollars=dollars;
			highestRoll=rollCount;
		}
		dollars=document.getElementById("current").innerHTML;
	}
	
	gameResult();
}

function gameResult(){
	document.getElementById("results").style.display="block";
	document.getElementById("start-bet").innerHTML=document.getElementById("bet-in").value;
	document.getElementById("total-rolls").innerHTML=rollCount;
	document.getElementById("highest-amount").innerHTML=maxDollars;
	document.getElementById("roll-count-highest").innerHTML=highestRoll;

}

function resetGame(){
	document.getElementById("dicesum").innerHTML="";
	document.getElementById("bet-in").value=0;
	document.getElementById("progress").style.display="none";
	document.getElementById("results").style.display="none";
	document.getElementById("bet-in").disabled =false;
	rollCount=0;
	highestRoll=0;
	maxDollars=0;
}