function draw_header() {
    //  서치바에 아이콘과 인풋박스 추가
    search_bar_html = `
                        <div class="search_bar_box"> 
                            <i class="fa-solid fa-magnifying-glass header_search_icon"></i> 
                            <input type="text" placeholder="검색" class ="header_input_field" height ="60">
                        </div>
                    `
    document.querySelector('.header_search_box').innerHTML = search_bar_html
    // header_icons에 icon들과 avatar 추가
    icon_box_html = `
                    <div class ="header_icons">
                        <i class="fa-solid fa-house home_icon"></i>
                        <i class="fa-solid fa-paper-plane dm_page_icon"></i>
                        <i class="fa-solid fa-square-plus saved_video_icon"></i>
                        <i class="fa-solid fa-compass recommend_page_icon"></i>
                        <i class="fa-solid fa-heart my_liked_page_icon"></i>
                        <img src="/static/images/character.jpeg" alt="Avatar" class="main_header_avatar">
                    </div>
                    `
    document.querySelector('.main_header_icon_box').innerHTML = icon_box_html
    // card_header_front에 avatar와 아이디 ellipsis 추가
    main_card_header_html = `
                            <div class="card_header_front">
                                <img src="/static/images/character.jpeg" class ="card_header_avatar"></img>
                                <div class = "card_header_id">about_joo</div>
                            </div>
                            <i class="fa-solid fa-ellipsis modal_btn"></i>
                            `
    document.querySelector('.card_header').innerHTML = main_card_header_html
    // story_box에 캐러셀 버튼 추가
    story_carousel_button = `
                            <div class="story_carousel_prev_btn_circle">
                                <i class="fa-solid fa-angle-left prev_button_story_image"></i>
                            </div>
                            <div class="story_carousel_next_btn_circle">
                                <i class="fa-solid fa-chevron-right next_button_story_image"></i>
                            </div>
                            `
    document.querySelector('.story_carousel_button').innerHTML = story_carousel_button
    // 메인 카드 바디에 carousel 버튼 추가
    main_card_carousel_button_html = `
                            <div class="carousel_prev_btn_circle">
                                <i class="fa-solid fa-angle-left prev_button_main_image"></i>
                            </div>
                            <div class="carousel_next_btn_circle">
                                <i class="fa-solid fa-chevron-right next_button_main_image"></i>
                            </div>
                            `
    document.querySelector('.main_card_carousel_button').innerHTML = main_card_carousel_button_html
    desc_icon_box_html = `
                        <div class="desc_icon_box_front">
                        <i class="fa-solid fa-heart card_heart_icon"></i>
                        <i class="fa-solid fa-comment card_comment_icon"></i>
                        <i class="fa-solid fa-paper-plane card_plain_icon"></i>
                        </div>
                        <i class="fa-solid fa-bookmark card_bookmark_icon"></i>
                        `

    document.querySelector('.card_desc_icon_box').innerHTML = desc_icon_box_html
    //카드 박스 desc 채우기
    desc_liked_box_html = `
                            <div class="liked_people_first_p">
                                <div class="liked_people_avatar"></div>
                                <img src="/static/images/space.jpg" class="desc_liked_box_avatar">
                                <div class="liked_people_solid_comment"><a class="solid_comment_id">dsf</a>님<a class="solid_comment_cnt">외100명</a>이 좋아합니다</div>
                            </div>
                            <div class="self_desc">
                                <div class= "self_desc_id">about_joo</div>
                                <div class= "self_desc_comment">폭포 예쁘다 얘!</div>
                            </div>
                            <div class="comment_cnt"><a>댓글 4개 모두 보기</a></div>
                            <div class="liked_box_comments">
                                <div class="liked_box_comment">
                                    <div class="liked_box_comment_txt">
                                        <div class="liked_box_comment_id">
                                            amigos
                                        </div>
                                        <div class="liked_box_comment_desc">
                                            진짜 예쁘다!!
                                        </div>
                                    </div>
                                    <i class="fa-solid fa-heart liked_box_comment_heart"></i>
                                </div>
                                <div class= "liked_box_comment">
                                    <div class="liked_box_comment_txt">
                                        <div class="liked_box_comment_id">
                                            about_joo
                                        </div>
                                        <div class="liked_box_comment_desc">
                                            <a class="link_of_id">@amigos</a>
                                            아가리 ㄷㅊ
                                        </div>
                                    </div>
                                    <i class="fa-solid fa-heart liked_box_comment_heart"></i>
                                </div>
                            </div>
                            <div class="days_before">
                            3일전
                            </div>
                            `
    document.querySelector('.card_desc_liked_box').innerHTML = desc_liked_box_html

    // 카드 아래 댓글창
    card_under_comment_box_html = `
    <div class="card_under_comment_box_input_box">
        <i class="fa-solid fa-face-smile emoji_icon"></i>
        <input class="under_comment_box_input_tag">
    </div>
    <div class="card_under_comment_box_button">게시</div>
    `
    document.querySelector('.card_under_comment_box').innerHTML = card_under_comment_box_html
    // 라이트 플롯 박스 내 계정칸
    rf_float_box_my_account_html = `
                                
                                    <div class="rf_my_avatar_front">
                                        <img src="/static/images/character.jpeg" class="rf_my_avatar">
                                        <div class="rf_my_text">
                                            <div class="rf_my_text_id">about_joo</div>
                                            <div class="rf_my_text_name">joo</div>
                                        </div>
                                    </div>
                                    <div class="rf_my_button">전환</div>
                                
                                `
    document.querySelector('.rf_my_avatar_box').innerHTML = rf_float_box_my_account_html
    // 라이트 플롯 박스 추천 계정 칸

}
draw_header()
let image_url_list = [
    'beautiful.jpg',
    'flower.jpg',
    'pretty_image.jpg',
    'sunset.jpg'
]

