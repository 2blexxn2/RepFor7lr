document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const div = document.createElement("div");
  const input = document.createElement("input");
  const button = document.createElement("button");
  const answerDiv = document.createElement("div");

  div.id = "magic-ball";
  input.id = "question";
  input.type = "text";
  input.placeholder = "Задайте своє питання тут...";
  button.id = "ask";
  button.textContent = "Запитати";
  answerDiv.id = "answer";

  div.appendChild(input);
  div.appendChild(button);

  const img = document.createElement("img");
  img.src = "css/pic4.png";
  img.alt = "Описание изображения";
  img.style.width = "400px";
  img.style.height = "400px";
  /* img.style.animation = "spin 20s linear infinite"; */
  div.appendChild(img);

  div.appendChild(answerDiv);

  body.appendChild(div);
  const answers = [
    "Так",
    "Ні",
    "Можливо",
    "Однозначно так",
    "Без сумніву",
    "99.9%",
    "Не можу зараз сказати",
    "хахха ні",
    "На жаль, ні",
  ];

  function askQuestion() {
    const question = input.value.trim();

    if (question) {
      const answer = answers[Math.floor(Math.random() * answers.length)];
      answerDiv.textContent = answer;
      input.value = "";
    } else {
      alert("Будь ласка, введіть питання.");
    }
  }

  button.addEventListener("click", askQuestion);

  input.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
      askQuestion();
    }
  });

  $(function () {
    const navbar = $("<nav></nav>");
    const ul = $("<ul></ul>");
    const li1 = $('<li><a href="#home">Home</a></li>');
    const li2 = $('<li><a href="#about">About</a></li>');
    const li3 = $('<li><a href="#contact">Contact</a></li>');

    ul.append(li1, li2, li3);
    navbar.append(ul);
    $("body").prepend(navbar);
  });
});
