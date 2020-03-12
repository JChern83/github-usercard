/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

let gitHubUser = axios.get("https://api.github.com/users/JChern83")
  .then(function (response) {
  })
  .catch(function (error) {

  });
  
const followersArray = [
  "JChern83",
  "leachcoding",
  "Diddleslip",
  "alanblee",
  "Scotth72"
];

followersArray.forEach(item => {
  axios.get("https://api.github.com/users/" + item)
  .then(response => {
    document.querySelector(".cards").appendChild(UserCard(response));
  })
});


function UserCard(githubData) {

  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');


  const profileImg = document.createElement('img');
  profileImg.setAttribute("src", githubData.data.avatar_url);
  cardDiv.appendChild(profileImg);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  cardDiv.appendChild(cardInfo);

  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = githubData.data.name;
  cardInfo.appendChild(name);

  const username = document.createElement('p');
  username.classList.add('username');
  username.textContent = githubData.data.login;
  cardInfo.appendChild(username);

  const location = document.createElement('p');
  username.textContent = "SomeWhereAroundTheWorld";
  if (!githubData.data.location == null)
    username.textContent = githubData.data.location;
  cardInfo.appendChild(location);

  const profile = document.createElement('p');
  profile.textContent = "Profile: " + githubData.data.html_url;
  cardInfo.appendChild(profile);

  const profileLink = document.createElement('a');
  profileLink.setAttribute("href", "githubData.data.html_url"); 
  profile.appendChild(profileLink);


  const followers = document.createElement('p');
  followers.textContent = "Followers: " + githubData.data.followers;
  cardInfo.appendChild(followers);

  const following = document.createElement('p');
  following.textContent = "Following: " + githubData.data.following;
  cardInfo.appendChild(following);

  const bio = document.createElement('p');
  bio.textContent = "Bio: " + githubData.data.bio;
  cardInfo.appendChild(bio);


  return cardDiv;
}
