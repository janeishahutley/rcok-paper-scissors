const choices = document.querySelectorAll('i')
const options = document.querySelector('.choices')
const botDisplay = document.querySelector('.bot-message')
const bot = document.querySelector('.bot-total')
const human = document.querySelector('.human-total')
const message = document.querySelector('.message')
const btn = document.querySelector('.btn')
const winningMessage = document.querySelector('.winning-message')
const botMessage = document.querySelector('.bot-message')

let humanChoice
let botChoice
let botScore = 0
let humanScore = 0
let maxScore = 10

choices.forEach((choice) => {
  choice.addEventListener('click', (e) => {
    humanChoice = e.target.id
    botChoice = getbotChoice()
    determineRound()
    winner()
  })
})

const getbotChoice = () => {
  let random = Math.floor(Math.random() * choices.length)
  if (random === 0) {
    botDisplay.innerHTML = `<h3>Bot Chose </h3> <img src ='rock.png' alt = 'image of rock'>`
    botDisplay.style.display = 'block'
    return 'rock'
  } else if (random === 1) {
    botDisplay.innerHTML = `<h3>Bot Chose </h3> <img src ='paper.png' alt = 'image of paper'>`
    botDisplay.style.display = 'block'
    return 'paper'
  } else if (random === 2) {
    botDisplay.innerHTML = `<h3>Bot Chose </h3> <img src ='scissors.png' alt = 'image of scissors'>`
    botDisplay.style.display = 'block'
    return 'scissors'
  }
}

const determineRound = () => {
  if (
    (humanChoice === 'rock' && botChoice === 'rock') ||
    (humanChoice === 'scissors' && botChoice === 'scissors') ||
    (humanChoice === 'paper' && botChoice === 'paper')
  ) {
    botDisplay.innerHTML += `<p class='tied-round'>Tied round!</p>`
  } else if (
    (humanChoice === 'rock' && botChoice === 'scissors') ||
    (humanChoice === 'scissors' && botChoice === 'paper') ||
    (humanChoice === 'paper' && botChoice === 'rock')
  ) {
    humanScore++
    human.innerHTML = `${humanScore}`
  } else {
    botScore++
    bot.innerHTML = `${botScore}`
  }
}

const winningMsg = () => {
  message.style.display = 'block'
  botDisplay.style = 'none'
  options.classList.add('choices-off')
  btn.style.display = 'block'
}

const winner = () => {
  if (humanScore === maxScore) {
    winningMsg()
    winningMessage.innerHTML = 'human wins!'
  } else if (botScore === maxScore) {
    winningMsg()
    winningMessage.innerHTML = 'bot wins!'
  }
}

btn.addEventListener('click', () => {
  message.style.display = 'none'
  humanScore = 0
  botScore = 0
  human.innerHTML = `${humanScore}`
  bot.innerHTML = `${botScore}`
  options.classList.remove('choices-off')
  btn.style.display = 'none'
})
