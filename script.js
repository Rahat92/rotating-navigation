const open = document.getElementById('open'),
	  close = document.getElementById('close'),
	  container = document.getElementsByClassName('container')[0];
open.addEventListener('click',()=>{
	container.classList.add('show-nav')
})

close.addEventListener('click',()=>container.classList.remove('show-nav'))