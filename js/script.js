document.addEventListener('DOMContentLoaded', function () {
    const filters = document.querySelectorAll('.filter');
    const entries = document.querySelectorAll('.entry');

    filters.forEach(filter => {
        filter.addEventListener('click', function () {
            // Remove active class from all filters and add to the clicked one
            filters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');

            const selectedTag = this.getAttribute('data-filter');
            if (selectedTag === 'all') {
                entries.forEach(entry => entry.style.display = '');
            } else {
                entries.forEach(entry => {
                    const tags = entry.getAttribute('data-tags');
                    if (tags.includes(selectedTag)) {
                        entry.style.display = '';
                    } else {
                        entry.style.display = 'none';
                    }
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
  // Assuming there's a <p id="aboutText"> inside <section id="about">
  const aboutTextContainer = document.getElementById('aboutText');

  // Function to load text content from a file
  function loadAboutText() {
    fetch('res/aboutme.txt') // Path to your text file
      .then(response => response.text())
      .then(text => {
        // Insert the text into the <p> tag
        aboutTextContainer.textContent = text;
      })
      .catch(error => {
        console.error('There was an error loading the About Me text:', error);
      });
  }

  // Load the about text if the container is found
  if (aboutTextContainer) {
    loadAboutText();
  }
});

