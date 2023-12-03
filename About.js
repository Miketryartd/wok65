var cdi = 0;
function nextdiv(){
    var divs = document.querySelectorAll('.content');
    divs[cdi].classList.add('hidden');

    cdi++;

    if (cdi === divs.length){
        cdi = 0;
    }

    divs[cdi].classList.remove('hidden');
}