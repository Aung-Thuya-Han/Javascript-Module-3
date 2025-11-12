'use strict'

const trigger = document.getElementById("trigger")
const target = document.getElementById("target")

target.src = 'img/picA.jpg'

trigger.addEventListener('mouseover', function() {
  target.src = 'img/picB.jpg'
})

trigger.addEventListener('mouseout', function() {
  target.src = 'img/picA.jpg'
})


