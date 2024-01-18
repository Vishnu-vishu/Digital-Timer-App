// Write your code here
import {Component} from 'react'

import './index.css'

const initialState = {
    isTimerRunning: false,
    timeElapsedinSeconds: 0,
    timeLimitInMinutes: 25,
}

class DigitalTimer extends Component {
    state = initialState

}
export default DigitalTimer