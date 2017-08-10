var gamesList = [{
  name: "The Legend of Zelda: A Link to the Past",
  gameDescription: 'The Legend of Zelda series was released in 1992. Japan got to it first in 1991. Simply put, Link is the main character who is sent to rescue Princess Zelda from captivity. This SNES game is a prequel where Link follows his uncle to the dungeons, after being told not to do so. There, he finds his uncle critically wounded and takes it upon himself to rescue Princess Zelda. Moral of the story: Don\'t listen to your uncle.',
  gameOpinion: ["It was probably the hardest game I played.", "Last time I checked, I was stuck in the Swamp Palace.", "Help" ]

}, {
  name: "Super Mario World",
  gameDescription: 'Super Mario World is the highest selling game of the SNES edition. It was released in 1990 and actually, this version brought mario into the next generation. So, after the brothers had saved the kingdom in the previous challenge (Mushroom Kingdom), got paid and scored chicks, they took a hard-earned vacation to dinosaur land. While relaxing on the beach, Mario\'s needy girlfriend, Princess Peach gets kidnapped AGAIN. So does all of Yoshi\'s dinosaur friends from the island.  The super mario brothers just can\'t catch a break. But they are given the gift of a cape to use for their journey. Which is nice. Eventually they beat the seven worlds of Bowser\'s Krazy Koopa Kritters and rescue Mario\'s clingy girlfriend and Yoshi\s dinosaurs. Moral of the story: Don\'t date clingy girlfriends.',
  gameOpinion: ["I have a hate/love relationship with this game.", "Most of my deaths consisted of... impossible jumps and accidental gentle touch by villians. SO GENTLE.", "Due to the old 16-bit system, I don't think they even had to touch me for Mario to die. They just had to get close.", 'I stressed out more on trying to not die than final exams. Old facebook statuses reminded me where my priorities were.']

}, {
  name: "Donkey Kong Country",
  gameDescription: 'A monkey with a tie goes on a challenging adventure with his trusty nephew, Diddy Kong by his side. Kong rides a rhinoceros (once in a while) while beating up walking alligators and oversized chipmunks. That is exactly what it is. The other real story is that Donkey Kong comes home after a long day and realized his hoard of freakin\' bananas are gone. Donkey Kong goes ape$#!%. So he embarks a grueling journey to collect bananas on each region. Of course the new bananas are not enough, so he defeats King K. Rool and his kremlings and restore his bananas to their formor glory. Moral of the story: Don\'t take someone\'s bananas.',
  gameOpinion: ["You can wear a red crop top, while slightly overweight and still feel good. Thanks Diddy Kong.", "I also have the second game where Diddy and Dixie embark a journey to rescue Donkey Kong. I just assumed the kids were brother and sister. They're not. ", "MINDBLOWING."]

}, {
  name: "Jurrasic Park",
  gameDescription: 'The main character, Grant, has six weapons including a cattle prod, tranquilizer gun, shotgun, bolas, gas grenade launcher, and a missile launcher. Grant has to keep himself alive(duh) by finding food and first aid kits that are located all over. He has to scour the land for dinosaurs and oversized dragonflies. He also has to go to various characters to collect their ID cards to enter certain locked gates throughout the game. Fun fact: if the main character stands idle for too long,  Mr. DNA provides dinosaur facts...on the dinosaurs he has to kill. Moral of the story: Apparently, giant dragonflies are evil. ',
  gameOpinion: ["This is the most boring game I have ever played. Ever.", "You just open gates and kill dinosaurs.", 'I don\'t know why I put this on, don\'t play this game.']

}]

function changeInfo(game) {
  console.log(game)
  var mainPhoto = document.getElementById('mainPhoto');
  var gameName = document.getElementById('gameName');
  var gameDescription = document.getElementById('gameDescription');
  var gameOpinion = document.getElementById('gameOpinion');
  var photoUrl = '';

  if(game === 'zelda') {
    var photoUrl = 'https://r.mprd.se/media/images/34385-Legend_of_Zelda,_The_-_A_Link_to_the_Past_(USA)-9.jpg'
    mainPhoto.src = photoUrl
    img1.src = photoUrl
    gameName.innerHTML = "Zelda";
    gameName.innerHTML = gamesList[0].gameDescription
    gameName.innerHTML = gamesList[0].gameOpinion


  } else if (game === 'superMario') {
    var photoUrl = 'https://r.mprd.se/media/images/35787-Super_Mario_World_(USA)-6.jpg'
    mainPhoto.src = photoUrl
    img2.src = photoUrl
    gameName.innerHTML = "Super Mario";
    gameName.innerHTML = gamesList[1].gameDescription;
    gameName.innerHTML = gamesList[1].gameOpinion
  }

    else if (game === 'donkeyKong'){
      var photoUrl = 'https://r.mprd.se/media/images/33505-Donkey_Kong_Country_(USA)-3.jpg'
      mainPhoto.src = photoUrl
      img3.src = photoUrl
      gameName.innerHTML = "Donkey Kong";
      gameName.innerHTML = gamesList[2].gameDescription;
      gameName.innerHTML = gamesList[2].gameOpinion
    }

    else if (game === 'jurassicPark') {
      var photoUrl = 'https://r.mprd.se/media/images/34221-Jurassic_Park_(USA)-5.jpg'
      mainPhoto.src = photoUrl
      img4.src = photoUrl
      gameName.innerHTML = "Jurassic Park";
      gameName.innerHTML = gamesList[3].gameDescription;
      gameName.innerHTML = gamesList[3].gameOpinion
    }
}


