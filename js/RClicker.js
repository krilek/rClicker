
/*może się przydać
http://www.w3schools.com/css/tryit.asp?filename=trycss_ex_images_filters
http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_createelement4
http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_removechild5

//WHOA http://www.eleqtriq.com/wp-content/static/demos/2010/css3d/matrix3dexplorer.html

PIĘKNO top: calc(50% - 18px); - do zapamiętania

//Może być bez event Przetestuj porównanie który event się skończył (naucz się tego cwelu) http://www.w3schools.com/jsref/event_transition_propertyName.asp


Funkcja sprawdzająca przeglądarkę
 do użycia przy definiowaniu css tła
    function myFunction() { 
     if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
    {
        alert('Opera');
    }
    else if(navigator.userAgent.indexOf("Chrome") != -1 )
    {
        alert('Chrome');
    }
    else if(navigator.userAgent.indexOf("Safari") != -1)
    {
        alert('Safari');
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    {
         alert('Firefox');
    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
    {
      alert('IE'); 
    }  
    else 
    {
       alert('unknown');
    }
    }
	
zapożyczanie się u kolegów?, banner oceniający stanowisko wobec kolegów
ustawić atrybut np klase i ją kontrolować hoverem
humor radka
wyjazd do holandii boost tymczasowy :D
ceny narkotyków zwiększają się wraz z ilością

Pierwszy raz z narkotykiem daje fazę
każdy kolejny zmniejsza szansę na fazę
Faza zmienia boola i przekazuje do kliknięcia czy ma być bonus klikania
czas fazy zmienia się w zależności od wziętego narkotyku i ilości wziętej w przeszłości
latające obiekty - pokazuje się gdziekolwiek poza ekranem przelatuje przez przekątną ekranu



WAŻNE KOLOR CZCIONKI WPŁYWA NA LATAJĄCE OBIEKTY
*/
var clicks = 0;
var mainAmount = 0,
friendsGained = 0,
friendsLost = 0,
friends = 0;

var beer = {
	name:'beer',
	total:0,
	netGain:0.1,
	value: 25,
	highChance: 0,
	highDuration: 0,
	highAmount: 0,
	friendControl: 0.2,
	happinness: 5
},
salvia = {
	name:'salvia',
	total:0,
	netGain:0.3,
	value: 50,
	highChance: 3,
	highDuration: 5,
	highAmount: 0,
	clickMultiplier: 2,
	friendControl: -0.2,
	happinness: 3
},
acodin = {
	name:'acodin',
	total:0,
	netGain:0.2,
	value: 100,
	highChance: 5,
	highDuration: 10,
	highAmount: 0,
	friendControl: -0.5,
	happinness: 5
},
weed = {
	name:'weed',
	total:0,
	netGain:1,
	value: 125,
	highChance: 7,
	highAmount: 0,
	highDuration: 12.5,
	friendControl: 1,
	happinness: 8
},
booster = {
	name:'booster',
	total:0,
	netGain:1.1,
	value: 150,
	highChance: 5,
	highDuration: 15,
	highAmount: 0,
	friendControl: -0.3,
	happinness: 6
},
mushroom = {
	name:'mushroom',
	total:0,
	netGain:1.5,
	value: 200,
	highChance: 12,
	highDuration: 20,
	highAmount: 0,
	friendControl: 2,
	happinness: 3
},
molly = {
	name:'molly',
	total:0,
	netGain:1.7,
	value: 220,
	highChance: 15,
	highDuration: 22,
	highAmount: 0,
	friendControl: 1.2,
	happinness: 10
},
ecstasy = {
	name:'ecstasy',
	total:0,
	netGain:4,
	value: 270,
	highChance: 20,
	highDuration: 25,
	highAmount: 0,
	friendControl: 3,
	happinness: 4
},
powder = {
	name:'powder',
	total:0,
	netGain:5,
	value: 360,
	highChance: 16,
	highDuration: 27,
	highAmount: 0,
	friendControl: 1.7,
	happinness: 10
},
syringe = {
	name:'syringe',
	total:0,
	netGain:12,
	value: 500,
	highChance: 20,
	highDuration: 33,
	highAmount: 0,
	friendControl: -5,
	happinness: 1
};

