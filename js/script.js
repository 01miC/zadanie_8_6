var a = prompt('Podaj zmienna \'A\'');
var b = prompt('Podaj zmienna \'B\'');
var morethan0= 'dodatni';
var lessthan0='kwadrat różnicy jest zawsze dodatni';

    calc = (a*a) - (2*a*b) + (b*b);

if (calc < 0 ) {
    document.getElementById("status").innerHTML = lessthan0;
}else if ( calc > 0){
    document.getElementById("status").innerHTML = morethan0;
}else {
    alert('Wynik jest równy zero');
}

document.getElementById("wynik").innerHTML = calc;


