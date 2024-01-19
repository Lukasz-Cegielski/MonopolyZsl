var iloscgraczy = Number(prompt("podaj ilosc graczy [1-4]"));
while(iloscgraczy!=1&&iloscgraczy!=2&&iloscgraczy!=3&&iloscgraczy!=4){
    iloscgraczy = Number(prompt("podaj ilosc graczy [1-4]"));
}
var currentturn=1;
var polep1=1;
var polep2=1;
var polep3=1;
var polep4=1;
var klasap1=1;
var klasap2=1;
var klasap3=1;
var klasap4=1;
const nick = ["testnick1","testnick2","testnick3","testnick4"];
var nickp1= Math.floor(Math.random() * 4);
var nickp2= Math.floor(Math.random() * 4);
while(nickp2==nickp1){
    var nickp2= Math.floor(Math.random() * 4);
}
var nickp3= Math.floor(Math.random() * 4);
while(nickp3==nickp1||nickp3==nickp2){
    var nickp3= Math.floor(Math.random() * 4);
}
var nickp4= Math.floor(Math.random() * 4);
while(nickp4==nickp1||nickp4==nickp2||nickp4==nickp3){
    var nickp4= Math.floor(Math.random() * 4);
}
const zawody =[
"Technik automatyk",
"Technik robotyk",
"Technik elektronik",
"Technik informatyk",
"Technik teleinformatyk",
"Technik programista",
"Technik fotografii i multimediów",
"Branżowa Szkoła I stopnia nr 34"
]
var correctanwser;
var wybranaodp;
var efektpytanie;
const possibleanwsers=['A','B','C','D']
kierunekp1=Math.floor(Math.random() * 8);
kierunekp2=Math.floor(Math.random() * 8);
kierunekp3=Math.floor(Math.random() * 8);
kierunekp4=Math.floor(Math.random() * 8);
document.getElementById('polep1').innerHTML=polep1;
document.getElementById('polep2').innerHTML=polep2;
document.getElementById('polep3').innerHTML=polep3;
document.getElementById('polep4').innerHTML=polep4;
document.getElementById('klasap1').innerHTML= klasap1;
document.getElementById('klasap2').innerHTML= klasap2;
document.getElementById('klasap3').innerHTML= klasap3;
document.getElementById('klasap4').innerHTML= klasap4;
document.getElementById('nickp1').innerHTML=nick[nickp1];
document.getElementById('nickp2').innerHTML=nick[nickp2];
document.getElementById('nickp3').innerHTML=nick[nickp3];
document.getElementById('nickp4').innerHTML=nick[nickp4];
document.getElementById('kierunekp1').innerHTML=zawody[kierunekp1];
document.getElementById('kierunekp2').innerHTML=zawody[kierunekp2];
document.getElementById('kierunekp3').innerHTML=zawody[kierunekp3];
document.getElementById('kierunekp4').innerHTML=zawody[kierunekp4];
document.getElementById('currentturn').innerHTML=currentturn;

function pytanieevent(pole){
    document.getElementById("kostka").disabled=true;
    if(pole%2==0){
        //event
        alert("event, losowa ilość pól od -10 do +10 dodana lub odjęta")
        var efektevent = Math.floor(Math.random() * 21)-10;
        document.getElementById("kostka").disabled=false;
        return pole+efektevent;
    }
    else{
        //pytanie
        correctanwser=possibleanwsers[Math.floor(Math.random() * 4)]
        document.getElementById("odp").innerHTML=correctanwser;
        document.getElementsByClassName("odpbutton").addEventListener("click", sprawdzodp);
        document.getElementsByClassName("odpbutton").disabled=false;
        return pole+efektpytanie;
    };
}

function odp(abcd){
    wybranaodp=abcd;
    document.getElementsByClassName("odpbutton").disabled=true;
}

function sprawdzodp(){
    if(wybranaodp==correctanwser){
        efektpytanie=5;
    }
    else{
        efektpytanie=-5;
    }
}

function rzut(){
    var wynikrzutu=(Math.floor(Math.random() * 6)+1);
    switch(currentturn) {
        case 1:
            polep1=polep1+wynikrzutu;
            if(polep1>52){
                polep1=polep1-52;
                klasap1++;
                if(klasap1==6){
                    koniecgry(1);
                }
                document.getElementById('klasap1').innerHTML= klasap1;
            }
            document.getElementById('polep1').innerHTML=polep1;
            polep1=pytanieevent(polep1);
            if(polep1>52){
                polep1=polep1-52;
                klasap1++;
                if(klasap1==6){
                    koniecgry(1);
                }
                document.getElementById('klasap1').innerHTML= klasap1;
            }else if(polep1<1){
                if(klasap1==1){
                    polep1=1;
                }else{
                    polep1=polep1+52;
                    klasap1--;
                    document.getElementById('klasap1').innerHTML= klasap1;
                }
            }
            document.getElementById('polep1').innerHTML=polep1;
            break;
        case 2:
            polep2=polep2+wynikrzutu;
            if(polep2>52){
                polep2=polep2-52;
                klasap2++;
                if(klasap2==6){
                    koniecgry(2);
                }
                document.getElementById('klasap2').innerHTML= klasap2;
            }
            document.getElementById('polep2').innerHTML=polep2;
            polep2=pytanieevent(polep2);
            if(polep2>52){
                polep2=polep2-52;
                klasap2++;
                if(klasap2==6){
                    koniecgry(2);
                }
                document.getElementById('klasap2').innerHTML= klasap2;
            }else if(polep2<1){
                if(klasap2==1){
                    polep2=1;
                }else{
                    polep2=polep2+52;
                    klasap2--;
                    document.getElementById('klasap2').innerHTML= klasap2;
                }
            }
            document.getElementById('polep2').innerHTML=polep2;
            break;
        case 3:
            polep3=polep3+wynikrzutu;
            if(polep3>52){
                polep3=polep3-52;
                klasap3++;
                if(klasap3==6){
                    koniecgry(3);
                }
                document.getElementById('klasap3').innerHTML= klasap3;
            }
            document.getElementById('polep3').innerHTML=polep3;
            polep3=pytanieevent(polep3);
            if(polep3>52){
                polep3=polep3-52;
                klasap3++;
                if(klasap3==6){
                    koniecgry(3);
                }
                document.getElementById('klasap3').innerHTML= klasap3;
            }else if(polep3<1){
                if(klasap3==1){
                    polep3=1;
                }else{
                    polep3=polep3+52;
                    klasap3--;
                    document.getElementById('klasap3').innerHTML= klasap3;
                }
            }
            document.getElementById('polep3').innerHTML=polep3;
            break;
        case 4:
            polep4=polep4+wynikrzutu;
            if(polep4>52){
                polep4=polep4-52;
                klasap4++;
                if(klasap4==6){
                    koniecgry(4);
                }
                document.getElementById('klasap4').innerHTML= klasap4;
            }
            document.getElementById('polep4').innerHTML=polep4;
            polep4=pytanieevent(polep4);
            if(polep4>52){
                polep4=polep4-52;
                klasap4++;
                if(klasap4==6){
                    koniecgry(4);
                }
                document.getElementById('klasap4').innerHTML= klasap4;
            }else if(polep4<1){
                if(klasap4==1){
                    polep4=1;
                }else{
                    polep4=polep4+52;
                    klasap4--;
                    document.getElementById('klasap4').innerHTML= klasap4;
                }
            }
            document.getElementById('polep4').innerHTML=polep4;
            break;
      }
      if(currentturn==iloscgraczy){
      currentturn=1;
      }else{currentturn++;}
      document.getElementById('currentturn').innerHTML=currentturn;
}