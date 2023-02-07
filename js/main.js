
import Timer from './timer.js'
import Controls from './controls.js'
import Events from './events.js'
import Sound from './sounds.js'
import { 
  buttonPlay,
  buttonPause,
  minutesDisplay,
  secondsDisplay, 
  chooseForest,
  chooseRain,
  chooseCoffeeShop,
  chooseFireplace,
  chooseSoundOff
} from './elements.js'

const controls = Controls ({
  buttonPlay,
  buttonPause,
  chooseForest,
  chooseRain,
  chooseCoffeeShop,
  chooseFireplace,
  chooseSoundOff,
  minutesDisplay,
  secondsDisplay,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay, 
  resetControls: controls.reset,
})

const sound = Sound()

Events({controls, timer, sound})