let contrl = () => {        
    document.querySelector('.control').addEventListener('click', () =>{
        document.querySelector('.desktop').classList.toggle('desktop-active');
    })        
}

let wheel = () => {  
    let desktop =  document.querySelector('.desktop');
    let wheel = 0    
    document.querySelector('.inner-block').addEventListener("wheel", (e) => {
        wheel += e.deltaY;            
        desktop.style.bottom = wheel + 'px';
        if(wheel >= 400) {
            getpic();
        }
    });
}

let showpic = () => {
    let pic = document.querySelectorAll('.inner-item');
    //let descktop = document.querySelector('.desktop-active').style;
    
    pic.forEach(e => {
        e.addEventListener('click', ()=> {
            //console.log(descktop);
            e.classList.toggle('inner-item-active');           
        })            
    })
}

let getpic = () => {
    let picbox = document.querySelector('.desktop');
    //let block = document.createElement
    picbox.insertAdjacentHTML =( 'beforeend', `<div class="inner-item"><img src="https://loremflickr.com/290/290/random" alt="" srcset=""></div><div class="inner-item"><img src="https://loremflickr.com/g/290/290/random" alt="" srcset=""></div>`);
}

contrl();
wheel();
showpic();   