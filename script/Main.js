let swiper = new Swiper(".mySwiper",{
    slidesPerView: 6,
    spaceBetween: 8,
})

/*****************window scroll*********************/
window.addEventListener('scroll',()=>{
    document.querySelector('.profile-popup').style.display='none',
    document.querySelector('.add-post-popup').style.display='none'
    document.querySelector('.theme-customize').style.display='none'
});

/*****************profile popup*********************/
    
document.querySelectorAll('#my-profile').forEach(AllProfile =>{
    AllProfile.addEventListener('click',()=>{
        document.querySelector('.profile-popup').style.display='flex'
    })
});
document.querySelectorAll('.close').forEach(AllClose =>{
    AllClose.addEventListener('click',()=>{
        document.querySelector('.popup').style.display='none',
        document.querySelector('.add-post-popup').style.display='none'
        document.querySelector('.theme-customize').style.display='none'
    });
});
document.querySelector('#profile-upload').addEventListener('change',() =>{
    document.querySelectorAll('#my-profile img').forEach(ProfileImg =>{
        ProfileImg.src = URL.createObjectURL(document.querySelector('#profile-upload').files[0]);
    });
});

/*****************post upload*********************/
document.querySelector('#create-lg').addEventListener('click',()=>{
    document.querySelector('.add-post-popup').style.display='flex'
});

document.querySelector('#feed-upload').addEventListener('change',() => {
    document.querySelector('#PostImage').src = URL.createObjectURL(document.querySelector('#feed-upload').files[0]);
});


/*****************story upload*********************/
document.querySelector('#add-story').addEventListener('change',() =>{
    document.querySelector('.story img').src = URL.createObjectURL(document.querySelector('#add-story').files[0]);    
    document.querySelector('.add-story').style.display = 'none'
});


/*****************highlight post*********************/
document.querySelector('.mini-button').addEventListener('click',() =>{
    document.querySelector('.input-post').classList.add('boxshadow1')

    setTimeout(() => {
        document.querySelector('.input-post').classList.remove('boxshadow1')
    }, 1000);
});
/*****************liked*********************/
document.querySelectorAll('.action-button span:first-child i').forEach(liked => {
    liked.addEventListener('click',() => {
        liked.classList.toggle('liked')
    });
});
