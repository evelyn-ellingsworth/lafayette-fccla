async function loadJSON() { 
   // alert (siteBaseUrl);
  try {
    const response = await fetch("/scripts/eventTitles.json");
    const facts = await response.json();
    var num = Math.floor(Math.random() * eventTitles.data.length);
    document.getElementById("event-text").textContent = eventTitles.data[num];

    setInterval(() => {
        num = Math.floor(Math.random() * eventTitles.data.length);
        document.getElementById("event-text").textContent = eventTitles.data[num];
    }, 7500); // 10,000 ms = 10 seconds

  } catch (error) {
    console.error("Error:", error);
  }
}


loadJSON();
