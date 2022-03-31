

// btn.onclick

let y =document.getElementById('inp');
let btn=document.getElementById('btn')

function goster(){
  
   
    if(y.type =='password'){
y.type='text';
// btn.textContent.style.display='None'
btn.className='fa-solid fa-eye'
// btn.style.backgroundColor('black')
    }
    else{
        y.type='password';
        // btn.textContent='Goster'
        // btn.style.backgroundColor('yellow')
        // btn.textContent.style.display='None'
        btn.className='fa-solid fa-eye-slash'
    }
}

let smaller= document.getElementById('small');
function check(){
   
if(y.value.length>8){
smaller.textContent='Gucludur'
}
else{
    smaller.textContent='Zeifdir'
}
}
y.onblur=function(){
smaller.style.display='None';
}
y.onfocus=function(){
    if(y.value.length>1){
        smaller.style.display='Block';
    }
   
    }
    // let x =NaN
    // let y= Infinity
    // let z= -Infinity
    // let a= 12345n

    // let x;
    // let y=null;
    // let x=8;
    // let y=10;
    // x=x+y;
    // x+=y;

//     let x=10;
//     while(x<5){
// alert(x);
// x++
//     }
// let username;

// while(!username){
// username=prompt('Adinizi qeyd edin');
// }
// let x=6;
// console.log(++x);
// console.log(x);
// for(let i=0 ; i<5; i++){
// console.log('durdane');
// }

// function musteri(){
//     let data='';
//     for(let i=1; i<inp.value ; i++){
// data=`<input type="text" placeholder="Musteri adi">`
//     }
//     do
// }