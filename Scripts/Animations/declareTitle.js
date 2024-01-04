
function specialH4(){
    var special = document.getElementById('specialH4');
    if(special != null){
        const title = document.querySelector('.title-element');
        special.textContent = 'عن ' + title.textContent;
    }
}

specialH4();