const card_main_image_box = document.querySelector('.card_main_image_box');
const main_card_carousel_button_next = document.querySelector('.carousel_next_btn_circle');
const main_card_carousel_button_prev = document.querySelector('.carousel_prev_btn_circle');
const search_input_box = document.querySelector(".header_input_field");
const search_bar_icon = document.querySelector(".header_search_icon");
const story_carousel_box = document.querySelector('.story_box');
const story_carousel_button_prev = document.querySelector('.story_carousel_prev_btn_circle');
const story_carousel_button_next = document.querySelector('.story_carousel_next_btn_circle');
const modal_btn = document.querySelector('.modal_btn');
const exit_from_modal_btn = document.querySelector('.exit_from_modal')

main_card_carousel_button_prev.style.visibility = 'hidden';
story_carousel_button_prev.style.visibility = 'hidden';
// 카드 이미지 html 추가 for문
let curIdx = 0;
for (let i = 0; i < image_url_list.length; i++) {
    tmp_html = `
                <img class="card_main_image" src="/static/images/main_card_image/${image_url_list[i]}"></img>
                `
    card_main_image_box.innerHTML += tmp_html
}
// 라이트 플로팅 박스 html 추가 for문
for (let i = 0; i < 5; i++) {
    rf_float_box_recommend_account_html = `
    <div class="rf_recommend_big_box">
        <div class="rf_recommend_account_front">
            <img src="/static/images/space.jpg" class="rf_recommend_box_avatar">
            <div class="rf_recommend_box_text">
                <div class="rf_recommend_box_id">amigos</div>
                <div class="rf_recommend_box_follower">about_joo님이 팔로우합니다</div>    
            </div>
        </div>
        <div class="rf_recommend_box_button">팔로우</div>
    </div>
    `
    document.querySelector('.rf_recommend').innerHTML += rf_float_box_recommend_account_html
}
// 스토리 캐러셀 이미지 추가 html for문
for (let i = 0; i < 16; i++) {
    tmp_html = `
                <div class="story_carousel_box">
                        <div class="story_avatar_outline_border">
                            <img class="story_carousel_circle_avatar" src ="/static/images/story_image/surf.jpg" width="55" height="55">
                        </div>
                    <div class="story_carousel_id">
                        about_joo
                    </div>
                </div>
                `
    document.querySelector('.story_box').innerHTML += tmp_html
}
// input_box 포커스 컨트롤러
search_input_box.addEventListener('focus', (e) => {
    e.target.style.paddingLeft = "10px";
    e.target.style.paddingRight = "40px"
    search_bar_icon.style.visibility = "hidden";
})
search_input_box.addEventListener('focusout', (e) => {
    e.target.style.paddingLeft = "50px";
    e.target.style.paddingRight = "0px"
    search_bar_icon.style.visibility = "visible";
})
// 메인카드 캐러셀 컨트롤러
const card_main_image = document.querySelector('.card_main_image')
let image_width = 614
function image_resize() {
    if (window.innerWidth > 660) {
        card_main_image.style.width = 614 + "px"
        image_width = card_main_image.style.width.split('px')[0]
    } else {
        image_width = window.innerWidth
    }
    card_main_image_box.style.transform = "translate3d(-" + image_width * curIdx + "px, 0px, 0px)"
}
card_main_image_box.style.width = image_width * image_url_list.length + "px";
// 메인카드 캐러셀 버튼
main_card_carousel_button_next.addEventListener('click', function () {
    if (curIdx < image_url_list.length - 1) {
        main_card_carousel_button_next.style.visibility = 'visible'
        main_card_carousel_button_prev.style.visibility = 'visible'
        card_main_image_box.style.transition = 500 + "ms"
        card_main_image_box.style.transform = "translate3d(-" + image_width * (curIdx + 1) + "px, 0px, 0px)";
        curIdx += 1
    }
    if (curIdx === image_url_list.length - 1) {
        main_card_carousel_button_next.style.visibility = "hidden";
    }
});
main_card_carousel_button_prev.addEventListener('click', function () {
    if (curIdx > 0) {
        main_card_carousel_button_prev.style.visibility = 'visible'
        main_card_carousel_button_next.style.visibility = 'visible'
        card_main_image_box.style.trasition = 500 + "ms";
        card_main_image_box.style.transform = "translate3d(-" + (image_width * (curIdx - 1)) + "px, 0px,0px)";
        curIdx -= 1
    }
    if (curIdx === 0) {
        main_card_carousel_button_prev.style.visibility = 'hidden';
    }
})



