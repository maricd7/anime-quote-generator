function newQuote() {
  fetch("https://animechan.vercel.app/api/random")
    .then((response) => response.json())
    .then((quote) => {
      document.getElementById("quote__display").innerHTML = quote.quote;
      document.getElementById("anime__name").innerHTML = quote.anime;
      document.getElementById("char__name").innerHTML = quote.character;
    })
    .catch((error) => {
      console.log(error);
    });
}
