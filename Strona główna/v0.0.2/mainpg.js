function submitValue2() {
    var value = String(2);
    localStorage.setItem('myValue', value); // Store the value in localStorage
    window.location.href = 'page2.html'; // Redirect to the second page
}
function submitValue3() {
    var value = String(3);
    localStorage.setItem('myValue', value); // Store the value in localStorage
    window.location.href = 'page2.html'; // Redirect to the second page
}
function submitValue4() {
    var value = String(4);
    localStorage.setItem('myValue', value); // Store the value in localStorage
    window.location.href = 'page2.html'; // Redirect to the second page
}
var play3 = function () { // zmiana na 3 graczy
    document.getElementById("main").setAttribute("onClick", "javascript: submitValue3();"); // ważne
    document.getElementById("main").style.backgroundImage = "url('3os.png')";
    document.getElementById("left").setAttribute("onClick", "javascript: play4();");
    document.getElementById("right").setAttribute("onClick", "javascript: play2();");
    console.log("główny to 3")

}
var play4 = function () { //zmiana na 4 graczy
    document.getElementById("main").setAttribute("onClick", "javascript: submitValue4();"); // ważne
    document.getElementById("main").style.backgroundImage = "url('4os.png')";
    document.getElementById("left").setAttribute("onClick", "javascript: play2();");
    document.getElementById("right").setAttribute("onClick", "javascript: play3();");
    console.log("główny to 4")
}

var play2 = function () { //zmiana na 2 graczy
    document.getElementById("main").setAttribute("onClick", "javascript: submitValue2();"); // ważne
    document.getElementById("main").style.backgroundImage = "url('2os.png')";
    document.getElementById("left").setAttribute("onClick", "javascript: play3();");
    document.getElementById("right").setAttribute("onClick", "javascript: play4();");
    console.log("główny to 2")
}
// linki
// https://stackoverflow.com/questions/5303899/change-onclick-action-with-a-javascript-function
// https://www.logilax.com/javascript-pass-variable-from-html-page-to-another/
// https://www.remove.bg/
// kod pewnie da sie z optymalizować ale to jak będzie zapas czasu