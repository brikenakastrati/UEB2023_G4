
        function showWarning() {
            alert("Ky button rinis Slideshow-in nga foto e parë !"); // Paraqet një vërejtje në një dialog alert
          }

          function scrollToSection(ProgrametDitore) {
            const section = document.querySelector(ProgrametDitore);
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
        
        function scrollToSection(NgjarjetPerseriturae) {
            const section = document.querySelector(NgjarjetPerseritura);
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
        
        function scrollToSection(NgjarjetSpeciale) {
            const section = document.querySelector(NgjarjetSpeciale);
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
        
     
        // Function to scroll to a specific section on the page
function scrollToSection(NgjarjetKaluara, smoothScroll = true) {
    const section = document.querySelector(NgjarjetKaluara);

    if (section) {
      // Scroll to the section
      section.scrollIntoView({
        behavior: smoothScroll ? 'smooth' : 'auto'
      });
    }
  }
  scrollToSection('#NgjarjetKaluara');
  