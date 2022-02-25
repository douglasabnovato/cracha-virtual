const fotoJessica = "./.github/jessica-alves.jpeg"
const bioJessica = "Líder no setor de Fisioterapia"
const nameJessica = "Jéssica Alves"
const loginJessica = "@jeehjeehalves"


const LinksSocialMedia = {
  github: 'douglasabnovato',
  youtube: 'douglasabnovato',
  facebook: 'douglasabnovato',
  instagram: 'douglasabnovato',
  twitter: 'douglasabnovato'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = nameJessica
      userBio.textContent = bioJessica
      userLink.href = data.html_url
      userLogin.textContent = loginJessica
      UserImage.src = fotoJessica
    })
}

getGitHubProfileInfos()
