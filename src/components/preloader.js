const getPreLoader = () => {
    const preloader = document.querySelector('#main-preloader');
    const rootElement = document.querySelector('#root');
    if(preloader.classList.contains('active')){
        preloader.classList.remove('active');
    }
   
    rootElement.style.opacity = 1;
}

export default getPreLoader;