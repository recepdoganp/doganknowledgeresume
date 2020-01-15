const items = document.querySelectorAll('#timeline li');


// check if the items is inside the Viewport
const isInViewport = el =>{
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <=(window.innerWidth || document.documentElement.clientWidth)
  );
};

// check every element to see if it is inside the viewport and then add show class
const run =()=>{
  items.forEach(item=>{
    if(isInViewport(item)){
      item.classList.add('show');
    } else{
      if(item.classList.contains('show')){
        item.classList.remove('show');
      }
    }
  })
}

// events

window.addEventListener('load',run);
window.addEventListener('resize',run);
window.addEventListener('scroll',run);