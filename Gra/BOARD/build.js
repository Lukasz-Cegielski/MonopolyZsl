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
const nick = ["Słowackiewicz", "Roztańczona parabola", "Goblin z 09a", "#1 Kuli fan", "Spadający sufit", "Napęd grawitacyjny", "Tux z Linux", "5318008"];
var nickp1 = Math.floor(Math.random() * 8);
var nickp2 = Math.floor(Math.random() * 8);
while (nickp2 == nickp1) {
    var nickp2 = Math.floor(Math.random() * 8);
}
var nickp3 = Math.floor(Math.random() * 8);
while (nickp3 == nickp1 || nickp3 == nickp2) {
    var nickp3 = Math.floor(Math.random() * 8);
}
var nickp4 = Math.floor(Math.random() * 8);
while (nickp4 == nickp1 || nickp4 == nickp2 || nickp4 == nickp3) {
    var nickp4 = Math.floor(Math.random() * 8);
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
                resolve(pole + efektevent);
            }
            document.getElementById('potwierdzEvent').addEventListener('click', handleClick2);
            return (pole + efektevent);
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
                resolve(pole + efektpytanie);
            }
            //po spełnieniu promise-u usuwamy eventlistener z guzików
            document.getElementById('odpbuttona').addEventListener('click', handleClick);
            document.getElementById('odpbuttonb').addEventListener('click', handleClick);
            document.getElementById('odpbuttonc').addEventListener('click', handleClick);
            document.getElementById('odpbuttond').addEventListener('click', handleClick);
            //tbh nie wiem czy ten return jest potrzebny skoro jest resolve wcześniej
            return (pole + efektpytanie);
        });
    };
}

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
            polep1 = await pytanieevent(polep1);
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
            polep2 = await pytanieevent(polep2);
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
            polep3 = await pytanieevent(polep3);
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
            polep4 = await pytanieevent(polep4);
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
    if (currentturn == iloscgraczy) {
        currentturn = 1;
    } else { currentturn++; };
    //switch żeby tura pokazywała się jako nick gracza a nie cyfra
    switch (currentturn) {
        case 1:
            document.getElementById('currentturn').innerHTML = nick[nickp1];
            break;
        case 2:
            document.getElementById('currentturn').innerHTML = nick[nickp2];
            break;
        case 3:
            document.getElementById('currentturn').innerHTML = nick[nickp3];
            break;
        case 4:
            document.getElementById('currentturn').innerHTML = nick[nickp4];
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
                document.getElementById("trescEventuNaKarcie").innerHTML =
                ('<p>Gratulacje '+nick[nickp1]+'! Ukończyłeś symulator Zespołu Szkół Łączności.</p><p>Aby to zrobić:</p><p>Rzuciłeś kostką '+statystyki[winner-1].rzuty_kostka+' razy.</p><p>Przeszedłeś przez '+statystyki[winner-1].pola_przejdniete+' '+polaword+'.</p><p>Odpowiedziałeś poprawnie na '+statystyki[winner-1].poprawne_odpowiedzi+' z '+statystyki[winner-1].zapytane_pytania+' zadanych pytań.</p><p> Powtarzałeś klasę '+statystyki[winner-1].klasy_powtorzone+' razy.</p>');
                break;
            case 2:
                document.getElementById("trescEventuNaKarcie").innerHTML =
                ('<p>Gratulacje '+nick[nickp2]+'! Ukończyłeś symulator Zespołu Szkół Łączności.</p><p>Aby to zrobić:</p><p>Rzuciłeś kostką '+statystyki[winner-1].rzuty_kostka+' razy.</p><p>Przeszedłeś przez '+statystyki[winner-1].pola_przejdniete+' '+polaword+'.</p><p>Odpowiedziałeś poprawnie na '+statystyki[winner-1].poprawne_odpowiedzi+' z '+statystyki[winner-1].zapytane_pytania+' zadanych pytań.</p><p> Powtarzałeś klasę '+statystyki[winner-1].klasy_powtorzone+' razy.</p>');
                break;
            case 3:
                document.getElementById("trescEventuNaKarcie").innerHTML =
                ('<p>Gratulacje '+nick[nickp3]+'! Ukończyłeś symulator Zespołu Szkół Łączności.</p><p>Aby to zrobić:</p><p>Rzuciłeś kostką '+statystyki[winner-1].rzuty_kostka+' razy.</p><p>Przeszedłeś przez '+statystyki[winner-1].pola_przejdniete+' '+polaword+'.</p><p>Odpowiedziałeś poprawnie na '+statystyki[winner-1].poprawne_odpowiedzi+' z '+statystyki[winner-1].zapytane_pytania+' zadanych pytań.</p><p> Powtarzałeś klasę '+statystyki[winner-1].klasy_powtorzone+' razy.</p>');
                break;
            case 4:
                document.getElementById("trescEventuNaKarcie").innerHTML =
                ('<p>Gratulacje '+nick[nickp4]+'! Ukończyłeś symulator Zespołu Szkół Łączności.</p><p>Aby to zrobić:</p><p>Rzuciłeś kostką '+statystyki[winner-1].rzuty_kostka+' razy.</p><p>Przeszedłeś przez '+statystyki[winner-1].pola_przejdniete+' '+polaword+'.</p><p>Odpowiedziałeś poprawnie na '+statystyki[winner-1].poprawne_odpowiedzi+' z '+statystyki[winner-1].zapytane_pytania+' zadanych pytań.</p><p> Powtarzałeś klasę '+statystyki[winner-1].klasy_powtorzone+' razy.</p>');
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