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
 * preencher as informações de perfil chamando dados da api github
 */
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
