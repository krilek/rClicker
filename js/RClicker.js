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

każdy kolejny zmniejsza szansę na fazę
Faza zmienia boola i przekazuje do kliknięcia czy ma być bonus klikania
czas fazy zmienia się w zależności od wziętego narkotyku i ilości wziętej w przeszłości

Stopniowa zmiana zdjęć wraz z upływem czasu

OBIEKTY LATAJACE POWINNY KOŃCZYĆ SIĘ NA RADKU PRZY NIŻSZYM OKNIE

https://msdn.microsoft.com/query/dev12.query?appId=Dev12IDEF1&l=PL-PL&k=k(VS.WebClient.Help.SCRIPT5022)
RClicker.js (597,17)

naprawić podświetlanie upgrade gdy nie ma odpowiedniej ilości

przesunięcie elementów w dół?

ciemne tło pod napisamim z opacity

Ustawienia, kontrola głośności, wyciszenie, zapis gry, 


*/
var clicks = 0;
var mainAmount = 0,
    friendsGained = 0,
    friendsLost = 0,
    friends = 0;

var beer = {
        name: 'beer',
        total: 0,
        netGain: 0.1,
        value: 25,
        highChance: 0,
        highDuration: 0,
        highAmount: 0,
        friendControl: 0.2,
        happinness: 5
    },
    salvia = {
        name: 'salvia',
        total: 0,
        netGain: 0.3,
        value: 50,
        highChance: 3,
        highDuration: 5,
        highAmount: 0,
        clickMultiplier: 2,
        friendControl: -0.2,
        happinness: 3
    },
    acodin = {
        name: 'acodin',
        total: 0,
        netGain: 0.2,
        value: 100,
        highChance: 5,
        highDuration: 10,
        highAmount: 0,
        friendControl: -0.5,
        happinness: 5
    },
    weed = {
        name: 'weed',
        total: 0,
        netGain: 1,
        value: 125,
        highChance: 7,
        highAmount: 0,
        highDuration: 12.5,
        friendControl: 1,
        happinness: 8
    },
    booster = {
        name: 'booster',
        total: 0,
        netGain: 1.1,
        value: 150,
        highChance: 5,
        highDuration: 15,
        highAmount: 0,
        friendControl: -0.3,
        happinness: 6
    },
    mushroom = {
        name: 'mushroom',
        total: 0,
        netGain: 1.5,
        value: 200,
        highChance: 12,
        highDuration: 20,
        highAmount: 0,
        friendControl: 2,
        happinness: 3
    },
    molly = {
        name: 'molly',
        total: 0,
        netGain: 1.7,
        value: 220,
        highChance: 15,
        highDuration: 22,
        highAmount: 0,
        friendControl: 1.2,
        happinness: 10
    },
    powder = {
        name: 'powder',
        total: 0,
        netGain: 5,
        value: 360,
        highChance: 16,
        highDuration: 27,
        highAmount: 0,
        friendControl: 1.7,
        happinness: 10
    },
    syringe = {
        name: 'syringe',
        total: 0,
        netGain: 12,
        value: 500,
        highChance: 20,
        highDuration: 33,
        highAmount: 0,
        friendControl: -5,
        happinness: 1
    };

function highHelper(chance) {
    var rand1 = Math.floor(Math.random() * parseInt(chance)) + 1;
    var rand2 = Math.floor(Math.random() * parseInt(chance)) + 1;
    return rand1 == rand2 ? true : false
}


