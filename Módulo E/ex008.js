function tabuada (){

    let num  = document.getElementById('txtn')
    let tab = document.getElementById('txttab')
    if(num.vale.length==0){

     window.alert('por favor, digite um número !')

    } else{
        let n= Number(num.va)
        let c = 1
        tab.innerHTML=''
        while(c<=10){
            let item = document.createElement('option')
            item.text=`${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
  
    
    }
}
