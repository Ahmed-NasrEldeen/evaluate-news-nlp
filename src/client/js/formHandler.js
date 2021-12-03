import { validUrl } from "./checkValidUrl";
function handleSubmit(event) {
  event.preventDefault();

  let formText = document.getElementById("name").value;
  if (validUrl(formText)) {
    document.getElementById("results").innerHTML = "LOADING RESULTS... ";
    fetch("http://localhost:8081/nlp", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: formText }),
    })
      .then((res) => res.json())
      .then(function (res) {
        console.log("res", res);
        let formattedREsult = "<br/>";
        Object.keys(res).forEach((element) => {
          formattedREsult += element + ": " + res[element] + "<br/> <br/>";
        });

        document.getElementById("results").innerHTML = formattedREsult;
      })
      .catch((err) => {
        document.getElementById("results").innerHTML = "Network Error";
      });
  } else {
    document.getElementById("results").innerHTML = "Sorry Invalid URL ";
  }
}

export { handleSubmit };