function highHelper(chance)
{
	var rand1 = Math.floor( Math.random()*parseInt(chance))+1
	console.log(rand1);
	var rand2 = Math.floor( Math.random()*parseInt(chance))+1
	console.log(rand2);
	return rand1 == rand2 ? true : false
}


function highCalc(name)
{
	switch(name)
	{
		case 'salvia':
		{
			

			if(salvia.total == 1)
			{
				salvia.highAmount++;
				stoned(name, salvia.highDuration*1000);
				salvia.highDuration--;
				salvia.highChance++;
			}
			else if(salvia.highDuration == 0 )
			{
				break;
			}
			else
			{
				if(highHelper(salvia.highChance))
				{
					console.log(highHelper(salvia.chance));
					salvia.highAmount++;
					stoned(name, salvia.highDuration*1000);
					salvia.highDuration--;
					salvia.highChance++;
				}
			}
			break;
		}
		case 'acodin':
		{
			
			if(acodin.total == 1)
			{
				acodin.highAmount++;
				stoned(name, acodin.highDuration*1000);
				acodin.highDuration--;
				acodin.highChance++;
			}
			else if(acodin.highDuration == 0 )
			{
				break;
			}
			else
			{
				if(highHelper(acodin.highChance))
				{
					console.log(highHelper(acodin.chance));
					acodin.highAmount++;
					stoned(name, acodin.highDuration*1000);
					acodin.highDuration--;
					acodin.highChance++;
				}
			}
			break;
		}
		case 'booster':
		{
			
			if(booster.total == 1)
			{
				booster.highAmount++;
				stoned(name, booster.highDuration*1000);
				booster.highDuration--;
				booster.highChance++;
			}
			else if(booster.highDuration == 0 )
			{
				break;
			}
			else
			{
				if(highHelper(booster.highChance))
				{
					console.log(highHelper(booster.chance));
					booster.highAmount++;
					stoned(name, booster.highDuration*1000);
					booster.highDuration--;
					booster.highChance++;
				}
			}
			break;
		}
		case 'weed':
		{
			if(weed.total == 1)
			{
				weed.highAmount++;
				stoned(name, weed.highDuration*1000);
				weed.highDuration--;
				weed.highChance++;
			}
			else if(weed.highDuration == 0 )
			{
				break;
			}
			else
			{
				if(highHelper(weed.highChance))
				{
					console.log(highHelper(weed.chance));
					weed.highAmount++;
					stoned(name, weed.highDuration*1000);
					weed.highDuration--;
					weed.highChance++;
				}
			}
			break;
		}
		case 'mushroom':
		{
			if(mushroom.total == 1)
			{
				mushroom.highAmount++;
				stoned(name, mushroom.highDuration*1000);
				mushroom.highDuration--;
				mushroom.highChance++;
			}
			else if(mushroom.highDuration == 0 )
			{
				break;
			}
			else
			{
				if(highHelper(mushroom.highChance))
				{
					console.log(highHelper(mushroom.chance));
					mushroom.highAmount++;
					stoned(name, mushroom.highDuration*1000);
					mushroom.highDuration--;
					mushroom.highChance++;
				}
			}
			break;
		}
		case 'molly':
		{
			if(molly.total == 1)
			{
				molly.highAmount++;
				stoned(name, molly.highDuration*1000);
				molly.highDuration--;
				molly.highChance++;
			}
			else if(molly.highDuration == 0 )
			{
				break;
			}
			else
			{
				if(highHelper(molly.highChance))
				{
					console.log(highHelper(molly.chance));
					molly.highAmount++;
					stoned(name, molly.highDuration*1000);
					molly.highDuration--;
					molly.highChance++;
				}
			}
			break;
		}
		case 'ecstasy':
		{
			if(ecstasy.total == 1)
			{
				ecstasy.highAmount++;
				stoned(name, ecstasy.highDuration*1000);
				ecstasy.highDuration--;
				ecstasy.highChance++;
			}
			else if(ecstasy.highDuration == 0 )
			{
				break;
			}
			else
			{
				if(highHelper(ecstasy.highChance))
				{
					console.log(highHelper(ecstasy.chance));
					ecstasy.highAmount++;
					stoned(name, ecstasy.highDuration*1000);
					ecstasy.highDuration--;
					ecstasy.highChance++;
				}
			}
			break;
		}
		case 'powder':
		{
			if(powder.total == 1)
			{
				powder.highAmount++;
				stoned(name, powder.highDuration*1000);
				powder.highDuration--;
				powder.highChance++;
			}
			else if(powder.highDuration == 0 )
			{
				break;
			}
			else
			{
				if(highHelper(powder.highChance))
				{
					console.log(highHelper(powder.chance));
					powder.highAmount++;
					stoned(name, powder.highDuration*1000);
					powder.highDuration--;
					powder.highChance++;
				}
			}
			break;
		}
		case 'syringe':
		{
			if(syringe.total == 1)
			{
				syringe.highAmount++;
				stoned(name, syringe.highDuration*1000);
				syringe.highDuration--;
				syringe.highChance++;
			}
			else if(syringe.highDuration == 0 )
			{
				break;
			}
			else
			{
				if(highHelper(syringe.highChance))
				{
					console.log(highHelper(syringe.chance));
					syringe.highAmount++;
					stoned(name, syringe.highDuration*1000);
					syringe.highDuration--;
					syringe.highChance++;
				}
			}
			break;
		}
		
	}
	console.log(salvia.total+" total "+salvia.highDuration+" duration "+salvia.highAmount+" amount "+salvia.highChance+" chance ");
}


