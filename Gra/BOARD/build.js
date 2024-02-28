// Get the value from localStorage
var value = localStorage.getItem('myValue'); // value jest stringiem jak cos
var iloscgraczy = parseInt(value)
//console.log(iloscgraczy) <-- Potrzebujemy tego?
switch (iloscgraczy) {
    case 1:
        document.getElementById("danegracza2").style.display = "none";
        document.getElementById("danegracza3").style.display = "none";
        document.getElementById("danegracza4").style.display = "none";
        break;
    case 2:
        document.getElementById("danegracza3").style.display = "none";
        document.getElementById("danegracza4").style.display = "none";
        break;
    case 3:
        document.getElementById("danegracza4").style.display = "none";
        break;
    case 4:
        break;
}
// to potrzeba wrzucić do naszego js w grze
//ustawianie każdego gracza na startowej pozycji
var koniecgryvar=false;
var currentturn = 1;
var polep1 = 1;
var polep2 = 1;
var polep3 = 1;
var polep4 = 1;
var eventp1;
var eventp2;
var eventp3;
var eventp4;
var pytaniep1;
var pytaniep2;
var pytaniep3;
var pytaniep4;
var klasap1 = 1;
var klasap2 = 1;
var klasap3 = 1;
var klasap4 = 1;
var statystyki=[
    {gracz:1,rzuty_kostka:0,zapytane_pytania:0,poprawne_odpowiedzi:0,pola_przejdniete:0,klasy_powtorzone:0},
    {gracz:2,rzuty_kostka:0,zapytane_pytania:0,poprawne_odpowiedzi:0,pola_przejdniete:0,klasy_powtorzone:0},
    {gracz:3,rzuty_kostka:0,zapytane_pytania:0,poprawne_odpowiedzi:0,pola_przejdniete:0,klasy_powtorzone:0},
    {gracz:4,rzuty_kostka:0,zapytane_pytania:0,poprawne_odpowiedzi:0,pola_przejdniete:0,klasy_powtorzone:0},
];
//losowanie nicków i zawodów
const nick = ["Słowackiewicz", "Roztańczona parabola", "Goblin z 09a", "#1 Kuli fan", "Spadający sufit", "Napęd grawitacyjny", "Tux z Linux", "5318008", "Stołówkarz", "Ławka trzyosobowa", "Technikumpilled ZSŁcel","Samian","Rzułty Warol","Sigma female"];
const nickplec = ["M","K","M","M","M","M","M","K","M","K","M","M","M","K"];
var nickp1 = Math.floor(Math.random() * 14);
var nickp2 = Math.floor(Math.random() * 14);
while (nickp2 == nickp1) {
    var nickp2 = Math.floor(Math.random() * 14);
}
var nickp3 = Math.floor(Math.random() * 14);
while (nickp3 == nickp1 || nickp3 == nickp2) {
    var nickp3 = Math.floor(Math.random() * 14);
}
var nickp4 = Math.floor(Math.random() * 14);
while (nickp4 == nickp1 || nickp4 == nickp2 || nickp4 == nickp3) {
    var nickp4 = Math.floor(Math.random() * 14);
}
//branżówka w sumie nie powinna musieć całych pięciu lat ale to by było niezbalansowane
const zawody = [
    "Technik automatyk",
    "Technik robotyk",
    "Technik elektronik",
    "Technik informatyk",
    "Technik teleinformatyk",
    "Technik programista",
    "Technik fotografii i multimediów",
    "Branżowa Szkoła I stopnia nr 34"
]
kierunekp1 = Math.floor(Math.random() * 8);
kierunekp2 = Math.floor(Math.random() * 8);
kierunekp3 = Math.floor(Math.random() * 8);
kierunekp4 = Math.floor(Math.random() * 8);
//zmienne potrzebne żeby pytania działały
var losowepytanie;
var correctanwser;
let wybranaodp;
var efektpytanie;
const possibleanwsers = ['A', 'B', 'C', 'D']
//zmienne potrzebne żeby eventy działały
var losowyevent;
var efektevent = 0;
//wyświetlanie wszystkiego na ekranie
document.getElementById('polep1').innerHTML = polep1;
document.getElementById('polep2').innerHTML = polep2;
document.getElementById('polep3').innerHTML = polep3;
document.getElementById('polep4').innerHTML = polep4;
document.getElementById('klasap1').innerHTML = klasap1;
document.getElementById('klasap2').innerHTML = klasap2;
document.getElementById('klasap3').innerHTML = klasap3;
document.getElementById('klasap4').innerHTML = klasap4;
document.getElementById('nickp1').innerHTML = nick[nickp1];
document.getElementById('nickp2').innerHTML = nick[nickp2];
document.getElementById('nickp3').innerHTML = nick[nickp3];
document.getElementById('nickp4').innerHTML = nick[nickp4];
document.getElementById('kierunekp1').innerHTML = zawody[kierunekp1];
document.getElementById('kierunekp2').innerHTML = zawody[kierunekp2];
document.getElementById('kierunekp3').innerHTML = zawody[kierunekp3];
document.getElementById('kierunekp4').innerHTML = zawody[kierunekp4];
document.getElementById('currentturn').innerHTML = currentturn;
document.getElementById("odpbuttona").disabled = true;
document.getElementById("odpbuttonb").disabled = true;
document.getElementById("odpbuttonc").disabled = true;
document.getElementById("odpbuttond").disabled = true;
document.getElementById('currentturn').innerHTML = nick[nickp1];
document.getElementById('nazwakarty').innerHTML ="ZSŁ SIM "+nick[nickp1];

//pionek 1

var x = 6.5;
var y = 0.2;
var lim1 = 6.5;
var lim2 = 0;
var sus;

//pionek 2

var x2 = 7.5;
var y2 = 0.2;
var lim12 = 7.5;
var lim22 = 0;
var sus1;

