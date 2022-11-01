/** Heart Function */
let hearts = Array.from(document.querySelectorAll("#heart"));
for(let i in hearts){
    hearts[i].addEventListener("click",function(){
        if(hearts[i].getAttribute('class') == "bi bi-heart")
        hearts[i].setAttribute('class','bi bi-heart-fill');
        else
        hearts[i].setAttribute('class','bi bi-heart');
    });
}
/** Delete Function */
document.addEventListener("click",function(e){
    if(e.target.className == "delete"){
       e.target.parentNode.remove();
    }
})


/**Plus-Minus Function */
let count 




















const plus=document.querySelector("#plus");
const minus=document.querySelector("#minus");
const num=document.querySelector("#quantity");
let a=1;
plus.addEventListener("click", function (){
    a++;
    console.log(a)
    a=(a<10) ? "0" + a : a;
    num.innerText = a ; 
    updateTotal();   
});
minus.addEventListener("click", function(){
    if(a>1){
        a--;
        a= (a<10) ? "0" + a : a;
        num.innerText = a;
        updateTotal();
    } 
});

