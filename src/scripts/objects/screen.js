const screen = {
    userProfile:  document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                         <img src="${user.avatarUrl}" alt="Foto de Perfil do usuário" />
                                        <div class="data">
                                            <h1> ${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrado 😥'}</p>
                                            <div class="follow">
                                            <p class="followers">👥 Seguidores: ${user.followers}</p>
                                            <p class="following">👥 Seguindo: ${user.following}</p>
                                            </div>
                                         </div> 
                                      </div>`

            let repositoriesItens = ''    
            user.repositories.forEach(repos => { 
                   repositoriesItens += `<li>
                                              <a href="${repos.html_url}" target="_blank">${repos.name}
                                              <div class="interacao">
                                                  <div>🍴 ${repos.forks}</div>
                                                  <div class="star-undefined">⭐ ${repos.stargazers_count}</div>
                                                  <div>👀 ${repos.watchers}</div>
                                                  <div class="langNull">👩‍💻 ${repos.language ? repos.language
                                                :"Sem linguagem"}</div>
                                              </div> 
                                              </a>             
                                         </li>`
                                        
                                        });
            
            if(user.repositories.length > 0){
                this.userProfile.innerHTML += `<div class="repositories section">
                                                    <h2>Repositórios</h2>
                                                    <ul>${repositoriesItens}</ul>
                                                    </div>`
            }
                          
            let eventsList = ''    
            user.events.forEach(event =>{

                if(event.type === 'PushEvent'){
                    eventsList += `<li><span class="font-bold">${event.repo.name}</span> - ${event.type}: ${event.payload.commits[0].message}</li>`
                } else if (event.type === 'CreateEvent'){
                    eventsList += `<li><span class="font-bold">${event.repo.name}</span> - ${event.type}: sem descrição</li>`
                }
                
                //  eventsItens += `<li><a href="${event.url}" target="_blank"> <strong class="font-bold">${event.repo.name}<strong> - ${event.payload.commits} </a></li>`
        })
        
            if(user.events.length > 0){
                this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Eventos</h2>
                                                <ul>${eventsList}</ul>
                                               </div>`
            }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3> usuário não encontrado 😥</h3>"
    }
    
}

export { screen }