//pionek 3

var x3 = 8.5;
var y3 = 0.2;
var lim13 = 8.5;
var lim23 = 0;
var sus2;

//pionek 4

var x4 = 9.5;
var y4 = 0.2;
var lim14 = 9.5;
var lim24 = 0;
var sus3;

//dane do przechowywania miejsca położenia pionków na planszy 

var j1 = 0;
var j2 = 0;
var j3 = 0;
var j4 = 0;

const planszap1 = [10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11,
                 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 
                 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                 13, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 12];
const planszap2 = [10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11,
                    5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 
                    5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                    5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                    5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                    5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                    5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                    5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                    5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                    5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                    5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                    5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                    13, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 12];
const planszap3 = [10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11,
                    5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 
                    5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                    5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                    5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                    5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                    5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                    5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                    5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                    5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                    5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                    5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                    13, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 12];
const planszap4 = [10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 11,
                   5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 
                   5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                   5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                   5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                   5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                   5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                   5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                   5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                   5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                   5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                   5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                   13, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 12];
var pozycja = planszap1[0];
var pozycja2 = planszap2[0];
var pozycja3 = planszap3[0];
var pozycja4 = planszap4[0];



//funkcja odpowiedzialna za działanie pytań i eventów, jeszcze nie kompletna z uwagi na brak takowych ale powinna być łatwa do zmodyfikowania kiedy będzie to potrzebne. Funkcja jest async żeby kod nie działał dalej kiedy oczekujemy na wybór odpowiedzi
async function pytanieevent(pole) {
    //wyłączamy kostkę, powinna być już wyłączona więc w sumie nie wiem czemu to tu zostawiłem ale może zostać
    document.getElementById("kostka").disabled = true;
    if (pole % 2 == 0) {
        //event
        kartaWyciagnietaEvent();
        //losujemy event
        losowyevent = Math.floor(Math.random() * 40);
        //pobieramy treść i efekt eventu z pliku eventy.js
        document.getElementById("trescEventuNaKarcie").innerHTML = (eventy[losowyevent].tresc);
        return new Promise(resolve => {
            async function handleClick2() {
                document.getElementById('potwierdzEvent').removeEventListener('click', handleClick2);
                efektevent = eventy[losowyevent].efekt;
                statystyki[currentturn-1].pola_przejdniete=statystyki[currentturn-1].pola_przejdniete+(Math.abs(efektevent));
                resolve(efektevent);
            }
            document.getElementById('potwierdzEvent').addEventListener('click', handleClick2);
            return efektevent;
        });
    }
    else {
        //pytanie
        kartaWyciagnietaPytanie();
        //losowanie poprawnej odpowiedzi, w finalniej wersji będzie ona pobrana wraz z pytaniem z odpowiedniego pliku
        losowepytanie = Math.floor(Math.random() * 40);
        correctanwser = zawodowe[losowepytanie].prawidlowaodp;
        statystyki[currentturn-1].zapytane_pytania++;
        //wyświetlenie poprawnej odpowiedz w dokumencie, do usunięcia
        document.getElementById("odp").innerHTML = correctanwser;
        document.getElementById("trescPytaniaNaKarcie").innerHTML = (zawodowe[losowepytanie].tresc + "</br>A: " + zawodowe[losowepytanie].odpa + "</br>B: " + zawodowe[losowepytanie].odpb + "</br>C: " + zawodowe[losowepytanie].odpc + "</br>D: " + zawodowe[losowepytanie].odpd);
        //uruchomienie guzików
        document.getElementById("odpbuttona").disabled = false;
        document.getElementById("odpbuttonb").disabled = false;
        document.getElementById("odpbuttonc").disabled = false;
        document.getElementById("odpbuttond").disabled = false;
        //czekanie na odp zrobione na promise, tbh nie wiem jak to dokładnie działa ale jak coś to pomoge jak potrafię, ważne że działa
        return new Promise(resolve => {
            async function handleClick() {
                //warunkiem spełnienia promise-u jest kliknięcie dowolnego guzika z odpowiedzią, w tym celu stawiamy na każdym z nich event listener który wysłuchuje kliknięcia
                document.getElementById('odpbuttona').removeEventListener('click', handleClick);
                document.getElementById('odpbuttonb').removeEventListener('click', handleClick);
                document.getElementById('odpbuttonc').removeEventListener('click', handleClick);
                document.getElementById('odpbuttond').removeEventListener('click', handleClick);
                //sprawdzamy czy odp jest prawidłowa, wiemy którą odpowiedź wybrał gracz z funkcji odp która jest onclick-iem każdego buttona
                if (wybranaodp == correctanwser) {
                    statystyki[currentturn-1].poprawne_odpowiedzi++;
                    efektpytanie = 5;
                }
                if (wybranaodp != correctanwser) {
                    efektpytanie = -5;
                }
                statystyki[currentturn-1].pola_przejdniete=statystyki[currentturn-1].pola_przejdniete+(Math.abs(efektpytanie));
                resolve(efektpytanie);
            }
            //po spełnieniu promise-u usuwamy eventlistener z guzików
            document.getElementById('odpbuttona').addEventListener('click', handleClick);
            document.getElementById('odpbuttonb').addEventListener('click', handleClick);
            document.getElementById('odpbuttonc').addEventListener('click', handleClick);
            document.getElementById('odpbuttond').addEventListener('click', handleClick);
            //tbh nie wiem czy ten return jest potrzebny skoro jest resolve wcześniej
            return efektpytanie;
        });
    };
}

//---------------------------------------------------------------------------------------------------------

//pionek 1

function move1() {
    sus = setInterval(ruch1, 50);
    lim1 += 6.5;
}
function move2() {
    sus = setInterval(ruch2, 50);
    lim1 -= 6.5;
}
function move3() {
    sus = setInterval(ruch3, 50);
    lim2 += 6.8;
}
function move4() {
    sus = setInterval(ruch4, 50);
    lim2 -= 6.8;
}


