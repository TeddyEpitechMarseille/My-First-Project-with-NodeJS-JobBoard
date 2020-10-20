const loadAdsAdmin = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3000/ad", false);
    xhttp.send();

    const adsAdmin = JSON.parse(xhttp.responseText);
    const addAd = `<button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">
    Add ad
    </button>`;
    
    document.getElementById('adsAdmin').innerHTML = addAd + document.getElementById('adsAdmin').innerHTML;
    var i = 0;
    for (let ad of adsAdmin) {
        
        var x = `
                <div class="card">
                <div class="card-header"><h5 class="card-title">${ad.title}</h5></div>
                    <div class="card-body">
                        <p class="card-text">${ad.contractType}</p>
                        <p class="card-text">${ad.city}</p>
                        <p class="card-text">${ad.salary}</p>
                        <p class="card-text">${ad.description}</p>
                        <button option="edit" adId="${ad.id}" type="button" class="btn btn-primary" data-toggle="modal" data-target="#editModal">
                        Edit
                        </button>
                    <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="editModalLabel">Enter ad information</h5>
                                    <button type="button" class="close" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form action="http://localhost:3000/editad/${ad.id}" method="POST">
                                        <div class="form-group">
                                            <label for="title" class="col-form-label">Title</label>
                                            <input type="title" class="form-control" id="title" name="title" value="${ad.title}"required>
                                        </div>
                                        <div class="form-group">
                                            <label for="contractType" class="col-form-label">Contract Type</label>
                                            <input type="text" class="form-control" id="contractType" name="contractType" value="${ad.contractType}"></input>
                                        </div>
                                        <div class="form-group">
                                            <label for="city" class="col-form-label">City</label>
                                            <input class="form-control" id="city" name="city" value="${ad.city}"></input>
                                        </div>
                                        <div class="form-group">
                                            <label for="salary" class="col-form-label">Salary</label>
                                            <input class="form-control" id="salary" name="salary" value="${ad.salary}"></input>
                                        </div>
                                        <div class="form-group">
                                            <label for="description" class="col-form-label">Description</label>
                                            <textarea class="form-control" id="description" name="description" required>${ad.description}</textarea>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="submit" class="btn btn-primary">Confirm</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                        <button option="delete" adId="${ad.id}" class="btn btn-primary">Delete</button>
                    </div>
                    <div class="card-footer">
                        <p class="card-text">${ad.publicationDate}</p>
                    </div>
                </div>
                </div>
        `
        document.getElementById('adsAdmin').innerHTML = document.getElementById('adsAdmin').innerHTML + x;
        i = 1;
    }
}

loadAdsAdmin();