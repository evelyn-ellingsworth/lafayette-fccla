async function loadJSON() { 

  try {
    const response = await fetch("/scripts/events.json");
    
    const events = await response.json();
   
    let currentIndex = 0;
    
    document.getElementById("event-text").textContent = events.data[currentIndex].title;
    document.getElementById("title-text").textContent = events.data[currentIndex].project-name;
    document.getElementById("name-text").textContent = events.data[currentIndex].author;
    document.getElementById("event-description").textContent = events.data[currentIndex].description;
   document.getElementById("competition-pic").setAttribute("src",events.data[currentIndex].image); 
    setInterval(() => {
       currentIndex = (currentIndex +1) % events.data.length;
     
        document.getElementById("event-text").textContent = events.data[currentIndex].title;
        document.getElementById("title-text").textContent = events.data[currentIndex].project-name;
        document.getElementById("name-text").textContent = events.data[currentIndex].author;
        document.getElementById("event-description").textContent = events.data[currentIndex].description;
        document.getElementById("competition-pic").setAttribute("src",events.data[currentIndex].image); 

    }, 7500); // 10,000 ms = 10 seconds

  } catch (error) {
    console.error("Error:", error);
  }
}


loadJSON();
"event-description"
