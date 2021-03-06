class SmoothScroll {
  constructor(links) {
    this.linkElements = document.querySelectorAll(links);

    this.addClickEvent();
  }

  handleClick(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    window.scrollTo({
      top: section.offsetTop - (window.innerHeight - section.clientHeight) / 2,
      behavior: "smooth"
    });
  }

  addClickEvent() {
    this.linkElements.forEach(link => {
      link.addEventListener("click", this.handleClick);
    });
  }
}

const scroll = new SmoothScroll("a[href^='#']");