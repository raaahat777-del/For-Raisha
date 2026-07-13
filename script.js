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


"2026-07-15": {

mission:"Find something today that makes you smile.",

letter:"I hope your day is filled with happiness.",

photo:"images/memory2.jpeg",

memoryCaption:"Another memory that makes me smile.",

song:"A song chosen for you.",

spotify:"https://open.spotify.com/embed/track/3oTuTpF1F3A7rEC6RKsMRz",

reminder:"You are very special."

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