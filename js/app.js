
/* beginnings javascript */
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

document.addEventListener('DOMContentLoaded', ()=>{
    const expandsMore=document.querySelectorAll('[expand-more]')

function expand (){
    const showContent=document.getElementById(this.dataset.target)
    if (showContent.classList.contains ('expand-active')){
    this.innerHTML=this.dataset.showtext
    }else{
        this.innerHTML=this.dataset.hidetext
    }
    showContent.classList.toggle('expand-active')
}
expandsMore.forEach(expandMore=>{
    expandMore.addEventListener('click', expand)
})

})

