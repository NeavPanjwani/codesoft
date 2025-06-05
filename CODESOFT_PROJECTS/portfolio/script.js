gsap.registerPlugin(ScrollTrigger);

// Header
gsap.from("#header", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

// About
gsap.from("#about", {
  x: -100,
  opacity: 0,
  duration: 1.2,
  scrollTrigger: "#about"
});

// Skills from top
gsap.from("#skills", {
  y: -100,
  opacity: 0,
  duration: 1.2,
  scrollTrigger: "#skills"
});

// Projects from left
gsap.from("#projects", {
  x: -150,
  opacity: 0,
  duration: 1.2,
  scrollTrigger: "#projects"
});

// Resume zoom-in
gsap.from("#resume", {
  scale: 0.6,
  opacity: 0,
  duration: 1.2,
  ease: "back.out(1.7)",
  scrollTrigger: "#resume"
});

// Contact glow effect
gsap.from("#contact", {
  opacity: 0,
  duration: 1.5,
  scrollTrigger: "#contact",
  onStart: () => {
    document.querySelector("#contact").style.textShadow = "0 0 10px #007BFF";
  }
});


document.querySelector(".resume-link").addEventListener("click", function (e) {
  e.preventDefault();

  fetch('Neav_Panjwani_Resume.pdf')
    .then(response => {
      if (!response.ok) throw new Error("File not found");
      return response.blob();
    })
    .then(blob => {
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Neav_Panjwani_Resume.pdf'; // Corrected here
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);

      // Confetti 🎉
      setTimeout(() => {
        if (typeof confetti === 'function') {
          confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.6 }
          });
        }
      }, 300);
    })
    .catch(err => alert("Resume file not found or error in download"));
});
