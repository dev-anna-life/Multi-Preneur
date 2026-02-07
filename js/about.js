const observeOption = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade-in-up");
      observer.unobserve(entry.target);
    }
  });
}, observeOption);

document.querySelectorAll('[class*="animate-"]').forEach((el) => { 
  observer.observe(el);

});

const counters = document.querySelectorAll('.counter')
let counterStarted = false

window.addEventListener("scroll", () => {
  counters.forEach((counter) => {
    if (!counterStarted && counter.getBoundingClientRect().top < window.innerHeight) {
      counterStarted = true;
      animateCounters()
    }
  })
  })

  function animateCounters() {
    counters.forEach((counter) => {
      const target = Number.parseInt(counter.textContent.match(/\d+/)[0]);
      const increment = target / 50; 
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        if (current < target) { 
          counter.textContent = Math.ceil(current) + (counter.textContent.includes("₦") ? "₦" : counter.textContent.includes("+") ? "" : "+");
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = counter.getAttribute("data-original") || counter.textContent;
        }
      }

      counter.setAttribute("data-original", counter.textContent)
    updateCounter()
  })
}