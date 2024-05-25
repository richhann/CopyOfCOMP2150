# COMP2110 Task Manager 2024

As part of your assignment submission, write notes about your implementation
in this file.

https://web-development-project-group36.pages.dev/

Login Details
- group-36
- um6of


--Julian 

I will be working on implementing the mood widget to our project. It will change colour / display depending on the time of day / day of the week, as well as how many tasks are due.

I have successfully created code which filters the type of display which is shown based on the time of day. I achieve this by creating and storing a Date() object with the current date and time inside a variable and subsequently retrieving the hour of the day from it, and then use if statements to separate which design is called based on that value.

I have also created three separate designs (morning, evening and night) for the different hours of the day. I focus on selecting background images as well as text and border colours which are representative of the 'mood' of that time of the day. This works by utilising the firstUpdated() function as well as the setInterval() function to periodically call 'newStyle()' so that the style attributes are regularly updated to be in accordance with the time of day.

I created filters for the day of week by storing the day of the Date () object inside variable 'day'. The day of the week determines the message which is displayed in the mood widget, and the weekend days entirely change the displayal of the widget.

STYLISTIC SUGGESTIONS:

Hi guys, please see my branch 'julian-style' for my styling suggestions.

These aren't necessarily for colour scheme and are by no means complete. I have mainly experimented with altering the css in the 'main' and 'widgets-container' files to change the display and structure of components across the page.

Here's the changes I propose:

