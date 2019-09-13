(async () => {
  try {
    const res = await fetch(
      "https://api.unsplash.com/photos/random?query=architecture nature&orientation=landscape",
      {
        headers: {
          Authorization:
            "Client-ID 5e209ac631fe3db30edae82fad81153b0018104909e6b2d8c3c201267df021c3"
        }
      }
    );

    const json = await res.json();

    const elUntab = document.getElementById("untab");
    elUntab.style = `background-image: url(${json.urls.regular})`;

    const elProfileImage = document.getElementById("profile_image");
    elProfileImage.style = `background-image: url(${json.user.profile_image.medium})`;

    const userLink = document.createElement("a");
    userLink.href = `${json.user.links.html}?utm_source=untab&utm_medium=referral`;
    userLink.textContent = json.user.name;

    const onSpan = document.createElement("span");
    onSpan.textContent = " on ";

    const photoLink = document.createElement("a");
    photoLink.href = `${json.links.html}?utm_source=untab&utm_medium=referral`;
    photoLink.textContent = "Unsplash";

    const elAttribution = document.getElementById("attribution");
    elAttribution.appendChild(userLink);
    elAttribution.appendChild(onSpan);
    elAttribution.appendChild(photoLink);

    const location = document.createElement("p");
    location.id = "location_text";
    location.textContent = json.location.title;

    const elLocation = document.getElementById("location");
    elLocation.appendChild(location);
  } catch (error) {
    const elUntab = document.getElementById("untab");
    elUntab.textContent = "Oops. We couldn't fetch an image from Unsplash.";
  }
})();
