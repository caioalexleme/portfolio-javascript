    var buttons = document.getElementById('buttonn')
    buttons.addEventListener('click', click)
    buttons.addEventListener('mouseout', exit)
    buttons.addEventListener('mouseover', entraa)
    buttons.addEventListener('mousemove', move)
function move(){
    buttons.style.background = '#00DFE6'
    buttons.style.color = 'white'
    buttons.value = 'Verificar'
}

function click(){
       
    buttons.style.background = '#9b925f'
    buttons.style.color = '#00DFE6'
    buttons.value = 'Verificar...'
}
function exit(){
    buttons.style.background = 'white'
    buttons.style.color = 'black'
}
function entraa(){
    buttons.style.background = '#00DFE6'
    buttons.style.color = 'white'
}


alert('Meu primeiro portfólio!')
confirm('Vamos testar nossos conhecimentos?')
let nomee = prompt('Antes de começar, qual é o seu nome?')
alert(`É um prazer te conhecer ${nomee}!!!`)

let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
    

function carregar(){

   let select = document.getElementById('select')
   let item = document.createElement('option')
    select.appendChild(item)
    item.innerHTML = 'Digite um número acima!'


    let form1 = document.getElementById('form1')
    let tit = document.createElement('p')
    form1.appendChild(tit)
    tit.innerHTML = 'Já me livrei da maldição'  
    
    let footer = document.getElementById('footer')
    let titf = document.createElement('p')
    footer.appendChild(titf)
    titf.innerHTML = '&copy;Caio Alexandre de Sousa Leme'   

    let msg = document.getElementById('p1')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    
    
    if(hora<13){
        msg.innerHTML = '<p1>Bom dia!!!</p>'
        let div = document.querySelector('div#p1')
        let divimg = document.querySelector('div#img')
        img.src = 'imagens/manha.png'
        let p1 = document.getElementsByTagName('p1')[0]
        div.style.textAlign = 'center'
        divimg.style.textAlign = 'center'
        p1.style.color = '#0174b9'
        p1.style.fontSize = '29px'
        p1.style.fontFamily = 'Wall Disney Script'
        p1.style.fontStyle = 'italic'
        p1.style.fontWeight = 'Bold'

    }else if(hora<19){
        msg.innerHTML = '<p1>Boa tarde!!!</p>' 
        let div = document.querySelector('div#p1')
        let divimg = document.querySelector('div#img')
        img.src = 'imagens/tarde.png'
        let p1 = document.getElementsByTagName('p1')[0]
        div.style.textAlign = 'center'
        divimg.style.textAlign = 'center'
        p1.style.color = 'rgba(246, 200, 36,.9)'
        p1.style.fontSize = '29px'
        p1.style.fontFamily = 'Wall Disney Script'
        p1.style.fontStyle = 'italic'
        p1.style.fontWeight = 'Bold'
    }else{
        msg.innerHTML = '<p1>Boa noite!!!</p>'
        let div = document.querySelector('div#p1')
        let divimg = document.querySelector('div#img')
        img.src = 'imagens/noite.png'
        let p1 = document.getElementsByTagName('p1')[0]
        div.style.textAlign = 'center'
        divimg.style.textAlign = 'center'
        p1.style.color = '#8f72a8'
        p1.style.fontSize = '29px'
        p1.style.fontFamily = 'Wall Disney Script'
        p1.style.fontStyle = 'italic'
        p1.style.fontWeight = 'Bold'
    }
}