- Set up page layout to be a grid with 4 rows (one for header, one for task board, one for widgets, one for footer. I do this by implementing 'grid' and 'grid-template-rows' in the 'main' css.

- Set up 'widget-container' so that widgets are displayed horizontally across the screen. I use 'grid' and 'grid-template-columns' in the container CSS to do this.

Again this css code is by no means complete just wanted to begin to experiment with page layout.

FINAL REVIEW:

I created a mood widget which changes the displayal of the widget based on the time of day (morning/afternoon/evening) as well as the day of week: weekdays- (mon/tue/wed/thu/fri) and weekend (sat/sun).

The code of the widget essentially filters the displayal as such:

Is it the weekend? 
  - Yes --> display confetti with text 'THE WEEKEND'
  - No:
    -What weekday is it? (display text based on weekday)
    -What time is it? (display text & background associated with time of day):
      Morning : green background
      Afternoon: orange background
      Evening: starry / purple background.
    
  I definitely learned a lot about using CSS and JS in lit components by creating this widget.
  
<br />

---
Ryan's Notes:

For the Assignment task, I (Ryan) am going to do the Task Timer Widget (Implements a count own timer that you can set to a given time)

1st Commit:

- Basic Styling: 
  - I defined CSS styles for the input fields to set their width and margin.

- Constructor: 
  - I initialized properties for the header, hours, minutes, and seconds in the constructor.

- Rendering: 
  - In the render() method, I structured the component's HTML template using lit-html syntax. 

  - I added input fields for hours, minutes, and seconds, each with corresponding event (@input) bound to methods (updateHours, updateMinutes, updateSeconds) for updating the component's state.

- State Updates: 
  - I implemented updateHours, updateMinutes, and updateSeconds methods to update the hours, minutes, and seconds properties respectively when the input values change.

- Time Formatting: 
  - I defined a formatTime utility function to ensure that time values are always displayed with leading zeros.

- Timer Functionality: 
  - I implemented the startTimer() method to calculate the total seconds based on the input hours, minutes, and seconds. 

  - Within the timer function, I set up an interval to update the remaining time every second.

  - The remaining time is calculated in hours, minutes, and seconds, and displayed in the timer element. 

  - If the remaining time reaches zero, the interval is cleared, and "Time's up!" is displayed.

  Overall, I've added added timer widget component with input fields for setting hours, minutes, and seconds, and enough functionality to start a countdown timer based on the input values.

2nd Commit:

- Integration of Audio Element:
  - Embedded the sound effect for when the timer ends using a playSoundEffect() method and accessed the audio element using the shadow root and called the play() to intiated the playback.

  - Used the 'preload="auto"' attribute to ensure the audio file is preloaded (for smoother playback).

- Styling:
    
  - Header Styling:
    - Added a margin-bottom of 20px for spacing.

  - Input Field Styling:
    - Set the font size to 18px and centered with text within the input fields.

    - Button Styling:
      - Styled the button with a green background color (#27AE60), and white text.

      - Added padding.

      - Applied a hover effect to the button to lighten the background color on hover.

  Overall, I've added an alarm and made CSS changes which makes it more the timer widget more engaging.

3rd Commit:

- Properties:
  - Added a 'isPaused' boolean flag to indicate whether the timer is paused or not.

- Styling:
  - Removed the "Time Remaining" text and moved the timer countdown in-between the timer selector and the control buttons.

  - Changed Header text ("Timer Widget" --> "Timer")

- Constructor:
  - I modified it by adding the isPaused flag.

- Rendering:
  - I added code for the 'pauseTimer' and 'ResumeTimer' buttons.

- pauseTimer() & resumeTimer()

  - Created functions, these allow the timer to be paused and resumed at the user's control.

- Also added Commentary to explain what the code does.


<br />

---

Ming

Extending task-card
- [X] Deletion
- [X] Creation
- [X] Improved Editing to change Categories
- [ ] Exploding Task Widget
- [ ] Design (dialogs maybe)


# Editing progression journal

"Deleted" task cards by mistake, Ops

### Causation
Tried to implement category Post request in edit-task.js. 
However, the Post category data was appended \n because I was using the "textfield" tag just as a trial. (hindsight: use select :)

<img width="266" alt="image" src="https://github.com/MQCOMP2110-2024/web-development-project-group36/assets/153143368/8338ed86-63e3-46a4-93f6-19c20b8cc75e">

## Ideas to fix 
- Add new columns to display and edit back the gone task cards
- add a function to filter out \n

  ## Fixed check branch 2 
By using trim() in models.js (local data store) task cards are brought back into the display. via trimming the \n
 ### need to have fixed values for the category to prevent this from happening again.
 Bug 2, the null category just breaks the entire .trim() change ... fixed by adding || "falsy value" column 
<img width="212" alt="image" src="https://github.com/MQCOMP2110-2024/web-development-project-group36/assets/153143368/e11482b7-7e80-473a-96ba-2e542edec4eb">

### Solution... 

use Select tag and use option to set value = "category" name.

Solved everything :shipit:

<img width="246" alt="ok" src="https://github.com/MQCOMP2110-2024/web-development-project-group36/assets/153143368/eea707c2-3bb0-4965-a998-c23480615bd1">
<img width="202" alt="ok2" src="https://github.com/MQCOMP2110-2024/web-development-project-group36/assets/153143368/b2e5d3f2-7055-4804-b05c-43ea524ac184">


as simple as that in edit-task... select tag instead of textfield to save hours of bug fixes and breaking the task cards :) 

# Creation completed
Done by modifying the edit task button(added a function in models.js), it is a lot simpler than expected, the task id is automatically generated!
Deletion should be similar

### Ideas to implement Exploding Task Widget.
Have a default value set to DONE in the selector value in each edit task card.
- A way to trigger an edit
- Maybe use transitions such as fade-out white to look like a nuke >?<
Hopefully this work.


# Design port

Will try to port over some design elements from Assessment 1 (Taking any suggestions for design and improvement)

<img width="937" alt="image" src="https://github.com/MQCOMP2110-2024/web-development-project-group36/assets/153143368/53f7c5d4-f78e-4848-856b-f8784baefd60">

## Julian First Iteration

<img width="473" alt="better" src="https://github.com/MQCOMP2110-2024/web-development-project-group36/assets/153143368/367e2a1f-8cbc-482c-84a7-a741db35451c">

### 2 mixed some concepts in.
<img width="522" alt="Design" src="https://github.com/MQCOMP2110-2024/web-development-project-group36/assets/153143368/73a49f69-ca11-4f0b-86ef-1693dede023f">

### 3 ... gradient sucks will remove, added some what responsive task bars. 
<img width="487" alt="yuck" src="https://github.com/MQCOMP2110-2024/web-development-project-group36/assets/153143368/bc37ce73-05a9-4adc-93ba-d0712b193bef">
