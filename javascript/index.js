
let images=[
    './layout/初始页（2）.png',
    './layout/初始页.png',
    './layout/初始页（1）.png',
   ]
   let imageElement=document.getElementById('startPage');
   let intro=document.getElementById('intro');
   let currentIndex=0;
   imageElement.addEventListener('click',function(){
    currentIndex++;
    if(currentIndex>=images.length){
        imageElement.style.display='none';
        intro.style.display='block';
    }
    else{
        imageElement.src=images[currentIndex];
    }
   })
   let introPage=document.getElementById('introPage');
   intro.addEventListener('click',function(){
        intro.style.display='none';
        introPage.style.display='block';
   })
   let left=document.getElementById('leftPage');
   let right=document.getElementById('rightPage');
   let icoOne=document.getElementById('icoOne');
   let icoTwo=document.getElementById('icoTwo');
   let introImages=[
    './layout/简介.png',
    './layout/简介1.png',
    './layout/CT2ORPUYFB)C8FQARC2}QHQ.png',
   ]
   let newIndex=0;
   introPage.addEventListener('click',function(){
    newIndex++;
    introPage.src=introImages[newIndex];
    if(newIndex>=(introImages.length-1)){
        icoOne.style.display='block';
        icoTwo.style.display='block';
        newIndex--;
    }
   })
   let desktopImages=[
        './layout/Desktop 3.png',
        './layout/Desktop 2.png',
        './layout/Desktop 5.png',
        './layout/CT2ORPUYFB)C8FQARC2}QHQ.png',
        './layout/Desktop 6.png',
        './layout/Desktop 7.png',
        './layout/Desktop 3.png' 
   ]
   let index=3;
      left.addEventListener('click',function(){
    index--;
  if(index<0){
    index=0;
    introPage.src=desktopImages[index];
  }else{
    introPage.src=desktopImages[index];
        }
    })      
    right.addEventListener('click',function(){
        index++;
        console.log(index);
        if(index>=desktopImages.length){
            index=6;
        }else{
    introPage.src=desktopImages[index];
     }
    })
    icoOne.addEventListener('click',function(){
        index--;
        introPage.src=desktopImages[index];
        left.style.display='block';
    right.style.display='block';
    icoOne.style.display='none';
    icoTwo.style.display='none';
    left.style.width="1300px";
    right.style.width="0px";
    })
    icoTwo.addEventListener('click',function(){
        index++;
        introPage.src=desktopImages[index];
        left.style.display='block';
    right.style.display='block';
    icoOne.style.display='none';
    icoTwo.style.display='none';
    left.style.width="0px";
    right.style.left='auto';
    right.style.width="1300px";
    })

