var Name = document.getElementById("text");
var Plus = document.getElementById("plus");
var Minus = document.getElementById("minus");
var age = document.getElementById("age");
var Submit = document.getElementById("submit");
var batsman = document.getElementById("batsman");
var bowler = document.getElementById("bowler");
var allrounder = document.getElementById("allrounder");
var res = document.getElementById("result");
var isName = false;
let arr = [];
let batter = "";
let bowller = "";
var additems = "";
var tolower=Name.value
//var nm=tolower.toLowerCase()
var cnt = 1;

let ls = JSON.parse(localStorage.getItem("arr"));

if (ls) {
  arr = ls;
  addList();

  console.log(arr);
}

if (ls === null) {
  console.log("empty");
  document.getElementById("result").innerHTML = "No Data added!";
}

Submit.addEventListener("click", function () {

  details = {
    name: Name.value,
    age: age.value,
    batsman: batter,
    bowler: bowller,
  };

  arr.push(details);
  localStorage.setItem("arr", JSON.stringify(arr));
  addList();


  for (let i = 0; i < arr.length; i++) {
    if (nm === arr[i].name) {
      // if(Name.toLowerCase())
      alert("already exist!");

      return;
    }
  }

  if (arr.length >= 11) {
    alert("you cannot add more than 11 players!!");
    arr[i] = "";
    return;
  }

  if (batsman.checked === true) {
    batter = "batsman";
  } else {
    batter = "-";
  }

  if (bowler.checked === true) {
    bowller = "bowler";
  } else {
    bowller = "-";
  }

  document.getElementById("result").innerHTML = additems;
});

Plus.addEventListener("click", function () {
  if (cnt >= 1) {
    age.value.innerHTML = age.value++;
  }

  console.log(cnt);
});

Minus.addEventListener("click", function () {
  if (cnt >= 1) {
    age.value.innerHTML = age.value--;
  }
  console.log(cnt);
});


function addList() {
  additems = `<table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Batsman</th>
      <th scope="col">Bowler</th>
    </tr>
  </thead>
 `;

  for (let i = 0; i < arr.length; i++) {
    additems += ` 
    <table class="table"
    <tbody>
      <tr>
        <th scope="row">${i + 1}</th>
        <td>${arr[i].name}</td>
        <td>${arr[i].age}</td>
        <td>${arr[i].batsman}</td>
        <td>${arr[i].bowler}</td>
      </tr>
      </tbody>
      </table>`;
  }
  additems += "";

  document.getElementById("result").innerHTML = additems;
}

