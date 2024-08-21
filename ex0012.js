function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente! ')
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'crianca-h.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-h.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'homem-adult.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idoso-h.png')
            }
                
        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'crianca-m.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-m.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'mulher-adult.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idoso-m.png')
            }
                
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}