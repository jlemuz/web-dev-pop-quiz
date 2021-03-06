//Initializes the object of questions and answer choices
questionList = [
    {
    question: 'Commonly used data types DO Not Include',
    answers:[
        {text: '1. strings', correct: false},
        {text: '2. booleans', correct: false},
        {text: '3. alerts', correct: true},
        {text: '4. numbers', correct: false}
    ]
    },

    {
    question: 'The condition of an if/else statement is enclosed with',
    answers:[
        {text:'1. quotes', correct:false},
        {text:'2. curly braces', correct:true},
        {text:'3. paranthesis', correct:false},
        {text:'4. square brackets', correct:false}
    ]
    },

    {
    question: 'Arrays in Javascript can be used to store _________',
    answers:[
        {text: '1. numbers and strings ', correct: false},
        {text: '2. other arrays', correct: false},
        {text: '3. booleans', correct: false},
        {text: '4. all of the above', correct: true},
    ]
    },

    {
    question: 'String values must be enclosed within _________ when being assigned to variables',
    answers:[
        {text:'1. commas', correct:false},
        {text:'2. curly brackets', correct:false},
        {text:'3. quotes', correct:true},
        {text:'4. paranthesis', correct:false}
    ]
    },

    {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    answers: [
        {text:'1. Javascript', correct: false},
        {text:'2. terminal/bash', correct: false},
        {text:'3. for loops', correct: false},
        {text:'4. console.log', correct: true}
    ]
    }
]

//Initializes the initial time counter and score variables
var timeLeft = 75;
var score;
//Initializes the countdown function.
function countdown() {
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1 ) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--
        ;
        //Once the quiz reaches the end page the timer is stopped through the clearInterval method.
        if(document.querySelector('#done')){
            clearInterval(timeInterval);
            //Sets the score to whatever time was left in the timer.
            score = timeLeft+1;
        }
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else{
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        //sets the score to 0 goes to the end page.
        score = timeLeft
        ;
        clearQuestion();
        clearAnswer();
        end_page();
        // Call the `displayMessage()` function
      }
    }, 1000);


  }


//Once the start button is pressed, the timer starts, the start page is cleared, 
//and the function to go through the questionList is called.
var start = document.querySelector("#start");
start.addEventListener('click', clearStart);
start.addEventListener('click', displayquestion);
start.addEventListener('click', countdown);

//Keeps track of the question in list
var question_num=0;

//Generates the question and choices in the DOM
function displayquestion(){
    //removes previous question on DOM
    clearQuestion();
        if(question_num<questionList.length){
        //creates question on DOM and sets text
        var quest = document.createElement('h1');
        quest.textContent = questionList[question_num].question;
        document.querySelector(".question").appendChild(quest);

        for(j=0; j<questionList[question_num].answers.length;j++){
            //creates answer on DOM as list element and sets text
            var ans = document.createElement('button');
            ans.addEventListener('click', checkAnswer)
            ans.addEventListener('click', displayquestion);
            ans.textContent = questionList[question_num].answers[j].text;
            ans.setAttribute('class', questionList[question_num].answers[j].correct);
            document.querySelector(".answer").appendChild(ans);

        };
        return question_num++;
    }
    else{
        // If there's no more questions, renders the end page
        end_page();
    }
}

//Clears the "Correct"/"Wrong" text
function clearAnswer()  {
    var result = document.querySelector('.result-text');
    result.textContent="";
}

//checks if answer selected is correct and sets the message text.
function checkAnswer(e){
  
    var result = document.querySelector('.result-text');
    if(e.target.className==="true"){
            result.textContent = "Correct!";
        }
        else{
            //If it's wrong, it removes 10 seconds from the timer
            timeLeft-=10;
            result.textContent="Wrong!";
            }
    }


