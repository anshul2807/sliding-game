let grid=[1,2,3,4,5,6,7,8,9];
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
function fillArray(len,temp){
    let arr=new Array(len);
    let num=0;
    for(let i=0;i<len;i++)arr[i]=new Array(len);
    for(let i=0;i<len;i++){
        for(let j=0;j<len;j++){
            arr[i][j]=temp[num++];
        }
    }
    return arr;
}


function fillGame(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(document.getElementsByClassName(i+"-"+j)[0].classList[2]=="blank")document.getElementsByClassName(i+"-"+j)[0].classList.remove("blank")
            if(arr[i][j]==9){
                document.getElementsByClassName(i+"-"+j)[0].classList.add("blank")
            }
        
            document.getElementsByClassName(i+"-"+j)[0].innerHTML=arr[i][j];
        }
    }
}

function shuffle(){
    fillGame(fillArray(3,shuffleArray(grid)));
}

function swapSlide(pos){
    let innerEle=document.getElementsByClassName(pos)[0];
    if(innerEle.innerHTML=="9")return;
    
    let p=pos.split("-");
    let x=parseInt(p[0]),y=parseInt(p[1]);
    if(x-1 >= 0){
        if(gridPos(x-1,y)=="9")swap(x-1,y,x,y);
    }
    if(x+1 < 3){
        if(gridPos(x+1,y)=="9")swap(x+1,y,x,y);
    }
    if(y-1 >= 0){
        if(gridPos(x,y-1)=="9")swap(x,y-1,x,y);
    }
    if(y+1 < 3){
        if(gridPos(x,y+1)=="9")swap(x,y+1,x,y);
    }
    
}

function swap(x,y,a,b){
    let first=document.getElementsByClassName(x+"-"+y)[0];

    let second=document.getElementsByClassName(a+"-"+b)[0];

    first.classList.remove("blank");
    second.classList.add("blank");

    let temp1=first.innerHTML;
    let temp2=second.innerHTML;

    // console.log(temp1,temp2);
    first.innerHTML=temp2;
    second.innerHTML=temp1;
}

function gridPos(x,y){
    return document.getElementsByClassName(x+"-"+y)[0].innerHTML;
}

for(let i=0;i<9;i++){
        document.getElementsByClassName("slide")[i].addEventListener("click",(e)=>{
            swapSlide(e.target.classList[1]);
        })
}

window.onload=()=>{
    shuffle();
}