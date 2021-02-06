let xhr = new XMLHttpRequest();
function handleResponse(){
    if(xhr.readyState == XMLHttpRequest.DONE){
        let container = document.querySelector(".visit")
        let output = '';
        let listOfNews = JSON.parse(xhr.responseText);
        for(let news of listOfNews){
            output+="<a target=\"_blank\" href=\""+news.url+"\">"+news.title+"</a><br/>";
        }
        container.innerHTML = output;

    }
}
function getBlankPage(){
    let container = document.querySelector(".visit");
    container.innerHTML = '';
}

function getHacksonNews(){
    xhr.open('GET', '/top', true);
    xhr.onreadystatechange = handleResponse;
    xhr.send();
}