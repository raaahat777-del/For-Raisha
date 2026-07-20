const dailyContent = {

  "2026-07-13": {

    mission: "Notice one beautiful thing around you today.",

    letter: "Just a reminder that you are loved and appreciated.",

    photo: "images/memory1.jpeg",

    memoryCaption: "A beautiful memory I always want to keep.",

    song: "Raindance - Dave & Tems",

    spotify: "https://open.spotify.com/embed/track/3oTuTpF1F3A7rEC6RKsMRz",

    reminder: "You make ordinary days special."

 

  },

  "2026-07-20": {

  mission: "Today, promise me you'll take care of yourself, even if I'm not there to remind you every minute.",

  letter: "I know I hurt you, and I wish I could take those moments back. If I could, I'd choose your smile over being right every single time. You deserve love that feels safe, gentle, and comforting. I'm still learning, but I promise I'm trying because you are worth every effort. Thank you for staying, even on the days when I make it difficult. I love you more than my mistakes could ever describe.",

  photo: "images/memory7.jpeg",

  memoryCaption: "I never want my actions to make you doubt how deeply I love you.",

  song: "Faasle",

  spotify: "https://open.spotify.com/embed/track/6YNl1rXbhKvmbMrw9cp3RQ",

  reminder: "If your heart feels heavy today because of me, I hope tomorrow I'm able to make it lighter."

},
  
"2026-07-21": {

  mission: "Find one little thing today that reminds you of us, and smile for just a second.",

  letter: "Every new day with you feels like another chance to love you a little better than yesterday. I know we're not perfect, but I don't want perfection—I want us. I want all the little conversations, the silly jokes, the quiet moments, and even the difficult days, because they're all part of our story. No matter what happens, I hope you always remember that meeting you has been one of the most beautiful things that ever happened to me.",

  photo: "images/memory8.jpeg",

  memoryCaption: "Every chapter with you becomes my favorite memory.",

  song: "Apna Bana Le - Arijit Singh",

  spotify: "https://open.spotify.com/embed/track/1UTzknFnMdtH3morV6o1hA",

  reminder: "I choose you today, tomorrow, and every day after."

},
};

// ---------- DATE (OMAN TIME) ----------

const now = new Date();

const dateParts = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Muscat",
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
}).formatToParts(now);

const year = dateParts.find(p => p.type === "year").value;
const month = dateParts.find(p => p.type === "month").value;
const day = dateParts.find(p => p.type === "day").value;

const today = `${year}-${month}-${day}`;

const todayContent =
  dailyContent[today] || dailyContent["2026-07-13"];

const displayDate = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Muscat",
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
}).format(now);

// ---------- BUTTON ----------

document.getElementById("enterButton").addEventListener("click", function () {

  document.body.innerHTML = `

<div class="today-page">

  <div class="today-card">

    <h1>🌸 Today's Gift 🌸</h1>

    <p class="date-text">${displayDate}</p>

    <div class="gift-section">

      <h2>🌅 Today's Mission</h2>

      <p>${todayContent.mission}</p>

    </div>

    <div class="gift-section">

      <h2>💌 Today's Letter</h2>

      <p>${todayContent.letter}</p>

    </div>

    <div class="gift-section">

      <h2>📸 Today's Memory</h2>

      <img
        src="${todayContent.photo}"
        class="memory-photo"
        alt="Memory Photo">

      <p>${todayContent.memoryCaption}</p>

    </div>

    <div class="gift-section">

      <h2>🎵 Today's Song</h2>

      <p>${todayContent.song}</p>

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

      <h2>✨ Reminder</h2>

      <p>${todayContent.reminder}</p>

    </div>

  </div>

</div>

`;

});
