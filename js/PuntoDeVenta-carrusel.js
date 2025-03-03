window.addEventListener('load',function(){

    let itemIndex = 0,isPaused = false;

    document.querySelector(".slider-container").innerHTML = `
        <div class = "slider-item"></div>
        <ul class = "pagination"></ul>
        <button class="arrow prev-item" ></button>
        <button class="arrow next-item" ></button>`

    function renderItem(state, dotIndex){
        
        var animationClass = "";

        (state == "next") ? itemIndex++ : itemIndex--;
        (dotIndex != undefined) ? itemIndex = dotIndex : 0;
        (itemIndex > sliderDb.length - 1) ? itemIndex  = 0 : 0;
        (itemIndex < 0 ) ? itemIndex = sliderDb.length - 1 : 0;
        
        state == "next" || state == null ? animationClass  = "slider-next": animationClass  = "slider-prev";

        document.querySelector(".slider-item").innerHTML = `
            <div class = "item-background ${animationClass}" style = "background: url(${sliderDb[itemIndex].src}) no-repeat center/cover;"></div>
            <div class="item-title__container">
                
            </div>
        `;

        document.querySelectorAll(".dot").forEach((e,index,parent) =>{
            e.classList.remove("dot-active") & parent[itemIndex].classList.add("dot-active");        
        });
    }

    //Pagination, dots rendering

    function pagination(){
        sliderDb.forEach((e,index)=> {
            document.querySelector(".pagination").innerHTML += `<li><button class = "dot">${index}</button></li>`      
        }); 
    }

// Auto sliding.

    setInterval(() => {(!isPaused) ? renderItem("next"):0}, 5000);

    pagination();
    renderItem(null,0);  

    const delay = ()=> setTimeout(function(){isPaused = false} , 6000);

    // Right button click

    document.querySelector(".next-item").addEventListener('click', function(){
        isPaused = true;
        renderItem("next");
        delay();     
    });

    // Left button click

    document.querySelector(".prev-item").addEventListener('click', function(){
        isPaused = true;
        renderItem("prev");
        delay(); 
    });

    //Dot click

    document.querySelectorAll(".dot").forEach((e,dotIndex) =>{
        e.addEventListener("click", function(e){
            isPaused = true;
            renderItem(null,dotIndex);
            delay();
        })
    });
})

const sliderDb = [
    {
      
      src:"/images/imgslider1.jpg"
    },
    {
      //title:"Titulo de ejemplo dos",
      src:"/images/imgslider2.jpg"
    },
    {
      //title:"Titulo de ejemplo tres",
      src:"/images/imgslider3.jpg"
    },
    {
      //title:"Titulo de ejemplo cuatro",
      src:"/images/imgslider1.jpg"
    },
    {
      //title:"Titulo de ejemplo cinco",
      src:"/images/imgslider3.jpg"
    },
    {
      //title:"Titulo de ejemplo seis",
      src:"/images/imgslider2.jpg"
    },
    {
      //title:"Titulo de ejemplo siete",
      src:"/images/imgslider1.jpg"
    },
  
  ]