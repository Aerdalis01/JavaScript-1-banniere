console.log("connecté!")

// Je selectionne et je stocke les éléments nécesséaire
//bouton .btn-success;
document.querySelector('.btn-success');


const btnSuccess = document.querySelector('.btn-success');
console.log(btnSuccess);

const cookies = document.querySelector('.cookies');
console.log(cookies);


//je soumets la div à une action au clic

btnSuccess.addEventListener('click',function(){
  console.log("bonton cliqué");
  cookies.style.opacity = "0";
});