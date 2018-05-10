/*Area  e Circonferenza del cerchio*/
function calcolaCirconferenza(){
    var r = document.forms.circonferenza.r.valueAsNumber;
    var circonferenza = 2 * r * (Math.PI); 
document.getElementById("circonferenza").innerHTML=" circonferenza = " + circonferenza;
}
function calcolaArea(){
    var r = document.forms.circonferenza.r.valueAsNumber;
    var area = Math.pow(r,2) * (Math.PI); 
document.getElementById("area").innerHTML=" area = " + area;
}

function cancella(){
document.getElementById("circonferenza").innerHTML=" ";
document.getElementById("area").innerHTML=" ";
}
