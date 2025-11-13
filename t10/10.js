'use strict'

const source = document.getElementById('source')
const target = document.getElementById('target')

source.addEventListener('submit', function() {
  event.preventDefault();

  const firstName = source.querySelector('input[name="firstname"]').value
  const lastName = source.querySelector('input[name="lastname"]').value

  target.textContent = "Your name is " + firstName + " " + lastName + "."
})