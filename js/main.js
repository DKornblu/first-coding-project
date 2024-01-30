//replace with your user: const GITHUB_URL = "https://api.github.com/users/IsraelTechChallengeITC";
const GITHUB_URL = "https://api.github.com/users/DKornblu";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data);

    // update the profileImage and profileName with the information retrieved.
    const profileName = document.getElementById("profile-name");
    const profileImage = document.getElementById("profile-image");
    
    // console.log(profileName);
    // console.log(profileImage);

    profileName.innerHTML=data.name;
    profileImage.src=`${data.avatar_url}`

    //fetching the image took a while but I got it! :)
  });

  const img = document.querySelector('.card');

  img.addEventListener("mousedown", function invert(){
    img.style.filter="invert(100%)";
  })

  img.addEventListener("click", function invert(){
    img.style.filter="invert(0%)";
  })