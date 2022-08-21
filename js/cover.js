$(function() {
    /* cover作る **/
    const cover = $('<div></div>', {
      "class": "cover"
    })
    const copy = $('<div></div>', {
      "class": "copy_cover"
    })
    const copyImage = $('<img />', {
      src: "img/copy.png",
      
      "class": "copy_cover_img"
    })



    /* coverをbodyに追加 **/
    $('#cover').append(cover)
    cover.append(copy)
    copy.append(copyImage)

    copyImage.fadeIn(1500)
    copyImage.css({
      "transform": "scale(1)"
    })
    setTimeout(function() {
      copyImage.fadeOut(1000)
    }, 2000)

    setTimeout(function() {
      cover.stop().animate({opacity: '0'}, 1000)
      $('.first_view').removeClass('firstTimeHiddenElement')  
      $('.bg').removeClass('firstTimeHiddenElement')  
      $('.footer').removeClass('firstTimeHiddenElement')  
    }, 3000)
});