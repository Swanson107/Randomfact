let facts;

async function fetchFacts() {
  try {
    const response = await fetch("facts.json");
    if (!response.ok) {
      throw new Error("Failed to fetch facts.");
    }
  
    const data = await response.json();
    facts = data.facts;

    console.log("JSON Fetched");
  } catch (error) {
    console.error("Fetch Error: " + error);
  }
}


const body = document.querySelector('.body');
const factDisplay = document.createElement('div');
factDisplay.id = "fact-display"

const generateButton = document.getElementById('generate-button');

generateButton.addEventListener('click', function() {
  let randomQuote = facts[Math.floor(Math.random() * facts.length)];
  factDisplay.textContent = randomQuote;
  console.log("Generating...")
})

      factDisplay.textContent = "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.\
      Octopuses have three hearts: two pump blood to the gills, and one pumps it to the rest of the body.";

body.appendChild(factDisplay);

console.log("Script loaded");

fetchFacts();




