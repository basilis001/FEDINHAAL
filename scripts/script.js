
//console.log("hi");

var gizmodo = document.querySelector('#Gizmodo');
console.log(gizmodo);
var interior = document.querySelector('#Interior');
var arch = document.querySelector("#Architectural");
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
var logo = document.querySelector('header >  a > div');
console.log(logo);
var colorButton = document.querySelector('header > button:last-child')
console.log(colorButton);//function
var lButtonlines = document.querySelector('[aria-label="Previous"]');
var pressText = document.querySelector('#presstext')
var rButtonlines = document.querySelector('[aria-label="Next"]');
console.log(rButtonlines);
var navPage = document.querySelector('aside');
var elementiess = document.getElementsByClassName('.Skip-to');


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

               function PressGiz(){
  
                pressText.textContent='"…makes music look as beautiful as it sounds"';}
          
gizmodo.addEventListener('click', PressGiz)

function pressArch(){
  
    pressText.textContent='"Dynamic in both sound quality and form..."'}

arch.addEventListener('click', pressArch) 

function pressInt(){
  
    pressText.textContent='"Stylish music geeks will covet the Midcentury modern lines and high tech specs…"'}

interior.addEventListener('click', pressInt) 


function slidelineL (){
    console.log("hey queen")
rButtonlines.scrollLeft +=20


} 

window.addEventListener("scroll" , scrolm);
rButtonlines.addEventListener("click" , slidelineL);

console.log(slidelineL)


function skipFocus (){

    if (elementiess.hasFocus())    {
        navPage.className = 'showSkipNav' ;
        navPage.classList.remove('skipnav');
        
    } 
    else
   { navPage.className = '';
    navPage.classList.add('skipnav');}

    function skipBlur(){
        
    }
} 
console.log(elementiess);
