$("a").click(function() {
    var idAd = $(this).attr("id");
    
    
    $("#adsFull").empty();
    //id récupérer il faut un get by id pour l'afficher dans l'autre colonne

    const loadAdsFull = () => {
        const xhttp = new XMLHttpRequest();
        
        xhttp.open("GET", "http://localhost:3000/ad/" + idAd, false);
        xhttp.send();
    
        const adsFull = JSON.parse(xhttp.responseText);
    
        for (let ad of adsFull) {
            const x = `
                <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${ad.title}</h5>
                                <p class="card-text">${ad.contractType}</p>
                                <p class="card-text">${ad.city}</p>
                                <p class="card-text">${ad.salary}</p>
                                <p class="card-text">${ad.description}</p>
                            </div>
                            <div class="card-footer">
                                <p class="card-text">${ad.publicationDate}</p>
                            </div>
                            <button type="button" class="btn btn-rounded mb-4 btn-primary" data-toggle="modal" data-target="#exampleModal">
                            Apply
                        </button>
                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header text-center">
                                  <h4 class="modal-title w-100 font-weight-bold">Apply to ${ad.title}</h4>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body mx-3">
                                <form action="http://localhost:3000/infoJobApp/${idAd}" id="editForm" method="POST">
                                <div class="modal-body mx-3">
                                <div class="md-form mb-5">
                                <i class="fas fa-user prefix grey-text"></i>
                                <input type="text" id="name" name="name" required class="form-control validate" placeholder="Name">
                                </div>
                                <div class="md-form mb-5">
                                <i class="fas fa-envelope prefix grey-text"></i>
                                <input type="text" id="form29" class="form-control validate" id="email" name="email" required placeholder="Email">
                              </div>
                      

                      
                              <div class="md-form">
                                <i class="fas fa-pencil prefix grey-text"></i>
                                <textarea type="text" class="md-textarea form-control" rows="4" id="message" name="message" required placeholder="Message"></textarea>
                              </div>
                              <div class="modal-footer d-flex justify-content-center">
                                  <button type="submit" class="btn btn-primary">Send</button>
                                </div>
                                </form>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                        
                </div>`
            document.getElementById('adsFull').innerHTML = document.getElementById('adsFull').innerHTML + x;
        }
    }
    
    loadAdsFull();
});