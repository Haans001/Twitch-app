function loadFollowers() {
  fetch("https://api.twitch.tv/kraken/streams/followed", {
    method: "GET",
    headers: {
      "Client-ID": "2ycfvm2b45t59j4t37qbz5wt8hhfso",
      Authorization: "OAuth sghiv67uodibilsuyp2t1pvjx1cps9",
      Accept: "application/vnd.twitchtv.v5+json"
    }
  })
    .then(data => {
      return data.json();
    })
    .then(data => {
      var slider = document.getElementById("followers");
      var streams = data.streams;
      for (let i = 0; i < streams.length; i++) {
        var banner = streams[i].preview.medium;
        var nick = streams[i].channel.name;
        // var url = streams[i].channel.url;
        var game = streams[i].channel.game;
        var status = streams[i].channel.status;

        slider.innerHTML += `<div class="card channel m-1" onclick="runStream('${nick}')">
      <img class="card-img-top" src="${banner}" alt="Card image cap">
      <h5><span class="badge badge-light viewers ">${
        streams[i].viewers
      } viewers</span></h5>
      <div class="card-body">
        <h3>${nick}</h3>
        <h5 class="card-title" style="color:black">${truncateText(
          status,
          20
        )}</h5>
        <small class="text-muted">${game}</small>
    </div>`;
      }
    })
    .then(() => {
      var glider = new Glider(document.querySelector(".glider"), {
        slidesToShow: 4,
        slidesToScroll: 4,
        draggable: true,
        rewind: false,
        arrows: {
          prev: ".glider-prev",
          next: ".glider-next"
        }
      });
    });
}

loadFollowers();

function truncateText(text, limit) {
  const shortend = text.indexOf(" ", limit);

  if (shortend === -1) return text;
  return text.substring(0, shortend) + " ...";
}
