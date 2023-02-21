const refs = {
  listEl: document.querySelector(".features-project__nav-list"),
  linkEl: document.querySelector(".features-project__nav-list--link"),
};

refs.listEl.addEventListener("click", onListElClick);

function onListElClick(e) {
  e.preventDefault();
  const currentLink = document.querySelector(
    ".features-project__nav-list--link.current"
  );
  const tapLink = e.target.classList.contains(
    "features-project__nav-list--link"
  );

  if (e.target.nodeName === "A") {
    e.target.classList.add("current");
  }
  if (currentLink) {
    currentLink.classList.remove("current");
  }
}
