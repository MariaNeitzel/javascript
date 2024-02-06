    function verificar() {
        var data= new Date()
        var ano= data.getFullYear()
        var fano= document.getElementById('txtano')
        var res= document.querySelector('div#res')
        if( fano.value.length == 0 || fano.value > ano){
            window.alert('[ERRO] Verifique os dados e tente novamente')
        }else{
            var fsex= document.getElementsByName('radsex')
            var idade= ano- Number(fano.value)
            var gênero=''
            var img= document.createElement('img')
            img.setAttribute('id', 'foto')
            if(fsex[0].checked){
                gênero= 'Homem'
                if(idade >=0 && < 10){
                   //criança  
                   img.setAttribute('src', 'criança-m.png')
                } else if (idade < 21){
                    //jovem
                    img.setAttribute('src', 'jovem-m.png')
                } else if(idade < 50){
                    //adulto
                    img.setAttribute('src', 'adulto.png')
                } else{
                    //idoso
                    img.setAttribute('src', 'idoso.png')
                }
               
            }else if (fsex[1].checked){
                gêreno='Mulher'
                if(idade >=0 && < 10){
                    //criança
                    img.setAttribute('src', 'criança-f.png')  
                 } else if (idade < 21){
                     //jovem
                     img.setAttribute('src', 'jovem-f.png')
                 } else if(idade < 50){
                     //adulto
                     img.setAttribute('src', 'adulta.png')
                 } else{
                     //idoso
                     img.setAttribute('src', 'idosa.png')
                 }
            }
            res.style.texAling='center'
            res.innerHTML= `Detectamos ${gênero} com ${idade} anos`//fucionou
            res.appendChild(img)//nao
        }
    }
    
