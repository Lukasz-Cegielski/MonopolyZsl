//PRZYDATNE!! TELEPORTUJE GRACZA 1 NA KONIEC GRY WPISZ W KONSOLE statystyki[0].pole=52; statystyki[0].klasa=5;
// Get the value from localStorage
var value = localStorage.getItem('myValue'); // value jest stringiem jak cos
var iloscgraczy = parseInt(value)
//console.log(iloscgraczy) <-- Potrzebujemy tego?
switch (iloscgraczy) {
    case 1:
        document.getElementById("danegracza2").style.display = "none";
        document.getElementById("danegracza3").style.display = "none";
        document.getElementById("danegracza4").style.display = "none";
        document.getElementById("pionekgracz2").style.display = "none";
        document.getElementById("pionekgracz3").style.display = "none";
        document.getElementById("pionekgracz4").style.display = "none";
        break;
    case 2:
        document.getElementById("danegracza3").style.display = "none";
        document.getElementById("danegracza4").style.display = "none";
        document.getElementById("pionekgracz3").style.display = "none";
        document.getElementById("pionekgracz4").style.display = "none";
        break;
    case 3:
        document.getElementById("danegracza4").style.display = "none";
        document.getElementById("pionekgracz4").style.display = "none";
        break;
    case 4:
        break;
}
// to potrzeba wrzucić do naszego js w grze
//ustawianie każdego gracza na startowej pozycji
var koniecgryvar=false;
var currentturn = 1;
var statystyki=[
    {gracz:1,rzuty_kostka:0,zapytane_pytania:0,poprawne_odpowiedzi:0,pola_przejdniete:0,klasy_powtorzone:0,pole:1,klasa:1,kierunek:0,nick:0,winnerstatus:false},
    {gracz:2,rzuty_kostka:0,zapytane_pytania:0,poprawne_odpowiedzi:0,pola_przejdniete:0,klasy_powtorzone:0,pole:1,klasa:1,kierunek:0,nick:0,winnerstatus:false},
    {gracz:3,rzuty_kostka:0,zapytane_pytania:0,poprawne_odpowiedzi:0,pola_przejdniete:0,klasy_powtorzone:0,pole:1,klasa:1,kierunek:0,nick:0,winnerstatus:false},
    {gracz:4,rzuty_kostka:0,zapytane_pytania:0,poprawne_odpowiedzi:0,pola_przejdniete:0,klasy_powtorzone:0,pole:1,klasa:1,kierunek:0,nick:0,winnerstatus:false},
];
//losowanie nicków i zawodów
const nick = ["Słowackiewicz", "Roztańczona parabola", "Goblin z 09a", "#1 Kuli fan", "Spadający sufit", "Napęd grawitacyjny", "Tux z Linux", "5318008", "Stołówkarz", "Ławka trzyosobowa", "Technikumpilled ZSŁcel","Samian","Rzułty Warol","Sigma female"];
const nickplec = ["M","K","M","M","M","M","M","K","M","K","M","M","M","K"];
statystyki[0].nick = Math.floor(Math.random() * 14);
statystyki[1].nick = Math.floor(Math.random() * 14);
while (statystyki[1].nick == statystyki[0].nick) {
    statystyki[1].nick = Math.floor(Math.random() * 14);
}
statystyki[2].nick = Math.floor(Math.random() * 14);
while (statystyki[2].nick == statystyki[0].nick || statystyki[2].nick == statystyki[1].nick) {
    statystyki[2].nick = Math.floor(Math.random() * 14);
}
statystyki[3].nick = Math.floor(Math.random() * 14);
while (statystyki[3].nick == statystyki[0].nick || statystyki[3].nick == statystyki[1].nick || statystyki[3].nick == statystyki[2].nick) {
    statystyki[3].nick = Math.floor(Math.random() * 14);
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
statystyki[0].kierunek = Math.floor(Math.random() * 8);
statystyki[1].kierunek = Math.floor(Math.random() * 8);
statystyki[2].kierunek = Math.floor(Math.random() * 8);
statystyki[3].kierunek = Math.floor(Math.random() * 8);
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
document.getElementById('polep1').innerHTML = statystyki[0].pole;
document.getElementById('polep2').innerHTML = statystyki[1].pole;
document.getElementById('polep3').innerHTML = statystyki[2].pole;
document.getElementById('polep4').innerHTML = statystyki[3].pole;
document.getElementById('klasap1').innerHTML = statystyki[0].klasa;
document.getElementById('klasap2').innerHTML = statystyki[1].klasa;
document.getElementById('klasap3').innerHTML = statystyki[2].klasa;
document.getElementById('klasap4').innerHTML = statystyki[3].klasa;
document.getElementById('nickp1').innerHTML = nick[statystyki[0].nick];
document.getElementById('nickp2').innerHTML = nick[statystyki[1].nick];
document.getElementById('nickp3').innerHTML = nick[statystyki[2].nick];
document.getElementById('nickp4').innerHTML = nick[statystyki[3].nick];
document.getElementById('kierunekp1').innerHTML = zawody[statystyki[0].kierunek];
document.getElementById('kierunekp2').innerHTML = zawody[statystyki[1].kierunek];
document.getElementById('kierunekp3').innerHTML = zawody[statystyki[2].kierunek];
document.getElementById('kierunekp4').innerHTML = zawody[statystyki[3].kierunek];
document.getElementById('currentturn').innerHTML = currentturn;
document.getElementById("odpbuttona").disabled = true;
document.getElementById("odpbuttonb").disabled = true;
document.getElementById("odpbuttonc").disabled = true;
document.getElementById("odpbuttond").disabled = true;
document.getElementById('currentturn').innerHTML = nick[statystyki[0].nick];
document.getElementById('nazwakarty').innerHTML ="ZSŁ SIM "+nick[statystyki[0].nick];

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
                await ruchpionkiem(statystyki[currentturn-1].pole,efektevent,statystyki[currentturn-1].klasa,currentturn);
                animacjakartyzinfo(statystyki[currentturn-1].pole,statystyki[currentturn-1].klasa,efektevent,currentturn);
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
                await ruchpionkiem(statystyki[currentturn-1].pole,efektpytanie,statystyki[currentturn-1].klasa,currentturn);
                animacjakartyzinfo(statystyki[currentturn-1].pole,statystyki[currentturn-1].klasa,efektpytanie,currentturn);
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
    await ruchpionkiem(statystyki[currentturn-1].pole,wynikrzutu,statystyki[currentturn-1].klasa,currentturn);
    animacjakartyzinfo(statystyki[currentturn-1].pole,statystyki[currentturn-1].klasa,wynikrzutu,currentturn);
    statystyki[currentturn-1].pola_przejdniete=statystyki[currentturn-1].pola_przejdniete+wynikrzutu;
    //swtch który sprawdza którego gracza kolej, są identyczne więc zostawię komentarze tylko do gracza 1
    statystyki[currentturn-1].pole = statystyki[currentturn-1].pole + wynikrzutu;
            //jeżeli gracz przekroczył 52 pola zwiększamy klasę i ustawiamy pole z powrotem na 1
            zmianapozycji(currentturn);
            //wywołujemy funkcję do pytań i eventów
            if(statystyki[currentturn-1].winnerstatus!=true){
            statystyki[currentturn-1].pole = await pytanieevent(statystyki[currentturn-1].pole);}
            //zmieniamy pole i klase zgodnie z wynikiem
            if(statystyki[currentturn-1].winnerstatus!=true){
            zmianapozycji(currentturn);}
    //zmiana tury
    if (currentturn >= iloscgraczy) {
        currentturn = 1;
    } else { currentturn++; };
    document.getElementById('currentturn').innerHTML = nick[statystyki[currentturn-1].nick];
    document.getElementById('nazwakarty').innerHTML ="ZSŁ SIM "+nick[statystyki[currentturn-1].nick];
    //switch żeby tura pokazywała się jako nick gracza a nie cyfra
    if(statystyki[0].winnerstatus==true||statystyki[1].winnerstatus==true||statystyki[2].winnerstatus==true||statystyki[3].winnerstatus==true){
    document.getElementById('currentturn').innerHTML = "Koniec gry";
    document.getElementById('nazwakarty').innerHTML ="ZSŁ SIM "+"Koniec gry";}
    //włączenie z powrotem kostki przeniosłem do scriptkart.js
}

