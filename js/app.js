$(document).ready(function () {
let easyWords = [
	{ word: "apple", translation: "яблуко" },
	{ word: "house", translation: "будинок" },
	{ word: "friend", translation: "друг" },
	{ word: "table", translation: "стіл" },
	{ word: "travel", translation: "подорожувати" },
	{ word: "beautiful", translation: "красивий" },
	{ word: "difficult", translation: "складний" },
	{ word: "interesting", translation: "цікавий" },
	{ word: "successful", translation: "успішний" },
	{ word: "experience", translation: "досвід" },
	{ word: "technology", translation: "технологія" },
	{ word: "environment", translation: "навколишнє середовище" },
	{ word: "challenge", translation: "виклик" },
	{ word: "imagination", translation: "уява" },
	{ word: "curious", translation: "цікавий, допитливий" },
	{ word: "efficient", translation: "ефективний" },
	{ word: "global", translation: "глобальний" },
];
let mediumWords = [
	{ word: "celebrate", translation: "святкувати" },
    { word: "navigate", translation: "орієнтуватися" },
    { word: "adventure", translation: "пригода" },
    { word: "explore", translation: "досліджувати" },
    { word: "discover", translation: "відкривати" },
    { word: "communicate", translation: "спілкуватися" },
    { word: "achieve", translation: "досягати" },
    { word: "invent", translation: "винаходити" },
    { word: "analyze", translation: "аналізувати" },
    { word: "evaluate", translation: "оцінювати" },
    { word: "comprehensive", translation: "загальний" },
    { word: "perseverance", translation: "настойчивість" },
    { word: "precipitate", translation: "викидати" }, 
    { word: "plausible", translation: "правдоподібний" },  
];
let hardWords = [
	{ word: "innovate", translation: "інновувати" },
    { word: "sophisticated", translation: "вишуканий" },
    { word: "mercurial", translation: "непостійний" },
    { word: "exacerbate", translation: "погіршувати" },
    { word: "ephemeral", translation: "мимовільний" },
    { word: "verisimilitude", translation: "правдоподібність" },
    { word: "quixotic", translation: "нереальний, фантастичний" },
    { word: "idiosyncrasy", translation: "ідіосинкразія, власна риса" },
    { word: "abstruse", translation: "складний для розуміння" },
    { word: "proclivity", translation: "схильність" },
    { word: "equanimity", translation: "спокій" },
    { word: "ubiquity", translation: "всюди присутній стан" },
    { word: "ephemeral", translation: "мимовільний" },
    { word: "exacerbate", translation: "погіршувати" },
    { word: "innocuous", translation: "невинний" },
    { word: "juxtapose", translation: "порівнювати, поручати" },
    { word: "quintessential", translation: "сутність, ключовий" },
    { word: "redolent", translation: "запах" },
    { word: "vociferous", translation: "голосний, крикливий" },
    { word: "zenith", translation: "зеніт, верхній пункт" }
];
let currentWords = easyWords;
let currentStep = 0;
let correctCount = 0;
let incorrectCount = 0;
let missedWords = [];
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
	 let j = Math.floor(Math.random() * (i + 1));
	 [array[i], array[j]] = [array[j], array[i]];
  }
}
function resetGame() {
  currentStep = 0;
  correctCount = 0;
  incorrectCount = 0;
  missedWords = [];
  shuffle(currentWords);
  $("#correctCount").text("Вірно: " + correctCount);
  $("#incorrectCount").text("Невірно: " + incorrectCount);
  $("#currentStep").text(currentStep + 1);
  showStep();
}
function showStep() {
  let word = currentWords[currentStep].word;
  $("#flashcard").text(word);
  updateStep();
  updateScore();
}
function updateStep() {
  $("#currentStep").text(currentStep + 1);
}
function updateScore() {
  $("#correctCount").text("Вірно: " + correctCount);
  $("#incorrectCount").text("Невірно: " + incorrectCount);
}
function checkAnswer(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
	 correctCount++;
  } else {
	 incorrectCount++;
	 missedWords.push(currentWords[currentStep]);
  }
  updateScore();
}
function endGame() {
	alert("Гра закінчилась! Ти дав правильних відповідей: " + correctCount + " з 10.");
	if (missedWords.length > 0) {
	  let missedWordsString = missedWords.map(word => `${word.word} - ${word.translation}`).join('\n');
	  alert("Невірні відповіді:\n" + missedWordsString);
	}
 }
