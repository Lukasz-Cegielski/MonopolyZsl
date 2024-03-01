//0 = w prawo, 1 = w dol, 2 = w lewo, 3 = w gore
// DO TESTÓW: ruchpionkiem(1,5,1,1); przesunpionek(1,1,1);
var direction = ["left","top","right","bottom"];
var gracze = ["pionekgracz1","pionekgracz2","pionekgracz3","pionekgracz4"];
const board=[4,0,0,0,0,0,0,0,0,0,0,0,0,5,1,1,1,1,1,1,1,1,1,1,1,1,6,2,2,2,2,2,2,2,2,2,2,2,2,7,3,3,3,3,3,3,3,3,3,3,3,3,3];

async function ruchpionkiem(obecnepole,przesuniecie,obecnaklasa,gracz){
    //do przodu
    if(przesuniecie>=0){
        for(i=0;i<przesuniecie*213;i=i+213){
            setTimeout(przesunpionek,i,1,gracz,obecnepole);
            obecnepole++;
            if(obecnepole>52){
                obecnaklasa++;
                obecnepole=obecnepole-52;
            }
        }
    }else{  
        for(i=0;i>przesuniecie*213;i=i-213){
            if(obecnaklasa==1&&obecnepole==1){
            }
            else{
                setTimeout(przesunpionek,-i,-1,gracz,obecnepole);
                obecnepole--;
                if(obecnepole==0){
                    obecnaklasa--;
                    obecnepole=52;
                }
            }
        }
    }
    $('#'+gracze[currentturn-1]).appendTo('#pole'+(statystyki[currentturn-1].pole));
}

async function przesunpionek(kierunek,gracz,polestartu){
    setTimeout(snapinplacepionek,213,gracz,polestartu,kierunek);
    for(i=0;i<213;i=i+10){
        setTimeout(animacjapionka,i,gracz,kierunek,polestartu);
    }
}

async function animacjapionka(gracz,kierunek,polestartu){
    switch(board[polestartu-1]){
        case 0:
            document.getElementById(gracze[gracz-1]).style.left=(parseFloat(document.getElementById(gracze[gracz-1]).style.left))+(0.3*kierunek)+"vh";
            break;
        case 1:
            document.getElementById(gracze[gracz-1]).style.top=(parseFloat(document.getElementById(gracze[gracz-1]).style.top))+(0.3*kierunek)+"vh";
            break;
        case 2:
            document.getElementById(gracze[gracz-1]).style.left=(parseFloat(document.getElementById(gracze[gracz-1]).style.left))+(0.3*kierunek*(-1))+"vh";
            break;
        case 3:
            document.getElementById(gracze[gracz-1]).style.top=(parseFloat(document.getElementById(gracze[gracz-1]).style.top))+(0.3*kierunek*(-1))+"vh";
            break;
        case 4:
            if(kierunek==1){
                document.getElementById(gracze[gracz-1]).style.left=(parseFloat(document.getElementById(gracze[gracz-1]).style.left))+(0.3*kierunek)+"vh";
                break;
            }else{
                document.getElementById(gracze[gracz-1]).style.top=(parseFloat(document.getElementById(gracze[gracz-1]).style.top))+(0.3*kierunek*(-1))+"vh";
                break;
            }
        case 5:
            if(kierunek==1){
                document.getElementById(gracze[gracz-1]).style.top=(parseFloat(document.getElementById(gracze[gracz-1]).style.top))+(0.3*kierunek)+"vh";
                break;
            }else{
                document.getElementById(gracze[gracz-1]).style.left=(parseFloat(document.getElementById(gracze[gracz-1]).style.left))+(0.3*kierunek)+"vh";
                break;
            }
        case 6:
            if(kierunek==1){
                document.getElementById(gracze[gracz-1]).style.left=(parseFloat(document.getElementById(gracze[gracz-1]).style.left))+(0.3*kierunek*(-1))+"vh";
                break;
            }else{
                document.getElementById(gracze[gracz-1]).style.top=(parseFloat(document.getElementById(gracze[gracz-1]).style.top))+(0.3*kierunek)+"vh";
                break;
            }
        case 7:
            if(kierunek==1){
                document.getElementById(gracze[gracz-1]).style.top=(parseFloat(document.getElementById(gracze[gracz-1]).style.top))+(0.3*kierunek*(-1))+"vh";
                break;
            }else{
                document.getElementById(gracze[gracz-1]).style.left=(parseFloat(document.getElementById(gracze[gracz-1]).style.left))+(0.3*kierunek*(-1))+"vh";
                break;
            }
    }
}

async function snapinplacepionek(gracz,polestartu,kierunek){
    wyczyscpionki();
    if(polestartu!=52&&polestartu!=1){
        $('#'+gracze[gracz-1]).appendTo('#pole'+(polestartu+(1*kierunek)));
    }else if(kierunek==1&&polestartu==52){
        $('#'+gracze[gracz-1]).appendTo('#pole'+1);
    }else if(polestartu==1&&kierunek==1){
        $('#'+gracze[gracz-1]).appendTo('#pole'+2);
    }else if(polestartu==1&&kierunek==-1){
        $('#'+gracze[gracz-1]).appendTo('#pole'+52);
    }else{
        $('#'+gracze[gracz-1]).appendTo('#pole'+51);
    }
}

async function wyczyscpionki(){
    document.getElementById("pionekgracz1").style.left="0vh"
    document.getElementById("pionekgracz1").style.top="0vh"
    document.getElementById("pionekgracz2").style.left="2.75vh"
    document.getElementById("pionekgracz2").style.top="0vh"
    document.getElementById("pionekgracz3").style.left="0vh"
    document.getElementById("pionekgracz3").style.top="2.75vh"
    document.getElementById("pionekgracz4").style.left="2.75vh"
    document.getElementById("pionekgracz4").style.top="2.75vh"
}