function ruch1() {
    var pionek = document.getElementById("pionek");
    if (x >= lim1) {
      clearInterval(sus);
    } else {
      x += 0.1;
      pionek.style.marginLeft = x + 'vh'; 
    }
}
function ruch2() {
    var pionek = document.getElementById("pionek");
    if (x <= lim1) {
      clearInterval(sus);
    } else {
      x -= 0.1;
      pionek.style.marginLeft = x + 'vh'; 
    }
}
function ruch3() {
    var pionek = document.getElementById("pionek");
    if (y >= lim2) {
      clearInterval(sus);
    } else {
      y+=0.1;
      pionek.style.marginTop = y + 'vh'; 
    }
}
function ruch4() {
    var pionek = document.getElementById("pionek");
    if (y <= lim2) {
      clearInterval(sus);
    } else {
      y-=0.1;
      pionek.style.marginTop = y + 'vh'; 
    }
}

//pionek 2

function move12() {
    sus1 = setInterval(ruch12, 10);
    lim12 += 6.5;
}
function move22() {
    sus1 = setInterval(ruch22, 10);
    lim12 -= 6.5;
}
function move32() {
    sus1 = setInterval(ruch32, 10);
    lim22 += 6.8;
}
function move42() {
    sus1 = setInterval(ruch42, 10);
    lim22 -= 6.8;
}


function ruch12() {
    var pionek2 = document.getElementById("pionek2");
    if (x2 >= lim12) {
      clearInterval(sus1);
    } else {
      x2 += 0.1;
      pionek2.style.marginLeft = x2 + 'vh'; 
    }
}
function ruch22() {
    var pionek2 = document.getElementById("pionek2");
    if (x2 <= lim12) {
      clearInterval(sus1);
    } else {
      x2 -= 0.1;
      pionek2.style.marginLeft = x2 + 'vh'; 
    }
}
function ruch32() {
    var pionek2 = document.getElementById("pionek2");
    if (y2 >= lim22) {
      clearInterval(sus1);
    } else {
      y2+=0.1;
      pionek2.style.marginTop = y2 + 'vh'; 
    }
}
function ruch42() {
    var pionek2 = document.getElementById("pionek2");
    if (y2 <= lim22) {
      clearInterval(sus1);
    } else {
      y2-=0.1;
      pionek2.style.marginTop = y2 + 'vh'; 
    }
}

//pionek 3

function move13() {
    sus2 = setInterval(ruch13, 10);
    lim13 += 6.5;
}
function move23() {
    sus2 = setInterval(ruch23, 10);
    lim13 -= 6.5;
}
function move33() {
    sus2 = setInterval(ruch33, 10);
    lim23 += 6.8;
}
function move43() {
    sus2 = setInterval(ruch43, 10);
    lim23 -= 6.8;
}


function ruch13() {
    var pionek3 = document.getElementById("pionek3");
    if (x3 >= lim13) {
      clearInterval(sus2);
    } else {
      x3 += 0.1;
      pionek3.style.marginLeft = x3 + 'vh'; 
    }
}
function ruch23() {
    var pionek3 = document.getElementById("pionek3");
    if (x3 <= lim13) {
      clearInterval(sus2);
    } else {
      x3 -= 0.1;
      pionek3.style.marginLeft = x3 + 'vh'; 
    }
}
function ruch33() {
    var pionek3 = document.getElementById("pionek3");
    if (y3 >= lim23) {
      clearInterval(sus2);
    } else {
      y3+=0.1;
      pionek3.style.marginTop = y3 + 'vh'; 
    }
}
function ruch43() {
    var pionek3 = document.getElementById("pionek3");
    if (y3 <= lim23) {
      clearInterval(sus2);
    } else {
      y3-=0.1;
      pionek3.style.marginTop = y3 + 'vh'; 
    }
}

//pionek 4

function move14() {
    sus3 = setInterval(ruch14, 10);
    lim14 += 6.5;
}
function move24() {
    sus3 = setInterval(ruch24, 10);
    lim14 -= 6.5;
}
function move34() {
    sus3 = setInterval(ruch34, 10);
    lim24 += 6.8;
}
function move44() {
    sus3 = setInterval(ruch44, 10);
    lim24 -= 6.8;
}


function ruch14() {
    var pionek4 = document.getElementById("pionek4");
    if (x4 >= lim14) {
      clearInterval(sus3);
    } else {
      x4 += 0.1;
      pionek4.style.marginLeft = x4 + 'vh'; 
    }
}
function ruch24() {
    var pionek4 = document.getElementById("pionek4");
    if (x4 <= lim1) {
      clearInterval(sus3);
    } else {
      x4 -= 0.1;
      pionek4.style.marginLeft = x4 + 'vh'; 
    }
}
function ruch34() {
    var pionek4 = document.getElementById("pionek4");
    if (y4 >= lim2) {
      clearInterval(sus3);
    } else {
      y4+=0.1;
      pionek4.style.marginTop = y4 + 'vh'; 
    }
}
function ruch44() {
    var pionek4 = document.getElementById("pionek");
    if (y4 <= lim2) {
      clearInterval(sus3);
    } else {
      y4-=0.1;
      pionek4.style.marginTop = y4 + 'vh'; 
    }
}

//---------------------------------------------------------------------------------------------------------------------------------------

//onclick każdego z guzików, guziki podstawiają pdo abcd "A","B","C" lub "D"
async function odp(abcd) {
    //po wciśnięciu dowolnego guzika wyłączamy wszystkie inne i zapisujemy odpowiedź w zmiennej
    document.getElementById("odpbuttona").disabled = true;
    document.getElementById("odpbuttonb").disabled = true;
    document.getElementById("odpbuttonc").disabled = true;
    document.getElementById("odpbuttond").disabled = true;
    wybranaodp = abcd;
}

