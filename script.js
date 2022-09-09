const cardText = document.getElementById('cardText')
const guess = document.getElementById('guess')
const button1 = document.getElementById('tentar')
const button2 = document.getElementById('reload')
const card1 = document.getElementById('card1')
const card2 = document.getElementById('card2')
let random = Math.round(Math.random() * 10)
let tries = 1
guess.value = ""
function compare(guess){
  let isEqual = guess == random
  return isEqual
}
function empty(){
  guess.value = ''
  guess.focus()
  tries++
}
function message(){
  cardText.innerText = `Acertou em ${tries} tentativas!`
  card1.classList.toggle('hide')
  card2.classList.toggle('hide')
  button2.focus()
  tries++

}
guess.addEventListener('keyup', function(e){
  if (e.key == 'Enter') { 
    if(compare(Number(guess.value))){
      message()
    } else {
      empty()
    }
    
  }
});
console.log(random)
button1.addEventListener('click', function() {
  if(compare(Number(guess.value))){
    message()
  } else {
    empty()
  }
})
button2.addEventListener('click', () => {
  random = Math.round(Math.random() * 10)
  guess.value = ''
  guess.focus()
  tries = 1
  card1.classList.toggle('hide')
  card2.classList.toggle('hide')
  console.log(random)
})
button2.addEventListener('keyup', function(e){
  if (e.key == 'Enter') { 
    random = Math.round(Math.random() * 10)
    guess.value = ''
    guess.focus()
    tries = 1
    card1.classList.toggle('hide')
    card2.classList.toggle('hide')
    console.log(random)
      
  }
});