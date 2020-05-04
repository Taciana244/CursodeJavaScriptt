
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
    if (isnumero(num.value)&& !inlista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.txt= `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML=''

}else{
    window.alert('valor invalido ou já encontrado na lista')
}
num.value=''
num.focus()
}
function finalizar() {
    if(valores.length==0){
        window.alert('adicionar valores antes de finalizar')
    }else{
        let tot= valores.length
        let maior =valores[0]
        let menor= valores[0]
        let soma =0
        let media=0
        for(let pos in valores){
            if(valores[pos]>maior)
             maior=valore[pos]
             if (valores[pos]<menor)
             menor=valores[pos]
        }
        
media=soma/tot
 res.innerHTML=''
res.innerHTML +=  `<p> Ao todo temos ${tot} números cadastrados</p>`
res.innerHTML+=`<p>O maior valor informado foi ${maior}.</p>`
res.innerHTML+=`<p>O menor valor informado foi ${menor}.</p>`
res.innerHTML+=`<p>Somando todos os valores,temos ${soma}.</p>`
res.innerHTML+=`<p>A média dos valores digitados é ${media}.</p>`




    }
  }













    
}
