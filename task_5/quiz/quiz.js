let currentQuestionIndex = 0;
let selectedQuestions = [];
let points = 0;
let answerStates = []; 

fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        selectedQuestions = getRandomQuestions(data, 5);
        selectedQuestions.forEach(() => answerStates.push(null));
        displayQuestion(selectedQuestions[currentQuestionIndex]);
    })
    .catch(error => console.error('Error fetching the questions:', error));

function getRandomQuestions(questions, num) {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function displayQuestion(question) {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    questionElement.textContent = question.question;
    answersElement.innerHTML = '';

    for (let key in question.choices) {
        const button = document.createElement('button');
        button.textContent = question.choices[key];
        button.classList.add('border', 'border-gray-300', 'p-4', 'rounded-md', 'mb-2');
        
        button.dataset.answerKey = key;
        
        if (answerStates[currentQuestionIndex] !== null) {
            button.disabled = true;
            if (key === question.correct_answer) {
                button.classList.add('bg-green-500', 'text-white');
            } else if (key === answerStates[currentQuestionIndex]) {
                button.classList.add('bg-red-500', 'text-white');
            }
        } else {
            button.onclick = () => selectAnswer(key, button);
        }
        
        answersElement.appendChild(button);
    }

    document.getElementById('backBtn').style.display = currentQuestionIndex === 0 ? 'none' : 'block';
}

function selectAnswer(selectedKey, button) {
    const question = selectedQuestions[currentQuestionIndex];
    const correctAnswer = question.correct_answer;

    if (selectedKey === correctAnswer) {
        points++;
        button.classList.add('bg-green-500', 'text-white');
    } else {
        button.classList.add('bg-red-500', 'text-white');
        document.querySelector(`button[data-answer-key="${correctAnswer}"]`).classList.add('bg-green-500', 'text-white');
    }
    document.getElementById('points').textContent = `Points: ${points}`;
    answerStates[currentQuestionIndex] = selectedKey;

    document.querySelectorAll('#answers button').forEach(btn => btn.disabled = true);
}

function next() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        displayQuestion(selectedQuestions[currentQuestionIndex]);
    } else {
        alert(`Quiz completed! Your score is: ${points}/5`);
        redirect();
    }
}

function back() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion(selectedQuestions[currentQuestionIndex]);
    }
}

function redirect() {
    window.location.href = 'index.html';
}
