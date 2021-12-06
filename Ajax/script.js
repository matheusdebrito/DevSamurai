var elApp = document.getElementById("app");


function recuperarDados(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.github.com/users/matheusdebrito");
    xhr.send(null);
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
        var res = JSON.parse(xhr.responseText);

        var nome = res.name;
        var avatar_url = res.avatar_url;
        var followers = res.followers;
        var blog_url = res.blog;

        var elAvatar = document.createElement("img");
        elAvatar.setAttribute("width", "128");
        elAvatar.setAttribute("src", avatar_url);

        var elNome = document.createElement("p");
        elNome.innerText = nome;

        var elFollowers = document.createElement("p");
        elFollowers.innerText = followers;

        var elBlog = document.createElement("a");
        elBlog.setAttribute("href", "http://", blog_url);
        elBlog.innerText = "Você não tem um link de blog";
        
        
        elApp.appendChild(elAvatar);
        elApp.appendChild(elNome);
        elApp.appendChild(elFollowers);
        elApp.appendChild(elBlog);
        }
    }

}
