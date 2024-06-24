const randomFolks = document.querySelector(".random-peeps");

const getData = async function () {
    const userRequests = await fetch("https://randomuser.me/api?results=5");
    const data = await userRequests.json();
    // console.log(data);
    const userResults = data.results;
    console.log(userResults)
    // displayUsers(userResults);
};

const displayUsers = function (userResults) {
    randomFolks.innerHTML = "";
    for (user of userResults) {
        const name = user.name.first;
        const country = user.location.country;
        const imageUrl = user.picture.medium;
        // console.log(name, country, imageUrl);
        let userDiv = document.createElement("userDiv");
        userDiv.innerHTML = `
        <h3>${name}</h3>
        <p>${country}</p>
        <img src=${imageUrl} alt="User avatar" />`;
        randomFolks.append(userDiv);
    }
};



getData();