function highCalc(name) {
    switch (name) {
        case 'salvia':
            {


                if (salvia.total == 1) {
                    salvia.highAmount++;
                    stoned(name, salvia.highDuration * 1000);
                    salvia.highDuration--;
                    salvia.highChance++;
                } else if (salvia.highDuration == 0) {
                    break;
                } else {
                    if (highHelper(salvia.highChance)) {
                        console.log(highHelper(salvia.chance));
                        salvia.highAmount++;
                        stoned(name, salvia.highDuration * 1000);
                        salvia.highDuration--;
                        salvia.highChance++;
                    }
                }
                break;
            }
        case 'acodin':
            {

                if (acodin.total == 1) {
                    acodin.highAmount++;
                    stoned(name, acodin.highDuration * 1000);
                    acodin.highDuration--;
                    acodin.highChance++;
                } else if (acodin.highDuration == 0) {
                    break;
                } else {
                    if (highHelper(acodin.highChance)) {
                        console.log(highHelper(acodin.chance));
                        acodin.highAmount++;
                        stoned(name, acodin.highDuration * 1000);
                        acodin.highDuration--;
                        acodin.highChance++;
                    }
                }
                break;
            }
        case 'booster':
            {

                if (booster.total == 1) {
                    booster.highAmount++;
                    stoned(name, booster.highDuration * 1000);
                    booster.highDuration--;
                    booster.highChance++;
                } else if (booster.highDuration == 0) {
                    break;
                } else {
                    if (highHelper(booster.highChance)) {
                        console.log(highHelper(booster.chance));
                        booster.highAmount++;
                        stoned(name, booster.highDuration * 1000);
                        booster.highDuration--;
                        booster.highChance++;
                    }
                }
                break;
            }
        case 'weed':
            {
                if (weed.total == 1) {
                    weed.highAmount++;
                    stoned(name, weed.highDuration * 1000);
                    weed.highDuration--;
                    weed.highChance++;
                } else if (weed.highDuration == 0) {
                    break;
                } else {
                    if (highHelper(weed.highChance)) {
                        console.log(highHelper(weed.chance));
                        weed.highAmount++;
                        stoned(name, weed.highDuration * 1000);
                        weed.highDuration--;
                        weed.highChance++;
                    }
                }
                break;
            }
        case 'mushroom':
            {
                if (mushroom.total == 1) {
                    mushroom.highAmount++;
                    stoned(name, mushroom.highDuration * 1000);
                    mushroom.highDuration--;
                    mushroom.highChance++;
                } else if (mushroom.highDuration == 0) {
                    break;
                } else {
                    if (highHelper(mushroom.highChance)) {
                        console.log(highHelper(mushroom.chance));
                        mushroom.highAmount++;
                        stoned(name, mushroom.highDuration * 1000);
                        mushroom.highDuration--;
                        mushroom.highChance++;
                    }
                }
                break;
            }
        case 'molly':
            {
                if (molly.total == 1) {
                    molly.highAmount++;
                    stoned(name, molly.highDuration * 1000);
                    molly.highDuration--;
                    molly.highChance++;
                } else if (molly.highDuration == 0) {
                    break;
                } else {
                    if (highHelper(molly.highChance)) {
                        console.log(highHelper(molly.chance));
                        molly.highAmount++;
                        stoned(name, molly.highDuration * 1000);
                        molly.highDuration--;
                        molly.highChance++;
                    }
                }
                break;
            }
        case 'powder':
            {
                if (powder.total == 1) {
                    powder.highAmount++;
                    stoned(name, powder.highDuration * 1000);
                    powder.highDuration--;
                    powder.highChance++;
                } else if (powder.highDuration == 0) {
                    break;
                } else {
                    if (highHelper(powder.highChance)) {
                        console.log(highHelper(powder.chance));
                        powder.highAmount++;
                        stoned(name, powder.highDuration * 1000);
                        powder.highDuration--;
                        powder.highChance++;
                    }
                }
                break;
            }
        case 'syringe':
            {
                if (syringe.total == 1) {
                    syringe.highAmount++;
                    stoned(name, syringe.highDuration * 1000);
                    syringe.highDuration--;
                    syringe.highChance++;
                } else if (syringe.highDuration == 0) {
                    break;
                } else {
                    if (highHelper(syringe.highChance)) {
                        console.log(highHelper(syringe.chance));
                        syringe.highAmount++;
                        stoned(name, syringe.highDuration * 1000);
                        syringe.highDuration--;
                        syringe.highChance++;
                    }
                }
                break;
            }

    }
    ID("highAmount").innerHTML = salvia.highAmount + acodin.highAmount + booster.highAmount + weed.highAmount + mushroom.highAmount + molly.highAmount + powder.highAmount + syringe.highAmount;
}


function main() {

    if (beer.total == 1)
        ID("addBeer").innerHTML = "Wypij kolejne piwo";
    if (salvia.total == 1)
        ID("addSalvia").innerHTML = "Zapal szałwię";
    if (acodin.total == 1)
        ID("addAcodin").innerHTML = "Weź acodin";
    if (booster.total == 1)
        ID("addBooster").innerHTML = "Zgrzej kosiora";
    if (weed.total == 1)
        ID("addWeed").innerHTML = "Spal blanta";
    if (mushroom.total == 1)
        ID("addMushroom").innerHTML = "Zasmakuj grzybka";
    if (molly.total == 1)
        ID("addMolly").innerHTML = "Weź LSD";
    if (powder.total == 1)
        ID("addPowder").innerHTML = "Wciągnij kreskę";
    if (syringe.total == 1)
        ID("addSyringe").innerHTML = "Daj w żyłę";
    //console.log(salvia.highDuration);
    calculateGain();
    refreshMainAmount();
    refreshUpgrades();
    setTimeout("main();", 1000);
}

