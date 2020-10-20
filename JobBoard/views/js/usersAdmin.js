const loadUsers = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3000/people", false);
    xhttp.send();

    const usersInfo = JSON.parse(xhttp.responseText);

    for (let user of usersInfo) {
        var x = `
                <div class="card">
                    <div class="card-header"><h5 class ="card-title">${user.name}</h5></div>
                        <div class="card-body">
                            <p class="card-text">${user.email}</p>
                            <p class="card-text">${user.phone}</p>
                            <p class="card-text">${user.password}</p>
                            <p class="card-text">Admin :` + (user.admin ? ` Yes` : ` No`) + `</p>
                            <form action="http://localhost:3000/makeAdmin/${user.id}" method="POST">
                                <button type="submit" class="btn btn-primary">Make admin</button>
                            </form>
                        </div>
                        <form action="http://localhost:3000/deletepeople/${user.id}" method="POST">
                            <button type="submit" class="btn btn-primary">Delete</button>
                        </form>
                    </div>
                </div>
                `
        document.getElementById('adsAdmin').innerHTML = document.getElementById('adsAdmin').innerHTML + x;
    }
};