//Creates the end page of the quiz that allows the user to enter their name
function end_page(){

    //Renders the All done message
    quest = document.querySelector("#start-container");
    var end = document.createElement('h1');
    end.textContent='All done';
    quest.setAttribute('id', 'done')

    //Renders the final score
    var score_text = document.createElement('p');
    score_text.textContent = "Your final score is :" + timeLeft ;
    score_text.setAttribute('id', 'score_text');

    var init = document.createElement('p');
    init.textContent='Enter Initials';
    //Renders the input box for the name
    var enter_name= document.createElement('input');
    enter_name.setAttribute('id', 'score_name');
    enter_name.setAttribute('label', 'Enter Name: ')
    enter_name.required = 'true';


    //Renders the submit button
    var submit_name = document.createElement('button');
    submit_name.textContent = "Submit";
    submit_name.setAttribute('id', 'submit_name');
    submit_name.addEventListener('click', save);


    //Appends all the previously created elements to the page
    quest.appendChild(end);
    quest.appendChild(score_text);
    quest.appendChild(enter_name);
    quest.appendChild(submit_name);


}


//Clears the initial Start Quiz page
function clearStart(){
    clear = document.querySelector("#start-container");
    while (clear.firstChild) {
        clear.removeChild(clear.firstChild);
    }
}
    
//Clears the questions and answers after each answer is selected
function clearQuestion(){

    quest = document.querySelector(".question");
    while (quest.firstChild) {
        quest.removeChild(quest.firstChild);
    }
    
    ans = document.querySelector(".answer");
    while (ans.firstChild) {
        ans.removeChild(ans.firstChild);
    }
}
    
//Clears All done screen and input 
function clearEnd() {
    quest = document.querySelector("#done");
    while (quest.firstChild) {
        quest.removeChild(quest.firstChild);
    }
}

function save(e){
    e.preventDefault();

    clearAnswer();

    //Sets values for name and score to be added to localStorage
    var new_name = document.querySelector("#score_name").value;
    var new_score = score;

   if (localStorage.getItem('score') == null){
        localStorage.setItem('score', '[]');
   }

   var old_names = JSON.parse(localStorage.getItem('score'));
   old_names.push({new_name, new_score});
   //Saves object to local storage
   localStorage.setItem('score', JSON.stringify(old_names));
   clearEnd();
    create_score();

}


//Clears DOM and creates the high score table
function create_score(){
    document.querySelector("#view-score").textContent='';
    contain = document.querySelector('.container');
    var score_list = document.createElement('h1');
    score_list.textContent="High Scores";
    contain.appendChild(score_list);
    var timerEl = document.querySelector(".time");
    timerEl.textContent='';

    if(localStorage.getItem('score') == null){

    }
    else{
        //For each item in localStorage a list element is created
    for(i=0;i<JSON.parse(localStorage.score).length;i++){
        var list = document.createElement('li');
        //Creates string with name and score
        list.textContent=([i+1] + '. ' + JSON.parse(localStorage.score)[i].new_name + ' - '+JSON.parse(localStorage.score)[i].new_score);
        contain.appendChild(list);
    }
}
    //Creates button in the score table, 'Go Back' and 'Clear high scores'
    var buttons = document.createElement('div');
    contain.appendChild(buttons);    
    buttons.setAttribute('class', 'buttons');

    var back = document.createElement('button');
    back.textContent='Go Back'
    buttons.appendChild(back);
    back.addEventListener('click', ()=>{window.location.reload();})

    var clear= document.createElement('button');
    clear.addEventListener('click', ()=>{
        localStorage.clear();        
        //Clears the high score table each time the hyperlink is pressed to prevent
        //the table from recreating
        while (contain.firstChild) {
        contain.removeChild(contain.firstChild);};
        create_score();
    });
    clear.textContent = ('Clear high scores')
    buttons.appendChild(clear);
}

//Clears the high score table
function clear_score(){
    clear = document.querySelector(".container");
    while (clear.firstChild) {
        clear.removeChild(clear.firstChild);
};
};

//Sets the timer value
var timerEl = document.querySelector(".time");


//Navigates to the high score table from any page in the quiz
document.querySelector('#view-score').addEventListener('click', (e)=>{
    e.preventDefault();
    if(document.querySelector("#start-container")){
        clearStart();
        clearQuestion();
    clearAnswer();
        create_score();
    }
    else{
    clearQuestion();
    clearAnswer();
    clear_score();
    create_score();
    clearEnd();}

    //Removes the high score hyperlink while on this page
    var remove = document.querySelector('#view-score');
    remove.style.visibility = "hidden";
})