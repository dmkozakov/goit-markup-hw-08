const refs = {
  filterBox: document.querySelector(".filter"),
  projects: document.querySelectorAll(".projects__item"),
};

refs.filterBox.addEventListener("click", onFilterClick);
let activeFilter = null;

function onFilterClick(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  changeFilterState(e);
  filterProjects(e);
}

function changeFilterState(evt) {
  const currentFilter = evt.target;
  const isActive = currentFilter.classList.contains("filter__button--is-active");

  if (isActive) {
    currentFilter.classList.remove("filter__button--is-active");
    currentFilter.classList.add("no-hover");
    return;
  }

  if (activeFilter) {
    activeFilter.classList.remove("filter__button--is-active");
  }

  currentFilter.classList.add("filter__button--is-active");
  currentFilter.classList.remove("no-hover");

  activeFilter = currentFilter;
}

function filterProjects(evt) {
  const currentFilter = evt.target;
  const projects = [...refs.projects];

  if (currentFilter.dataset.type === "all") {
    return projects.forEach(el => (el.hidden = false));
  }

  projects.map(el => {
    if (el.dataset.value === currentFilter.dataset.type) {
      return (el.hidden = false);
    }
    return (el.hidden = true);
  });
}
