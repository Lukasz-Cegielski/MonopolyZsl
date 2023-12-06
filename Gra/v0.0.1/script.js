const plansza = [2, 2, 3,
    5, 0, 3, 5, 4, 4];
//const rogi = [2,3,4,5];


var oczka = Math.floor(Math.random() * 6) + 1;
console.log("kostka: " + oczka);
var pozycja = plansza[0];
function ruchpotabeli(oczka) {
    let j = 0;
    for (let i = 0; i < oczka; i++) {
        switch (pozycja) {
            case 2:
                pozycja = plansza[j + 1];
                j++;
                console.log("pozycja " + i + ": " + pozycja);
                break;
            case 3:
                pozycja = plansza[j + 3];
                j += 3;
                console.log("pozycja " + i + ": " + pozycja);
                break;
            case 4:
                pozycja = plansza[j - 1];
                j--;
                console.log("pozycja " + i + ": " + pozycja);
                break;
            case 5:
                pozycja = plansza[j - 3];
                console.log("pozycja " + i + ": " + pozycja);
                j -= 3;
                break;
            default:
                console.log("error");
                break;
        }
    }
}
ruchpotabeli(oczka)
/*for(var i = 0; i < kostka; i++) {  // 4 if() i dopiero pozniej for()
     if(rogi.includes(pozycja+kostka))
    }
*/















