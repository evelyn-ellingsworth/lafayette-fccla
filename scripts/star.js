async function loadJSON() { 
   // alert (siteBaseUrl);
  try {
    const response = await fetch("/scripts/eventTitles.json");
    const eventTitles = await response.json();
     let currentIndex = 0;
    //var num = 0;
       //Math.floor(Math.random() * eventTitles.data.length);
    document.getElementById("event-text").textContent = eventTitles.data[currentIndex];

    setInterval(() => {
       currentIndex = (currentIndex +1) % eventTitles.data.length;
      //num = num +1;
      // num = Math.floor(Math.random() * eventTitles.data.length);
        document.getElementById("event-text").textContent = eventTitles.data[currentIndex];
    }, 7500); // 10,000 ms = 10 seconds

  } catch (error) {
    console.error("Error:", error);
  }
}


loadJSON();
