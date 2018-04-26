let onPageLoad = () => {
  setTimeout(showPage, 2000);
};

let showPage = () => {
  document.getElementById("loader").style.display = "none";
  document.querySelector("#portfolio").style.display = "block";
};

let formSubmit = event => {
  if (
    event.target.className == "fa fa-facebook" ||
    event.target.className == "fa fa-linkedin"
  ) {
  } else if (event.target.className.length == 0) {
    event.preventDefault();
  }
};
