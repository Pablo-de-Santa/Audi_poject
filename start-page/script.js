
  setTimeout(function(){
    let content = document.getElementById('content');
    let wrapper = document.getElementsByClassName('wrapper')[0]
    let loaderWrapper = document.getElementsByClassName('loader-wrapper')[0]
    let loaderSectionLeft = document.getElementsByClassName('loader-section')[0];
    let loaderSectionRight = document.getElementsByClassName('loader-section')[1];
    
    loaderWrapper.classList.add('loaded');
    wrapper.classList.add('hidden')
    loaderSectionRight.classList.add('hiddent');
    loaderSectionLeft.classList.add('hiddent');
    
    content.classList.remove('hidden');
  }, 4000);


