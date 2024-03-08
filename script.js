const prev_btn = document.getElementById('prev_btn')
const next_btn = document.getElementById('next_btn')
const inner_container = document.getElementById('inner_container')

let slide = 1

next_btn.addEventListener('click', () => {
    if (slide === 1){
        prev_btn.classList.remove("not_visible");
    } 
    inner_container.style.transform = `translateY(${slide*-12}rem)`;
    slide++;
    if (slide === 6){
        next_btn.classList.add("not_visible");
    }
})

prev_btn.addEventListener('click', () => {
    if (slide === 6){
        next_btn.classList.remove("not_visible");
    }
    inner_container.style.transform = `translateY(${(slide-2)*-12}rem)`;
    slide--;
    if (slide === 1){
        prev_btn.classList.add("not_visible");
    } 
})