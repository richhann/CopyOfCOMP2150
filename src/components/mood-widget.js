import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class MoodWidget extends LitElement {
    static properties = {
      header: {type: String},
      timeOfDay: {type: String},
      greeting: {type: String},
      dayOfWeek: {type: String}
    };
  
    static styles = css`
      :host {
          display: block;
          width: 250px;
          height: 250px;
      }

      .greeting {
        font-style: italic;
      }

      .message {
        margin-top: 40px;
        font-size: 20px;
      }
    `;
  
    constructor() {
      super();
      this.header = 'Mood Widget';
      this.timeOfDay = '';
      this.message = '';
      this.dayOfWeek = '';
    }

    firstUpdated() {
      super.firstUpdated();
      this.newStyle();
      setInterval(() => {
          this.newStyle();
      }, 60000);
  }

  newStyle () {
    const todaysDate = new Date(); //store current date / time
    const hour = todaysDate.getHours(); //given 0 to 23
    const day = todaysDate.getDay(); //given 0 to 6 (sunday is 0)

    let backgroundImage;
    let backgroundColour;
    let color;
    let border;
    let textShadow;
    let fontFamily;
    let fontSize;
    let borderRadius;
    let backgroundSize;
    
    //FILTERING BY DAYS OF WEEK
    if(day === 6 || day === 0) {
      this.dayOfWeek = 'THE WEEKEND!';
      this.message ='';
      this.timeOfDay = '';
      backgroundImage = 'url("https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2IyMHlkcjFlbDk2enZubDBhbGFnNHVqeHZ0dzZ4OXV6Z25sZTJsbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PMV7yRpwGO5y9p3DBx/giphy.gif")';
      color = 'white';
      fontFamily = 'courier'
      fontSize = '30px';
      border = '2px solid white';
      borderRadius = '10px';

    }

    else {
      if (day === 1) {
        this.dayOfWeek = 'Monday'
        this.message = 'First day of the week :)'
      }
  
      else if (day === 2) {
        this.dayOfWeek = 'Tuesday'
        this.message = 'Taco Tuesday'
      }
  
      else if (day === 3) {
        this.dayOfWeek = 'Wednesday'
        this.message = 'Halfway there!'
      }
  
      else if (day === 4) {
        this.dayOfWeek = 'Thursday'
        this.message = 'On the downhill'
      }
  
      else if (day === 5) {
        this.dayOfWeek = 'Friday'
        this.message = "Let's gooooooo!"
      }

      //FILTERING BY DAILY HOURS
      if(hour <= 5 || hour >= 17) {          //from 5pm up to 5 am ' night time '
        backgroundImage = 'url("https://images.pexels.com/photos/1921336/pexels-photo-1921336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")';
        backgroundColour = 'navy';
        color = 'white';
        border = '2px solid #391366';
        textShadow = '1px 1px 2px rgba(0, 0, 0, 0.8)';
        fontFamily = 'courier';
        fontSize = '24px';
        borderRadius = '10px'; 
        this.timeOfDay = 'Good evening';
      }
      else if (hour >= 6 && hour <= 11) {      //6 am up to 12pm ' morning '
        backgroundImage = 'url("https://images.pexels.com/photos/446462/pexels-photo-446462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")';
        backgroundColour = '#295706';
        backgroundSize = 'cover'
        color = 'white';
        border = '2px solid #295706';
        textShadow = '1px 1px 2px rgba(0, 0, 0, 0.8)';
        fontFamily = 'COURIER';
        fontSize = '24px';
        borderRadius = '10px';
        this.timeOfDay = 'Good morning!';
      }
      else {                                    //12pm up to 5pm ' afternoon '
        backgroundImage = 'url("https://images.pexels.com/photos/9176254/pexels-photo-9176254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")';
        backgroundColour = '#ffe066';
        color = '#CE6B0E';
        border = '2px solid #CE6B0E';
        fontFamily = 'courier';
        fontSize = '24px';
        borderRadius = '10px';
        this.timeOfDay = 'Good afternoon';
      }
    }
    

    this.style.setProperty('background-color', backgroundColour);
    this.style.setProperty('color', color);
    this.style.setProperty('border', border);
    this.style.setProperty('text-shadow', textShadow);
    this.style.setProperty('font-family', fontFamily);
    this.style.setProperty('font-size', fontSize);
    this.style.setProperty('border-radius', borderRadius);
    this.style.setProperty('background-image', backgroundImage);
    this.style.setProperty('background-size', backgroundSize);
}

  
    render() {
      return html`
          <h3>${this.dayOfWeek}</h3>
          <div class = "greeting">${this.timeOfDay}</div>
          <div class ="message">${this.message}</div>
      `;
    }
  }
  
  customElements.define('mood-widget', MoodWidget);
  