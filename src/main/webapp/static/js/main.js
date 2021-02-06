let xhr = new XMLHttpRequest();
function handleNews(){
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

function handleJobs(){
    if(xhr.readyState == XMLHttpRequest.DONE){
        let container = document.querySelector(".visit")
        let output = '';
        let listOfJobs = JSON.parse(xhr.responseText);
        for(let job of listOfJobs){
            output+="<a target=\"_blank\" href=\""+job.url+"\">"+job.title+"</a><br/>";
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
    xhr.onreadystatechange = handleNews;
    xhr.send();
}

function getJobs(){
    xhr.open('GET', '/jobs', true);
    xhr.onreadystatechange = handleJobs;
    xhr.send();
}