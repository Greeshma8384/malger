document.addEventListener('DOMContentLoaded', function() {
  const gameTypeButtons = document.querySelectorAll('.contact-us-wrapper.games-list-btn.form');
  const gamesData = {
    "2D": [
      { "name": "Ludo", "imagePath": "./img/rm.jpeg" },
      
      { "name": "Carroms", "imagePath": "./img/2d1.jpeg" },
      { "name": "Card Games", "imagePath": "./img/2d2.jpeg" },
      { "name": "Strategy Game", "imagePath": "./img/2d4.jpeg" },
      { "name": "Puzzle", "imagePath": "./img/2d6.jpeg" },
      { "name": "Casual Games", "imagePath": "./img/2d7.jpeg" },
   
      

     

  
      
    ],
    "3D": [{ "name": "War Prime", "imagePath": "./img/3d1.jpeg" },{ "name": "Word", "imagePath": "./img/3d2.jpeg" }
      ,{ "name": "Moto Race", "imagePath": "./img/3d3.jpeg" },
      { "name": "Football", "imagePath": "./img/3d4.jpeg" },
      { "name": "Badland", "imagePath": "./img/3d5.jpeg" },
      { "name": "Last hand", "imagePath": "./img/3d6.jpeg" }
    ],
    "AR": [ { "name": "\Recognition Based AR", "imagePath": "./img/RB_AR.jpeg" },
      { "name": "AR Game App Development", "imagePath": "./img/GAD_AR.jpeg" },
      { "name": "AR in Training & Education", "imagePath": "./img/T&E_AR.jpeg" },
      { "name": "Projection Based AR", "imagePath": "./img/PB_AR.jpeg" },{ "name": "Location Based AR", "imagePath": "./img/LB_AR.jpeg" }
    ],
    "VR": [{ "name": "Game App developement", "imagePath": "./img/VR1.jpeg" },
      { "name": "Video Streaming", "imagePath": "./img/VR2.jpeg" },
      { "name": "Training Solution", "imagePath": "./img/VR3.jpeg" },
      { "name": "App developement", "imagePath": "./img/VR4.jpeg" },
      { "name": "VR to Retail", "imagePath": "./img/VR5.jpeg" },
    ],
    "REAL-MONEY": [{ "name": "Single Change", "imagePath": "./img/CA1.jpeg" },
      
      { "name": "Andhar Bahar", "imagePath": "./img/andhar bahar.png" },
      { "name": "Double Chance", "imagePath": "./img/double chance.png" },
      { "name": "European Roulette", "imagePath": "./img/eur rolute.png" },
      { "name": "Fun Roulette America", "imagePath": "./img/fun ameri.png" },
      { "name": "Funtarget", "imagePath": "./img/funtarget.png" },
      { "name": "Thripple chance", "imagePath": "./img/triple change copy.png" }],
    "CASINO": [{ "name": "Joker Card 12", "imagePath": "./img/CA2.jpeg" },
      { "name": "Horse rasing", "imagePath": "./img/CA3.jpeg" },
      { "name": "joker Card 16", "imagePath": "./img/CA5.jpeg" },{ "name": "Casino", "imagePath": "./img/casino.jpeg" },
      { "name": "Ludo", "imagePath": "./img/rm.jpeg" }
    ],

    // Your other game types here...
  };

  function handleClick(event) {
    event.preventDefault();
    const gameType = event.target.dataset.gameType || '2D'; // Default to '2D' if no dataset is found
    const gameBoxElements = document.querySelectorAll('.game-box');

    // Clear the .games-container to prepare for new content
    document.querySelector('.games-container').innerHTML = '';

    // Remove active styling from any previously clicked button
    gameTypeButtons.forEach(button => {
      button.style.background = ''; // Reset background color
    });

    // Apply active styling to the clicked button
    event.target.style.background = 'linear-gradient(180deg, rgb(237, 191, 7) 0%, rgb(248, 11, 55) 100%)';

    // Find matching games and update their images
    const matchingGames = gamesData[gameType] || [];
    matchingGames.forEach(gameInfo => {
      const gameBox = document.createElement('div');
      gameBox.classList.add('game-box');

      const img = document.createElement('img');
      img.src = gameInfo.imagePath;
      img.alt = gameInfo.name;

      const h2 = document.createElement('h2');
      h2.textContent = gameInfo.name;

      const playBtn = document.createElement('div');
      playBtn.id = "scrollButton";
      playBtn.classList.add("games-list-btn", "form", "games-btn", "play-now-btn");
      playBtn.textContent = 'Play';

      gameBox.appendChild(img);
      gameBox.appendChild(h2);
      gameBox.appendChild(playBtn);

      playBtn.addEventListener('click', function() {
        window.location.href = '#FORM'; // Redirects to the form with ID 'FORM'
      });

      // Append the new game box to the .games-container
      document.querySelector('.games-container').appendChild(gameBox);
    });
  }

  // Attach event listeners to each game type button
  gameTypeButtons.forEach(button => {
    button.addEventListener('click', handleClick);
  });

  // Trigger the default selection of 2D games
  const defaultButton = document.querySelector('[data-game-type="2D"]');
  if (defaultButton) {
    defaultButton.click(); // Simulate a click on the 2D Games button
  }
});






function applyMobileStyles() {
  const width = window.innerWidth;
  console.log("Current window width:", width);
  
  const ellipse = document.querySelector('.ellipse');
  const whatsapp = document.querySelector('.whatsapp');

  if (width > 1400 && width < 1900) {

      let pTags = document.querySelectorAll('p');
      let gaps = document.querySelectorAll('.gap');

// Iterate over each element in the NodeList
gaps.forEach(gap => {
    gap.style.marginTop = '20px';// Apply marginTop style to each element
});
      pTags.forEach(pTag => {
          pTag.style.fontSize = '21px'; // Example modification of fontSize
      });
  
  }else{
    let pTags = document.querySelectorAll('p');
    let gaps = document.querySelectorAll('.gap');
   
      pTags.forEach(pTag => {
          pTag.style.fontSize = '16px'; // Example modification of fontSize
      });

      gaps.forEach(gap => {
        gap.style.marginTop = '0px';// Apply marginTop style to each element
    });
  }
 

  if (ellipse && whatsapp) {
    if (width > 1400 && width < 1900) {
      ellipse.style.width = '170px';
      ellipse.style.height = '170px';
      whatsapp.style.width = '140px';
      whatsapp.style.height = '140px';

      //changed

      console.log("Mobile style applied");
    } else {
      // Apply default styles if needed for larger screens
      ellipse.style.width = '70px';
      ellipse.style.height = '70px';
      whatsapp.style.width = '50px';
      whatsapp.style.height = '50px';
      console.log("Window style applied");
    }
  } else {
    console.warn('Elements with class "ellipse" and/or "whatsapp" not found.');
  }
}



// Apply styles on load
document.addEventListener('DOMContentLoaded', applyMobileStyles);

// Apply styles on window resize
window.addEventListener('resize', applyMobileStyles);
