var objet=document.querySelectorAll(".article")
var span=document.querySelectorAll(".article >span")
var prix=document.querySelectorAll('.prix')
var btn_moins=document.querySelectorAll('.btn_moins')
let quantite=document.querySelectorAll('.quantite')
var supp=document.querySelectorAll('suppr')
var parentdiv=document.querySelectorAll('.parentdiv')
let btn_plus = document.querySelectorAll(".btn_plus")
//let somme=parseInt(prix.innerText)
let somme = document.querySelectorAll('.somme')
let suppr = document.querySelectorAll('.suppr')
let aime= document.querySelectorAll('.aime')
let prixtotal=document.querySelectorAll('#prixtotal')
document.getElementById('prixtotal').value = sum()

for( let i=0; i < objet.length ; i++)
{
     btn_plus[i].addEventListener('click', function(){
     let increment=quantite[i].value++;
   increment;
   //prix.value = quantite[i].value*somme;
   //console.log(prix.value); 
   somme[i].value = parseInt(prix[i].innerHTML)*quantite[i].value;
//   prixtotal.value=sum();
document.getElementById('prixtotal').value = sum()

    })
    btn_moins[i].addEventListener('click',function(){
        if (quantite[i].value>0)
        {
            quantite[i].value--;
            somme[i].value = parseInt(prix[i].innerHTML)*quantite[i].value;
        }
    })

suppr[i].addEventListener('click', function(){
   objet[i].remove();
})

aime[i].addEventListener('click', function(){
aime[i].style.color ='red';
})
aime[i].addEventListener('dblclick', function(){
    aime[i].style.color ='black';
    })
   

}

    function sum (){
        let total=0
       let somme=document.querySelectorAll('.somme') 
       console.log(prixtotal)
    for( let i=0; i < objet.length ; i++)
       {
        total+=parseInt(somme[i].value);
        
       }
       console.log(total);

return total }







