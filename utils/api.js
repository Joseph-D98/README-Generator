const inquirer = require("inquirer");
const axios = require("axios");

// prompt user for GitHub details 
const api = {
    getUser(username) {
        inquirer
            .prompt({
                message: "What is your user GitHub username?",
                name: "username"
            })
            // get GitHub UserName details from source 
            .then(function ({
                username
            }) {
                const queryUrl = `https://api.github.com/users/${username}`;

                // get GitHub avatar image
                axios.get(queryUrl).then(function (res) {
                    const avatarURL = res.data.avatar_url
                    console.log(avatarURL);
                });
            });
    }
};

// Export data in 'const api' to the index.js page
module.exports = api;
