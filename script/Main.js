let swiper;

function initSwiper() {
  // Define the default configuration
  const defaultConfig = {
    slidesPerView: 6,
    spaceBetween: 8,
  };

  // Check the viewport width and update the configuration
  if (window.matchMedia('(max-width: 550px)').matches) {
    swiper = new Swiper(".mySwiper", {
      ...defaultConfig,
      slidesPerView: 5,
  });
  } else {
    swiper = new Swiper(".mySwiper", defaultConfig);
  }
}

initSwiper();

// Listen for the resize event and update the Swiper configuration
window.addEventListener('resize', () => {
  if (swiper) {
    swiper.destroy(); // Destroy the existing Swiper instance
  }
  initSwiper(); // Reinitialize Swiper with the updated configuration
});

/*****************window scroll*********************/
window.addEventListener('scroll',()=>{
    document.querySelector('.profile-popup').style.display='none',
    document.querySelector('.add-post-popup').style.display='none'
    document.querySelector('.theme-customize').style.display='none'
    document.querySelector('.notification-box').style.display = 'none'
});

/*****************aside menu*********************/
let menuItem = document.querySelectorAll('.menu-item');
 
const removeActive = ()=>{
    menuItem.forEach(item => {
        item.classList.remove('active');
    });
};

menuItem.forEach(item=>{
    item.addEventListener('click',() => {
        removeActive();
        item.classList.add('active');
        document.querySelector('.notification-box').style.display = 'none'
    });
});

document.querySelector('#notify-box').addEventListener('click',() => {
    document.querySelector('.notification-box').style.display = 'block';
    document.querySelector('#ntCounter1').style.display = 'none';
});
document.querySelector('#msgmenu').addEventListener('click',() => {
    
    document.querySelector('#ntCounter2').style.display = 'none';
    document.querySelector('.messages').classList.toggle('boxshadow1');

    setTimeout(() => {
        document.querySelector('.messages').classList.remove('boxshadow1');
    }, 1000);
});

/*****************Request*********************/
let accept = document.querySelectorAll('#accept');
let del = document.querySelectorAll('#delete');
let action = document.querySelectorAll('.action');
let request = document.querySelectorAll('.request');

accept.forEach(acpt => {
    acpt.addEventListener('click', () => {
        acpt.parentElement.style.display = 'none';
        acpt.parentElement.parentElement.querySelector('.alert').style.display = 'block'
    });
});

del.forEach(dele => {
    dele.addEventListener('click', () => {
        dele.parentElement.parentElement.style.display='none'
    });
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


/*****************mini btn post*********************/
document.querySelector('.mini-button').addEventListener('click',() =>{
    document.querySelector('.input-post').classList.add('boxshadow1')

    setTimeout(() => {
        document.querySelector('.input-post').classList.remove('boxshadow1');
    }, 1000);
});
document.querySelector('.mini-button').addEventListener('dblclick',() =>{
    document.querySelector('.add-post-popup').style.display= 'flex'
});
/*****************liked*********************/
document.querySelectorAll('.action-button span:first-child i').forEach(liked => {
    liked.addEventListener('click',() => {
        liked.classList.toggle('liked')
    });
});


/*****************theme*********************/
document.querySelector('#theme').addEventListener('click',() => {
    document.querySelector('.theme-customize').style.display = 'flex'
});


/*****************font size*********************/
let fontSize = document.querySelectorAll('.choose-size span');

const RemoveActive = () =>{
    fontSize.forEach(size => {
        size.classList.remove('active')
    });
};
fontSize.forEach(size => {
    size.addEventListener('click',() => {
        let fontSize;
        RemoveActive();
        size.classList.toggle('active');

        if(size.classList.contains('font-size1')){
            fontSize = '10px';
        }
        else if(size.classList.contains('font-size2')){
            fontSize = '13px';
        }
        else if(size.classList.contains('font-size3')){
            fontSize = '16px';
        }
        else if(size.classList.contains('font-size4')){
            fontSize = '19px';
        }
        else if(size.classList.contains('font-size5')){
            fontSize = '22px';
        }
        document.querySelector('html').style.fontSize = fontSize;
    });
});

let mediacolor = document.querySelectorAll('.choose-color span');
var root =document.querySelector(':root');

const RemoveActiveColor = () =>{
    mediacolor.forEach(color => {
        color.classList.remove('active')
    });
};
mediacolor.forEach(color => {
    color.addEventListener('click', () =>{
        let mediaColor;
        RemoveActiveColor();
        color.classList.add('active');
        
        if(color.classList.contains('color-1')){
            mediaColor = 252;
        } 
        else if(color.classList.contains('color-2')){
            mediaColor = 52;
        } 
        else if(color.classList.contains('color-3')){
            mediaColor = 352;
        } 
        else if(color.classList.contains('color-4')){
            mediaColor = 152;
        } 
        else if(color.classList.contains('color-5')){
            mediaColor = 202;
        } 
        root.style.setProperty('--user-primary-color',mediaColor);
    });
});


let bg1 = document.querySelector('.bg1');
let bg2 = document.querySelector('.bg2');

let darkercolortheme;
let lightercolortheme;
let Whitecolortheme;

const changeBg = () => {
    root.style.setProperty('--darker-color-theme',darkercolortheme);
    root.style.setProperty('--lighter-color-theme',lightercolortheme);
    root.style.setProperty('--White-color-theme',Whitecolortheme);
}

bg2.addEventListener('click',() =>{
    darkercolortheme = '95%';
    lightercolortheme = '5%';
    Whitecolortheme= '10%';

    bg2.classList.add('active');
    bg1.classList.remove('active');
    bgicon();
    changeBg();
});

bg1.addEventListener('click',() =>{
    darkercolortheme = '17%';
    lightercolortheme = '92%';
    Whitecolortheme= '100%';

    bg1.classList.add('active');
    bg2.classList.remove('active');
    changeBg();
});

let menuicon = document.querySelectorAll('.menu-item span i');

const bgicon = ()=>{
    menuicon.forEach(icon=>{
        icon.classList.add('icon-bg')
    })
}