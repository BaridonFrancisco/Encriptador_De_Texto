const textarea=document.querySelectorAll('textarea');
const botonEncritar=document.querySelector('.encriptar')
const botonDesencriptar=document.querySelector('.desencriptar');

textarea[0].addEventListener("input",(e) => {
    if(e.target.value!=''){
        botonEncritar.removeAttribute('disabled');
    }else{
        botonEncritar.setAttribute('disabled','');
    }
});

textarea[1].addEventListener("input",(e) => {
    if(e.target.value!=''){
        botonDesencriptar.removeAttribute('disabled');
    }else{
        botonDesencriptar.setAttribute('disabled','');
    }
});

