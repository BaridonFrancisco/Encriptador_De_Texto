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
            let stream=arr.filter((word)=>validarDatos(word))
            .reduce((acumulador,valorActual)=>{ return acumulador+conver(valorActual) },'')
            .toString();
            textarea[1].value=stream;    
            
            
            arr.forEach(element => {
                
            });
            
        }
        
});

let encriptar=function(arr) {
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

function validarDatos(str) {
    let aux=true;
    str.split('').forEach(element => {
     if(!((element.charCodeAt(0)>=96 && element.charCodeAt(0)<=122)
     ||(element.charCodeAt(0)>47 && element.charCodeAt(0)<=57)||((element.charCodeAt(0)==32))))aux=false;
   
 });
    return aux;
}

console.log(validarDatos('ts '));

function validar2(str) {
    const regex = /^[a-z0-9\s]+$/i;
    if(regex.test(str)){
        return true;
    }else{
        return false;
    }
}

function conver(str) {
    switch (str) {
        case 'a':
            str='ai';
            break;
        case 'e':
            str='enter';
            break
        case 'i':
            str='imes';
        case 'o':
            str='ober';    
            break;
        case 'u':
           str='ufat';
            break;    
        default:
            break;
    }
    return str;
}