function main()
{
	
	if(beer.total == 1)
		ID("addBeer").innerHTML = "Wypij kolejne piwo";
	if(salvia.total == 1)
		ID("addSalvia").innerHTML = "Zapal szałwię";
	if(acodin.total == 1)
		ID("addAcodin").innerHTML = "Weź acodin";
	if(booster.total == 1)
		ID("addBooster").innerHTML = "Zgrzej kosiora";
	if(weed.total == 1)
		ID("addWeed").innerHTML = "Spal blanta";
	if(mushroom.total == 1)
		ID("addMushroom").innerHTML = "Zasmakuj grzybka";
	if(molly.total == 1)
		ID("addMolly").innerHTML = "Weź LSD";
	if(powder.total == 1)
		ID("addPowder").innerHTML = "Wciągnij kreskę";
	if(syringe.total == 1)
		ID("addSyringe").innerHTML = "Daj w żyłę";
	//console.log(salvia.highDuration);
	calculateGain();
	refreshMainAmount();
	refreshUpgrades();
	setTimeout("main();", 1000);
}


function stoned(byWhat, duration)
{
	amount =  ID("stoned").childNodes.length
	ID("body").style.backgroundImage = "radial-gradient(farthest-corner at 50% 250px,"+colorGenerator()+", "+colorGenerator()+", "+colorGenerator()+", "+colorGenerator()+")";
		createIMG("weed");
	if(duration == 0 || duration <= 0)
	{
		ID("body").style.backgroundImage = "none";
		setTimeout(function (){ID("stoned").innerHTML = "";},2000);
	}
	else
		setTimeout(function() {stoned(byWhat, duration-100);},100);
}

