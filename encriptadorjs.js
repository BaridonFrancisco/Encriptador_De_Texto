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

botonEncritar.addEventListener('click',(e)=>{
        let valor=textarea[0].value;
        if(valor!=''){
            const arr=valor.split('');
            arr.forEach(element => {
                console.log(element);
            });
        }
        
});

let conversion=function name(arr) {
    let cadena='';
   arr.forEach(element => {
        switch (element) {
            case 'a':
                cadena+='ai';
                break;
            case 'e':
                cadena+='enter';
                break
            case 'i':
                cadena+='imes';
            case 'o':
                cadena+='ober';    
                break;
            case 'u':
                cadena+='ufat';
                break;    
            default:
                cadena+=element;
                break;
        }
   });
   return cadena;
}

