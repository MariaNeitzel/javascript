    function carregar(){
       var msg= window.document.getElementById('msg')
        var img= window.document.getElementById('imagem') 
        var data= new Date()
        var hora= data.getHours()
        msg.innerHTML= `Agora são ${hora} horas.`
        if(hora >= 0 && < 12) {
            img.src= 'fotomanha.png'
            document.body.style.background= '#223740'
        } else if(hora >= 12 && hora <= 18){
            img.src= '../fototarde'
            document.body.style.background= '#1A2601'
        } else{
            img.src= 'fotonoite.png'
            document.body.style.background= '#035951'
        }
    
