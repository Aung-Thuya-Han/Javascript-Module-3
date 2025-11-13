'use strict'

const calculation = document.getElementById('calculation')
const start = document.getElementById('start')
const result = document.getElementById('result')

start.addEventListener('click', function() {
  let answer = 0;
  const userInput = calculation.value
  let splitting = []

  if (userInput.includes("+")) {
    splitting = userInput.split("+")
    answer = Number(splitting[0]) + Number(splitting[1])
  } else if (userInput.includes("-")) {
    splitting = userInput.split("-")
    answer = Number(splitting[0]) - Number(splitting[1])
  } else if (userInput.includes("*")) {
    splitting = userInput.split("*")
    answer = Number(splitting[0]) * Number(splitting[1])
  } else if (userInput.includes("/")) {
    splitting = userInput.split("/")
    answer = Number(splitting[0]) / Number(splitting[1])
  }

  result.textContent = "The answer is " + answer
})