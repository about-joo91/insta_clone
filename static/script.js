
function draw_header() {
    search_bar_html = `
                    <form class ="icon_with_search_bar">
                        <div class="search_bar_box"> 
                            <i class="fa-solid fa-magnifying-glass header_search_icon"></i> 
                            <input type="text" placeholder="검색" class ="header_input_field" height ="60">
                        </div>
                    </form>
                    `
    document.querySelector('.header_search_box').innerHTML = search_bar_html
    icon_box_html = `
                    <div class ="header_icons">
                        <i class="fa-solid fa-house"></i>
                        <i class="fa-solid fa-paper-plane"></i>
                        <i class="fa-solid fa-square-plus"></i>
                        <i class="fa-solid fa-compass"></i>
                        <i class="fa-solid fa-heart"></i>
                        <img src="/static/images/character.jpeg" alt="Avatar" class="main_header_avatar">
                    </div>
                    `
    document.querySelector('.main_header_icon_box').innerHTML = icon_box_html
}
draw_header()