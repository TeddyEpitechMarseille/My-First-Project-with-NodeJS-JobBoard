const loadMessages = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3000/infoJobApp", false);
    xhttp.send();

    const infoJobApp = JSON.parse(xhttp.responseText);

    for (let info of infoJobApp) {

        const xxhttp = new XMLHttpRequest();
        xxhttp.open("GET", 'http://localhost:3000/ad/' + info.adId, false);
        xxhttp.send();
        const adInfo = JSON.parse(xxhttp.responseText);

        const x = `
                <div class="card">
                    <div class="card-header"><h5 class ="card-title">${adInfo[0].title}</h5></div>
                    <div class="card-body">
                    
                        <p class="card-text">${info.name}</p>
                        <p class="card-text">${info.email}</p>
                        <p class="card-text">${info.message}</p>
                    </div>
                    <button option="delete" msgId="${info.id}" class="btn btn-primary">Delete</button>
                </div>
        `
        document.getElementById('messages').innerHTML = x + document.getElementById('messages').innerHTML;
    }
}

loadMessages();