// 스토리 캐러셀 컨트롤러
story_carousel_width = parseInt(80 * 16)
story_carousel_box.style.width = story_carousel_width + "px"
story_btn_cnt = parseInt((80 * 16) / 315) - 1
cur_story_idx = 0
story_carousel_button_next.addEventListener('click', function () {
    if (++cur_story_idx == story_btn_cnt) {
        story_carousel_box.style.transition = 500 + "ms"
        story_carousel_box.style.transform = "translate3d(-" + (story_carousel_width - 580) + "px,0px, 0px)";
        story_carousel_button_next.style.visibility = "hidden";
    }
    else {
        story_carousel_box.style.transition = 500 + "ms"
        story_carousel_box.style.transform = "translate3d(-" + 315 * cur_story_idx + "px,0px, 0px)";
        story_carousel_button_prev.style.visibility = 'visible'
    }
})
story_carousel_button_prev.addEventListener('click', function () {
    if (--cur_story_idx == 0) {
        story_carousel_box.style.trasition = 500 + "ms";
        story_carousel_box.style.transform = "translate3d(0px,0px, 0px)";
        story_carousel_button_prev.style.visibility = "hidden";
    }
    story_carousel_box.style.trasition = 500 + "ms";
    story_carousel_box.style.transform = "translate3d(-" + 315 * cur_story_idx + "px,0px, 0px)";
    story_carousel_button_next.style.visibility = 'visible';
})

// 모달 컨트롤러

modal_btn.addEventListener('click', () => {
    document.querySelector('.modal').style.display = "flex";
    document.body.style.overflow = "hidden";
})
exit_from_modal_btn.addEventListener('click', () => {
    document.querySelector('.modal').style.display = "none";
    document.body.style.overflow = "auto"
})
