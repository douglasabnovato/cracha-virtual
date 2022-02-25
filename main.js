/**
 * montar os links das redes sociais dinamicamente
 */
const LinksSocialMedia = {
  github: 'douglasabnovato',
  youtube: 'douglasabnovato',
  facebook: 'douglasabnovato',
  instagram: 'douglasabnovato',
  twitter: 'douglasabnovato'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {// filho de id="socialLinks"
    const social = li.getAttribute('class')//o primeiro filho é li class="youtube"

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

/**
 * preencher as informações de perfil no html com a resposta com os dados da api do github
 */
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)//chamada a api
    .then(response => response.json())//conversão da resposta em json
    .then(data => { //com todo o objeto json
      userName.textContent = data.name // separar elementos que me interessam e passar para o html correspondente
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
