
const button_click_0 = document.querySelector('button.four_six');
const dot_body = document.querySelector('.body');
const button_click_0_a4_page = document.querySelector('.print_now');
const card2 = document.querySelector('.card-2');
console.log(card2)
const a4 = function(){
    dot_body.style.display = 'flex';
    button_click_0.style.display = 'none';   
    button_click_0_a4_page.style.display = 'none'
    print()
} 
button_click_0_a4_page.addEventListener('click',a4)
const fourSix = function(){
    dot_body.style.display = 'block';
    dot_body.style.margin = ' 4px 10px';
    button_click_0.style.display = 'none';   
    button_click_0_a4_page.style.display = 'none'
    card2.style.rotate = '180deg'
    
    print() 
}
button_click_0.addEventListener('click',fourSix)