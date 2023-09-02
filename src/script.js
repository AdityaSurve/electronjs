const show = async () => {
  await fetch("https://api.artic.edu/api/v1/artworks")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const artwork = data.data[6];
      const title = artwork.title;
      const artist = artwork.artist_title;
      const image = artwork.thumbnail.lqip;
      const medium = artwork.medium_display;
      const date = artwork.date_display;

      document.getElementById("title").innerHTML = title;
      document.getElementById("artist").innerHTML = artist;
      document.getElementById("image").src = image;
      document.getElementById("medium").innerHTML = medium;
      document.getElementById("date").innerHTML = date;
    })
    .catch((err) => {
      console.log(err);
    });
};

const hide = () => {
  document.getElementById("title").innerHTML = "";
  document.getElementById("artist").innerHTML = "";
  document.getElementById("image").src = "";
  document.getElementById("medium").innerHTML = "";
  document.getElementById("date").innerHTML = "";
};
