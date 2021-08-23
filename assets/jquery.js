$("form").on('submit', (e) => {
    e.preventDefault();
    const email = $('.email').val().trim();
    const subject = $('.subject').val().trim();
    const firstName = $('.firstName').val().trim();
    const lastName = $('.lastName').val().trim();
    const text = $('.message').val().trim();

    const data = {
        email,
        subject,
        text
    };

    $.post('/email', data, () => {
        console.log("server received data!")
    })
});