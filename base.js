const keyArea = document.querySelector('#keys');
const imageList = document.querySelectorAll('img');
function addKeys(){
    for (var i=1; i<=10; i++){
        var key = document.createElement('div');
        key.setAttribute('id',String(i));
        key.setAttribute('class','key');
        key.innerText = i;
        keyArea.appendChild(key)
    }
}
function onceClicked(e){
    var keypressId = e.id;
    var file = new Audio('assets/sounds/'+String(keypressId) + '.mp3');
    var image = Math.floor(Math.random()*5);
    file.play();
    console.log(keypressId,file);
    e.style.transform = 'scale(0.95,0.9)';
    e.style.transformOrigin = 'left top ';
    imageList[image].style.visibility = 'visible';
    imageList[image].style.transform = 'scale(1.2,1.2)';
    setTimeout(()=>{
        imageList[image].style.visibility = 'hidden';
        e.style.transform = 'scale(1,1)';
    },1500);
}


addKeys();
keyArea.addEventListener('click',(e)=>{
    var key = document.getElementById(e.target.id);
    onceClicked(key);
});

addEventListener('keypress',(e)=>{
    if(e.key == 0){
        var key = document.getElementById('10');
    }
    else{
        var key = document.getElementById(String(e.key));
    }
    onceClicked(key);
});
