$(function () {
    $('.create-form').on('submit', function (event) {
        event.preventDefault();
        var newBurger = {
            burger: $('#newBurger').val().trim(),
            devoured: $('[name=eatNow]:checked').val().trim()
        };
        $.ajax('/api/burgers', {
                type: 'POST',
                data: newBurger
            })
            .then(function () {
                console.log('created new burger')
                location.reload();
            });
    });







});