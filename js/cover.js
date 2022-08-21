$(function() {
    /** 要素作成 */
    const cover = $('<div></div>', {
      "class": "cover"
    })
    const copy = $('<div></div>', {
      "class": "copy_cover"
    })
    const copyImage1 = $('<img />', {
      src: "img/cover/cover_copy1.png",
      alt: "目標は",
      "class": "copy_cover_img"
    })
    const copyImage2 = $('<img />', {
      src: "img/cover/cover_copy2.png",
      alt: "人を助ける",
      "class": "copy_cover_img"
    })
    const copyImage3 = $('<img />', {
      src: "img/cover/cover_copy3.png",
      alt: "システムで",
      "class": "copy_cover_img"
    })

    /** 要素を追加 */
    $('#cover').append(cover)
    cover.append(copy)
    copy.append(copyImage3)
    copy.append(copyImage2)
    copy.append(copyImage1)

    /** テキスト画像を一つずつ表示 */
    setTimeout(function() {
      copyImage3.fadeIn(1500)
      copyImage3.css({
        "transform": "scale(1)"
      })
    } ,3000)
    setTimeout(function() {
      copyImage2.fadeIn(1500)
      copyImage2.css({
        "transform": "scale(1)"
      })
    }, 1500)
    copyImage1.fadeIn(1500)
    copyImage1.css({
      "transform": "scale(1)"
    })
    
    /** テキスト画像を非表示 */
    setTimeout(function() {
      copyImage1.fadeOut(1000)
      copyImage2.fadeOut(1000)
      copyImage3.fadeOut(1000)
    }, 5000)

    /** coverを非表示 */
    setTimeout(function() {
      cover.stop().animate({opacity: '0'}, 1000)
      $('.first_view').removeClass('firstTimeHiddenElement')  
      $('.bg').removeClass('firstTimeHiddenElement')  
      $('.footer').removeClass('firstTimeHiddenElement')  
    }, 6000)
});