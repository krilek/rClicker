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

zrobić w js pozycjonowanie radka kurwa mać jebany w pizde css bez zmiennych


    ZAOKRĄGLIĆ WSZYSTKIE LICZBY!!!
    Napisać auto load przy załadowaniu
    Zrobić zapytanie czy nadpisać zapis(sprawdzenie ilości kliknięć !)

*/
var clicks = 0;
var mainAmount = 0,
    friendsGained = 0,
    friendsLost = 0,
    friends = 0;
var upgradeArray = [];

var beer = {
        name: 'beer',
        upgradeID: 'addBeer',
        upgradeText: 'Wypij kolejne piwo',
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
        upgradeID: 'addSalvia',
        upgradeText: 'Zapal szałwię',
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
        upgradeID: 'addAcodin',
        upgradeText: 'Weź acodin',
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
        upgradeID: 'addWeed',
        upgradeText: 'Spal blanta',
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
        upgradeID: 'addBooster',
        upgradeText: 'Zgrzej kosiora',
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
        upgradeID: 'addMushroom',
        upgradeText: 'Zasmakuj grzybka',
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
        upgradeID: 'addMolly',
        upgradeText: 'Weź LSD',
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
        upgradeID: 'addPowder',
        upgradeText: 'Wciągnij kreskę',
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
        upgradeID: 'addSyringe',
        upgradeText: 'Daj w żyłę',
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


function highCalc(upgrade) {
    if (upgrade.total == 1) {
        upgrade.highAmount++;
        stoned(upgrade.name, upgrade.highDuration * 1000);
        upgrade.highDuration--;
        upgrade.highChance++;
    } else if (upgrade.highDuration == 0) {
        //break;
    } else {
        if (highHelper(upgrade.highChance)) {
            console.log(highHelper(upgrade.chance));
            upgrade.highAmount++;
            stoned(upgrade.name, upgrade.highDuration * 1000);
            upgrade.highDuration--;
            upgrade.highChance++;
        }
    }
    ID("highAmount").innerHTML = salvia.highAmount + acodin.highAmount + booster.highAmount + weed.highAmount + mushroom.highAmount + molly.highAmount + powder.highAmount + syringe.highAmount;
}


function main() {

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
    if (!playingMusic) {
        playingMusic = true;
        music.play();
        music.onpause = function() {
            playingMusic = false;
            console.log(Math.trunc(music.duration * 1000));
            console.log(dur);
            console.log(Math.trunc(music.duration * 1000) < dur);

            if (!playingMusic && Math.trunc(music.duration * 1000) < dur) // http://www.w3schools.com/tags/av_prop_ended.asp zamiast playing music i może wyjebać tego boola
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

function init(){
    upgradeArray.push(beer);
    upgradeArray.push(salvia );
    upgradeArray.push(acodin);
    upgradeArray.push(weed);
    upgradeArray.push(booster);
    upgradeArray.push(mushroom);
    upgradeArray.push(molly);
    upgradeArray.push(powder);
    upgradeArray.push(syringe);
    main();
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
    if(whichUpgrade.friendControl > 0 ){
        friendsGained += whichUpgrade.friendControl;
        friends += whichUpgrade.friendControl;
    }
    else{
        friendsLost += whichUpgrade.friendControl;
        if (Math.abs(friendsLost) > friendsGained)
            friendsLost = -1 * friendsGained;
        friends += whichUpgrade.friendControl;
    }

    ID("friendsGained").innerHTML = Math.round(friendsGained);
    ID("friendsLost").innerHTML = Math.round(Math.abs(friendsLost));

    if (friends < 0) {
        friends = 0;
    }
    ID("friends").innerHTML = Math.round(friends);

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


function refreshStat(upgrade) {
    ID(upgrade.name + 'Amount').innerHTML = upgrade.total;
}

function refreshUpgrades() {
    for(i=0;i<upgradeArray.length;i++){
        //console.log(upgradeArray[i]);
        if(mainAmount >= upgradeArray[i].value) 
            ID(upgradeArray[i].upgradeID).style.color = "#bcd5d1";
        else
            ID(upgradeArray[i].upgradeID).style.color = "#5a5c51";
    }

    for(i=0;i<upgradeArray.length;i++){
        //console.log(upgradeArray[i]);
        if(upgradeArray[i].total == 1) ID(upgradeArray[i].upgradeID).innerHTML = upgradeArray[i].upgradeText;
    }


}

function addUpgrade(upgrade) {
    function upgradeManip(upgrade){
        if (mainAmount >= upgrade.value) {
            mainAmount -= upgrade.value;
            upgrade.total++;
            upgrade.value = Math.round( upgrade.value * 1.1);
            return true;
        }
        else return false;
    }
    var added = false;
    added = upgradeManip(upgrade);
    if (added) {
        refreshMainAmount();
        refreshStat(upgrade);
        refreshUpgrades();
        calculateFriends(upgrade);
        highCalc(upgrade);
    }
}

function calculateGain() {
    for(i=0;i<upgradeArray.length;i++)
        mainAmount += upgradeArray[i].netGain * upgradeArray[i].total;
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

function expandMenu(image) {
    var menuBox = ID("misc");
    if (expanded) {
        menuBox.style.marginBottom = "-200px";
        expanded = false;
        image.src = "./img/up.png"
    } else {
        menuBox.style.marginBottom = "0px";
        image.src = "./img/down.png"
        expanded = true;
    }

}


var muted = false;

function mute() {
    muted = !muted;
    changeVolume(ID("volume").value);
}

function changeVolume(volumeLevel) {
    if (muted) {
        music.volume = 0;
        ID("muteBtn").style.backgroundColor = "#5a5c51";
    } else {
        ID("muteBtn").style.backgroundColor = "#bcd5d1";
        music.volume = volumeLevel / 100;
    }

}


function saveGame() {
    function collectData() {
        var output = "";
        for (i = 0; i < arguments.length; i++) {
            output += String(arguments[i]) + "#";
        }
        return output;
    }

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    data = collectData(clicks, mainAmount, friends, friendsGained, friendsLost, 
        beer.total, beer.value, beer.highChance, beer.highDuration, beer.highAmount);


    encryptedSave = encryptionMechanism("encrypt", data);
    setCookie('save', encryptedSave, 1);
    loadGame();
}

function loadGame() {
    function getCookieValue() {
        var cookie = document.cookie;
        for (i = 0; i < cookie.length; i++) {
            if (cookie.charAt(i) == "=")
                return cookie.substr(i + 1);
        }
    }
    var savedGame = getCookieValue();
    var decryptedSave = encryptionMechanism("decrypt", savedGame);
}



function encryptionMechanism(mode, data) {
    console.log(mode + " " + data);
    var output = "";
    var dataStart = 0;
    var key = "";
    var offset = 0;
    if (mode == "encrypt") {
        //Creation of key used later in encryption
        key += Math.floor(Math.random() * 1000);
        output = key + "#";

    } else if (mode == "decrypt") {

        //Getting key from encrypted data
        for (m = 0; m < 4; m++) {
            if (data.charAt(m) == "#") {
                dataStart = m + 1;
                break;
            } else {
                key += data.charAt(m);
            }
        }
    } else {
        return "";
    }
    //Offset calculation
    for (i = 0; i < key.length; i++) {
        offset += parseInt(key.charAt(i));
    }
    if (mode == "decrypt") {
        offset *= -1;
    }
    //Initialization of array with signs
    var charArray = ["#", ".", "-"];
    for (i = 48; i < 123; i++) {
        if (i == 58) i = 65;
        if (i == 91) i = 97;
        charArray.push(String.fromCharCode(i));
    }
    //Main loop going through all letters in 'data' string
    for (j = dataStart; j < data.length; j++) {
        output += changeLetter(data.charAt(j), offset, charArray);
    }
    console.log(output);
    return output;

    function changeLetter(letter, offset, signs) {
        for (i = 0; i < signs.length; i++) {
            if (letter == signs[i]) {
                if (signs.length > i + offset && 0 <= i + offset) {
                    return signs[i + offset];
                } else {
                    var temp = Math.abs(signs.length - Math.abs(i + offset));
                    return signs[temp];
                }
            }
        }
    }
}