//funkcja która kończy grę (jeszcze nie kończy ale do tego służy)
function koniecgry(winner) {
    statystyki[winner-1].winnerstatus=true;
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
                if(nickplec[statystyki[0].nick]=="K"){
                    ukonczyłes="Ukończyłaś";
                    rzuciles="Rzuciłaś";
                    przeszedles="Przeszłaś";
                    odpowiedziales="Odpowiedziałaś";
                    powtarzales="Powtarzałaś";
                }
                document.getElementById("trescEventuNaKarcie").innerHTML =
                ('<p>Gratulacje '+nick[statystyki[0].nick]+'! '+ukonczyłes+' symulator Zespołu Szkół Łączności.</p><p>Aby to zrobić:</p><p>'+rzuciles+' kostką '+statystyki[winner-1].rzuty_kostka+' razy.</p><p>'+przeszedles+' przez '+statystyki[winner-1].pola_przejdniete+' '+polaword+'.</p><p>'+odpowiedziales+' poprawnie na '+statystyki[winner-1].poprawne_odpowiedzi+' z '+statystyki[winner-1].zapytane_pytania+' zadanych pytań.</p><p> '+powtarzales+' klasę '+statystyki[winner-1].klasy_powtorzone+' razy.</p>');
                break;
            case 2:
                if(nickplec[statystyki[1].nick]=="K"){
                    ukonczyłes="Ukończyłaś";
                    rzuciles="Rzuciłaś";
                    przeszedles="Przeszłaś";
                    odpowiedziales="Odpowiedziałaś";
                    powtarzales="Powtarzałaś";
                }
                document.getElementById("trescEventuNaKarcie").innerHTML =
                ('<p>Gratulacje '+nick[statystyki[1].nick]+'! '+ukonczyłes+' symulator Zespołu Szkół Łączności.</p><p>Aby to zrobić:</p><p>'+rzuciles+' kostką '+statystyki[winner-1].rzuty_kostka+' razy.</p><p>'+przeszedles+' przez '+statystyki[winner-1].pola_przejdniete+' '+polaword+'.</p><p>'+odpowiedziales+' poprawnie na '+statystyki[winner-1].poprawne_odpowiedzi+' z '+statystyki[winner-1].zapytane_pytania+' zadanych pytań.</p><p> '+powtarzales+' klasę '+statystyki[winner-1].klasy_powtorzone+' razy.</p>');
                break;
            case 3:
                if(nickplec[statystyki[2].nick]=="K"){
                    ukonczyłes="Ukończyłaś";
                    rzuciles="Rzuciłaś";
                    przeszedles="Przeszłaś";
                    odpowiedziales="Odpowiedziałaś";
                    powtarzales="Powtarzałaś";
                }
                document.getElementById("trescEventuNaKarcie").innerHTML =
                ('<p>Gratulacje '+nick[statystyki[2].nick]+'! '+ukonczyłes+' symulator Zespołu Szkół Łączności.</p><p>Aby to zrobić:</p><p>'+rzuciles+' kostką '+statystyki[winner-1].rzuty_kostka+' razy.</p><p>'+przeszedles+' przez '+statystyki[winner-1].pola_przejdniete+' '+polaword+'.</p><p>'+odpowiedziales+' poprawnie na '+statystyki[winner-1].poprawne_odpowiedzi+' z '+statystyki[winner-1].zapytane_pytania+' zadanych pytań.</p><p> '+powtarzales+' klasę '+statystyki[winner-1].klasy_powtorzone+' razy.</p>');
                break;
            case 4:
                if(nickplec[statystyki[3].nick]=="K"){
                    ukonczyłes="Ukończyłaś";
                    rzuciles="Rzuciłaś";
                    przeszedles="Przeszłaś";
                    odpowiedziales="Odpowiedziałaś";
                    powtarzales="Powtarzałaś";
                }
                document.getElementById("trescEventuNaKarcie").innerHTML =
                ('<p>Gratulacje '+nick[statystyki[3].nick]+'! '+ukonczyłes+' symulator Zespołu Szkół Łączności.</p><p>Aby to zrobić:</p><p>'+rzuciles+' kostką '+statystyki[winner-1].rzuty_kostka+' razy.</p><p>'+przeszedles+' przez '+statystyki[winner-1].pola_przejdniete+' '+polaword+'.</p><p>'+odpowiedziales+' poprawnie na '+statystyki[winner-1].poprawne_odpowiedzi+' z '+statystyki[winner-1].zapytane_pytania+' zadanych pytań.</p><p> '+powtarzales+' klasę '+statystyki[winner-1].klasy_powtorzone+' razy.</p>');
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
async function zmianapozycji(gracz){
    if (statystyki[gracz-1].pole > 52) {
        statystyki[gracz-1].pole = statystyki[gracz-1].pole - 52;
        statystyki[gracz-1].klasa++;}
    if (statystyki[gracz-1].klasa == 6) {
        statystyki[gracz-1].klasa="Szkoła ukończona";
        koniecgry(gracz);
    }
    document.getElementById('klasap'+gracz).innerHTML = statystyki[gracz].klasa;
    //to na wypadek gdyby gracz cofnął się przed pierwsze pole, gracz cofa się o klasę albo zatrzymuje na pole 1 klasa 1
    if (statystyki[gracz-1].pole < 1) {
        if (statystyki[gracz-1].klasa == 1) {
            statystyki[gracz-1].pole = 1;
        } else {
            statystyki[gracz-1].pole = statystyki[gracz-1].pole + 52;
            statystyki[gracz-1].klasa--;
            statystyki[currentturn-1].klasy_powtorzone++;
            
        }
    }
    if(statystyki[gracz-1].pole==0){
        statystyki[gracz-1].pole==1;
    }
    //znowu wypisujemy pole
    document.getElementById('klasap'+gracz).innerHTML=statystyki[currentturn-1].klasa;
}

var animacjakartyzinfocounter=0;

function animacjakartyzinfo(pole,klasa,przesuniecie,gracz){
    animacjakartyzinfocounter=0;
    if(przesuniecie>0){
        for(i=0;i<przesuniecie*213;i=i+213){
            setTimeout(zmianapolanakarcie,i,1,gracz,przesuniecie);
        }
    }else{
        for(i=0;i>przesuniecie*213;i=i-213){
            setTimeout(zmianapolanakarcie,i*(-1),(-1),gracz,przesuniecie);
        }
    }
}

function zmianapolanakarcie(kierunek,gracz,przesuniecie){
    animacjakartyzinfocounter++;
    if(animacjakartyzinfocounter==Math.abs(przesuniecie)){
        document.getElementById('polep'+gracz).innerHTML=statystyki[gracz-1].pole;
    }else{
        document.getElementById('polep'+gracz).innerHTML = Number(document.getElementById('polep'+gracz).innerHTML)+kierunek;
    }
}