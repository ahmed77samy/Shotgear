/*  
    template-name: shotgear;
    The owner of the template: ahmed samy;
    template-version: 1.0;
    Date created: 22/2/2020
*/
/*preventDefault*/
//window.oncontextmenu = function (e) {
//   e.preventDefault()
//}
//window.onkeydown = function (e) {
//	if(e.keyCode === 17){
//		addEventListener("keydown", (x) => {
//			if(x.keyCode === 85){
//				x.preventDefault()
//			}else if(x.keyCode === 16){
//				addEventListener("keydown", (z) => {
//					if(z.keyCode === 73){
//						z.preventDefault()
//					}
//				})
//			}else if(x.keyCode === 83){
//				x.preventDefault()
//			}
//		})
//	}
//	if(e.keyCode === 123){
//		e.preventDefault()
//	}
//}
/*preventDefault*/
/*ready*/
$(window).ready(function () {
    scrolltonav();
    loader();
    toUp();
    clickToUp()
})
/*ready*/
/*scroll*/
$(window).scroll(function () {
    scrolltonav();
    toUp();
})
/*scroll*/
/*.fixed-search*/
$(`header nav .menu-search .search`).click(function () {
    $(`.fixed-search`).addClass(`open`);
    $(`.fixed-search`).fadeIn();
})
$(`header nav .fixed-search .cancel`).click(function () {
    $(`.fixed-search`).removeClass(`open`);
    $(`.fixed-search`).fadeOut();
})
/*.fixed-search*/

/*.fixed-menu*/
$(`header nav .menu-search .menu`).click(function () {
    $(`.fixed-menu`).addClass(`open`);
    $(`.fixed-menu`).fadeIn();
})
$(`header nav .fixed-menu .cancel`).click(function () {
    $(`.fixed-menu`).removeClass(`open`);
    $(`.fixed-menu`).fadeOut();
})
$(`header nav .fixed-menu ul li.drop`).click(function () {
    let data = $(this).data(`drop`);
    if ($(this).hasClass(`active`)){
        $(this).removeClass(`active`);
        $(`header nav .fixed-menu ul li.drop ${data}`).slideUp();
        $(`header nav .fixed-menu ul li.drop`).siblings().css({
            visibility : `visible`,
            opacity: `1`
        });
    }else {
        $(this).addClass(`active`);
        $(`header nav .fixed-menu ul li.drop ${data}`).slideDown();
        $(`header nav .fixed-menu ul.ul > li:not(.active)`).css({
            visibility : `hidden`,
            opacity: `0`
        });
    }
})
/*.fixed-menu*/