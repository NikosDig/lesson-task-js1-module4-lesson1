const url =
  "https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json";

const results = document.querySelector(".results");

async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    results.innerHTML = "";

    for (i = 0; i < data.length; i++) {
      if (i === 15) {
        break;
      }

      if (
        data[i].teamName.startsWith("C") ||
        data[i].teamName.startsWith("c")
      ) {
        continue;
      }
      results.innerHTML += ` 
      <div class="card"> <h3> ${data[i].teamName} </h3> 
      <h4> ${data[i].location}
      `;
    }
  } catch (error) {
    console.log(error);
    results.innerHTML = message("error", error);
  }
}

getData();
