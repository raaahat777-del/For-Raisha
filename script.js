const dailyContent = {

"2026-07-13": {

mission:"Notice one beautiful thing around you today.",

letter:"Just a reminder that you are loved and appreciated.",

photo:"images/memory1.jpeg",

memoryCaption:"A beautiful memory I always want to keep.",

song:"Raindance - Dave & Tems",

spotify:"https://open.spotify.com/embed/track/3oTuTpF1F3A7rEC6RKsMRz",

reminder:"You make ordinary days special."

},


"2026-07-17": {

  mission: "Today, do one thing that makes you genuinely smile. I hope that smile stays with you all day.",

  letter: "No matter where life takes us, I hope you always remember that there will always be someone quietly cheering for you, believing in you, and loving you with all his heart.",

  photo: "images/memory4.jpeg",

  memoryCaption: "YOU GAVE ME A NEW NICKNAME.",

  song: "Apna Bana Le",

  spotify: "https://open.spotify.com/embed/track/0mflMxspEfB0VbI1kyLiAv",

  reminder: "I hope today treats you gently. You deserve every happiness."

},

"2026-07-18": {

  mission: "Take a few minutes today to appreciate yourself. You're stronger, kinder, and more amazing than you realize.",

  letter: "If I could give you one thing today, it would be the ability to see yourself through my eyes. You'd finally understand how truly special you are.",

  photo: "images/memory5.jpeg",

  memoryCaption: "I still remember the time when I walked miles to wrote you name on the map."
  song: "Señorita",

  spotify: "https://open.spotify.com/embed/track/0TK2YIli7K1leLovkQiNik",

  reminder: "Thank you for being you. That's more than enough."

},


}

};



const omanTime = new Date().toLocaleString(
"en-US",
{
timeZone:"Asia/Muscat"
}
);


const today =
new Date(omanTime)
.toISOString()
.split("T")[0];



const todayContent =
dailyContent[today] || dailyContent["2026-07-13"];



const displayDate =
new Date(omanTime)
.toLocaleDateString(
"en-US",
{
weekday:"long",
year:"numeric",
month:"long",
day:"numeric"
}
);



document
.getElementById("enterButton")
.addEventListener(
"click",
function(){


document.body.innerHTML = `


<div class="today-page">

<div class="today-card">


<h1>
🌸 Today's Gift 🌸
</h1>


<p class="date-text">
${displayDate}
</p>



<div class="gift-section">

<h2>
🌅 Today's Mission
</h2>

<p>
${todayContent.mission}
</p>

</div>



<div class="gift-section">

<h2>
💌 Today's Letter
</h2>

<p>
${todayContent.letter}
</p>

</div>




<div class="gift-section">

<h2>
📸 Today's Memory
</h2>


<img 
src="${todayContent.photo}"
class="memory-photo"
>


<p>
${todayContent.memoryCaption}
</p>


</div>





<div class="gift-section">

<h2>
🎵 Today's Song
</h2>


<p>
${todayContent.song}
</p>


<iframe

src="${todayContent.spotify}"

width="100%"

height="152"

frameborder="0"

allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"

loading="lazy"

class="spotify-player">

</iframe>


</div>





<div class="gift-section">

<h2>
✨ Reminder
</h2>


<p>
${todayContent.reminder}
</p>


</div>



</div>

</div>


`;



});