function somarr(){    
    let v1 = Number(n1.value)
    let v2 = Number(n2.value)
    if(n1.value.length == 0 || n2.value.length == 0){
        alert('Por favor, preencha os dois campos!')
        if(n1.value.length == 0){
        n1.focus()
    }else{ n2.focus()} }
        else{
    alert(`A soma entre ${v1} e ${v2} é igual à: [${v1+v2}]`)
}
}
function subtrair(){
    let v1 = Number(n1.value)
    let v2 = Number(n2.value)
    if(n1.value.length == 0 || n2.value.length == 0){
        alert('Por favor, preencha os dois campos!')
        if(n1.value.length == 0){
            n1.focus()
        }else{ n2.focus()} }
        else{

    alert(` ${v1} menos ${v2} é igual à: [${v1-v2}]`)
}
}
function multiplicar(){
    let v1 = Number(n1.value)
    let v2 = Number(n2.value)
    if(n1.value.length == 0 || n2.value.length == 0){
        alert('Por favor, preencha os dois campos!')
        if(n1.value.length == 0){
            n1.focus()
        }else{n2.focus()}
    }else{
alert(`A multiplicação entre ${v1} e ${v2} é igual à: [${v1*v2}] `)
}
}
function dividir(){
let v1 = Number(n1.value)
let v2 = Number(n2.value)
if(n1.value.length == 0 || n2.value.length == 0){
    alert('Por favor, preencha os dois campos!')
    if(n1.value.length == 0){
        n1.focus()
    }else{
        n2.focus()
    }
}else{
alert(`${v1} dividido por ${v2} é igual à: [${v1/v2}]`)
}
}
function rdivisao(){
let v1 = Number(n1.value)
let v2 = Number(n2.value)
if(n1.value.length == 0 || n2.value.length == 0){
    alert('Por favor, preencha os dois campos!')
    if(n1.value.length == 0){
        n1.focus()
    }else{n2.focus()}
}
else if(v2 > v1){
    alert('O 1º valor (dividendo) precisa ser MAIOR ou IGUAL ao 2º valor (divisor)!')
    n1.focus()
    n1.value = ''
}

else{
alert(`O resto da divisão de ${v1} por ${v2} é igual à: [${v1%v2}]`)
}
}

function nome(){
    let nome = document.querySelector('input#nome')
    let res = document.querySelector('div#res')
    
    res.innerHTML = `<p>Seu texto tem ${nome.value.length} caracteres contando com os espaços!</p>`
    res.innerHTML += `<p>Seu texto em maiúsculas é: <strong>${nome.value.toUpperCase()}</strong></p>`
    res.innerHTML += `<p>Seu texto em minúsculas é: <strong> ${nome.value.toLowerCase()}</strong></p>`
    nome.value = ''
    nome.focus()
}

function converter(){
    dinn = document.getElementById('din')
    din = Number(document.querySelector('input#din').value) 
    dind = Number(document.querySelector('input#din').value) / 5.55
    dine = Number(document.querySelector('input#din').value)  / 6.64
    res = document.getElementById('res4')
    res.innerHTML ='<p>'+ din.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) + '</p>'
    res.innerHTML += '<p>'+dind.toLocaleString('pt-br', {style: 'currency', currency: 'USD'}) + '</p>'
    res.innerHTML += '<p>'+dine.toLocaleString('pt-br', {style: 'currency', currency: 'EUR'}) +'</p>'
    dinn.value = ''
    dinn.focus()


}

function virgula(){
    n11 = document.getElementById('numflu')
    n1 = Number(document.getElementById('numflu').value)
    res = document.getElementById('resflu')
    res.innerHTML = '<p>' + n1.toFixed(8).replace('.',',') +'</p>'
    n11.focus()
    
}
function ponto(){
    n11 = document.getElementById('numflu')
    n1 = Number(document.getElementById('numflu').value)
    res = document.getElementById('resflu')
    res.innerHTML = '<p>' + n1.toFixed(8).replace(',','.') +'</p>'
    n11.focus()
}

var a = document.getElementById('area')
        a.addEventListener('click', clicar)
        a.addEventListener('mouseenter', entrar)
        a.addEventListener('mouseout', sair)
function sair(){
            a.innerHTML = 'Saiu!'
            a.style.background = 'green'
        }
function entrar(){
            a.innerHTML = '<strong>Entrou!</strong>'
        }
function clicar(){
            a.innerHTML = 'Clicou!'
            a.style.background = 'red'
        }

function vervel(){
let n1 = document.getElementById('velp')
let n2 = document.getElementById('vel')
let res = document.getElementById('resvel')
if(n1.value.length == 0 || n2.value.length == 0){
    alert('Preencha o limite de velocidade e à quanto você passou corretamente!')
    n1.focus()
    res.innerHTML = ''
    if(n1.value.length == 0){
    n1.focus()
}else if(n2.value.length == 0){n2.focus()}
}else{
resvel.innerHTML = `<p>Sua velocidade é ${Number(vel.value).toFixed(1).replace('.',',')} Km/h!</p>`
if(Number(vel.value)>Number(velp.value) + 7){
res.innerHTML += '<p>Você foi <strong>Multado!</strong> por excesso de velocidade!</p>'
res.innerHTML += '<p>Dirija sempre com segurança!</p>'
}else{
    res.innerHTML += '<p>Dirija sempre com segurança!</p>'
}
n1.focus()
n1.value = ''
n2.value = ''
}

}