function createIMG(image, startX, startY, endX, endY)
{	
	var box = ID("stoned")
	if(startX == null || startY == null || endX == null || endY == null)
		randomPos();
	var span = document.createElement("span");
	span.className = "flaticon-antibiotic element";
	span.style.position = "absolute";
	span.style.left = startX+"px";
	span.style.top = startY+"px";
	ID("stoned").appendChild(span);
	setTimeout(move, 1);
	
	function randomPos() //Flying particles around screen at random pos
	{
		var divWidth = box.clientWidth;
		var divHeight = box.clientHeight;
		//choose which to generate first: below 10 start generating x first, above 10 y first
		var mode = Math.floor(Math.random()*20);
		if(mode < 10)
		{
			startX = Math.floor(Math.random()*divWidth);
			if(startX <= 50 || startX >= divWidth - 50)
			{
				startY = Math.floor(Math.random()*divHeight);
			}
			else if(startX >=50 && startX <= divWidth - 50)
			{
				do
				{
					startY = Math.floor(Math.random()*divHeight);
				}while(startY >=50 && startY <= divHeight - 50);
			}
		}
		else
		{
			startY = Math.floor(Math.random()*divHeight);
			
			if(startY <= 50 || startY >= divHeight - 50)
			{
				startX = Math.floor(Math.random()*divWidth);
			}
			else if(startY >=50 && startY <= divHeight - 50)
			{
				do
				{
					startX = Math.floor(Math.random()*divWidth);
				}while(startX >=50 && startX <= divWidth - 50);
			}
		}
		endX = divWidth - startX;
		endY = divHeight - startY;
		//console.log("randomized point "+randStartX+", "+randStartY+ " end "+randEndX+", "+randEndY+ " div dimension "+divWidth+", "+divHeight);
	}
	function move()
	{
		span.style.left = endX+"px";
		span.style.top = endY+"px";
		span.addEventListener("transitionend", destroy);
		function destroy()
		{
			span.removeEventListener("transitionend", destroy);
			box.removeChild(span); //LOOSER... BOOOO 
			//console.log("Usunięto");

		}
	}
	//console.log("zakończono");
}

function cheat()
{
	mainAmount = 99999;
	refreshMainAmount();
}


function ID(which)
{
	return document.getElementById(which)
}

function refreshMainAmount()
{
	ID("mainAmount").innerHTML = Math.floor(mainAmount);
}
function calculateFriends(whichUpgrade)
{
	switch(whichUpgrade)
	{
		case 'beer':
		{
			friendsGained+=beer.friendControl;
			friends += beer.friendControl;
			if(Math.abs(friendsLost) > friendsGained)
				friendsLost = -1*friendsGained;
			break;
		}
		case 'salvia':
		{
			friendsLost+=salvia.friendControl;
			friends += salvia.friendControl;
			if(Math.abs(friendsLost) > friendsGained)
				friendsLost = -1*friendsGained;
			break;
		}
		case 'acodin':
		{
			friendsLost+=acodin.friendControl;
			friends += acodin.friendControl;
			if(Math.abs(friendsLost) > friendsGained)
				friendsLost = -1*friendsGained;
			break;
		}
		case 'booster':
		{
			friendsLost+=booster.friendControl;
			friends += booster.friendControl;
			if(Math.abs(friendsLost) > friendsGained)
				friendsLost = -1*friendsGained;
			break;
		}
		case 'weed':
		{
			friendsGained+=weed.friendControl;
			friends += weed.friendControl;
			if(Math.abs(friendsLost) > friendsGained)
				friendsLost = -1*friendsGained;
			break;
		}
		case 'mushroom':
		{
			friendsGained+=mushroom.friendControl;
			friends += mushroom.friendControl;
			if(Math.abs(friendsLost) > friendsGained)
				friendsLost = -1*friendsGained;
			break;
		}
		case 'molly':
		{
			friendsGained+=molly.friendControl;
			friends += molly.friendControl;
			if(Math.abs(friendsLost) > friendsGained)
				friendsLost = -1*friendsGained;
			break;
		}
		case 'ecstasy':
		{
			friendsGained+=ecstasy.friendControl;
			friends += ecstasy.friendControl;
			if(Math.abs(friendsLost) > friendsGained)
				friendsLost = -1*friendsGained;
			break;
		}
		case 'powder':
		{
			friendsGained+=powder.friendControl;
			friends += powder.friendControl;
			if(Math.abs(friendsLost) > friendsGained)
				friendsLost = -1*friendsGained;
			break;
		}
		case 'syringe':
		{
			friendsLost+=syringe.friendControl;
			friends += syringe.friendControl;
			if(Math.abs(friendsLost) > friendsGained)
				friendsLost = -1*friendsGained;
			break;
		}
		
	}
	document.getElementById("friendsGained").innerHTML = Math.floor(friendsGained);
	document.getElementById("friendsLost").innerHTML = Math.floor(Math.abs(friendsLost));
	
	if(friends < 0)
	{
		friends = 0;
	}
	document.getElementById("friends").innerHTML = Math.floor(friends);
	
}

