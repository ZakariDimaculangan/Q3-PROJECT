function loadPage(page) {
  fetch(page)
    .then(response => response.text())
    .then(html => {
      document.getElementById('content').innerHTML = html;
    })
    .catch(error => console.error('Error loading the page:', error));
}
