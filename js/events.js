import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAdd,
  buttonRemove,
  buttonSet,
  chooseForest,
  chooseRain,
  chooseCoffeeShop,
  chooseFireplace,
  chooseSoundOff
} from './elements.js'

export default function ({
  controls,
  timer,
  sound
}) {

  buttonPlay.addEventListener('click', () => {
    controls.play()
    timer.countdown()
    sound.pressButton()
  })

  buttonPause.addEventListener('click', () => {
    controls.reset()
    timer.pauseTimer()
    sound.pressButton()
  })

  buttonStop.addEventListener('click', () => {
    controls.reset()
    timer.resetTimer()
    sound.pressButton()
  })

  buttonAdd.addEventListener('click', () => {
    timer.addTime()
    timer.updateTimer()
    sound.pressButton()
  })

  buttonRemove.addEventListener('click', () => {
    timer.removeTime()
    timer.updateTimer()
    sound.pressButton()
  })
  
  buttonSet.addEventListener('click', () => {
    let newMinutes = timer.getMinutes()
    controls.reset()

    if (!newMinutes) {
      controls.reset()
      timer.pauseTimer()
      return
    }

    timer.updateDisplay(newMinutes, 0)
  })

  chooseForest.addEventListener('click', () => {
    controls.forest()
    sound.forestSound()
  })

  chooseRain.addEventListener('click', () => {
    controls.rain()
    sound.rainSound()
  })

  chooseCoffeeShop.addEventListener('click', () => {
    controls.coffee()
    sound.coffeeShopSound()
  })

  chooseFireplace.addEventListener('click', () => {
    controls.fireplace()
    sound.fireplaceSound()
  })

  chooseSoundOff.addEventListener('click', () => {
    controls.soundOff()
    sound.buttonStopSound()
  })
}