function colorGenerator()
{
	var signArray = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
	var output = "#";
	while(output.length != 7)
	{
		var rand = Math.floor(Math.random() * 16);
		output += signArray[rand];
	}
	return output;
}


function refreshStat(name)
{
	switch(name)
	{
		case 'beer':
		{
			ID(name+'Amount').innerHTML = beer.total;
			break;
		}
		case 'salvia':
		{
			ID(name+'Amount').innerHTML = salvia.total;
			break;
		}
		case 'acodin':
		{
			ID(name+'Amount').innerHTML = acodin.total;
			break;
		}
		case 'booster':
		{
			ID(name+'Amount').innerHTML = booster.total;
			break;
		}
		case 'weed':
		{
			ID(name+'Amount').innerHTML = weed.total;
			break;
		}
		case 'mushroom':
		{
			ID(name+'Amount').innerHTML = mushroom.total;
			break;
		}
		case 'molly':
		{
			ID(name+'Amount').innerHTML = molly.total;
			break;
		}
		case 'ecstasy':
		{
			ID(name+'Amount').innerHTML = ecstasy.total;
			break;
		}
		case 'powder':
		{
			ID(name+'Amount').innerHTML = powder.total;
			break;
		}
		case 'syringe':
		{
			ID(name+'Amount').innerHTML = syringe.total;
			break;
		}
		
	}
}

function refreshUpgrades()
{
	if(mainAmount >= beer.value)
		ID("addBeer").style.color = "#bcd5d1";
	else
		ID("addBeer").style.color = "#5a5c51";
	
	if(mainAmount >= salvia.value)
		ID("addSalvia").style.color = "#bcd5d1";
	else
		ID("addSalvia").style.color = "#5a5c51";
	
	if(mainAmount >= acodin.value)
		ID("addAcodin").style.color = "#bcd5d1";
	else
		ID("addAcodin").style.color = "#5a5c51";
	
	if(mainAmount >= booster.value)
		ID("addBooster").style.color = "#bcd5d1";
	else
		ID("addBooster").style.color = "#5a5c51";
	
	if(mainAmount >= weed.value)
		ID("addWeed").style.color = "#bcd5d1";
	else
		ID("addWeed").style.color = "#5a5c51";
	
	if(mainAmount >= mushroom.value)
		ID("addMushroom").style.color = "#bcd5d1";
	else
		ID("addMushroom").style.color = "#5a5c51";
	
	if(mainAmount >= molly.value)
		ID("addMolly").style.color = "#bcd5d1";
	else
		ID("addMolly").style.color = "#5a5c51";
	/*
	if(mainAmount >= ecstasy.value)
		document.getElementById("addEcstasy").style.color = "#bcd5d1";
	else
		document.getElementById("addEcstasy").style.color = "#5a5c51";
	*/
	if(mainAmount >= powder.value)
		ID("addPowder").style.color = "#bcd5d1";
	else
		ID("addPowder").style.color = "#5a5c51";
	
	if(mainAmount >= syringe.value)
		ID("addSyringe").style.color = "#bcd5d1";
	else
		ID("addSyringe").style.color = "#5a5c51";
	
	
	if(beer.total == 1)
		ID("addBeer").innerHTML = "Wypij kolejne piwo";
	if(salvia.total == 1)
		ID("addSalvia").innerHTML = "Zapal szałwię";
	if(acodin.total == 1)
		ID("addAcodin").innerHTML = "Weź acodin";
	if(booster.total == 1)
		ID("addBooster").innerHTML = "Zgrzej kosiora";
	if(weed.total == 1)
		ID("addWeed").innerHTML = "Spal blanta";
	if(mushroom.total == 1)
		ID("addMushroom").innerHTML = "Zasmakuj grzybka";
	if(molly.total == 1)
		ID("addMolly").innerHTML = "Weź LSD";
	if(powder.total == 1)
		ID("addPowder").innerHTML = "Wciągnij kreskę";
	if(syringe.total == 1)
		ID("addSyringe").innerHTML = "Daj w żyłę";
	
	
	
}

