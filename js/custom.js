$("#projects li").click((e) => {
    $("#projects li a").removeClass('active');
    $(e.target).addClass('active');
    let filter = $(e.target).attr('data-filter');
    $('#gallery-items').children().each((e, item) => {
        $(item).hide();
        if ($(item).attr('data-item') === filter || filter === '*') {
            $(item).fadeIn();
        }
    })
})

$('.comment-icons img').click((e) => {
    $(".comment-icons img").removeClass('active');
    $(e.target).addClass('active');
    $('.comment').hide()
    let index = $(e.target).index() + 3;
    $('.comment:nth-child(' + index + ')').fadeIn()
})

$(window).scroll(()=>{
    if($(window).scrollTop() > $('.navbar').position().top + ($('.navbar').outerHeight() * 2)){
        $('.navbar').addClass('fixed')
    }
    else{
        $('.navbar').removeClass('fixed')
    }

    if($(window).scrollTop() > $('#home').position().top){
        $('#my-nav a').removeClass('active');
        $('#my-nav a')[0].classList.add('active');
    }

    if($(window).scrollTop() > $('#about-us').position().top - 200){
        $('#my-nav a').removeClass('active');
        $('#my-nav a')[1].classList.add('active');
    }

    if($(window).scrollTop() > $('#our-services').position().top - 200){
        $('#my-nav a').removeClass('active');
        $('#my-nav a')[2].classList.add('active');
    }

    if($(window).scrollTop() > $('#our-team').position().top - 200){
        $('#my-nav a').removeClass('active');
        $('#my-nav a')[3].classList.add('active');
    }

    if($(window).scrollTop() > $('#projects').position().top - 200){
        $('#my-nav a').removeClass('active');
        $('#my-nav a')[4].classList.add('active');
    }

    if($(window).scrollTop() > $('#comments').position().top - 200){
        $('#my-nav a').removeClass('active');
        $('#my-nav a')[5].classList.add('active');
    }

    if($(window).scrollTop() > $('#contact-us').position().top - 200){
        $('#my-nav a').removeClass('active');
        $('#my-nav a')[6].classList.add('active');
    }
})