function nacionalidade(){
    nac = document.getElementById('nac')
    res = document.getElementById('resnac')
    if(nac.value.length == 0){
        alert('Preencha em qual país você nasceu!')
        res.innerHTML = ''
    }
    else if(String(nac.value) == 'Brasil' || String(nac.value) == 'brasil' || String(nac.value) == 'BRASIL'){
        res.innerHTML = '<p>Você é brasileiro!</p>'
    }else{
        res.innerHTML = '<p>Você é estrangeiro!</p>'
    }
    nac.value = ''
    nac.focus()
}
function voto(){
    let idade = Number(document.getElementById('idade').value)
    res = document.getElementById('resvoto')
    n1 = document.getElementById('idade')
    if(idade <16){
        res.innerHTML = `<p>Você tem ${idade} anos de idade. Não vota!</p>`
    }else if(idade<18 || idade >=65){
        res.innerHTML = `<p>Você tem ${idade} anos de idade. Voto opcional!</p>`
    }else{
        res.innerHTML = `<p>Você tem ${idade} anos de idade. Voto obrigatório!</p>`
    }
    n1.value = ''
    n1.focus()
}

function per(){
     let data = new Date()
     let hora = data.getHours()
     let min = data.getMinutes()
    res = document.querySelector('div#reshora')
if(min<10){
min = '0' + min
}
if(hora<10){
hora = '0' + hora
}

    if(hora <0 || hora>23.59){
        alert('Hora errada tente novamente!')
    }else if(hora<5){
        res.innerHTML = `<p>Boa madrugada! ${hora}h${min}</p>`
        
    }else if(hora<13){
        res.innerHTML = `<p>Bom Dia! ${hora}h${min}</p>`

    }else if(hora<19){
        res.innerHTML = `<p>Boa tarde! ${hora}h${min}</p>`
    }else{
        res.innerHTML =  `<p>Boa noite! ${hora}h${min}</p>`
    }
}
function dia(){
     let data = new Date()
     res = document.querySelector('div#resdia')
     let dias = data.getDay()
     let dia = data.getDate()
     let mes = data.getMonth()
     let ano = data.getFullYear()
    mes += 1
    switch(dias){
        case 0:
            res.innerHTML = `<p>Domingo! ${dia}/${mes}/${ano}</p>`
            break
            

        case 1:
            res.innerHTML = `<p>Segunda-feira! ${dia}/${mes}/${ano}</p>`
            break
            

        case 2: 
        res.innerHTML = `<p>Terça-feira! ${dia}/${mes}/${ano}</p>`
        break
        

        case 3:
            res.innerHTML = `<p>Quarta-feira! ${dia}/${mes}/${ano}</p>`
            break
            

        case 4:
            res.innerHTML = `<p>Quinta-feira! ${dia}/${mes}/${ano}</p>`
            break
            

        case 5:
            res.innerHTML = `<p>Sexta-feira! ${dia}/${mes}/${ano}</p>`
            break
        default:
            res.innerHTML = `<p>Sábado! ${dia}/${mes}/${ano}</p>`
    }
}

function passos(){
    let pas = 1
    while(pas<=10){
        alert('Passo '+ pas + '!')
        pas++
    }
}
function passoss(){
    let pas = 1
    do{
        alert('Passo ' + pas + '!')
        pas ++
    }while(pas <=10)
}
function passosss(){
    
    for(let pas = 1; pas<=10; pas++){
        alert('Passo ' + pas + '!')
    }
}
function notas(){
    let nota = Number(document.getElementById('nota').value)
    let nota1 = document.getElementById('nota')
    if(nota1.value.length == 0){
        alert('Qual foi sua nota?') 
    }
    else if(nota<0 || nota>10){
        alert('nota de 0 à 10, confira sua nota e tente novamente!')
    }else{
        nota>=7?alert('Aprovado'):alert('Reprovado')
    }
    nota1.value = ''
    nota1.focus()
}
function aprevalo(){
    let array = [9,4,7,3,5,2]
    alert(array)
}
function npva(){
    let array = [9,4,7,3,5,2]
    alert(`O vetor tem ${array.length} posições`)
}
function troval(){
   array = [9,4,7,3,5,2]
   res = document.getElementById('resarray')
   res.innerHTML = `<p>${array}</p>`
   array[2]= 6
   res.innerHTML += `<p>${array}</p>`
}
function p2(){
    array = [9,4,7,3,5,2]
alert('[x,x,x,x,x,' + array[5] + ']')
}
function ins8(){
    array = [9,4,7,3,5,2]
    res = document.getElementById('resarray')
    res.innerHTML = `<p>${array}</p>`
    array.push(8)
    res.innerHTML += `<p>${array}</p>`
}
function ordenar(){
    array = [9,4,7,3,5,2]
    res = document.getElementById('resarray')
    res.innerHTML = `<p>${array}</p>`
    array.sort()
    res.innerHTML += `<p>${array}</p>`
}
function evrp(){
    let array = [9,4,7,3,5,2]
    res = document.getElementById('resarray')
    res.innerHTML = ''
    for(let pos in array){
        res.innerHTML += `<p> posição ${pos} tem o valor ${array[pos]}<p>`
    }
}
function pv9(){
    array = [9,4,7,3,5,2]
    numm = document.getElementById('num')
    num = Number(document.getElementById('num').value)
    //let ressarray = document.getElementById('ressaray')
    if(array.indexOf(num) == -1){
        resarray.innerHTML = '<p>Valor não encontrado no vetor!</p>'
        numm.value = ''
        numm.focus()
        
    }else{
        resarray.innerHTML = `<p>O valor solicitado está na posição ${array.indexOf(num)}!</p>`
}
    numm.value = ''
    numm.focus()
}
function parimp(){
    num = document.getElementById('number')
    if(num.value.length == 0){
        alert('Por favor digite um número!')
        resparimp.innerHTML = ''
    }
    else if(Number(num.value)%2 == 0){
        resparimp.innerHTML = '<p>Par</p>'
    }else{
        resparimp.innerHTML = '<p>Ímpar</p>'
    }
    num.value = ''
    num.focus()
}

