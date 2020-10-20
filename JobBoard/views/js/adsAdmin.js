$("button").click(function() {
    var adId = $(this).attr("adId");
    if ($(this).attr("option") == "delete") {
        $.ajax({
            type: 'DELETE',
            url: 'http://localhost:3000/ad/' + adId,
        });
        location.reload();
    }
});

$("button").click(function() {
    if ($(this).attr("id") == "displayAds") {
        document.getElementById('adsAdmin').innerHTML = "";
        loadAdsAdmin();
    }
});

$("button").click(function() {
    if ($(this).attr("id") == "displayUsers") {
        document.getElementById('adsAdmin').innerHTML = "";
        loadUsers();
    }
});
