

// console.log(document.gender)
console.log('script running')
const qrcode = document.querySelector('#qr');
const upload = document.querySelector('#upload');
const submit = document.querySelector('#submit_now');
// const form = document.querySelector('
// ');
const submitForm = document.querySelector('form')
qrcode.addEventListener('click',(e)=>{
    e.preventDefault()
    upload.click()
    console.log('click')
})
submit.addEventListener('click',async (e)=>{
    e.preventDefault()
    console.log('click')
    // document.forms['submit'].submit()
    submitForm.submit()
    setTimeout(() => {
        submitForm.reset()
    }, 1000);
})


const input = document.querySelectorAll('input');
input.forEach((input)=>{

    if(input.getAttribute('placeholder')!== null){
        const holder =   input.getAttribute('placeholder')
        const newValue = `${holder}*`
        input.setAttribute('placeholder',newValue)
        
    }else{
        
        const holdern =   input.getAttribute('placeholder')
        console.log(holdern)
    }
})
let valuen = '';

// training == == == == ==>

for (let index = 0; index < 10; index++) {if(index<= 10){console.log(valuen +='*')}}
