var animacjaKartyProcentWDolPytanie = 0;
var animacjaKartyProcentWGorePytanie = 0;
var animacjaKartyProcentZnikaPytanie = 0;
var animacjaKartyZaczetaPytanie = false;
var animacjaKartyProcentWDolEvent = 0;
var animacjaKartyProcentWGoreEvent = 0;
var animacjaKartyProcentZnikaEvent = 0;
var animacjaKartyZaczetaEvent = false;

function kartaWyciagnietaPytanie() {
    document.getElementById("kartaZPytaniemWrapper").style.top = "0";
    if (animacjaKartyZaczetaPytanie == false) {
        animacjaKartyZaczetaPytanie = true;
        animacjaKartyProcentWDolPytanie = 0;
        for (var i = 0; i <= 1000; i = i + 10) {
            setTimeout(kartaWDolPytanie, i)
        }
    }
}

function kartaWDolPytanie() {
    animacjaKartyProcentWDolPytanie++;
    if (animacjaKartyProcentWDolPytanie < 100) {
        document.getElementById("kartaDoWyciagnieciaPytanie").style.top = (parseInt(document.getElementById("kartaDoWyciagnieciaPytanie").style.top) + 1) + "%";
    } else {
        document.getElementById("kartaDoWyciagnieciaPytanie").style.top = 30 + "vh" // to ustawia karte ponownie po wyciagnieciu 
        animacjaKartyProcentWGorePytanie = 0;
        for (var i = 0; i <= 1000; i = i + 10) {
            document.getElementById("kartaZPytaniem").style.display = "block";
            document.getElementById("kartaZPytaniem").style.top = 100 + "%";
            setTimeout(kartaWGorePytanie, i + 500);
        }
    }
}

function kartaWGorePytanie() {
    animacjaKartyProcentWGorePytanie++;
    if (animacjaKartyProcentWGorePytanie < 100) {
        document.getElementById("kartaZPytaniem").style.top = (parseInt(document.getElementById("kartaZPytaniem").style.top) + -1) + "%";
    } else {
        document.getElementById("kartaZPytaniem").style.top = 0 + "%"
        document.getElementById("kartaZPytaniemWrapper").style.pointerEvents = "auto";
    }
}

function odlozKartePytanie() {
    document.getElementById("kartaZPytaniemWrapper").style.pointerEvents = "none";
    animacjaKartyProcentZnikaPytanie = 0;
    for (var i = 0; i <= 1000; i = i + 10) {
        setTimeout(kartaZnikaPytanie, i + 250)
    }
}

function kartaZnikaPytanie() {
    animacjaKartyProcentZnikaPytanie++;
    if (animacjaKartyProcentZnikaPytanie < 100) {
        document.getElementById("kartaZPytaniem").style.top = (parseInt(document.getElementById("kartaZPytaniem").style.top) + 1) + "%";
    } else {
        animacjaKartyZaczetaPytanie = false;
        document.getElementById("kartaZPytaniem").style.top = 100 + "%"
        document.getElementById("kartaZPytaniem").style.display = "none";
        document.getElementById("kartaZPytaniemWrapper").style.top = "100";
        document.getElementById("kostka").disabled = false;
        document.getElementById("pytanie").style.display="block";
    }
}

function kartaWyciagnietaEvent() {
    document.getElementById("kartaZEventemWrapper").style.top = "0";
    if (animacjaKartyZaczetaEvent == false) {
        animacjaKartyZaczetaEvent = true;
        animacjaKartyProcentWDolEvent = 0;
        for (var i = 0; i <= 1000; i = i + 10) {
            setTimeout(kartaWDolEvent, i)
        }
    }
}

function kartaWDolEvent() {
    animacjaKartyProcentWDolEvent++;
    if (animacjaKartyProcentWDolEvent < 100) {
        document.getElementById("kartaDoWyciagnieciaEvent").style.top = (parseInt(document.getElementById("kartaDoWyciagnieciaEvent").style.top) + 1) + "%";
    } else {
        document.getElementById("kartaDoWyciagnieciaEvent").style.top = 30 + "vh"
        animacjaKartyProcentWGoreEvent = 0;
        for (var i = 0; i <= 1000; i = i + 10) {
            document.getElementById("kartaZEventem").style.display = "block";
            document.getElementById("kartaZEventem").style.top = 100 + "%";
            setTimeout(kartaWGoreEvent, i + 500);
        }
    }
}

function kartaWGoreEvent() {
    animacjaKartyProcentWGoreEvent++;
    if (animacjaKartyProcentWGoreEvent < 100) {
        document.getElementById("kartaZEventem").style.top = (parseInt(document.getElementById("kartaZEventem").style.top) + -1) + "%";
    } else {
        document.getElementById("kartaZEventem").style.top = 0 + "%"
        document.getElementById("kartaZEventemWrapper").style.pointerEvents = "auto";
    }
}

function odlozKarteEvent() {
    document.getElementById("kartaZEventemWrapper").style.pointerEvents = "none";
    animacjaKartyProcentZnikaEvent = 0;
    for (var i = 0; i <= 1000; i = i + 10) {
        setTimeout(kartaZnikaEvent, i + 250)
    }
}

function kartaZnikaEvent() {
    animacjaKartyProcentZnikaEvent++;
    if (animacjaKartyProcentZnikaEvent < 100) {
        document.getElementById("kartaZEventem").style.top = (parseInt(document.getElementById("kartaZEventem").style.top) + 1) + "%";
    } else {
        animacjaKartyZaczetaEvent = false;
        document.getElementById("kartaZEventem").style.top = 100 + "%"
        document.getElementById("kartaZEventem").style.display = "none";
        document.getElementById("kartaZEventemWrapper").style.top = "100";
        document.getElementById("kostka").disabled = false;
    }
}