(function(){
    function Question(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    };
    
    Question.prototype.displayQuestion = function(){
        console.log(this.question);
    
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    
    };
    
    Question.prototype.checkAnswer = function(anws) {
        if (anws === this.correct){
            console.log('correct');
        } else {
            console.log('incorrect');
        }
    }
    
    var q1 = new Question ('JS coolest?', ['Yes', 'No'], 0);
    var q2 = new Question ('Name of teahcer?', ['John', 'Mike', 'Jonas'], 2);
    var q3 = new Question ('Describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);
     
    
    var questions = [q1, q2, q3];
    var n = Math.floor(Math.random() * questions.length);
    
    questions[n].displayQuestion();
    
    var answers = parseInt(prompt('Select anwser'));
    
    questions[n].checkAnswer(answers);
})();

