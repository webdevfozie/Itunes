import { radioPlayerInit } from './radioPlayer.js'
import { musicPlayerInit } from './musicPlayer.js'
import { videoPlayerInit } from './videoPlayer.js'

const playerBtns = document.querySelectorAll('.player-btn')
const playerBlocks = document.querySelectorAll('.player-block')
const temp = document.querySelector('.temp')

const disablePlayer = () => {
  temp.style.display = 'none'
  playerBtns.forEach(item => item.classList.remove('active'))
  playerBlocks.forEach(item => item.classList.remove('active'))
}

playerBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    disablePlayer()
    btn.classList.add('active')
    playerBlocks[i].classList.add('active')
  })
})

radioPlayerInit()
musicPlayerInit()
videoPlayerInit()
