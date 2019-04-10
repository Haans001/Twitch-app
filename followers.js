window.onload = function() {
  loadFollowers();
};
function loadFollowers() {
  fetch("https://api.twitch.tv/kraken/streams/followed", {
    method: "GET",
    headers: {
      "Client-ID": "2ycfvm2b45t59j4t37qbz5wt8hhfso",
      Authorization: "OAuth cde46b22fq803dy2zntcec875hr4u8",
      Accept: "application/vnd.twitchtv.v5+json"
    }
  })
    .then(data => {
      return data.json();
    })
    .then(data => {
      new Glider(document.querySelector(".glider"), {
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: true,
        rewind: false,
        arrows: {
          prev: ".glider-prev",
          next: ".glider-next"
        }
      });

      var slider = document.getElementsByClassName("glider-track")[0];

      var streams = data.streams;
      for (let i = 0; i < streams.length; i++) {
        var banner = streams[i].preview.medium;
        var nick = streams[i].channel.name;
        // var url = streams[i].channel.url;
        var game = streams[i].channel.game;
        var status = streams[i].channel.status;

        slider.innerHTML += `<div class="card channel m-1" onclick="runStream('${nick}')">
      <img class="card-img-top" src="${banner}" alt="Card image cap">
      <div class="card-body">
        <h3>${nick}</h3>
        <h5 class="card-title" style="color:black">${status}</h5>
        <small class="text-muted">${game}</small>
    </div>`;
      }
    });
}
loadFollowers();