//onclick kostki
async function rzut() {
    statystyki[currentturn-1].rzuty_kostka++;
    //wyłącza kostke żeby funkcja nie została wywołana po raz drugi kiedy jeszcze trwa
    document.getElementById("kostka").disabled = true;
    //losuje wynik rzutu
    var wynikrzutu = (Math.floor(Math.random() * 6) + 1);
    statystyki[currentturn-1].pola_przejdniete=statystyki[currentturn-1].pola_przejdniete+wynikrzutu;
    //swtch który sprawdza którego gracza kolej, są identyczne więc zostawię komentarze tylko do gracza 1
    switch (currentturn) {
        case 1:
            //dodajemy wynik rzutu do obecnej pozycji gracza
            polep1 = polep1 + wynikrzutu;

            for (let i = 0; i < wynikrzutu; i++) {
                switch (pozycja) {
                    case 2:
                        pozycja = planszap1[j1 + 1];
                        j1++;
                        //console.log("pozycja " + i + ": " + pozycja);
                        move1();
                        break;
                    case 3:
                        pozycja = planszap1[j1 + 13];
                        j1 += 13;
                        //console.log("pozycja " + i + ": " + pozycja);
                        move3()
                        break;
                    case 4:
                        pozycja = planszap1[j1 - 1];
                        j1--;
                        //console.log("pozycja " + i + ": " + pozycja);
                        move2();
                        break;
                    case 5:
                        pozycja = planszap1[j1 - 13];
                        //console.log("pozycja " + i + ": " + pozycja);
                        j1 -= 13;
                        move4();
                        break;
                    case 10:
                        pozycja = planszap1[j1 + 1];
                        j1++;
                        //console.log("pozycja " + i + ": " + pozycja);
                        move1();
                        break;
                    case 11:
                        pozycja = planszap1[j1 + 13];
                        j1 += 13;
                        //console.log("pozycja " + i + ": " + pozycja);
                        move3()
                        break;
                    case 12:
                        pozycja = planszap1[j1 - 1];
                        j1--;
                        //console.log("pozycja " + i + ": " + pozycja);
                        move2();
                        break;
                    case 13:
                        pozycja = planszap1[j1 - 13];
                        //console.log("pozycja " + i + ": " + pozycja);
                        j1 -= 13;
                        move4();
                        break;
                    default:
                        //console.log("error");
                        break;
                }
            }

            //jeżeli gracz przekroczył 52 pola zwiększamy klasę i ustawiamy pole z powrotem na 1
            if (polep1 > 52) {
                polep1 = polep1 - 52;
                klasap1++;
                //jeżeli gracz obszedł planszę 5 razy gra się kończy
                if (klasap1 == 6) {
                    klasap1=5;
                    koniecgry(1);
                }
                //wypisujemy klasę w dokumencie
                document.getElementById('klasap1').innerHTML = klasap1;
            }
            //wypisujemy pole w dokumencie, to nie działa przy eventach, pewnie przez alert którego i tak tam nie będzie w wersji finałowej więc nie próbowałem tego naprawiać
            document.getElementById('polep1').innerHTML = polep1;
            //wywołujemy funkcję do pytań i eventów
            eventp1 = await pytanieevent(polep1);

            if(eventp1 < 0) {
                for (let i = 0; i > eventp1; i--) {
                    switch (pozycja) {
                        case 2:
                            pozycja = planszap1[j1 - 1];
                            j1--;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move2();
                            break;
                        case 3:
                            pozycja = planszap1[j1 - 13];
                            j1 -= 13;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move4()
                            break;
                        case 4:
                            pozycja = planszap1[j1 + 1];
                            j1++;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move1();
                            break;
                        case 5:
                            pozycja = planszap1[j1 + 13];
                            //console.log("pozycja " + i + ": " + pozycja);
                            j1 += 13;
                            move3();
                            break;
                        case 10:
                            
                            break;
                        case 11:
                            pozycja = planszap1[j1 - 1];
                            j1--;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move2();
                            break;
                        case 12:
                            pozycja = planszap1[j1 - 13];
                            j1 -= 13;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move4()
                            break;
                        case 13:
                            pozycja = planszap1[j1 + 1];
                            j1++;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move1();
                            break;
                        
                        default:
                            //console.log("error");
                            break;
                    }
                }
            }
            else {
                for (let i = 0; i < eventp1; i++) {
                    switch (pozycja) {
                        case 2:
                            pozycja = planszap1[j1 + 1];
                            j1++;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move1();
                            break;
                        case 3:
                            pozycja = planszap1[j1 + 13];
                            j1 += 13;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move3()
                            break;
                        case 4:
                            pozycja = planszap1[j1 - 1];
                            j1--;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move2();
                            break;
                        case 5:
                            pozycja = planszap1[j1 - 13];
                            //console.log("pozycja " + i + ": " + pozycja);
                            j1 -= 13;
                            move4();
                            break;
                        case 10:
                            pozycja = planszap1[j1 + 1];
                            j1++;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move1();
                            break;
                        case 11:
                            pozycja = planszap1[j1 + 13];
                            j1 += 13;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move3()
                            break;
                        case 12:
                            pozycja = planszap1[j1 - 1];
                            j1--;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move2();
                            break;
                        case 13:
                            pozycja = planszap1[j1 - 13];
                            //console.log("pozycja " + i + ": " + pozycja);
                            j1 -= 13;
                            move4();
                            break;
                        default:
                            //console.log("error");
                            break;
                    }
                }
            }

            polep1 = eventp1 + polep1;
            //zmieniamy pole i klase zgodnie z wynikiem
            if (polep1 > 52) {
                polep1 = polep1 - 52;
                klasap1++;
                if (klasap1 == 6) {
                    klasap1=5;
                    koniecgry(1);
                }
                document.getElementById('klasap1').innerHTML = klasap1;
            }
            //to na wypadek gdyby gracz cofnął się przed pierwsze pole, gracz cofa się o klasę albo zatrzymuje na pole 1 klasa 1
            else if (polep1 < 1) {
                if (klasap1 == 1) {
                    polep1 = 1;
                } else {
                    polep1 = polep1 + 52;
                    klasap1--;
                    statystyki[currentturn-1].klasy_powtorzone++;
                    document.getElementById('klasap1').innerHTML = klasap1;
                }
            }
            //znowu wypisujemy pole
            document.getElementById('polep1').innerHTML = polep1;
            break;
        case 2:
            polep2 = polep2 + wynikrzutu;

            for (let i = 0; i < wynikrzutu; i++) {
                switch (pozycja2) {
                    case 2:
                        pozycja2 = planszap2[j2 + 1];
                        j2++;
                        //console.log("pozycja " + i + ": " + pozycja);
                        move12();
                        break;
                    case 3:
                        pozycja2 = planszap2[j2 + 13];
                        j2 += 13;
                        //console.log("pozycja " + i + ": " + pozycja);
                        move32()
                        break;
                    case 4:
                        pozycja2 = planszap2[j2 - 1];
                        j2--;
                        //console.log("pozycja " + i + ": " + pozycja);
                        move22();
                        break;
                    case 5:
                        pozycja2 = planszap2[j2 - 13];
                        //console.log("pozycja " + i + ": " + pozycja);
                        j2 -= 13;
                        move42();
                        break;
                    case 10:
                        pozycja2 = planszap2[j2 + 1];
                        j2++;
                        //console.log("pozycja " + i + ": " + pozycja);
                        move12();
                        break;
                    case 11:
                        pozycja2 = planszap2[j2 + 13];
                        j2 += 13;
                        //console.log("pozycja " + i + ": " + pozycja);
                        move32()
                        break;
                    case 12:
                        pozycja2 = planszap2[j2 - 1];
                        j2--;
                        //console.log("pozycja " + i + ": " + pozycja);
                        move22();
                        break;
                    case 13:
                        pozycja2 = planszap2[j2 - 13];
                        //console.log("pozycja " + i + ": " + pozycja);
                        j2 -= 13;
                        move42();
                        break;
                    default:
                        //console.log("error");
                        break;
                }
            }

            if (polep2 > 52) {
                polep2 = polep2 - 52;
                klasap2++;
                if (klasap2 == 6) {
                    klasap2=5;
                    koniecgry(2);
                }
                document.getElementById('klasap2').innerHTML = klasap2;
            }
            document.getElementById('polep2').innerHTML = polep2;
            
            eventp2 = await pytanieevent(polep2);

            if(eventp2 < 0) {
                for (let i = 0; i > eventp2; i--) {
                    switch (pozycja2) {
                        case 2:
                            pozycj2 = planszap2[j2 - 1];
                            j2--;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move22();
                            break;
                        case 3:
                            pozycj2 = planszap2[j2 - 13];
                            j2 -= 13;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move42()
                            break;
                        case 4:
                            pozycj2 = planszap2[j2 + 1];
                            j2++;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move12();
                            break;
                        case 5:
                            pozycja2 = planszap2[j2 + 13];
                            //console.log("pozycja " + i + ": " + pozycja);
                            j2 += 13;
                            move32();
                            break;
                        case 10:
                            
                            break;
                        case 11:
                            pozycja2 = planszap2[j2 - 1];
                            j2--;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move22();
                            break;
                        case 12:
                            pozycja2 = planszap2[j2 - 13];
                            j2 -= 13;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move42()
                            break;
                        case 13:
                            pozycj2 = planszap2[j2 + 1];
                            j2++;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move12();
                            break;
                        
                        default:
                            //console.log("error");
                            break;
                    }
                }
            }
            else {
                for (let i = 0; i < eventp2; i++) {
                    switch (pozycja2) {
                        case 2:
                            pozycja2 = planszap2[j2 + 1];
                            j2++;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move12();
                            break;
                        case 3:
                            pozycja2 = planszap2[j2 + 13];
                            j2 += 13;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move32()
                            break;
                        case 4:
                            pozycja2 = planszap2[j2 - 1];
                            j2--;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move22();
                            break;
                        case 5:
                            pozycja2 = planszap2[j2 - 13];
                            //console.log("pozycja " + i + ": " + pozycja);
                            j2 -= 13;
                            move42();
                            break;
                        case 10:
                            pozycja2 = planszap2[j2 + 1];
                            j2++;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move12();
                            break;
                        case 11:
                            pozycja2 = planszap2[j2 + 13];
                            j2 += 13;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move32()
                            break;
                        case 12:
                            pozycja2 = planszap2[j2 - 1];
                            j2--;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move22();
                            break;
                        case 13:
                            pozycja2 = planszap2[j2 - 13];
                            //console.log("pozycja " + i + ": " + pozycja);
                            j2 -= 13;
                            move42();
                            break;
                        default:
                            //console.log("error");
                            break;
                    }
                }
            }

            polep2 = eventp2 + polep2;

            if (polep2 > 52) {
                polep2 = polep2 - 52;
                klasap2++;
                if (klasap2 == 6) {
                    klasap2=5;
                    koniecgry(2);
                }
                document.getElementById('klasap2').innerHTML = klasap2;
            } else if (polep2 < 1) {
                if (klasap2 == 1) {
                    polep2 = 1;
                } else {
                    polep2 = polep2 + 52;
                    klasap2--;
                    statystyki[currentturn-1].klasy_powtorzone++;
                    document.getElementById('klasap2').innerHTML = klasap2;
                }
            }
            document.getElementById('polep2').innerHTML = polep2;
            break;
        case 3:
            polep3 = polep3 + wynikrzutu;

            for (let i = 0; i < wynikrzutu; i++) {
                switch (pozycja3) {
                    case 2:
                        pozycja3 = planszap3[j3 + 1];
                        j3++;
                        //console.log("pozycja " + i + ": " + pozycja);
                        move13();
                        break;
                    case 3:
                        pozycja3 = planszap3[j3 + 13];
                        j3 += 13;
                        //console.log("pozycja " + i + ": " + pozycja);
                        move33()
                        break;
                    case 4:
                        pozycja3 = planszap3[j3 - 1];
                        j3--;
                        //console.log("pozycja " + i + ": " + pozycja);
                        move23();
                        break;
                    case 5:
                        pozycja3 = planszap3[j3 - 13];
                        //console.log("pozycja " + i + ": " + pozycja);
                        j3 -= 13;
                        move43();
                        break;
                    case 10:
                        pozycja3 = planszap3[j3 + 1];
                        j3++;
                        //console.log("pozycja " + i + ": " + pozycja);
                        move13();
                        break;
                    case 11:
                        pozycja3 = planszap3[j3 + 13];
                        j3 += 13;
                        //console.log("pozycja " + i + ": " + pozycja);
                        move33()
                        break;
                    case 12:
                        pozycja3 = planszap3[j3 - 1];
                        j3--;
                        //console.log("pozycja " + i + ": " + pozycja);
                        move23();
                        break;
                    case 13:
                        pozycja3 = planszap3[j3 - 13];
                        //console.log("pozycja " + i + ": " + pozycja);
                        j3 -= 13;
                        move43();
                        break;
                    default:
                        //console.log("error");
                        break;
                }
            }

            if (polep3 > 52) {
                polep3 = polep3 - 52;
                klasap3++;
                if (klasap3 == 6) {
                    klasap3=5;
                    koniecgry(3);
                }
                document.getElementById('klasap3').innerHTML = klasap3;
            }
            document.getElementById('polep3').innerHTML = polep3;

            eventp3 = await pytanieevent(polep3);

            if(eventp3 < 0) {
                for (let i = 0; i > eventp3; i--) {
                    switch (pozycja3) {
                        case 2:
                            pozycja3 = planszap3[j3 - 1];
                            j3--;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move23();
                            break;
                        case 3:
                            pozycja3 = planszap3[j3 - 13];
                            j3 -= 13;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move43()
                            break;
                        case 4:
                            pozycja3 = planszap3[j3 + 1];
                            j3++;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move13();
                            break;
                        case 5:
                            pozycja3 = planszap3[j3 + 13];
                            //console.log("pozycja " + i + ": " + pozycja);
                            j3 += 13;
                            move33();
                            break;
                        case 10:
                            
                            break;
                        case 11:
                            pozycja3 = planszap3[j3 - 1];
                            j3--;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move23();
                            break;
                        case 12:
                            pozycja3 = planszap3[j3 - 13];
                            j3 -= 13;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move43()
                            break;
                        case 13:
                            pozycja3 = planszap3[j3 + 1];
                            j3++;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move13();
                            break;
                        
                        default:
                            //console.log("error");
                            break;
                    }
                    
                }
            }
            else {
                for (let i = 0; i < eventp3; i++) {
                    switch (pozycja3) {
                        case 2:
                            pozycja3 = planszap3[j3 + 1];
                            j3++;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move13();
                            break;
                        case 3:
                            pozycja3 = planszap3[j3 + 13];
                            j3 += 13;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move33()
                            break;
                        case 4:
                            pozycja3 = planszap3[j3 - 1];
                            j3--;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move23();
                            break;
                        case 5:
                            pozycja3 = planszap3[j3 - 13];
                            //console.log("pozycja " + i + ": " + pozycja);
                            j3 -= 13;
                            move43();
                            break;
                        case 10:
                            pozycja3 = planszap3[j3 + 1];
                            j3++;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move13();
                            break;
                        case 11:
                            pozycja3 = planszap3[j3 + 13];
                            j3 += 13;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move33()
                            break;
                        case 12:
                            pozycja3 = planszap3[j3 - 1];
                            j3--;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move23();
                            break;
                        case 13:
                            pozycja3 = planszap3[j3 - 13];
                            //console.log("pozycja " + i + ": " + pozycja);
                            j3 -= 13;
                            move43();
                            break;
                        default:
                            //console.log("error");
                            break;
                    }
                }
            }

            polep3 = eventp3 + polep3;


            if (polep3 > 52) {
                polep3 = polep3 - 52;
                klasap3++;
                if (klasap3 == 6) {
                    klasap3=5;
                    koniecgry(3);
                }
                document.getElementById('klasap3').innerHTML = klasap3;
            } else if (polep3 < 1) {
                if (klasap3 == 1) {
                    polep3 = 1;
                } else {
                    polep3 = polep3 + 52;
                    klasap3--;
                    statystyki[currentturn-1].klasy_powtorzone++;
                    document.getElementById('klasap3').innerHTML = klasap3;
                }
            }
            document.getElementById('polep3').innerHTML = polep3;
            break;
        case 4:
            polep4 = polep4 + wynikrzutu;

            for (let i = 0; i < wynikrzutu; i++) {
                switch (pozycja4) {
                    case 2:
                        pozycja4 = planszap4[j4 + 1];
                        j4++;
                        //console.log("pozycja " + i + ": " + pozycja);
                        move14();
                        break;
                    case 3:
                        pozycja4 = planszap4[j4 + 13];
                        j4 += 13;
                        //console.log("pozycja " + i + ": " + pozycja);
                        move34()
                        break;
                    case 4:
                        pozycja4 = planszap4[j4 - 1];
                        j4--;
                        //console.log("pozycja " + i + ": " + pozycja);
                        move24();
                        break;
                    case 5:
                        pozycja4 = planszap4[j4 - 13];
                        //console.log("pozycja " + i + ": " + pozycja);
                        j4 -= 13;
                        move44();
                        break;
                    case 10:
                        pozycja4 = planszap4[j4 + 1];
                        j4++;
                        //console.log("pozycja " + i + ": " + pozycja);
                        move14();
                        break;
                    case 11:
                        pozycja4 = planszap4[j4 + 13];
                        j4 += 13;
                        //console.log("pozycja " + i + ": " + pozycja);
                        move34()
                        break;
                    case 12:
                        pozycja4 = planszap4[j4 - 1];
                        j4--;
                        //console.log("pozycja " + i + ": " + pozycja);
                        move24();
                        break;
                    case 13:
                        pozycja4 = planszap4[j4 - 13];
                        //console.log("pozycja " + i + ": " + pozycja);
                        j4 -= 13;
                        move44();
                        break;
                    default:
                        //console.log("error");
                        break;
                }
            }

            if (polep4 > 52) {
                polep4 = polep4 - 52;
                klasap4++;
                if (klasap4 == 6) {
                    klasap4=5;
                    koniecgry(4);
                }
                document.getElementById('klasap4').innerHTML = klasap4;
            }
            document.getElementById('polep4').innerHTML = polep4;

            eventp4 = await pytanieevent(polep4);

            if(eventp4 < 0) {
                for (let i = 0; i > eventp4; i--) {
                    switch (pozycja4) {
                        case 2:
                            pozycja4 = planszap4[j4 - 1];
                            j4--;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move24();
                            break;
                        case 3:
                            pozycja4 = planszap4[j4 - 13];
                            j4 -= 13;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move44()
                            break;
                        case 4:
                            pozycja4 = planszap4[j4 + 1];
                            j4++;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move14();
                            break;
                        case 5:
                            pozycja4 = planszap4[j4 + 13];
                            //console.log("pozycja " + i + ": " + pozycja);
                            j4 += 13;
                            move34();
                            break;
                        case 10:
                            
                            break;
                        case 11:
                            pozycja4 = planszap4[j4 - 1];
                            j4--;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move24();
                            break;
                        case 12:
                            pozycja4 = planszap4[j4 - 13];
                            j4 -= 13;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move44()
                            break;
                        case 13:
                            pozycja4 = planszap4[j4 + 1];
                            j4++;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move14();
                            break;
                        
                        default:
                            //console.log("error");
                            break;
                    }
                }
            }
            else {
                for (let i = 0; i < eventp4; i++) {
                    switch (pozycja4) {
                        case 2:
                            pozycja4 = planszap4[j4 + 1];
                            j4++;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move14();
                            break;
                        case 3:
                            pozycja4 = planszap4[j4 + 13];
                            j4 += 13;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move34()
                            break;
                        case 4:
                            pozycja4 = planszap4[j4 - 1];
                            j4--;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move24();
                            break;
                        case 5:
                            pozycja4 = planszap4[j4 - 13];
                            //console.log("pozycja " + i + ": " + pozycja);
                            j4 -= 13;
                            move44();
                            break;
                        case 10:
                            pozycja4 = planszap4[j4 + 1];
                            j4++;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move14();
                            break;
                        case 11:
                            pozycja4 = planszap4[j4 + 13];
                            j4 += 13;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move34()
                            break;
                        case 12:
                            pozycja4 = planszap4[j4 - 1];
                            j4--;
                            //console.log("pozycja " + i + ": " + pozycja);
                            move24();
                            break;
                        case 13:
                            pozycja4 = planszap4[j4 - 13];
                            //console.log("pozycja " + i + ": " + pozycja);
                            j4 -= 13;
                            move44();
                            break;
                        default:
                            //console.log("error");
                            break;
                    }
                }
            }

            polep4 = eventp4 + polep4;


            if (polep4 > 52) {
                polep4 = polep4 - 52;
                klasap4++;
                if (klasap4 == 6) {
                    klasap4=5;
                    koniecgry(4);
                }
                document.getElementById('klasap4').innerHTML = klasap4;
            } else if (polep4 < 1) {
                if (klasap4 == 1) {
                    polep4 = 1;
                } else {
                    polep4 = polep4 + 52;
                    klasap4--;
                    statystyki[currentturn-1].klasy_powtorzone++;
                    document.getElementById('klasap4').innerHTML = klasap4;
                }
            }
            document.getElementById('polep4').innerHTML = polep4;
            break;
    };
    //zmiana tury
    if (currentturn >= iloscgraczy) {
        currentturn = 1;
    } else { currentturn++; };
    //switch żeby tura pokazywała się jako nick gracza a nie cyfra
    switch (currentturn) {
        case 1:
            document.getElementById('currentturn').innerHTML = nick[nickp1];
            document.getElementById('nazwakarty').innerHTML ="ZSŁ SIM "+nick[nickp1];
            break;
        case 2:
            document.getElementById('currentturn').innerHTML = nick[nickp2];
            document.getElementById('nazwakarty').innerHTML ="ZSŁ SIM "+nick[nickp2];
            break;
        case 3:
            document.getElementById('currentturn').innerHTML = nick[nickp3];
            document.getElementById('nazwakarty').innerHTML ="ZSŁ SIM "+nick[nickp3];
            break;
        case 4:
            document.getElementById('currentturn').innerHTML = nick[nickp4];
            document.getElementById('nazwakarty').innerHTML ="ZSŁ SIM "+nick[nickp4];
            break;
    };
    //włączenie z powrotem kostki przeniosłem do scriptkart.js
}