$("#difficultySelect").change(function () {
  let difficulty = $(this).val();
  if (difficulty === "easy") {
	 currentWords = easyWords;
  } else if (difficulty === "medium") {
	 currentWords = mediumWords;
  } else if (difficulty === "hard") {
	 currentWords = hardWords;
  }
  resetGame();
});
$("#prevStep").click(function () {
  currentStep--;
  if (currentStep < 0) {
	 currentStep = 0;
	 return;
  }
  showStep();
});
$("#nextStep").click(function () {
  currentStep++;
  if (currentStep >= currentWords.length || currentStep >= 10) {
	 endGame();
	 return;
  }
  showStep();
});
$("#flashcard").click(function () {
	let userAnswer = $("#translationInput").val().trim();
	let correctAnswer = currentWords[currentStep].translation;
	checkAnswer(userAnswer, correctAnswer);
	$("#translationInput").val("");
	if (currentStep < 9) {
	  currentStep++;
	  showStep();
	} else {
	  endGame();
	}
 });
resetGame();
});



/*let easyWords = [
	{ word: "apple", translation: "яблуко" },
	{ word: "house", translation: "будинок" },
	{ word: "friend", translation: "друг" },
	{ word: "table", translation: "стіл" },
	{ word: "travel", translation: "подорожувати" },
	{ word: "beautiful", translation: "красивий" },
	{ word: "difficult", translation: "складний" },
	{ word: "interesting", translation: "цікавий" },
	{ word: "successful", translation: "успішний" },
	{ word: "experience", translation: "досвід" },
	{ word: "technology", translation: "технологія" },
	{ word: "environment", translation: "навколишнє середовище" },
	{ word: "challenge", translation: "виклик" },
	{ word: "imagination", translation: "уява" },
	{ word: "curious", translation: "цікавий, допитливий" },
	{ word: "efficient", translation: "ефективний" },
	{ word: "global", translation: "глобальний" },
];

let mediumWords = [
	{ word: "celebrate", translation: "святкувати" },
    { word: "navigate", translation: "орієнтуватися, навігувати" },
    { word: "adventure", translation: "пригода" },
    { word: "explore", translation: "досліджувати" },
    { word: "discover", translation: "відкривати" },
    { word: "communicate", translation: "спілкуватися" },
    { word: "achieve", translation: "досягати" },
    { word: "invent", translation: "винаходити" },
    { word: "analyze", translation: "аналізувати" },
    { word: "evaluate", translation: "оцінювати" },
    { word: "comprehensive", translation: "загальний, комплексний" },
    { word: "perseverance", translation: "настойчивість" },
    { word: "precipitate", translation: "викидати, виносити" },  // B2
    { word: "plausible", translation: "правдоподібний" },  // B2
];

let hardWords = [
	{ word: "innovate", translation: "інновувати" },
    { word: "sophisticated", translation: "вишуканий" },
    { word: "mercurial", translation: "непостійний, змінливий" },
    { word: "exacerbate", translation: "погіршувати" },
    { word: "ephemeral", translation: "мимовільний" },
    { word: "verisimilitude", translation: "правдоподібність" },
    { word: "quixotic", translation: "нереальний, фантастичний" },
    { word: "idiosyncrasy", translation: "ідіосинкразія, власна риса" },
    { word: "abstruse", translation: "складний для розуміння" },
    { word: "proclivity", translation: "схильність" },
    { word: "equanimity", translation: "спокій" },
    { word: "ubiquity", translation: "всюди присутній стан" },
    { word: "ephemeral", translation: "мимовільний" },
    { word: "exacerbate", translation: "погіршувати" },
    { word: "innocuous", translation: "невинний" },
    { word: "juxtapose", translation: "порівнювати, поручати" },
    { word: "quintessential", translation: "сутність, ключовий" },
    { word: "redolent", translation: "запах" },
    { word: "vociferous", translation: "голосний, крикливий" },
    { word: "zenith", translation: "зеніт, верхній пункт" }
];
*/