const stream = document.getElementById("stream");
let form = document.getElementById("load-stream");

var streamInput = document.getElementById("input-value");
const list = document.getElementById("results");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  var streamName = document.getElementById("input-value").value;

  stream.innerHTML = `
  <iframe
        src="https://player.twitch.tv/?channel=${streamName}"
        height="800"
        width="1200"
        frameborder="0"
        scrolling="true"
        allowfullscreen="true"
      >
      </iframe>


      <iframe
        frameborder="0"
        scrolling="yes"
        id="chat_embed"
        src="https://www.twitch.tv/embed/${streamName}/chat"
        height="800"
        width="300"
      >
      </iframe>
      `;
});

streamInput.addEventListener("keyup", function() {
  const value = streamInput.value;
  fetch(
    `https://api.twitch.tv/kraken/search/channels?query=${value}&limit=10`,
    {
      method: "GET",
      headers: {
        "Client-ID": "2ycfvm2b45t59j4t37qbz5wt8hhfso",
        Accept: "application/vnd.twitchtv.v5+json"
      }
    }
  )
    .then(data => {
      return data.json();
    })
    .then(data => {
      console.log(data);
      list.innerHTML = "";

      for (let i = 0; i < data.channels.length; i++) {
        list.innerHTML += `<li onclick="runStream('${
          data.channels[i].display_name
        }')" class="list-group-item item col-xs-6">
        <img width="80px" height="80px" src=${data.channels[i].logo}> ${
          data.channels[i].display_name
        }</li>`;
      }
    });
});

function runStream(streamerNick) {
  const nick = streamerNick;
  stream.innerHTML = `
  <iframe
        src="https://player.twitch.tv/?channel=${nick}"
        height="800"
        width="1200"
        frameborder="0"
        scrolling="true"
        allowfullscreen="true"
      >
      </iframe>


      <iframe
        frameborder="0"
        scrolling="yes"
        id="chat_embed"
        src="https://www.twitch.tv/embed/${nick}/chat"
        height="800"
        width="300"
      >
      </iframe>
      `;

  list.innerHTML = "";
  streamInput.value = "";
}

fetch("https://api.twitch.tv/kraken/user", {
  method: "GET",
  headers: {
    "Client-ID": "2ycfvm2b45t59j4t37qbz5wt8hhfso",
    Accept: "application/vnd.twitchtv.v5+json"
  }
})
  .then(data => {
    return data.json();
  })
  .then(data => {
    console.log(data);
  });
