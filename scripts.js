/* RAINSTORM */

console.log('test')

/* Variables */
let play = document.querySelector('.play')
let vid = document.querySelector('.vid')
let body = document.body
let thunder = document.querySelector('.thunder')
let cloud = document.querySelector('.cloud')

console.log(play)
console.log(vid)



/* Functions*/
function playPause() {

if (body.id == 'playing') {
  vid.pause()
  thunder.pause()
  body.id = ''
}

else {
  vid.play()
  thunder.play()
  body.id = 'playing'
}
}

function cloudA (){
  body.style.backgroundColor = '#000000'
  thunder.play()
}

function cloudB (){
  body.style.backgroundColor = '#ffffff'
  thunder.pause()
}

play.addEventListener('click', playPause)

cloud.addEventListener('mouseenter', cloudA)

cloud.addEventListener('mouseleave', cloudB)
