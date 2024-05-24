import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class TimerWidget extends LitElement {
  static properties = {
    header: {type: String},
    isPaused: {type: Boolean} //Flag indictor i.e. if timer = paused.

  };

  static styles = css`
    :host {
        display: block;
        width: 250px;
        height: 250px;
        background: rgb(55, 57, 59);
        background: radial-gradient(circle, rgba(55, 57, 59, 1) 79%, rgba(98, 98, 98, 0.9071925754060325) 90%, rgba(255, 255, 255, 0.08120649651972156) 100%);
        border-radius: 20px;
        color: white;
    }

    input[type="number"]{
      width: 40px;
      margin-right: 5px;
      padding: 5px;
    }

    button{
      background-color: #27AE60;
      color: white;
      cursor: pointer;
      margin-top:20px;
      transition: background-color 0.3 ease;
      padding: 10px 20px;
    }

    button:hover{
      background-color:#2ECC71;
    }

    
  `;

  constructor() {
    //Intialising properties
    super();
    this.header = 'Timer';
    this.hours = 0; //'Hr' section
    this.minutes = 0; //'Min' section
    this.seconds = 0; //'Sec' section
    this.isPaused = false;
  }

  render() {
    return html`
      <style>
        #timer{
          margin-top: 10px;
          font-size: 18px;
        }
      </style>
        <h3>${this.header}</h3>

        <!-- Timer input fields -->
        <input type="number" id="hoursInput" placeholder="Hr" @input="${this.updateHours}" min="0" max="99">
        <input type="number" id="minutesInput" placeholder="Min" @input="${this.updateMinutes}" min="0" max="99">
        <input type="number" id="secondsInput" placeholder="Sec" @input="${this.updateSeconds}" min="0" max="59">
       
        <!--Timer display -->
        <div id ="timer"></div>
        
        <!-- Timer control buttons -->
        <button @click = "${this.startTimer}">Start Timer</button>
        <button @click = "${this.pauseTimer}" ?disabled ="${this.isPaused}">Pause Timer</button>
        <button @click = "${this.resumeTimer}">Resume Timer</button>
       
       <!-- Audio element for timer sound effect -->
        <audio id="timerAudio" src= "src/components/640368__dan2008__calm-alarm.wav" preload="auto"></audio>
    `;
  }

  updateHours(e) {
    this.hours = parseInt(e.target.value); //Turns the string value into the (first) integer
  }

  updateMinutes(e) {
    this.minutes = parseInt(e.target.value); //Turns the string value into the (first) integer
  }

  updateSeconds(e) {
    this.seconds = parseInt(e.target.value); //Turns the string value into the (first) integer
  }

  //Making sure the timer is formatted correctly
  //I.e. if there is a single e.g. '1', it turns into '01' to make it look neater and consistent
  formatTime(time) {
    return time < 10 ? '0' + time : time;
  }

  startTimer() {
    const totalSeconds = (this.hours * 3600) + (this.minutes * 60) + this.seconds;
    const timerElement = this.shadowRoot.getElementById('timer');
    timerElement.innerHTML = ''; //Clear previous if any

    let remainingTime = totalSeconds;

    //Clear previous timer interval if it exists
    if(this.timerInterval){
      clearInterval(this.timerInterval);
    }

    //Intialises the timer interval
    this.timerInterval = setInterval(() => {
      if (!this.isPaused && remainingTime >= 0) {
        const hours = Math.floor(remainingTime / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;
        timerElement.innerHTML = `${this.formatTime(hours)}:${this.formatTime(minutes)}:${this.formatTime(seconds)}`;
        remainingTime--;
      }

      //Stop the timer when the time has run out.
      else if (remainingTime < 0) {
        clearInterval(this.timerInterval);
        timerElement.innerHTML = 'Time\'s Up!';
        this.playSoundEffect(); //Play sound effect
      }
    /* Using a measurement of milliseconds 
    (1000 millisecond == 1 second),
    ensures the timer updates accurately */
    }, 1000);
  }

  pauseTimer(){
    this.isPaused = true;
  }

  resumeTimer(){
    this.isPaused = false;
  }

  playSoundEffect(){
    const audioElement = this.shadowRoot.getElementById('timerAudio');
    audioElement.play();
  }
}

customElements.define('timer-widget', TimerWidget);