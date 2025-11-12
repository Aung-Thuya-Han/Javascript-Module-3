'use strict'

const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const operation = document.getElementById('operation')
const start = document.getElementById('start')
const result = document.getElementById('result')

start.addEventListener('click', function() {
  let answer = 0
  const a = Number(num1.value)
  const b = Number(num2.value)

  if (operation.value === 'add') {
    answer = a + b
  } else if (operation.value === 'sub') {
    answer = a - b
  } else if (operation.value === 'multi') {
    answer = a * b
  } else if (operation.value === 'div') {
    answer = a / b
  }

  result.textContent = "The answer is " + answer
})



