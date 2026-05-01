let questions = [
  { a: "3/5", b: "2/7", correct: "left", type: "unlike" },
  { a: "2/5", b: "2/7", correct: "left", type: "same_num" },
  { a: "3/8", b: "5/8", correct: "right", type: "same_den" },
  { a: "4/6", b: "1/2", correct: "left", type: "benchmark" }
];

let current = 0;
let correctCount = 0;
let total = 0;
let streak = 0;

// Track mistakes by type → adaptive behavior
let mistakes = {
  same_num: 0,
  same_den: 0,
  unlike: 0,
  benchmark: 0
};

function showQuestion() {
  let q = questions[current];
  document.getElementById("question").innerText = `${q.a}  ?  ${q.b}`;
  document.getElementById("feedback").innerText = "";
  clearCanvas();
}

function answer(choice) {
  let q = questions[current];
  total++;

  let feedback = document.getElementById("feedback");

  if (choice === q.correct) {
    correctCount++;
    streak++;

    feedback.innerText = "✓";

    nextQuestion();

  } else {
    streak = 0;

    // track mistake type
    mistakes[q.type]++;

    feedback.innerText = getHint(q.type);

    drawVisual(q); // ⭐ REQUIRED visual teaching
  }

  updateProgress();
}

function nextQuestion() {
  current = selectNextQuestion();
  setTimeout(showQuestion, 600);
}

// ⭐ ADAPTIVE LOGIC
function selectNextQuestion() {
  let maxMistakeType = Object.keys(mistakes).reduce((a, b) =>
    mistakes[a] > mistakes[b] ? a : b
  );

  let filtered = questions.filter(q => q.type === maxMistakeType);

  if (filtered.length > 0) {
    return questions.indexOf(filtered[Math.floor(Math.random() * filtered.length)]);
  }

  return (current + 1) % questions.length;
}

function updateProgress() {
  let accuracy = Math.round((correctCount / Math.max(total, 1)) * 100);

  document.getElementById("progress").innerText =
    `Accuracy: ${accuracy}%`;

  document.getElementById("streak").innerText =
    `Streak: ${streak}`;
}

// ⭐ STRATEGY-BASED FEEDBACK
function getHint(type) {
  switch (type) {
    case "same_num":
      return "Same numerator → smaller denominator is larger";

    case "same_den":
      return "Same denominator → compare numerators";

    case "benchmark":
      return "Compare each to 1/2";

    default:
      return "Use a common reference like 1/2";
  }
}

// ⭐ VISUAL (NUMBER LINE)
function drawVisual(q) {
  let canvas = document.getElementById("visual");
  let ctx = canvas.getContext("2d");

  clearCanvas();

  // draw base line
  ctx.strokeStyle = "#888";
  ctx.beginPath();
  ctx.moveTo(10, 40);
  ctx.lineTo(250, 40);
  ctx.stroke();

  drawFraction(ctx, q.a, "#4cafef");
  drawFraction(ctx, q.b, "#ff6b6b");
}

function drawFraction(ctx, frac, color) {
  let [num, den] = frac.split("/").map(Number);
  let value = num / den;

  let x = 10 + value * 240;

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, 40, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillText(frac, x - 10, 30);
}

function clearCanvas() {
  let canvas = document.getElementById("visual");
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

showQuestion();