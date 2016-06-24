$(document).ready(function() {
    $('#upload').crc32(function(err, code) {
        if (err) {
            console.log(err);
        } else {
            $('.result').text(code);
        }
    });
});