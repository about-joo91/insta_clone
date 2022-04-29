
function draw_header() {
    //  서치바에 아이콘과 인풋박스 추가
    search_bar_html = `
                    <form class ="icon_with_search_bar">
                        <div class="search_bar_box"> 
                            <i class="fa-solid fa-magnifying-glass header_search_icon"></i> 
                            <input type="text" placeholder="검색" class ="header_input_field" height ="60">
                        </div>
                    </form>
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
                            <i class="fa-solid fa-ellipsis"></i>
                            `
    document.querySelector('.card_header').innerHTML = main_card_header_html
    // 메인 카드 바디에 이미지 추가
    main_card_body_html = `
    <img src="/static/images/pretty_image.jpg" class="card_body_img">
                            `
    document.querySelector('.card_image').innerHTML = main_card_body_html
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
    card_under_comment_box_html = `
    <div class="card_under_comment_box_input_box">
        <i class="fa-solid fa-face-smile emoji_icon"></i>
        <input class="under_comment_box_input_tag">
    </div>
    <div class="card_under_comment_box_button">게시</div>
    `
    document.querySelector('.card_under_comment_box').innerHTML = card_under_comment_box_html
}
draw_header()
const search_input_box = document.querySelector(".header_input_field")
const search_bar_icon = document.querySelector(".header_search_icon")
search_input_box.addEventListener('focus', (event) => {
    search_input_box.style.paddingLeft = "10px";
    search_bar_icon.style.visibility = "hidden";
})
search_input_box.addEventListener('focusout', (e) => {
    e.target.style.paddingLeft = "50px";
    search_bar_icon.style.visibility = "visible";
})

