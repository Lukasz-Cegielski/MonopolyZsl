const plansza = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3,
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
                 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
//const rogi = [2,3,4,5];\

var sus;
var x = 40;
var y = 40;
var lim1 = 100;
var lim2 = 140;

function ruch1() {
    var pionek = document.getElementById("pionek");
    if (x == lim1) {
      clearInterval(sus);
    } else {
      x++;
      pionek.style.left = x + 'vh'; 
    }
}
function ruch2() {
    var pionek = document.getElementById("pionek");
    if (x == lim1) {
      clearInterval(sus);
    } else {
      x--;
      pionek.style.left = x + 'vh'; 
    }
}
function ruch3() {
    var pionek = document.getElementById("pionek");
    if (y == lim2) {
      clearInterval(sus);
    } else {
      y++;
      pionek.style.top = y + 'vh'; 
    }
}
function ruch4() {
    var pionek = document.getElementById("pionek");
    if (y == lim2) {
      clearInterval(sus);
    } else {
      y--;
      pionek.style.top = y + 'vh'; 
    }
}

function move1() {
    sus = setInterval(ruch1, 10);
    lim1 += 100;
}
function move2() {
    sus = setInterval(ruch2, 10);
    lim1 -= 100;
}
function move3() {
    sus = setInterval(ruch3, 10);
    lim2 += 100;
}
function move4() {
    sus = setInterval(ruch4, 10);
    lim2 -= 100;
}


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
                move1();
                break;
            case 3:
                pozycja = plansza[j + 3];
                j += 3;
                console.log("pozycja " + i + ": " + pozycja);
                move3()
                break;
            case 4:
                pozycja = plansza[j - 1];
                j--;
                console.log("pozycja " + i + ": " + pozycja);
                move2();
                break;
            case 5:
                pozycja = plansza[j - 3];
                console.log("pozycja " + i + ": " + pozycja);
                j -= 3;
                move4();
                break;
            default:
                console.log("error");
                break;
        }
    }
}
ruchpotabeli(oczka);