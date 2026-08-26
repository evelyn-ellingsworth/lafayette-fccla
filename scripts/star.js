async function loadJSON() { 
   // alert (siteBaseUrl);
  try {
    const response = await fetch("/scripts/event-titles.json");
    const facts = await response.json();
    var num = 0;
    document.getElementById("event-text").textContent = event-titles.data[num];

    setInterval(() => {
        num++;
        document.getElementById("fact-text").textContent = event-titles.data[num];
    }, 7500); // 10,000 ms = 10 seconds

  } catch (error) {
    console.error("Error:", error);
  }
}


loadJSON();
