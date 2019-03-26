setTimeout(function(){
    let content = document.getElementById('content');
    console.log(content);
    
  //   This is giving us an array of elements, so we have to choose the first element with index = 0, because we have only one  elemnt with'loader-wrapper' class
    let loaderWrapper = document.getElementsByClassName('loader-wrapper')[0]
    console.log(loaderWrapper);
    loaderWrapper.classList.add('loaded');
    content.classList.remove('hidden');
  }, 4000);