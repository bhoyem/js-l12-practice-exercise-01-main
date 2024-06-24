const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("#users");
selectUserNumber.addEventListener("change", function(e){
    let numUsers = e.target.value;
    getData(numUsers);
});


const getData = async function (numUsers) {
    const userRequests = await fetch(`https://randomuser.me/api?results=${numUsers}`);
    const data = await userRequests.json();
    // console.log(data);
    const userResults = data.results;
    // console.log(userResults)
    displayUsers(userResults);
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



getData(1);