nu1 = document.getElementById('num1')
nu2 = document.getElementById('num2')
function somar(n1=0,n2=0){
    
    return n1 + n2
    
}
function adicao(){
    
    
    resoma.innerHTML = `<p>${somar(Number(nu1.value), Number(nu2.value))}</p>`
    nu1.value = ''
    nu2 . value = ''
    nu1.focus()
    
}

numx = document.getElementById('numx')
let multiplica = function (x){
    return x*2
}
function mult(){
    resmult.innerHTML = `<p>${multiplica(Number(numx.value))}</p>`
    numx.value = ''
    numx.focus()
}

numfat = document.getElementById('numfat')
function dfatorial(numfat){
    let fat = 1
    for(numfat = Number(numfat.value); numfat>1; numfat--){
        fat*=numfat
    }
    return fat

}

function fatorial(){
    if(Number(numfat.value) == 0){
        alert('[ERRO] Digite um número diferente de zero (0)!')
        numfat.value = ''
        numfat.focus()
        resfat.innerHTML = ''
    }else{
    resfat.innerHTML = `<p>O fatorial de ${Number(numfat.value)} é ${dfatorial(numfat)}! </p>`
    numfat.value = ''
    numfat.focus()
}
}

numfato = document.getElementById('numfato')
function efatorial(numfato){
if(numfato ==1 ){
    return 1
}else{
    return numfato * efatorial(numfato - 1)
}
    
}
function fatorialr(){
    if(Number(numfato.value) == 0){
        alert('[ERRO] Digite um número diferente de zero (0)!')
        numfato.value = ''
        numfato.focus()
        resfatr.innerHTML = ''
    }else{
    resfatr.innerHTML = `<p>O fatorial de ${Number(numfato.value)} é ${efatorial(Number(numfato.value))}</p>`
    numfato.value = ''
    numfato.focus()
}
}

function peso(){
    amigo = {nome: document.getElementById('name').value, sexo: document.getElementsByName('sexo'), gordo: Number(gorda.value), peso: Number(pesos.value), engordar(){
        amigo.peso = amigo.peso+amigo.gordo
    }}
    if(amigo.sexo[0].checked){
        amigo.sexo = 'Masculino'
    }else{
        amigo.sexo = 'Feminino'
    }

    
    respeso.innerHTML = `<p>Nome: ${amigo.nome};<br> Sexo: '${amigo.sexo}';<br>  Peso: ${amigo.peso}Kg;<br> Caso engorde: ${amigo.gordo}Kg, seu peso será: ${amigo.gordo + amigo.peso}Kg!</p>`
    
    
}

