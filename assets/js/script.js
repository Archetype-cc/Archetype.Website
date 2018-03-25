
var q = document.querySelector(".q");
var x = document.querySelector(".x");
var main = document.querySelector(".main");
var modal = document.querySelector(".modal");


window.onload=function(){
  q.addEventListener("click", openModal);
  function openModal() {
    main.classList.add("dn");
    modal.classList.remove("dn");
  }

  x.addEventListener("click", closeModal);
  function closeModal() {
    main.classList.remove("dn");
    modal.classList.add("dn");
  }

}
