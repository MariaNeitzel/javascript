let num=document.querySelector('input#fnum')    
let lista=document.querySelector('select#flista')
let res=document.querySelector('div#res')
let valores= []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n))!= -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.valeu) && !inLista(num.valeu, Valores)){
        valores.push(Number(num.valeu))
        let item= document.createElement('option')
        item.text= `Valor ${num.valeu} adicionado`
        lista.appendChild(item)
        res.innerHTML=''
    }else{
        window.alert('Valro inválido ou já encontrado na lista')
    }
    num.valeu=''
    num.focus()
}

functionfinalizar(){
    if(valores.length ==0){
        window.alert('Adicione valore antes de finalizar')
    }else{
        let tot= valores.length
        let maior= valores[0]
        let menor= valores[0]
        let soma= 0
        let media= 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior =valores[pos]
            if(valores[pos] < manor)
             menor=valores[pos]
        }
        media = soma/tot
        res.innerHTML=''
        res.innerHTML+= `<p> Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML+= `<p>O maior valor informado foi ${maior} </p>`
        res.innerHTML+=`<p>o menor valor informado foi ${menor} </p>`
        res.innerHTML +=`<p>Soma de todos os valores foi ${soma} </p>`
        res.innerHTML+= `<p>A média dos valore e ${media} </p>`
    }
}