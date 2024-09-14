

// Buttons
function checkMessage(message) {
   
    setTimeout(() => {
        const botMessage = getBotResponse(message);
        addMessage(botMessage, 'bot');
    }, 500);

}


// Widget
let widget = document.getElementById("pilotXpert-widget");
let openchatContainer = document.querySelector('.bot-container');
let closeIcon = document.getElementById('close');
widget.addEventListener('click', ()=> {
    // alert('hey')
    openchatContainer.classList.remove('hide')
    openchatContainer.classList.add('show')
    widget.classList.add('hide')
})

closeIcon.addEventListener('click', ()=> {
    openchatContainer.classList.remove('show');
    openchatContainer.classList.add('hide');
    widget.classList.remove('hide');
    widget.classList.add('show');
})




//  chat container
document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    
    if (message === '') return;

    addMessage(message, 'user');
    userInput.value = '';

    setTimeout(() => {
        const botMessage = getBotResponse(message);
        addMessage(botMessage, 'bot');
    }, 500);
}

function addMessage(text, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.innerHTML = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('menu')) {
        return `Hi ! I am <strong>PioletXpert</strong>, your virtual assistant, I am Fluent in English!! <br> Tell me please how can i help you.`;
    } 

    else if (lowerCaseMessage.includes(`nick name`)) {
        return `My known people call me appu.`;
    }

    else if (lowerCaseMessage.includes(`language do you speak`)) {
        return `I can speak English and Hindi`;
    }
    
    else if (lowerCaseMessage.includes('your name') || lowerCaseMessage.includes('what can i call you')) {
        return `Hey, my name is <strong>Aporve Bhatnagar</strong> . <br> Currently you are interacting with <strong>PioletXpert</strong>. You can ask anything about me `;
    }  
    
    else if (lowerCaseMessage.includes('where are you from') ||lowerCaseMessage.includes('current location') ||lowerCaseMessage.includes('where are you') ) {
        return `I am from India, Uttar Pradesh Bijnor. <br> Currently i live in Bangalore `;
    } 
    
    else if (lowerCaseMessage.includes('food') ||lowerCaseMessage.includes('favourate food') ||lowerCaseMessage.includes('eat') ) {
        return `My Favourate Food is Chole Bhutare`;
    } 
    
    else if (lowerCaseMessage.includes('What is your favorite color') || lowerCaseMessage.includes('color') ) {
        return `I have 2 in my favourate Black and Orange.`;
    } 
    
    else if (lowerCaseMessage.includes('skills') || lowerCaseMessage.includes('languages') ) {
        return `I am skilled in: <br><br>Frontend:  <br>HTML5, CSS3,JavaScript. <br><br>Css Framework: <br>Bootstrap, Tailwind <br><br>Frontend Framework: <br>Reactjs <br><br>Js Library: <br>jquery, Ajax <br><br>Backend: <br>Nodejs <br><br>Database: <br>Mongodb - Sql/Nosql`;
    } 
    
    else if (lowerCaseMessage.includes(`projects`)) {
        return `I have worked on several projects including web development, mobile apps, and AI bots.`;
    } 
    
    else if (lowerCaseMessage.includes(`email address`)) {
        return `You can contact me via email at yourname@example.com.`;
    } 
    
    else if (lowerCaseMessage.includes('about') || lowerCaseMessage.includes('about me') ) {
        return `I am a Software Engineer with 3+ years of experience in the field. I have developed several software applications from scratch and have also worked on enhancing existing applications. My greatest achievement has been developing an application for a life Insurance company that significantly improved their customer service. My strongest qualities are my attention to detail and problem solving skills which have enabled me to debug complex software systems. I also have good communication and collaborative skills which help me work effectively with other teams within the organization. Additionally, I have extensive experience in developing applications for multiple platforms including web, mobile, tabets and desktop environments.`;
    } 
    
    else if (lowerCaseMessage.includes(`experience`)) {
        return `I have 3+ years of experience in software development.`;
    } 

    else if (lowerCaseMessage.includes(`drink`)) {
        return `I love coffee &#9749;.`;
    }

  
    
    else if (lowerCaseMessage.includes('ok') || lowerCaseMessage.includes('bye') || lowerCaseMessage.includes('good bye') || lowerCaseMessage.includes('see you') ) {
        return `Thank You! have a good day`;
    } 
    
    else if (lowerCaseMessage.includes('contact number') || lowerCaseMessage.includes('number') || lowerCaseMessage.includes('phone number') || lowerCaseMessage.includes('moble number') ) {
        return `You can contact me on <strong>8077981332</strong> `;
    } 
    
    else {
        return `I\'m not sure about that. <br> You can contact me on aporvep@gmail.com / 918077981332`;
    }
}
