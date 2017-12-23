var a = prompt('Podaj zmienna \'A\'');
var b = prompt('Podaj zmienna \'B\'');
var dodatni= 'dodatni';
var ujemny='kwadrat różnicy jest zawsze dodatni';

    calc = (a*a) - (2*a*b) + (b*b);

if (calc < 0 ) {
    document.getElementById("status").innerHTML = ujemny;
}else if ( calc > 0){
    document.getElementById("status").innerHTML = dodatni;
}else {
    alert('Wynik jest równy zero');
}

document.getElementById("wynik").innerHTML = calc;


