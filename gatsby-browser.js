const isInView = target => {
  const pageTargets = document.querySelectorAll(target)

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  }

  const callback = function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view")
      }
    })
  }

  let observer = new IntersectionObserver(callback, options)

  pageTargets.forEach(item => {
    observer.observe(item)
  })
}

// exports.onRouteUpdate = ({ location, prevLocation }) => {
//   isInView("img[src]")
//   isInView("iframe")
// }

// exports.onInitialClientRender = () => {
//   isInView("img[src]")
//   isInView("iframe")
// }

// exports.onClientEntry = () => {
//   isInView("img[src]")
//   isInView("iframe")
// }
