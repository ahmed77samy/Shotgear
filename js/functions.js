/*  
    template-name: shotgear;
    The owner of the template: ahmed samy;
    template-version: 1.0;
    Date created: 22/2/2020
*/
/*loader*/
function loader() {
    $(`.loading`).fadeOut();
    $(`.loading .loader`).addClass("stop");
}
/*loader*/
/*to-up*/
function toUp() {
    if ($(window).scrollTop() > 200) {
        $(`.to-up`).fadeIn()
    }else {
        $(`.to-up`).fadeOut()
    }
}

function clickToUp() {
    $(`.to-up`).click(function () {
        $(`body , html`).animate({
            scrollTop: 0
        })
    })
}
/*to-up*/
/*scrolltonav*/
function scrolltonav() {
    if ($(window).scrollTop() > 200) {
        $(`nav`).addClass(`active`);
        $(`body`).css(`paddingTop`, `80px`);
    } else {
        $(`nav`).removeClass(`active`);
        $(`body`).css(`paddingTop`, `0`);
    }
}
/*scrolltonav*/
/*logo*/
function logo(path) {
    $(`.logo img`).click(function () {
        window.open(path,`_self`)
    })
}
/*logo*/
/*data-Banner*/
function dataBanner() {
    if($(window).width() <= 1000){
        $(`.tp-bannercontainer .tp-caption`).data(`x`,`center`)
    }
}
/*data-Banner*/
/*slider-revolution*/
function sliderRev(ele) {
    ele.revolution({
        delay: 50000,
        fullScreen: `on`,
        onHoverStop: false,
        navigationType: `arrows`,
        keyboardNavigation: `off`,
        touchenabled: `off`
    })
}
/*slider-revolution*/
/*filterGallery*/
function filterGallery() {
    $(`.recent-project .tabs a`).click(function () {
        let data = $(this).data(`show`);
        $(`.recent-project .tabs a.active`).removeClass(`active`);
        $(this).addClass(`active`);
        $(`.recent-project .gallery .grid:not(${data})`).fadeOut()
        $(`.recent-project .gallery .grid${data}`).fadeIn()
    })
}
/*filterGallery*/
/*zoomIn*/
function zoomIn(ele, eleimg) {
    $(`.item .zoom-in-out .zoomin`).click(function () {
        let data = $(this).data(`zoom`);
        $(this).addClass(`active`)
        $(`.recent-project .gallery .item${data}`).addClass(`zin`)        
    })
    $(`.item .cancel`).click(function () {
        let data = $(this).data(`zoom`);
        $(`.item${data} .zoom-in-out .zoomin`).removeClass(`active`)
        $(`.recent-project .gallery .item${data}`).removeClass(`zin`)
    })
    $(`.recent-project .gallery .item`).mousemove(function (e) {
        if($(`.recent-project .gallery .item`).hasClass(`zin`)){
            let x = e.pageX - $(this).offset().left;
            let y = e.pageY - $(this).offset().top;
            let x100 = (x * 100) / $(this).width();
            let y100 = (y * 100) / $(this).height();
            $(`.recent-project .gallery .item img`).css({
                transformOrigin: `${x100}% ${y100}%`
            });
        }else{
            return false;
        }
    })
}
/*zoomIn*/
/*testimonials*/
function testimonials() {
    $(`.testimonials .content .testi.one`).fadeIn();
    $(`.testimonials .content .testi.one`).addClass(`active`);
    $(`.testimonials .control span`).click(function () {
        let data = $(this).data(`fade`);
        $(`.testimonials .control span.active`).removeClass(`active`);
        $(this).addClass(`active`);
        $(`.testimonials .content .testi:not(${data})`).fadeOut();
        $(`.testimonials .content .testi.active`).removeClass(`active`);
        setTimeout(function () {
            $(`.testimonials .content .testi${data}`).fadeIn();
            $(`.testimonials .content .testi${data}`).addClass(`active`);
        },400)
    })
}
/*testimonials*/
/*choose-us*/
function chooseUs() {
    $(`.choose-us .parent .child.first`).fadeIn();
    $(`.choose-us .parent .child.first`).addClass(`active`);
    $(`.choose-us .tabs .item h4 a`).click(function () {
        let data = $(this).data(`navsection`);
        $(`.choose-us .tabs .item h4 a.active`).removeClass(`active`);
        $(this).addClass(`active`);
        $(`.choose-us .parent .child.active`).fadeOut()
        $(`.choose-us .parent .child.active`).removeClass(`active`)
        setTimeout(function () {
            $(`.choose-us .parent .child${data}`).addClass(`active`)
            $(`.choose-us .parent .child${data}`).fadeIn()
        },400)
    })
}
/*choose-us*/