var currentlyWorking = false;
var playingMusic = false;
var intervalElements;
var intervalRainbow;

function rainbow() {
    ID("body").style.backgroundImage = "radial-gradient(farthest-corner at 50% 250px," + colorGenerator() + ", " + colorGenerator() + ", " + colorGenerator() + ", " + colorGenerator() + ")";
}
window.onfocus = function() {
    var stoned = ID("stoned")
    if (stoned.childNodes.length > 20)
        ID("stoned").innerHTML = "";
};
var music = new Audio("./snd/narkobaron2.mp3");
function stoned(byWhat, duration) {
	dur = duration; 
	if(!playingMusic){
		playingMusic = true;
		music.play();
		music.onpause = function () {
			playingMusic = false;
			console.log(Math.trunc(music.duration*1000));
			console.log(dur);
			console.log(Math.trunc(music.duration*1000) < dur);

			if(!playingMusic && Math.trunc(music.duration*1000) < dur) // http://www.w3schools.com/tags/av_prop_ended.asp zamiast playing music i może wyjebać tego boola
				//może mieć wyjebane i użyć http://www.w3schools.com/tags/av_prop_loop.asp i wtedy sprawdzać czy długość z aktualnym pozostałym czasem -  wyłączyć loopa
				music.play();
			else
				music.pause();
		}
	}
    if (!currentlyWorking) {
        currentlyWorking = true;
        intervalElements = setInterval(function() {
            moveObject(1000, 5, byWhat, ID("stoned"));
        }, 1000);
        intervalRainbow = setInterval(function() {
            rainbow();
        }, 200);
    }
    if (duration == 0 || duration <= 0) {
        highAmount
        currentlyWorking = false;
        playingMusic = false;
        clearInterval(intervalRainbow);
        clearInterval(intervalElements);
        ID("body").style.backgroundImage = "none";
    } else
        setTimeout(function() { stoned(byWhat, duration - 100); }, 100);
}

