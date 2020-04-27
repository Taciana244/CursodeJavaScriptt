function contar (){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = documento.getElementById ('res')
    if(in.value.length==0|| fim.value.length==0|| passo.vallue.length){
        res.innerHTML='Impossível contar'
       // window.alert('[erro] faltam dados !')
        res.innerHTML='Impossível contar'
    } else{
        res.innerhtml='Contando:<br>'
        let i= Number(ini.value)
        let f=Number(fim.value)
        let p = Number(passo.value)
        if(p<= 0){
            window.alert('Passo inválido!Considerando passo 1')
            p=1
        }
        if(i<f){
            //Contagem crescente
            for(let c =i; c<=f; c += p) {
                res.innerHTML += `${c} \u{1f449}`
             }
        }else{
            //Contagem regressiva
        for(let c =i; c<=f; c += p) {
        res.innerhtml += `${c} \u{1f449}`
        }

      }
      res.innerHTML += ` \u{1f3c1}`
    
    }
}
