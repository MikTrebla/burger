$(function () {
    $('.create-form').on('submit', function (event) {
        event.preventDefault();
        var newBurger = {
            burger: $('#newBurger').val().trim(),
            devoured: $('form input[type=radio]:checked').val()
        };
        console.log(newBurger);
        $.ajax('/api/burgers', {
                type: 'POST',
                data: newBurger
            })
            .then(function () {
                console.log('created new burger')
                location.reload();
            });
    });

    $('.eatBurgerBtn').on('click', function (event) {
        event.preventDefault();
        var id = $(this).data('id');
        // console.log(id);
        var ateBurger = $(this).data('status');
        console.log(ateBurger)
        // 
        var burgerStatus = {
            devoured: ateBurger
        }
        // console.log(burgerStatus);
        $.ajax('/api/burgers/' + id, {
                type: 'PUT',
                data: burgerStatus
            })
            .then(function () {
                console.log('Changed burgerstatus to ' + ateBurger);
                location.reload();
            });
    });






});