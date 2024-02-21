const textarea=document.querySelectorAll('textarea');
const botonEncritar=document.querySelector('.encriptar')
const botonDesencriptar=document.querySelector('.desencriptar');
const botonBorrar=document.querySelector('.borrar');
const botonesCopiar=[...document.querySelectorAll('.enc > button')];
const advertencia=document.querySelector('.fixed-pos');


textarea[0].addEventListener("input",(e) => {
    if(e.target.value.length!=0){
        botonEncritar.removeAttribute('disabled');
    }else{
        botonEncritar.setAttribute('disabled','');
    }
});

textarea[1].addEventListener("input",(e) => {
    if(e.target.value.length!=0){
        botonDesencriptar.removeAttribute('disabled');
    }else{
        botonDesencriptar.setAttribute('disabled','');
    }
});


// encriptar
botonEncritar.addEventListener('click',(e)=>{
        let valor=textarea[0].value.toLowerCase();
        const result= fun(valor);
        if(!(result.status=='ok'))return; // si el status de la promesa no es ok 
        //if(!validacion)return;
         // todas las coincidencias para las cadenas que comiencen con un espacio solo o mas
        if(valor.length!=0 && !(/^\s*$/g).test(valor)){
            let stream=textarea[0].value.split('')
                                  .reduce((acumulador,valorActual)=>{ return acumulador+conver(valorActual) },'')
                                  .toString();
            textarea[1].value=stream;    
            botonDesencriptar.removeAttribute('disabled');
            
        }
        
});
// desencriptar
botonDesencriptar.addEventListener('click',(e)=>{
    const result= fun(textarea[1].value.toLocaleLowerCase());
    if(!(result.status=='ok'))return;
    if(textarea[1].value.length!=0 && !(/^\s*$/g).test(textarea[1].value)){
        const text=textarea[1].value
                             .match(/(ai)|(ober)|(ufat)|(imes)|(enter)|./g)
                             .map((letra)=>decodificar(letra))
                             .join('')                 
        textarea[0].value=text;
        botonEncritar.removeAttribute('disabled');
                   
    }

});


//borrar
botonBorrar.addEventListener('click',(e)=>{
        textarea[0].value='',textarea[1].value='';
        botonDesencriptar.setAttribute('disabled','');
        botonEncritar.setAttribute('disabled','');
});

// botones copiar
botonesCopiar.forEach((boton, indice) => {
    boton.addEventListener('click', () => {
        console.log(indice);
      const textareaCorrespondiente = textarea[indice];
      navigator.clipboard.writeText(textareaCorrespondiente.value);
    });
  });


// version sin expresion regular
function validarDatos(str) {
    let aux=true;
    str.split('').forEach(element => {
     if(!((element.charCodeAt(0)>=96 && element.charCodeAt(0)<=122)
     ||(element.charCodeAt(0)>47 && element.charCodeAt(0)<=57)||((element.charCodeAt(0)==32)) || (element.charCodeAt(0)==10)))aux=false;
   
 });
    return aux;
}

/*todas letras al inicio ^ en el rango a-z 0-9 \s incluye espacios */
function validar2(str) {
    return (/^[a-z0-9\s]+$/i).test(str);
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

function decodificar(str) {
    switch (str) {
        case 'ai':
            str='a';
            break;
        case 'ober':
            str='o'
            break
        case 'enter':
            str='e';
            break
        case 'imes':
            str='i';
            break
        case 'ufat':
            str='u';       
        default:
            break;
    }
    return str;
}
  const fun =(str) => {
    if (!validarDatos(str)) {
        messageError();
        return{
           error:'Ha ocurrido un error'   
        };
    }
    return{
        status:'ok',
        message:'sin problemas'
    };
   
  }
 function messageError() {
    setTimeout(()=>{
        console.log('Ha ocurrido un error')
        advertencia.removeAttribute('hidden');
        
    },100)
    setTimeout(()=>{
        advertencia.setAttribute('hidden','');
    },4000);
   
    
}
