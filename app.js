// function reverse1(){
//     let data = document.getElementById("input").value;
//     data.split("").reverse().join("");
//     document.getElementById("input").value = data;
// }
let data;
function submit1() {
  document.getElementById("info").style.display = "block";
  document.getElementById("btn-2").style.display = "block";
  document.getElementById("btn-3").style.display = "block";
  data = document.getElementById("input").value;
  document.getElementById("info").innerHTML = data;
  document.getElementById("btn-3").style.display = "none";
  document.getElementById("input").value = "";
  document.getElementById("reset").style.display = "block";
}
function rev() {
  document.getElementById("btn-2").style.display = "none";
  document.getElementById("btn-3").style.display = "block";
  document.getElementById("info").innerHTML = data.split("").reverse().join("");
}
function refreshPage() {
  window.location.reload();
}
function rev1() {
    document.getElementById("info").innerHTML = data;
    document.getElementById("btn-2").style.display = "block";
    document.getElementById("btn-3").style.display = "none";
}
