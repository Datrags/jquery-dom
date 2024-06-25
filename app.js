$( function() {
    console.log("Let's get ready to party with jQuery!");

    $('article').addClass('image-center');

    $('article p:last-child').remove();

    $("#title").css("font-size", Math.random() * 101);

    $("ol").append($("<li>", {
        text: "I can add to lists with jQuery"
    }));

    $('aside').empty().append($("<p>", {
        text: "Sorry for the list's existence."
    }));

    $('.form-control').on('click', function() {
        //get colors from form
        let r = $('.form-control').eq(0).val();
        let g = $('.form-control').eq(1).val();
        let b = $('.form-control').eq(2).val();
        //change color of body
        $('body').css("background-color", `rgb(${r}, ${g}, ${b})`);
    });

    $('img').on('click', function() {
        $(this).remove();
    })
});