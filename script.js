const startBtn = document.getElementById('start-record');
const taskList = document.getElementById('task-list');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.lang = 'en-US';

startBtn.onclick = () => {
  recognition.start();
  startBtn.innerText = "Listening...";
};

recognition.onresult = function(event) {
  const transcript = event.results[0][0].transcript.trim();
  addTask(transcript);
  startBtn.innerText = "Start Speaking";
};

recognition.onerror = function() {
  startBtn.innerText = "Start Speaking";
};

function addTask(text) {
  const li = document.createElement('li');
  li.textContent = text;
  li.onclick = () => li.classList.toggle('completed');
  li.ondblclick = () => li.remove();
  taskList.appendChild(li);
}