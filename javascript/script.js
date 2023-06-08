lijst = ['images/garnaal.png','images/kreef.png','images/kwal','images/narwal','images/schildpad','images/ster','images/whale','images/zeepaard',];
lijst = shuffle(lijst);
function shuffle(array){
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0){

        randomIndex = math.floor(math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex]] [array[randomIndex]] = [array[randomIndex]] [array[currentIndex]]
    }

}



