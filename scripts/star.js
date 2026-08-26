async function loadJSON() { 
   // alert (siteBaseUrl);
  try {
    const response = await fetch("/scripts/event-titles.json");
    const facts = await response.json();
    var num = Math.floor(Math.random() * event-titles.data.length);
    document.getElementById("fact-text").textContent = event-titles.data[num];

    setInterval(() => {
        num = Math.floor(Math.random() * event-titles.data.length);
        document.getElementById("fact-text").textContent = event-titles.data[num];
    }, 7500); // 10,000 ms = 10 seconds

  } catch (error) {
    console.error("Error:", error);
  }
}


loadJSON();
