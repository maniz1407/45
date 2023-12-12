// Navbar and move to top button
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  body.classList.add("disabledScroll");
}

cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
}

const siteLogo = document.querySelector('.logo a');

// Get all the menu items
const navLinks = document.querySelectorAll('.menu-list li');

const playSongBtn = document.querySelector('.play-song-btn');

// Add click event listener to each menu item
navLinks.forEach(item => {
  item.addEventListener('click', function () {
    // Remove the 'active' class from all menu items
    navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));

    // Add the 'active' class to the clicked menu item
    this.classList.add('active-menu-list');
  });
});

playSongBtn.onclick = () => {
  removeActiveClass();
}

siteLogo.onclick = () => {
  removeActiveClass();
};

function removeActiveClass() {
  navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));
}

window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");

  // When the user scrolls down 75px from the top of the document, show the button
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    moveTopBtn.style.display = "block";
  } else {
    moveTopBtn.style.display = "none";
  }
}

// PLAY MUSIC 
const playSong = document.getElementById("song");
var icon = document.getElementById("icon");

icon.addEventListener("click", playMusic);

function playMusic() {
  if (playSong.paused) {
    playSong.play();
    icon.src = "./assets/Image/pause.png";
  } else {
    playSong.pause();
    icon.src = "./assets/Image/play.png";
  }
}

// Move to Top button
var moveTopBtn = document.getElementById("moveTopBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  removeActiveClass();
}

// PreLoader
var loader = document.getElementById("loading");
function preLoader() {
  loader.style.display = "none";
}

// CHOOSE A SONG
const buttons = document.querySelectorAll(".btn");

const photo = document.getElementById("banner");
const song = document.getElementById("song");
const songName = document.getElementById("songName");
const songBy = document.getElementById("songBy");
const aboutSong = document.getElementById("aboutSong");
const title = document.getElementById("title");
const download = document.getElementById("download");

buttons[0].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1614309853/srch_pplmumbai_INT202102606.jpg";
  song.src = "./assets/Songs/Lazy.mp3";
  songName.innerText = "Lazy Song";
  songBy.innerText = "Vishal chandrashekar";
  title.innerText = "Lazy Song";
  download.href = "./assets/Songs/Lazy.mp3";
  aboutSong.innerText = "Oh Manapenne. One of Vishal Chandrashekhar’s career-best soundtracks – I have not obsessively looped a complete soundtrack like this in quite some time! While I really liked Vivek Sagar’s music in Pelli Choopulu, Vishal’s work here is definitely clear of the former. Incidentally this is the second Tamil album this year that has stood its ground in comparison to a solid original – Maara being the other. ";
});

buttons[1].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_saregama/20230828174921000/8907212009683/1693226463809/resources/8907212009683.jpg";
  song.src = "./assets/Songs/Aradhya.mp3";
  songName.innerText = "Aradhya";
  songBy.innerText = "Sid Sriram";
  title.innerText = " Aradhya";
  download.href = "./assets/Songs/Aradhya.mp3";
  aboutSong.innerText = " Watch the song Aradhya from Telugu movie Kushi starring Vijay Deverakonda, Samantha Ruth Prabhu and Jayaram. Aradhya is sung by Jubin Nautiyal & Palak Muchhal and music of the song is also composed by Hesham Abdul Wahab. Lyrics of 'Kushi' song 'Aradhya' are written by Raqueeb Alam. To know more about 'Aradhya' song from Vijay Deverakonda, Samantha Ruth Prabhu and Jayaram starrer  Kushi watch the video .";
});

buttons[2].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/srch_sonymusic_A10328E0005711308C.jpg";
  song.src = "./assets/Songs/Nanbane.mp3";
  songName.innerText = "Nanbane";
  songBy.innerText = "Yuvan Shankar Raja";
  title.innerText = "Nanbane";
  download.href = "./assets/Songs/Nanbane.mp3";
  aboutSong.innerText = "\"Nanbane\" is indeed a popular Tamil song from the movie \"Mankatha\" Sung by Yuvan Shankar Raja and composed by him as well, the song captures the essence of friendship and loyalty. The energetic beats and catchy lyrics make it a hit among fans of Tamil cinema.";
});

