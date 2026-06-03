 const usuarioGithub = "italonobrega"; 

      // Busca dados púlicos do usuário na API do GitHub
      fetch(`https://api.github.com/users/${usuarioGithub}`)
        .then(response => {
          if (!response.ok) throw new Error('Erro na requisição');
          return response.json();
        })
        .then(data => {
          document.getElementById("repos").textContent = data.public_repos;
          document.getElementById("seguidores").textContent = data.followers;
        })
        .catch(error => {
          console.error("Erro ao carregar dados:", error);
          document.getElementById("repos").textContent = "!";
          document.getElementById("seguidores").textContent = "!";
        });