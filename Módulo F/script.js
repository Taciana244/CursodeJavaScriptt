
let num =document.querySelector('inputfnum')
let list= document.querySelector('selectflista')
let res = document.querySelector('divres')
let valores = []
function isnumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true

    }

}else{
     return false
}
function inlista(n,1){
    if(list.indexOf(Number(n)) | -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if (isnumero(num.value)&& inlista(num.value,valores)){
        window.alert('Tudo ok!')

}else{
    window.alert('valor invalido ou já encontrado na lista')
}
