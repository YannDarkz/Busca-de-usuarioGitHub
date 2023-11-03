const screen = {
    userProfile:  document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                         <img src="${user.avatarUrl}" alt="Foto de Perfil do usuário" />
                                        <div class="data">
                                            <h1> ${user.name}</h1>
                                            <p>${user.bio}</p>
                                            <br>
                                            <p class="followers">Seguidores: ${user.followers}</p>
                                            <p class="following">Seguindo: ${user.following}
                                         </div> 
                                      </div>`

            let repositoriesItens = ''    
            user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)
            
            if(user.repositories.length > 0){
                this.userProfile.innerHTML += `<div class="repositories section">
                                                    <h2>Repositórios</h2>
                                                    <ul>${repositoriesItens}</ul>
                                                    </div>`
            }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3> usuário não encontrado</h3>"
    }
    
}

export { screen }