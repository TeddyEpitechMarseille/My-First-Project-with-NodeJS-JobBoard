const loadAds = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3000/ad", false);
    xhttp.send();

    const ads = JSON.parse(xhttp.responseText);

    for (let ad of ads) {
        const x = `
                <div class="card promoting-card">
                    <div class="card-body">
                        <h4 class="card-title">${ad.title}</h4><br>
                        <p class="card-text descriptionResume">${ad.description}</p>
                        <a href="#" class="btn btn-primary float-right" id="${ad.id}">Learn more</a>
                    </div>
                </div>
        `
        document.getElementById('ads').innerHTML = x + document.getElementById('ads').innerHTML;
    }
}

loadAds();