//funkcja która kończy grę (jeszcze nie kończy ale do tego służy)
function koniecgry(winner) {
    koniecgryvar=true;
        odlozKarteEvent;
        odlozKartePytanie;
        document.getElementById("kostka").disabled=true;
        var ukonczyłes = "Ukończyłeś";
        var rzuciles = "Rzuciłeś";
        var przeszedles = "Przeszedłeś";
        var odpowiedziales = "Odpowiedziałeś";
        var powtarzales = "Powtarzałeś";
        switch(statystyki[winner-1].pola_przejdniete%10){
            case 0:
                var polaword="pól";
                break;
            case 1:
                var polaword="pól";
                break;
            case 2:
                var polaword="pola";
                break;
            case 3:
                var polaword="pola";
                break;
            case 4:
                var polaword="pola";
                break;
            default:
                var polaword="pól";
                break;
        }
        switch(winner){
            case 1:
                if(nickplec[nickp1]="K"){
                    ukonczyłes="Ukończyłaś";
                    rzuciles="Rzuciłaś";
                    przeszedles="Przeszłaś";
                    odpowiedziales="Odpowiedziałaś";
                    powtarzales="Powtarzałaś";
                }
                document.getElementById("trescEventuNaKarcie").innerHTML =
                ('<p>Gratulacje '+nick[nickp1]+'! '+ukonczyłes+' symulator Zespołu Szkół Łączności.</p><p>Aby to zrobić:</p><p>'+rzuciles+' kostką '+statystyki[winner-1].rzuty_kostka+' razy.</p><p>'+przeszedles+' przez '+statystyki[winner-1].pola_przejdniete+' '+polaword+'.</p><p>'+odpowiedziales+' poprawnie na '+statystyki[winner-1].poprawne_odpowiedzi+' z '+statystyki[winner-1].zapytane_pytania+' zadanych pytań.</p><p> '+powtarzales+' klasę '+statystyki[winner-1].klasy_powtorzone+' razy.</p>');
                break;
            case 2:
                if(nickplec[nickp2]="K"){
                    ukonczyłes="Ukończyłaś";
                    rzuciles="Rzuciłaś";
                    przeszedles="Przeszłaś";
                    odpowiedziales="Odpowiedziałaś";
                    powtarzales="Powtarzałaś";
                }
                document.getElementById("trescEventuNaKarcie").innerHTML =
                ('<p>Gratulacje '+nick[nickp2]+'! '+ukonczyłes+' symulator Zespołu Szkół Łączności.</p><p>Aby to zrobić:</p><p>'+rzuciles+' kostką '+statystyki[winner-1].rzuty_kostka+' razy.</p><p>'+przeszedles+' przez '+statystyki[winner-1].pola_przejdniete+' '+polaword+'.</p><p>'+odpowiedziales+' poprawnie na '+statystyki[winner-1].poprawne_odpowiedzi+' z '+statystyki[winner-1].zapytane_pytania+' zadanych pytań.</p><p> '+powtarzales+' klasę '+statystyki[winner-1].klasy_powtorzone+' razy.</p>');
                break;
            case 3:
                if(nickplec[nickp3]="K"){
                    ukonczyłes="Ukończyłaś";
                    rzuciles="Rzuciłaś";
                    przeszedles="Przeszłaś";
                    odpowiedziales="Odpowiedziałaś";
                    powtarzales="Powtarzałaś";
                }
                document.getElementById("trescEventuNaKarcie").innerHTML =
                ('<p>Gratulacje '+nick[nickp3]+'! '+ukonczyłes+' symulator Zespołu Szkół Łączności.</p><p>Aby to zrobić:</p><p>'+rzuciles+' kostką '+statystyki[winner-1].rzuty_kostka+' razy.</p><p>'+przeszedles+' przez '+statystyki[winner-1].pola_przejdniete+' '+polaword+'.</p><p>'+odpowiedziales+' poprawnie na '+statystyki[winner-1].poprawne_odpowiedzi+' z '+statystyki[winner-1].zapytane_pytania+' zadanych pytań.</p><p> '+powtarzales+' klasę '+statystyki[winner-1].klasy_powtorzone+' razy.</p>');
                break;
            case 4:
                if(nickplec[nickp4]="K"){
                    ukonczyłes="Ukończyłaś";
                    rzuciles="Rzuciłaś";
                    przeszedles="Przeszłaś";
                    odpowiedziales="Odpowiedziałaś";
                    powtarzales="Powtarzałaś";
                }
                document.getElementById("trescEventuNaKarcie").innerHTML =
                ('<p>Gratulacje '+nick[nickp4]+'! '+ukonczyłes+' symulator Zespołu Szkół Łączności.</p><p>Aby to zrobić:</p><p>'+rzuciles+' kostką '+statystyki[winner-1].rzuty_kostka+' razy.</p><p>'+przeszedles+' przez '+statystyki[winner-1].pola_przejdniete+' '+polaword+'.</p><p>'+odpowiedziales+' poprawnie na '+statystyki[winner-1].poprawne_odpowiedzi+' z '+statystyki[winner-1].zapytane_pytania+' zadanych pytań.</p><p> '+powtarzales+' klasę '+statystyki[winner-1].klasy_powtorzone+' razy.</p>');
                break;
        }
        document.getElementById("eventbutton").innerHTML='<button id="potwierdzEvent" type="button" class="odpbutton" onclick="resetgame()">OK</button>';
        kartaWyciagnietaEvent();
}
function back() {
    if(animacjaKartyZaczetaEvent==false&&animacjaKartyZaczetaPytanie==false){
    document.getElementById("kostka").disabled=true;
    document.getElementById("trescPytaniaNaKarcie").innerHTML = ('<p>Czy na pewno chcesz zakończyć grę?</p><button class="odpbutton" onclick="resetgame()" type="button">Tak</button> <button onclick="continuegame()" class="odpbutton" type="button">Nie</button>');
    document.getElementById("pytanie").style.display="none";
    kartaWyciagnietaPytanie();
    }
}
function resetgame(){
    window.history.back();
}
function continuegame(){
    odlozKartePytanie();
}
