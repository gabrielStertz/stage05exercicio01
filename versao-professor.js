const random = Math.round(Math.random() * 10)
let xAttempts = 1
const screen1 = document.querySelector('.screen1')//ele deixou o card comun aos dois e só mudou o conteúdo
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('btnTry')
const btnReset = document.querySelector('btnReset')
const inputNumber = document.querySelector('#inputNumber')
//<input id='inputNumber' type='number'>
//<button id='btnTry'>Tentar</button>
function handleTryClick(event){//Função callback
  event.preventDefault()//porque na dele está dentro de um <form>. Impede de tentar enviar o <form>

  if(Number(inputNumber.value) == random){
    screen2.querySelector('h2').innerText = `Acertou em ${xAttempts} tentativas!`
    toggleScreen()
  }
  inputNumber.value = ""
  xAttempts++
}
function handleResetClick(){// não precisa de event.preventDefault(), pois screen2 não está em <form>
  toggleScreen()
  xAttempts = 1
  
}
function toggleScreen(){
  screen1.classList.toggle('hide')//adiciona hide se não tiver e remove se tiver como uma das classes
  screen2.classList.toggle('hide')

}
// Eventos
btnTry.addEventListener('click', handleTryClick)// como está dentro de um <form>, o enter já funciona
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e){
  if(e.key == 'Enter'){
    handleResetClick()
  }
})