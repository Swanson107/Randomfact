let facts = null;

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

body.appendChild(factDisplay);

console.log("Script loaded");

fetchFacts();


