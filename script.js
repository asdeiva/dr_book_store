var histroy = JSON.parse(localStorage.getItem("histroy") || "[]");
var searched = JSON.parse(localStorage.getItem("searched") || "[]");

var searchNow = document.getElementById("searchNow");
let hisBtn = document.getElementById("hisBtn");

searchNow.addEventListener("click", searchData);

function searchData() {
  var searchInput = document.getElementById("searchInput").value;
  let str = searchInput.split(" ");
  let dateAndTime = getTime();
  console.log(searchInput, str);
  if (searchInput != "") {
    let items = {
      text: searchInput,
      time: dateAndTime,
    };
    histroy.push(items);
    localStorage.setItem("histroy", JSON.stringify(histroy));
    let url =
      "https://www.googleapis.com/books/v1/volumes?q=" + str[0] + str[1];

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // let dataitems = data;
        searched.push(data);
        localStorage.setItem("searched", JSON.stringify(searched));
        fetchdata(data);
      })
      .catch((error) => console.log(error));
  } else {
    alert("<<Enter Auther Name or Book Title>>");
  }
}

function getTime() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  const dateandtime = `${day}/${month + 1}/${year} at ${hour + 1}:${
    minutes + 1
  }`;

  return dateandtime;
}

function fetchdata(data) {
  let output = document.getElementById("output");
  var searchInput = document.getElementById("searchInput").value;
  let outputText = document.getElementById("outputText");
  let searched = document.getElementById("searchInOut");
  output.innerHTML = ""
  outputText.style.display = "block";
  hisBtn.style.visibility = "visible";
  searched.innerHTML = searchInput;
  for (let i = 0; i < data.items.length; i++) {
    let item = `
            <div class="container">
            <img src="${data.items[i].volumeInfo.imageLinks.smallThumbnail}" alt="img">
            <div>Title: ${data.items[i].volumeInfo.title}</div>
            <div>Author: ${data.items[i].volumeInfo.authors}</div>
            <div>PageCount: ${data.items[i].pageCount}</div>
            <div>Publisher: ${data.items[i].volumeInfo.publisher}</div>
            <div><button class="btn2">Buy Now</button></div>
        </div>`;

    output.innerHTML += item;
  }
}

hisBtn.onclick = () => {
  window.location.href = "./history.html";
};

// if(searched.length){
//     hisBtn.style.visibility = "visible";
// }
// else{
//     hisBtn.style.visibility = "hidden";
// }