function moveObject(duration, amount, what, parent) {

    var amountOfSteps = duration / 5;
    var arrayOfElements = [];
    amount = amount || 1;
    for (i = 0; i < amount; i++) {
        arrayOfElements.push(new element(parent, what, colorGenerator(), 50, degreeGenerator(), -50, -280));
        arrayOfElements[i].elHandle();

    }

    function element(parent, img, col, marg, rot, offX, offY, X, Y, eX, eY) {
        this.parentContainer = parent;
        this.offsetX = offX || 0;
        this.offsetY = offY || 0;
        this.margin = marg || 1;
        this.elImg = img;
        this.timer;
        this.elToMove;
        this.startX = X;
        this.startY = Y;
        this.endX = eX;
        this.endY = eY;
        this.rotation = rot;
        this.color = col;
        this.distanceX;
        this.distanceY;
        this.stepX;
        this.stepY;
        this.outOf = window.onblur;
        this.amountOfFrames = amountOfSteps;
        var self = this;

        this.randomPos = function() {
            var divWidth = this.parentContainer.clientWidth;
            var divHeight = this.parentContainer.clientHeight;
            //choose which to generate first: below 10 start generating x first, above 10 y first
            var mode = Math.floor(Math.random() * 20);
            if (mode < 10) {
                this.startX = Math.floor(Math.random() * divWidth);
                if (this.startX <= this.margin || this.startX >= divWidth - this.margin) {
                    this.startY = Math.floor(Math.random() * divHeight);
                } else if (this.startX >= this.margin && this.startX <= divWidth - this.margin) {
                    do {
                        this.startY = Math.floor(Math.random() * divHeight);
                    } while (this.startY >= this.margin && this.startY <= divHeight - this.margin);
                }
            } else {
                this.startY = Math.floor(Math.random() * divHeight);
                if (this.startY <= this.margin || this.startY >= divHeight - this.margin) {
                    this.startX = Math.floor(Math.random() * divWidth);
                } else if (this.startY >= this.margin && this.startY <= divHeight - this.margin) {
                    do {
                        this.startX = Math.floor(Math.random() * divWidth);
                    } while (this.startX >= this.margin && this.startX <= divWidth - this.margin);
                }
            }
            /*
            this.endX = divWidth - this.startX;
            this.endY = divHeight - this.startY;*/
            this.endX = divWidth / 2;
            this.endY = divHeight / 2;
        }
        this.imgTranslate = function() {
            var choose = Math.floor(Math.random() * 2);
            switch (this.elImg) {
                case "salvia":
                    {
                        this.elImg = choose == 1 ? "flaticon-plant-on-ground" : "flaticon-holly-xmas-symbol-of-branch-with-leaves-and-fruits";
                        break;
                    }
                case "acodin":
                    {
                        this.elImg = choose == 1 ? "flaticon-drug-pills" : "flaticon-aspirins";
                        break;
                    }
                case "booster":
                    {
                        this.elImg = choose == 1 ? "flaticon-antibiotic" : "flaticon-medicine-pill";
                        break;
                    }
                case "weed":
                    {
                        this.elImg = choose == 1 ? "flaticon-cannabis-leaf" : "flaticon-cannabis-leaf";
                        break;
                    }
                case "mushroom":
                    {
                        this.elImg = choose == 1 ? "flaticon-mushroom" : "flaticon-mushrooms";
                        break;
                    }
                case "molly":
                    {
                        this.elImg = choose == 1 ? "flaticon-2-pills" : "flaticon-medicine-pill";
                        break;
                    }
                case "powder":
                    {
                        this.elImg = choose == 1 ? "flaticon-drugs-1" : "flaticon-drugs";
                        break;
                    }
                case "syringe":
                    {
                        this.elImg = choose == 1 ? "flaticon-syringe" : "flaticon-syringe-1";
                        break;
                    }
            }
            return this.elImg;
        }
        this.elHandle = function() {
            this.elToMove = document.createElement("div");
            this.elToMove.style.position = "absolute";
            this.elToMove.className = this.imgTranslate();
            if (!this.startX || !this.startY || !this.endX || !this.endY)
                this.randomPos();
            this.distanceX = Math.abs(this.endX - this.startX);
            this.distanceY = Math.abs(this.endY - this.startY);
            this.stepX = this.distanceX / this.amountOfFrames;
            this.stepY = this.distanceY / this.amountOfFrames;
            this.startY += this.offsetY;
            this.endY += this.offsetY;
            this.startX += this.offsetX;
            this.endX += this.offsetX;
            this.elToMove.style.left = this.startX + "px";
            this.elToMove.style.top = this.startY + "px";
            this.elToMove.style.color = this.color;
            this.elToMove.style.transform = "rotate(" + this.rotation + ")";
            this.parentContainer.appendChild(this.elToMove);

            this.timer = setInterval(function() {
                self.frame()
            }, 10);
        }
        this.frame = function() {

            if (this.startX <= this.endX)
                this.startX += this.stepX;
            else
                this.startX -= this.stepX;
            if (this.startY <= this.endY)
                this.startY += this.stepY;
            else
                this.startY -= this.stepY;

            this.distanceX -= this.stepX;
            this.distanceY -= this.stepY;
            this.elToMove.style.left = this.startX + "px";
            this.elToMove.style.top = this.startY + "px";
            this.amountOfFrames--;
            if (this.distanceX <= 0 && this.distanceY <= 0) {
                clearInterval(this.timer);
                this.parentContainer.removeChild(this.elToMove);
            }
        }

    }

}

function cheat() {
    mainAmount = 99999;
    refreshMainAmount();
}


function ID(which) {
    return document.getElementById(which)
}

function refreshMainAmount() {
    ID("mainAmount").innerHTML = Math.floor(mainAmount);
}