buttons[3].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/3617227092823_20230926182622/3617227092823/1695734126060/resources/3617227092823.jpg";
  song.src = "./assets/Songs/Unakkuthaan.mp3";
  songName.innerText = "Unakku Thaan";
  songBy.innerText = "Santhosh Narayanan";
  title.innerText = "Unakku Thaan";
  download.href = "./assets/Songs/Unakkuthaan.mp3";
  aboutSong.innerText = "Unakku Thaan Lyrics from Tamil Movie Chithha is brand new Tamil song sung by Santhosh Narayanan, Dhvani Kailas and this latest song is featuring Siddharth, Nimisha Sajayan. Unakkuthan song lyrics are penned down by Vivek while music is also given by Santhosh Narayanan and video has been directed by Deeraj Vaidy"
});

buttons[4].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/update/1606985723120/srch_sonymusic_A10328E0008839843Y.jpg";
  song.src = "./assets/Songs/Hayati.mp3";
  songName.innerText = "Hayati";
  songBy.innerText = "A.R.Rahman";
  title.innerText = "Hayati";
  download.href = "./assets/Songs/Hayati.mp3";
  aboutSong.innerText = "Hayati is a song from the Tamil movie Chekka Chivantha Vaanam (CCV), released in 2018. The song is composed by A.R. Rahman, and the lyrics are penned by Vairamuthu. Hayati is a peppy and energetic track that features a fusion of various musical elements."

  "The term Hayati itself is an Arabic word that means my life or my love, adding a touch of romantic flavor to the song. The lively beats, along with the engaging composition and vocals, make Hayati a notable and popular track from the soundtrack of Chekka Chivantha Vaanam."
});

buttons[5].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8903431974624_20231206152130/8903431974624/1701857410749/resources/8903431974624.jpg";
  song.src = "./assets/Songs/AbrarEntry.mp3";
  songName.innerText = "Abrar's Entry";
  songBy.innerText = "jamal Kudu";
  title.innerText = "Abrar's Entry";
  download.href = "./assets/Songs/AbrarEntry.mp3";
  aboutSong.innerText = "Ever since the release of Sandeep Reddy Vanga's Animal, the song 'Jamal Kudu' which plays in the background on Bobby Deol's entry in the film, has become a rage. Here's everything that need to know about the song, from its meaning to its origin."
});

buttons[6].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/A10301A00051587058_20230928141049975/1695904518842/resources/A10301A00051587058.jpg";
  song.src = "./assets/Songs/Badass.mp3";
  songName.innerText = "Badass";
  songBy.innerText = "Anirudh Ravichander";
  title.innerText = "Badass";
  download.href = "./assets/Songs/Badass.mp3";
  aboutSong.innerText = "Badass (From \"Leo\") is a Tamil album released in 2023. There is one song in Badass (From \"Leo\"). The song was composed by Anirudh Ravichander, a talented musician. Listen to all of Badass (From \"Leo\") ";
});

buttons[7].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/3617228209077_20231102210224/3617228209077/1698940206976/resources/3617228209077.jpg";
  song.src = "./assets/Songs/10000-Pax.mp3";
  songName.innerText = "10000 Pax";
  songBy.innerText = "Santhosh Narayanan";
  title.innerText = "10000 Pax";
  download.href = "./assets/Songs/10000-Pax.mp3";
  aboutSong.innerText = "Jigarthanda Double X: ofRO’s 10000PAX rap song takes you back to the 70s Karthik Subbaraj's Jigarthanda Double X stars SJ Suryah and Raghava Lawrence. It is slated to be released in theatres on November 10."
});

buttons[8].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/srch_sonymusic_A10328E00082251536.jpg";
  song.src = "./assets/Songs/Azhagiye.mp3";
  songName.innerText = "Azhagiye";
  songBy.innerText = "A R Rahman";
  title.innerText = "Azhagiye";
  download.href = "./assets/Songs/Azhagiye.mp3";
  aboutSong.innerText = "Azhagiye (From \"Kaatru Veliyidai\") is a Tamil album released in 2017. There is one song in Azhagiye (From \"Kaatru Veliyidai\"). The song was composed by talented musicians such as A.R. Rahman, Arjun Chandy, Haricharan, and more. Listen to all of Azhagiye (From \"Kaatru Veliyidai\")"
});