function addUpgrade(name)
{
	switch(name)
	{
		case 'beer':
		{
			if(mainAmount >= beer.value)
			{
				mainAmount-=beer.value;
				beer.total++;
				beer.value *= 1.15
			}
			break;
		}
		case 'salvia':
		{
			if(mainAmount >= salvia.value)
			{
				mainAmount-=salvia.value;
				salvia.total++;
				salvia.value *= 1.15
			}
			break;
		}
		case 'acodin':
		{
			if(mainAmount >= acodin.value)
			{
				mainAmount-=acodin.value;
				acodin.total++;
				acodin.value *= 1.15
			}
			break;
		}
		case 'booster':
		{
			if(mainAmount >= booster.value)
			{
				mainAmount-=booster.value;
				booster.total++;
				booster.value *= 1.15
			}

			break;
		}
		case 'weed':
		{
			if(mainAmount >= weed.value)
			{
				mainAmount-=weed.value;
				weed.total++;
				weed.value *= 1.15
			}
			break;
		}
		case 'mushroom':
		{
			if(mainAmount >= mushroom.value)
			{
				mainAmount-=mushroom.value;
				mushroom.total++;
				mushroom.value *= 1.15
			}
			break;
		}
		case 'molly':
		{
			if(mainAmount >= molly.value)
			{
				mainAmount-=molly.value;
				molly.total++;
				molly.value *= 1.15
			}
			break;
		}
		case 'ecstasy':
		{
			if(mainAmount >= ecstasy.value)
			{
				mainAmount-=ecstasy.value;
				ecstasy.total++;
				ecstasy.value *= 1.15
			}
			break;
		}
		case 'powder':
		{
			if(mainAmount >= powder.value)
			{
				mainAmount-=powder.value;
				powder.total++;
				powder.value *= 1.15
			}
			break;
		}
		case 'syringe':
		{
			if(mainAmount >= syringe.value)
			{
				mainAmount-=syringe.value;
				syringe.total++;
				syringe.value *= 1.15
			}
			break;
		}
		
	}
	refreshMainAmount();
	refreshStat(name);
	refreshUpgrades();
	calculateFriends(name);
	highCalc(name);
}

function calculateGain()
{
	mainAmount += beer.netGain*beer.total;
	mainAmount += salvia.netGain*salvia.total;
	mainAmount += acodin.netGain*acodin.total;
	mainAmount += booster.netGain*booster.total;
	mainAmount += weed.netGain*weed.total;
	mainAmount += mushroom.netGain*mushroom.total;
	mainAmount += molly.netGain*molly.total;
	mainAmount += ecstasy.netGain*ecstasy.total;
	mainAmount += powder.netGain*powder.total;
	mainAmount += syringe.netGain*syringe.total;
}


function clickMainDown()
{
	ID("mainClick").style.height = "145px";
	mainAmount++;
	clicks++;
	ID("clicks").innerHTML = clicks;
	refreshMainAmount();
	refreshUpgrades();
	
}

function clickMainUp()
{
	ID("mainClick").style.height = "150px";
}

function degreeGenerator()
{
	var random = Math.floor(Math.random()*180);
	random += 'deg';
	return random;
}