function idade(){
    let sexo = document.getElementsByName('sexoo')
    let idade = document.getElementById('nasc')
    let data = new Date()
    ano = data.getFullYear()
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(idade.value.length == 0 || Number(idade.value < 1899) || Number(idade.value > ano)){
        alert('[ERRO] Preencha os dados e tente novamente!')
        residade.innerHTML = ''
        idade.value = ''
        idade.focus()
    }else{
        idade = ano - Number(idade.value) 
        if(sexo[0].checked){
            residade.innerHTML = `<p>Detectamos um homem com ${idade} anos de idade! </p>`
            if(idade<5){
                img.setAttribute('src', 'imagens/bbh.png')
                
            }else if(idade<18){
                img.setAttribute('src', 'imagens/adh.png')
            }
            else if(idade<50){
                img.setAttribute('src', 'imagens/homem.png')
            }else{
                img.setAttribute('src', 'imagens/idoso.png')
            }
        }else{
            residade.innerHTML = `<p>Detectamos uma mulher com ${idade} anos de idade!</p>`
            if(idade<5){
                img.setAttribute('src', 'imagens/bbm.png')
                
            }else if(idade<18){
                img.setAttribute('src', 'imagens/adm.png')
            }
            else if(idade<50){
                img.setAttribute('src', 'imagens/mulher.png')
            }else{
                img.setAttribute('src', 'imagens/idosa.png')
            }
            
        }
                
    }
residade.appendChild(img)
residade.style.textAlign = 'center'
nasc.focus()

}

function contar(){
    let inicio = document.querySelector('input#inicio')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    rescontar.innerHTML = 'Contando...<br>'
    rescontar.style.fontSize = '1.5em'
    if(inicio.value.length == 0|| fim.value.length == 0 || passo.value.length == 0){
        alert('Confira os dados e tente novamente')
        inicio.focus()
    }else{
        let p = Number(passo.value)
        if(Number(passo.value) <= 0){
        alert('Valor de Passo inválido, contando de 1 em 1!')
        p= 1
    }
    
      if(Number(inicio.value)>Number(fim.value)){
        for(let i  = Number(inicio.value); i>=Number(fim.value); i-=p){
            
            rescontar.innerHTML += ` \u{1F449} ${i}  `
            
        }
    }else{
        for(let i = Number(inicio.value); i <= Number(fim.value); i+=p){
            
            rescontar.innerHTML += ` \u{1F449} ${i} `
                
        }
        
    }
    rescontar.innerHTML += '\u{1F645}' 
    inicio.focus()
    rescontar.style.color = 'blue'
    rescontar.style.fontSize = '1.5em'
    
}
}

function tabuada(){
    let num = document.getElementById('numtab')
    
    let select = document.getElementById('select')
    if(num.value.length == 0){
        alert('Digite um número por favor!!!')
        num.focus()
        select.innerHTML = ''
        let item = document.createElement('option')
            select.appendChild(item)
            item.text = 'Digite um número acima!'        
        item.style.background = 'rgba(196, 196, 196, 0.692)'
    
    }else{
        let c = 1
        let n1 = Number(num.value)
        select.innerHTML = ''
        while(c<=10){
            let item = document.createElement('option')
            select.appendChild(item)
            item.text = `${n1} x ${c} = ${n1*c}`
            c++           
        }
        num.focus()
        num.value = ''       
    
    }
}

let n100 = document.getElementById('n100')
let lista = document.getElementById('lista')
let valores = []
let resanalisador = document.getElementById('resanalisador')
function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
 if(l.indexOf(Number(n)) !=-1){
     return true
 }   
    return false
}
function adicionar(){
    if(isNumero(n100.value) && !inLista(n100.value, valores)){
        valores.push(Number(n100.value))
        let item = document.createElement('option')
        item.innerHTML = `Valor ${n100.value} adicionado!`
        lista.appendChild(item)
        resanalisador.innerHTML = ''       
    }else{
        alert('Valor inválido ou ja encontrado na lista!')

    }
    n100.focus()
    n100.value = ''
}
function analisar(){
    if(valores.length == 0){
        alert(`[ERRO] Lista vazia adicione dados acima antes de finalizar!`)
        n100.focus()
    }else{
        let tot = valores.length
        let maior = valores[0]
     let menor = valores[0]
     let soma = 0
     for(let pos in valores){
         soma += valores[pos]
         if(valores[pos] > maior){
             maior = valores[pos]
         }
         if(valores[pos]< menor){
             menor = valores[pos]
         }

     }
     let media = soma/tot
     resanalisador.innerHTML = `<p>Ao todo temos ${tot} valor(es) cadastrado(s)!</p>`
     resanalisador.innerHTML += `<p>O maior valor é ${maior}!</p>`
     resanalisador.innerHTML += `<p>O menor valor é ${menor}!</p>`
     resanalisador.innerHTML += `<p>A soma dos valores é ${soma}!</p>`
     resanalisador.innerHTML += `<p>A média dos valores é ${media}!</p>`
     
     n100.value = ''
    }
}

    

