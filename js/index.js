
$('.slide_group1').slick({
    // autoplay: true,
    dots: true,
    autoplaySpeed: 4500,
    pauseOnFocus: false,
    arrows: true,
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    responsive: [{
        breakpoint: 1025,
        settings: {
            arrows: false
        }
    }]
})

$(".slide_group2").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: false, // 동그라미버튼
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    speed: 600, // 바뀌는시간(생략가능)
    slidesToShow: 5, // 보여질슬라이드수 
    slidesToScroll: 1, // 이동슬라이드수
    arrows: false,
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
})



var aboutNear = $('#aboutme').offset().top
var skillNear = $('#skills').offset().top
var pleaseNear = $('#please').offset().top
$('.listbox li').on('click', function(e){
    
    $(this).addClass('on').siblings().removeClass('on')
    var num = $(this).index()
    switch(num) {
        case 0 : $('html').stop().animate({scrollTop: aboutNear}, 500); e.preventDefault(); break;
        case 1 : $('html').stop().animate({scrollTop: skillNear}, 500); e.preventDefault(); break;
        case 3 : $('html').stop().animate({scrollTop: pleaseNear}, 500); e.preventDefault(); break;
    }
})



$('.section').on('mousewheel', function(e, delta){
    if (delta > 0) {
       var prev = $(this).prev().offset().top
       if ( $(this).hasClass('on')) {
          $('html').stop().animate({scrollTop:0}, 500, 'linear')    
       } else { 
          $('html').stop().animate({scrollTop:prev}, 500, 'linear')
       }
    } else if (delta < 0) {
        var next = $(this).next().offset().top
        $('html').stop().animate({scrollTop:next}, 500, 'linear')
    }
})


function draw(jumsu, cname){
    var count=0;
    var stop = setInterval(function(){
        count++
        if (count <= jumsu) {
            $(cname).find('.myscore').text(count+'%')
            .css({height: count+'%'})
        } else {clearInterval(stop)}
                return false
    },10)

}


$(window).on('scroll',function(){
    var sct = $(this).scrollTop()
    if (sct < aboutNear){
        $('.listbox li').eq(0).addClass('on').siblings().removeClass('on')
            $('.skillcontainer').removeClass('on').find('.myscore').css({ height:'0%'})
    } else if (sct >= aboutNear && sct < skillNear){
        $('.listbox li').eq(1).addClass('on').siblings().removeClass('on')  
           if(!$('.skillcontainer').hasClass('on')){
            $('.skillcontainer').addClass('on')
            draw(90, '.html')
            draw(80, '.css')
            draw(70, '.script')
            draw(60, '.jquery')
            draw(50, '.photoshop')
            draw(40, '.illustrator')
        }
    }else if (sct >= skillNear && sct < pleaseNear){
        $('.listbox li').eq(2).addClass('on').siblings().removeClass('on') 
        $('.skillcontainer').removeClass('on').find('.myscore').css({ height:'0%'})
    } else {
        $('.listbox li').eq(3).addClass('on').siblings().removeClass('on') 
       
    }

})




// 내려가면 gotop버튼 생기게 하기
$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if ( sct>=50 && !$('#header').hasClass('on') ) {
        $('#header').addClass('on')
        $('.gotop').addClass('on')
    } else if ( sct<50 && $('#header').hasClass('on') ) {
        $('#header').removeClass('on')
        $('.gotop').removeClass('on')
    }
})


// gotop버튼 클릭시 부드럽게 위로 스크롤시키기
$('.gotop').on('click', function(e){
    e.preventDefault()
    $('html').animate({
        scrollTop:0
    }, 500)
})


// sl2 누르면 팝업 모달박스 나오도록
// $('.slide_group2 > div').on('click', function(){
//     e.preventDefault()
//     $(this).addClass('on')
// })
