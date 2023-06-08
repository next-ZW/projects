let lijst = [
    'images/garnaal.png',
    'images/kreeft.png',
    'images/kwal.png',
    'images/narwal.png',
    'images/schildpad.png',
    'images/ster.png',
    'images/whale.png',
    'images/zeepaard.png'
  ];
  
  // Function to shuffle the list of images
  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  // Function to create the memory game board
  function createMemoryGame() {
    const imagesContainer = document.getElementById("images");
    lijst = shuffle(lijst);
  
    // Duplicate the list of images
    const duplicatedList = lijst.concat(lijst);
  
    // Shuffle the duplicated list
    const shuffledList = shuffle(duplicatedList);
  
    // Iterate through the shuffled list of images
    for (let i = 0; i < shuffledList.length; i++) {
      const image = document.createElement("img");
      image.src = shuffledList[i];
      image.classList.add("card");
      image.addEventListener("click", handleImageClick);
  
      // Create a wrapper element for each image to enable flipping
      const cardWrapper = document.createElement("div");
      cardWrapper.classList.add("card-wrapper");
      cardWrapper.appendChild(image);
  
      imagesContainer.appendChild(cardWrapper);
    }
  }
  
  // Function to handle the image click event
  function handleImageClick(event) {
    const clickedImage = event.target;
  
    // Check if the clicked image is already revealed or matched
    if (!clickedImage.classList.contains("matched") && !clickedImage.classList.contains("revealed")) {
      clickedImage.classList.add("revealed");
  
      // Check if two images are revealed for comparison
      const revealedImages = document.querySelectorAll(".revealed:not(.matched)");
      if (revealedImages.length === 2) {
        setTimeout(checkMatch, 1000, revealedImages);
      }
    }
  }
  
  // Function to check if the revealed images match
  function checkMatch(revealedImages) {
    const [firstImage, secondImage] = revealedImages;
  
    if (firstImage.src === secondImage.src) {
      firstImage.classList.add("matched");
      secondImage.classList.add("matched");
    } else {
      firstImage.classList.remove("revealed");
      secondImage.classList.remove("revealed");
    }
  
    // Check if all images are matched
    const matchedImages = document.querySelectorAll(".matched");
    if (matchedImages.length === lijst.length) {
      const totalTurns = document.querySelectorAll(".revealed").length / 2;
      alert(`Congratulations! You have completed the game in ${totalTurns} turns.`);
    }
  }
  
  // Call the createMemoryGame function when the page finishes loading
  window.addEventListener("load", createMemoryGame);
  