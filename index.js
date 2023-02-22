let menu = document.querySelector('.admintools > span').addEventListener('click', function(){
   document.querySelector('.leftsidebar').classList.add("show");
});

let close = document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.leftsidebar').classList.remove("show");
});

let toggle = document.querySelector(".rightbartop .admintools input[type='checkbox']");
toggle.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme');
    document.querySelector('.toggler label span:nth-child(1)').classList.toggle('active');  
    document.querySelector('.toggler label span:nth-child(2)').classList.toggle('active'); 
});
console.log(toggle);