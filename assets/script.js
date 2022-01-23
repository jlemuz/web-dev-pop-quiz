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
        {text:'3. quotes', correct:false},
        {text:'4. paranthesis', correct:false}
    ]
    },

    {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    answers: [
        {text:'1. Javascript', correct: false},
        {text:'2. terminal/bash', correct: false},
        {text:'3. for loops', correct: false},
        {text:'4. console.log', correct: false}
    ]
    }
]


var start = document.querySelector("#start")
start.addEventListener('click', displayquestion)
var question_num=0;

function displayquestion(){
    clearQuestion();
        if(question_num<questionList.length){
        var quest = document.createElement('h1');
        quest.textContent = questionList[question_num].question;
        document.querySelector(".question").appendChild(quest);
        for(j=0; j<questionList[question_num].answers.length;j++){
            var ans = document.createElement('button');
            ans.addEventListener('click', displayquestion);
            ans.textContent = questionList[question_num].answers[j].text;
            document.querySelector(".answer").appendChild(ans);
        };
        return question_num++;
    }
    else{
        end_page();
        
    }
}


function end_page(){
    quest = document.querySelector(".question");
    var end = document.createElement('h1');
    end.textContent='All done'

    var score_text = document.createElement('p');
    score_text.textContent = "Your final score is " 

    var enter_name= document.createElement('input');
    enter_name.setAttribute('id', 'score_name');
    enter_name.setAttribute('required', '');

    var submit_name = document.createElement('button');
    submit_name.textContent = "Submit";
    submit_name.setAttribute('id', 'submit_name');
    submit_name.addEventListener('click', goToBoard);

    quest.appendChild(end);
    quest.appendChild(score_text);
    quest.appendChild(enter_name);
    quest.appendChild(submit_name);
}


let scoreboard = [];

function goToBoard(){
    clearQuestion();
    scoreboard.push(document.querySelector("#score_name").value);
    console.log(document.querySelector("#score_name").value);
    localStorage.setItem("scores", JSON.stringify(scoreboard));
}


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


