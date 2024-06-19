document.addEventListener('DOMContentLoaded', function() {
  const gameTypeButtons = document.querySelectorAll('.contact-us-wrapper.games-list-btn.form');
  const gamesData = {
    "2D": [
      { "name": "Ludo", "imagePath": "./img/rm.jpeg" },
      
      { "name": "Carroms", "imagePath": "./img/2d1.jpeg" },
      

     

  
      
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
      { "name": "Triple Change", "imagePath": "./img/CA4.jpeg" },
      { "name": "Single Change", "imagePath": "./img/rm.jpeg" }],
    "CASINO": [{ "name": "Joker Card 12", "imagePath": "./img/CA2.jpeg" },
      { "name": "Horse rasing", "imagePath": "./img/CA3.jpeg" },
      { "name": "joker Caerd 16", "imagePath": "./img/CA5.jpeg" },{ "name": "Casino", "imagePath": "./img/casino.jpeg" },
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
