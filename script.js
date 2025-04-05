const facts = [
  "I can solve a Rubik's cube in under a minute!",
  "I once coded a game in a day!",
  "I love pineapple on pizza 🍍🍕",
  "My cat sometimes joins my Zoom calls 😸"
];

function showFact() {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("factDisplay").innerText = fact;
}
