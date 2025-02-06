document.addEventListener("DOMContentLoaded", function() {
    fetch('https://api.github.com/users/704k0-dev/repos')
    .then(response => response.json())
    .then(data => {
        let container = document.getElementById('repos');
        if (container) {
            data.filter(repo => repo.name !== "704k0-dev" && repo.name !== "704k0-dev.github.io")
                .forEach(repo => {
                    let item = document.createElement('div');
                    item.innerHTML = `<h2><a href="${repo.html_url}" target="_blank">${repo.name.replace(/_/g, ' ')}</a></h2>
                                      <p>${repo.description || "Sin descripción"}</p>`;
                    container.appendChild(item);
                });
        }
    })
    .catch(error => console.error("Error al cargar los repositorios:", error));
});
