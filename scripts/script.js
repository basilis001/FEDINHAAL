
//console.log("hi");

var gizmodo = document.querySelector('#Gizmodo');
console.log(gizmodo);
var interior = document.querySelector('#Interior');
var arch = document.querySelector("Architectural");
var cart = document.querySelector("#Cart")
var mobileMenu = document.querySelector('button.mobile');
console.log(mobileMenu);
var openShop = document.querySelector('[aria-label="Open Shop categories"]');
console.log(openShop);
var openLearn = document.querySelector('[aria-label="Open for learning categories"]');
console.log(openLearn);
var header = document.querySelector('header');
console.log(header);
var main = document.querySelector('main')
console.log(main);
var hide = document.querySelector
var logo = document.querySelector('header > hgroup > a > div');
console.log(logo);
var colorButton = document.querySelector('header > button:last-child')
console.log(colorButton);//function
var lButtonlines = document.querySelector('[aria-label="Previous"]');

var rButtonlines = document.querySelector('[aria-label="Next"]');
console.log(rButtonlines);
var tabslide = document.querySelector('.headslide')



//<button onclick="previousImage()">Previous</button>
//				  <button onclick="nextImage()">Next</button>
				

var prevScrollpos = window.scrollY;

  
  
			function scrolm(){ if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10)  
                {header.className = 'achter';
                   colorButton.className = 'achter';
                logo.className='achter';
                    
                } else  {header.className = '';
                colorButton.className = '';
                logo.className='';
               }  }

          
          





function slidelineL (){
    console.log("hey queen")
tabslide.scrollRight +=10


} 

window.addEventListener("scroll" , scrolm);
rButtonlines.addEventListener("click" , slidelineL);

console.log(slidelineL);

