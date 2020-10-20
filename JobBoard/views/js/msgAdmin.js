$("button").click(function() {
    var msgId = $(this).attr("msgId");
    if ($(this).attr("option") == "delete") {
        $.ajax({
            type: 'DELETE',
            url: 'http://localhost:3000/infoJobApp/' + msgId,
        });
        location.reload();
    }
});