function calculateFriends(whichUpgrade) {
    switch (whichUpgrade) {
        case 'beer':
            {
                friendsGained += beer.friendControl;
                friends += beer.friendControl;
                if (Math.abs(friendsLost) > friendsGained)
                    friendsLost = -1 * friendsGained;
                break;
            }
        case 'salvia':
            {
                friendsLost += salvia.friendControl;
                friends += salvia.friendControl;
                if (Math.abs(friendsLost) > friendsGained)
                    friendsLost = -1 * friendsGained;
                break;
            }
        case 'acodin':
            {
                friendsLost += acodin.friendControl;
                friends += acodin.friendControl;
                if (Math.abs(friendsLost) > friendsGained)
                    friendsLost = -1 * friendsGained;
                break;
            }
        case 'booster':
            {
                friendsLost += booster.friendControl;
                friends += booster.friendControl;
                if (Math.abs(friendsLost) > friendsGained)
                    friendsLost = -1 * friendsGained;
                break;
            }
        case 'weed':
            {
                friendsGained += weed.friendControl;
                friends += weed.friendControl;
                if (Math.abs(friendsLost) > friendsGained)
                    friendsLost = -1 * friendsGained;
                break;
            }
        case 'mushroom':
            {
                friendsGained += mushroom.friendControl;
                friends += mushroom.friendControl;
                if (Math.abs(friendsLost) > friendsGained)
                    friendsLost = -1 * friendsGained;
                break;
            }
        case 'molly':
            {
                friendsGained += molly.friendControl;
                friends += molly.friendControl;
                if (Math.abs(friendsLost) > friendsGained)
                    friendsLost = -1 * friendsGained;
                break;
            }
        case 'powder':
            {
                friendsGained += powder.friendControl;
                friends += powder.friendControl;
                if (Math.abs(friendsLost) > friendsGained)
                    friendsLost = -1 * friendsGained;
                break;
            }
        case 'syringe':
            {
                friendsLost += syringe.friendControl;
                friends += syringe.friendControl;
                if (Math.abs(friendsLost) > friendsGained)
                    friendsLost = -1 * friendsGained;
                break;
            }

    }
    document.getElementById("friendsGained").innerHTML = Math.floor(friendsGained);
    document.getElementById("friendsLost").innerHTML = Math.floor(Math.abs(friendsLost));

    if (friends < 0) {
        friends = 0;
    }
    document.getElementById("friends").innerHTML = Math.floor(friends);

}

function colorGenerator() {
    var signArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    var output = "#";
    while (output.length != 7) {
        var rand = Math.floor(Math.random() * 16);
        output += signArray[rand];
    }
    return output;
}


function refreshStat(name) {
    switch (name) {
        case 'beer':
            {
                ID(name + 'Amount').innerHTML = beer.total;
                break;
            }
        case 'salvia':
            {
                ID(name + 'Amount').innerHTML = salvia.total;
                break;
            }
        case 'acodin':
            {
                ID(name + 'Amount').innerHTML = acodin.total;
                break;
            }
        case 'booster':
            {
                ID(name + 'Amount').innerHTML = booster.total;
                break;
            }
        case 'weed':
            {
                ID(name + 'Amount').innerHTML = weed.total;
                break;
            }
        case 'mushroom':
            {
                ID(name + 'Amount').innerHTML = mushroom.total;
                break;
            }
        case 'molly':
            {
                ID(name + 'Amount').innerHTML = molly.total;
                break;
            }
        case 'powder':
            {
                ID(name + 'Amount').innerHTML = powder.total;
                break;
            }
        case 'syringe':
            {
                ID(name + 'Amount').innerHTML = syringe.total;
                break;
            }

    }
}

function refreshUpgrades() {
    if (mainAmount >= beer.value)
        ID("addBeer").style.color = "#bcd5d1";
    else
        ID("addBeer").style.color = "#5a5c51";

    if (mainAmount >= salvia.value)
        ID("addSalvia").style.color = "#bcd5d1";
    else
        ID("addSalvia").style.color = "#5a5c51";

    if (mainAmount >= acodin.value)
        ID("addAcodin").style.color = "#bcd5d1";
    else
        ID("addAcodin").style.color = "#5a5c51";

    if (mainAmount >= booster.value)
        ID("addBooster").style.color = "#bcd5d1";
    else
        ID("addBooster").style.color = "#5a5c51";

    if (mainAmount >= weed.value)
        ID("addWeed").style.color = "#bcd5d1";
    else
        ID("addWeed").style.color = "#5a5c51";

    if (mainAmount >= mushroom.value)
        ID("addMushroom").style.color = "#bcd5d1";
    else
        ID("addMushroom").style.color = "#5a5c51";

    if (mainAmount >= molly.value)
        ID("addMolly").style.color = "#bcd5d1";
    else
        ID("addMolly").style.color = "#5a5c51";
    if (mainAmount >= powder.value)
        ID("addPowder").style.color = "#bcd5d1";
    else
        ID("addPowder").style.color = "#5a5c51";

    if (mainAmount >= syringe.value)
        ID("addSyringe").style.color = "#bcd5d1";
    else
        ID("addSyringe").style.color = "#5a5c51";


    if (beer.total == 1)
        ID("addBeer").innerHTML = "Wypij kolejne piwo";
    if (salvia.total == 1)
        ID("addSalvia").innerHTML = "Zapal szałwię";
    if (acodin.total == 1)
        ID("addAcodin").innerHTML = "Weź acodin";
    if (booster.total == 1)
        ID("addBooster").innerHTML = "Zgrzej kosiora";
    if (weed.total == 1)
        ID("addWeed").innerHTML = "Spal blanta";
    if (mushroom.total == 1)
        ID("addMushroom").innerHTML = "Zasmakuj grzybka";
    if (molly.total == 1)
        ID("addMolly").innerHTML = "Weź LSD";
    if (powder.total == 1)
        ID("addPowder").innerHTML = "Wciągnij kreskę";
    if (syringe.total == 1)
        ID("addSyringe").innerHTML = "Daj w żyłę";



}

