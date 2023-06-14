let lijst = [
    'garnaal',
    'kreeft',
    'kwal',
    'narwal',
    'schildpad',
    'ster',
    'whale',
    'zeepaard'
  ];
 
  
function hadleclick(e){
  e.src = "images/" + e.afbeelding + ".png";
  console.dir(e)
}


for(x = 0; x < lijst.length; x++){
  console.log(lijst[x]);

  let plaatje = document.createElement('images');
  plaatje.src = "images/grey.png";
  plaatje.setAttribute("onClick","handleClick(this)")
  plaatje.afbeelding = lijst[x]
  .appendChild(plaatje);

};


  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }