


let about = document.querySelector('.about-yassin')
window.addEventListener('scroll',()=>{
    let rect = about.getBoundingClientRect();
    if(rect.top < window.innerHeight - 200){
        about.classList.add('show')
    }
})

// let matchs = document.querySelector('.yassin-matchs')

// window.addEventListener('scroll',()=>{
//     let rect = matchs.getBoundingClientRect();
//     if(rect.top < window.innerHeight - 200){
//         matchs.classList.add('show')
//     }
// })

function scroll(){
let ele = document.querySelector("#about")
ele.scrollIntoView({behavior:'smooth'})
}
let openSider = document.getElementById('openSider')
openSider.addEventListener('click',()=>{
let sider =document.getElementById('sider')
sider.classList.add('sider-show')
sider.classList.remove('sider-close')
let body = document.body 
body.classList.add("overflow")
document.querySelector(".overlay").classList.remove("display")
})    
function cansel(){
        let sider = document.getElementById('sider')
sider.classList.remove('sider-show')
sider.classList.add('sider-close')
let body = document.body 
body.classList.remove("overflow")
document.querySelector(".overlay").classList.add("display")
}
let close = document.getElementById('close')
close.addEventListener('click',()=>{
    cansel()
})
let social = document.querySelector('.instagram')

window.addEventListener('scroll',()=>{
    let rect = social.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
        social.classList.add('show')
        social.classList.remove('unshow')
    }
})
let social2 = document.querySelector('.facebook')

window.addEventListener('scroll',()=>{
    let rect = social.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
        social2.classList.add('show')
        social2.classList.remove('unshow')
    }
})
let social3 = document.querySelector('.tiktok')
window.addEventListener('scroll',()=>{
    let rect = social.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
        social3.classList.add('show')
        social3.classList.remove('unshow')
    }
})
let comInstagram = document.querySelector('.instagram')
window.addEventListener('scroll',()=>{
    let rect = comInstagram.getBoundingClientRect();
    if(rect.top < window.innerHeight - 150){
        comInstagram.classList.add('in-show')
        setTimeout(()=>{
            comInstagram.classList.add('card')
        },2500)
    }
})
let comFacebook = document.querySelector('.facebook')
window.addEventListener('scroll',()=>{
    let rect = comFacebook.getBoundingClientRect();
    if(rect.top < window.innerHeight - 10){
        comFacebook.classList.add('fa-show')
        setTimeout(()=>{
            comFacebook.classList.add('card')
        },2500)
    }
})
let comTiktok = document.querySelector('.tiktok')
window.addEventListener('scroll',()=>{
    let rect = comTiktok.getBoundingClientRect();
    if(rect.top < window.innerHeight - 150){
        comTiktok.classList.add('ti-show')
        setTimeout(()=>{
            comTiktok.classList.add('card')
        },2500)
    }
})


let canselTeleport = document.querySelectorAll('.cansel')

canselTeleport.forEach((a)=>{
    a.addEventListener('click',()=>{
        cansel()
    })
})
function videoShow(vid){
    let videoPlase = document.querySelector(".video video")
    videoPlase.setAttribute("src",vid)
}
let headerDis = `<span class="frist-h2">Y</span>assin nabil website`;
let matchDis=` Yassin Nabil is an amateur MMA fighter with a great passion for the sport. He has played three matches so far, winning two, losing one. Despite the challenges he's faced, Yassin continues to train hard and improve his skills, aiming for greater success in the future. He has a growing fanbase who supports him in every step, and he remains determined to achieve his goals in the world of MMA.`;
let aboutYassin =`Yassin Nabil is an 18-year-old amateur MMA fighter, standing at 165 cm tall and competing in the weight range of 57 to 52 kg. He has been training in MMA for a year, gaining valuable experience in the sport. Yassin trains under the guidance of his coach, Omar El-Fayoumi, who has been instrumental in shaping his skills. With a strong dedication to improving his technique and expanding his knowledge of MMA`;
let month =`0`;
let day =`0`;
let year =`0000`;
let wins = `2 <span>-</span>`
let loss = `0 <span>-</span>`
let draw = `0`

let nextMatchTime = `${day}/${month}/${year}`

document.querySelector(".theWelcome").innerHTML = headerDis
// document.querySelector(".matchs-dis").innerHTML = matchDis
document.querySelector(".about-dis").innerHTML = aboutYassin
document.querySelector(".time").innerHTML = nextMatchTime
document.querySelector('.wins').innerHTML = wins
document.querySelector('.loss').innerHTML = loss
document.querySelector('.draw').innerHTML = draw