function addUpgrade(name) {
    var added = false;
    switch (name) {
        case 'beer':
            {
                if (mainAmount >= beer.value) {
                    mainAmount -= beer.value;
                    beer.total++;
                    beer.value *= 1.1
                    added = true;
                }
                break;
            }
        case 'salvia':
            {
                if (mainAmount >= salvia.value) {
                    mainAmount -= salvia.value;
                    salvia.total++;
                    salvia.value *= 1.1
                    added = true;
                }
                break;
            }
        case 'acodin':
            {
                if (mainAmount >= acodin.value) {
                    mainAmount -= acodin.value;
                    acodin.total++;
                    acodin.value *= 1.1
                    added = true;
                }
                break;
            }
        case 'booster':
            {
                if (mainAmount >= booster.value) {
                    mainAmount -= booster.value;
                    booster.total++;
                    booster.value *= 1.1
                    added = true;
                }
                break;
            }
        case 'weed':
            {
                if (mainAmount >= weed.value) {
                    mainAmount -= weed.value;
                    weed.total++;
                    weed.value *= 1.1
                    added = true;
                }
                break;
            }
        case 'mushroom':
            {
                if (mainAmount >= mushroom.value) {
                    mainAmount -= mushroom.value;
                    mushroom.total++;
                    mushroom.value *= 1.1
                    added = true;
                }
                break;
            }
        case 'molly':
            {
                if (mainAmount >= molly.value) {
                    mainAmount -= molly.value;
                    molly.total++;
                    molly.value *= 1.1
                    added = true;
                }
                break;
            }
        case 'powder':
            {
                if (mainAmount >= powder.value) {
                    mainAmount -= powder.value;
                    powder.total++;
                    powder.value *= 1.1
                    added = true;
                }
                break;
            }
        case 'syringe':
            {
                if (mainAmount >= syringe.value) {
                    mainAmount -= syringe.value;
                    syringe.total++;
                    syringe.value *= 1.1
                    added = true;
                }
                break;
            }

    }
    if (added) {
        refreshMainAmount();
        refreshStat(name);
        refreshUpgrades();
        calculateFriends(name);
        highCalc(name);
    }
}

function calculateGain() {
    mainAmount += beer.netGain * beer.total;
    mainAmount += salvia.netGain * salvia.total;
    mainAmount += acodin.netGain * acodin.total;
    mainAmount += booster.netGain * booster.total;
    mainAmount += weed.netGain * weed.total;
    mainAmount += mushroom.netGain * mushroom.total;
    mainAmount += molly.netGain * molly.total;
    mainAmount += powder.netGain * powder.total;
    mainAmount += syringe.netGain * syringe.total;
}


function clickMainDown() {
    ID("mainClick").style.height = "145px";
    mainAmount++;
    clicks++;
    ID("clicks").innerHTML = clicks;
    refreshMainAmount();
    refreshUpgrades();

}

function clickMainUp() {
    ID("mainClick").style.height = "150px";
}

function degreeGenerator() {
    var random = Math.floor(Math.random() * 180);
    random += 'deg';
    return random;
}
var expanded = false;
function expandMenu(image){
	var menuBox = ID("misc");
	if(expanded){
		menuBox.style.marginBottom = "-200px";
		expanded = false;
		image.src = "./img/up.png"
	}else{
		menuBox.style.marginBottom = "0px";
		image.src = "./img/down.png"
		expanded = true;
	}
	
}


var muted = false;
function mute(){
	muted = !muted;
	changeVolume(ID("volume").value);
}

function changeVolume(volumeLevel){
	if(muted){
		music.volume = 0;
		ID("muteBtn").style.backgroundColor = "#5a5c51";
	}
	else{
		ID("muteBtn").style.backgroundColor = "#bcd5d1";
		music.volume = volumeLevel/100;
	}

}