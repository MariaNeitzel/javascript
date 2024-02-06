   function contar(){
    let ini=document.getElementById('txti')
    let fim=document.getElementById('txtf')
    let passo=document.getElementById('txtp')
    let res=document.getElementById('res')

    if(ini.valeu.letngth ==0 || fim.valeu.letngth ==0 || passo.valeu.letngth ==0){
        window.alert('[ERRO] Faltam dados!')
    }else{
        res.innerHTML= 'Contado'
        let i= Number(ini.valeu)
        let f= Number(fim.valeu)
        let p= Number(passo.valeu)
        if(p<=0){
            window.alert('Passo inválido! Considerando Paaso 1')
            p=1
        }
        if(i<f){
            for(let c= i; c<= f; c+=p){
                res.innerHTML+= ` ${c}\u{1F449} `  
            }
        }else{
            for(let c=i;c >=f;c-=p){
               res.innerHTML+= ` ${c}\u{1F449} ` 
            }
        }
         res.innerHTML+=`\u{1F3C1}`
    }
   } 