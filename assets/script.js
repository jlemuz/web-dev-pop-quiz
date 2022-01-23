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

//document.querySelector("#question-text").textContent= questionList[0].question;
//document.querySelector("#btn1").textContent = questionList[0].answers[0].text;
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
        quest = document.querySelector(".question");
        var end = document.createElement('h1');
        end.textContent='End'
        quest.appendChild(end);
        
    }
}


function clearQuestion(){
    quest = document.querySelector(".question");
    quest.removeChild(quest.lastElementChild);
    
    ans = document.querySelector(".answer");
    while (ans.firstChild) {
        ans.removeChild(ans.firstChild);
    }
}