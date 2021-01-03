// used the example from the github example in the interactive github api
function userInformationHTML(user) {
    return <h2 > $ {
            user.name
        } <
        span class = "small-name" >
        (@ < a href = "${user.html_url") target = "_blank" > $ {
            user.login
        } <
        /a>  < /
    span > <
        /h2>  <
    div class = "xas-content" >
        `<div class = "xas-avatar" >
        < a href = "${user.html_url}"
    width = "80"
    alt = "${user.login}" / >
        </a> < /
        div>
        <P >Followers: $ {
        user.followers
        } - Following $ {
            user.following
        } < br > Repos: $ {
            user.public_repos
        } < /P> </div>`;
}

function fetchGithubInformation(event) {
    var username = $("gh-username".val());
    if (!username) {
        $("#gh-used-data").html(`<h2>Please enter a Xascapade username</h2>`);
        return;
    }
    $("#gh-user-data").html(
        '<div i="loader"> <
        img src = "assets/css/loader.gif"
        alt = "loading..." / > ' </div > );
        $.when(
            $.getJSON(`https://api.github.com/users/${username}`),
            $.getJSON(`https://api.github.com/users/${username}/repos`)
        ).then(
            function(firstResponse, secondResponse) {
                var userData = firstResponse[0];
                var repoData = secondResponse[0];
                $("#gh-user-data").html(userInformationHTML(userData));
                $("#gh-repo-data").html(repoInformationHTML(repoData));
            },
            function(errorResponse) {
                if (errorResponse.status === 404) {
                    $("#gh-user-data").html(
                        `<h2>No info found for user ${username}</h2>`);
                } else if (errorResponse.status === 403) {
                    var resetTime = new Date(errorResponse.getResponseHeader('X-RateLimit-Reset') * 1000);
                    $("#gh-user-data").html(`<h4>Too many requests, please wait until ${resetTime.toLocaleTimeString()}</h4>`);
                } else {
                    console.log(errorResponse);
                    $("#gh-user-data").html(
                        `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
                }
            });
    }

    $(document).ready(fetchInformation);


}
}