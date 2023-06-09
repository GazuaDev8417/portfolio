
const redirection = (link, id)=>{
    const myElement = document.getElementById(id)

    myElement.style.transition = 'transform 1.5s ease-in-out'
    myElement.style.transform = 'perspective(100px) rotateY(360deg)'

    const resetTransform = () => {
      myElement.style.transition = 'none';
      myElement.style.transform = 'none';
      myElement.removeEventListener('transitionend', resetTransform);
    };
  
    myElement.addEventListener('transitionend', resetTransform);

    setTimeout(() => {
      window.open(link, '_blank')
    }, 1500);
}


document.getElementById('e-commerce-frontPage')
.addEventListener('click', ()=> redirection('https://e-commerce-mob8.onrender.com', 'e-commerce'))
document.getElementById('e-commerce-frontRepo')
.addEventListener('click', ()=> redirection('https://github.com/GazuaDev8417/e-commerce_web', 'e-commerce'))
document.getElementById('e-commerce-backRepo')
.addEventListener('click', ()=> redirection('https://github.com/GazuaDev8417/e-commerce_server', 'e-commerce'))


document.getElementById('loja-de-servicosPage')
.addEventListener('click', ()=> redirection('https://loja-de-servicos-e94s.onrender.com/', 'loja-de-servicos'))
document.getElementById('loja-de-servicosGp')
.addEventListener('click', ()=> redirection('https://play.google.com/store/apps/details?id=com.gazua300.acheiservicos', 'loja-de-servicos'))
document.getElementById('loja-de-servicosFrontRepo')
.addEventListener('click', ()=> redirection('https://github.com/GazuaDev8417/loja_de_servicos-vanilla', 'loja-de-servicos'))
document.getElementById('loja-de-servicosBackRepo')
.addEventListener('click', ()=> redirection('https://github.com/GazuaDev8417/loja_de_servicos-server', 'loja-de-servicos'))
document.getElementById('loja-de-servicos-repoMobile')
.addEventListener('click', ()=> redirection('https://github.com/GazuaDev8417/loja_de_servicos-mobile', 'loja-de-servicos'))


document.getElementById('fakebankPage')
.addEventListener('click', ()=> redirection('https://fakebank-ji8j.onrender.com', 'fakebank'))
document.getElementById('fakebank-gp')
.addEventListener('click', ()=> redirection('https://play.google.com/store/apps/details?id=com.gazua300.fakebank', 'fakebank'))
document.getElementById('fakebank-webRepo')
.addEventListener('click', ()=> redirection('https://github.com/GazuaDev8417/fakebank-web', 'fakebank'))
document.getElementById('fakebank-backRepo')
.addEventListener('click', ()=> redirection('https://github.com/GazuaDev8417/fakebank-server', 'fakebank'))
document.getElementById('fakebank-mobileRepo')
.addEventListener('click', ()=> redirection('https://github.com/GazuaDev8417/fakebank-mobile', 'fakebank'))


document.getElementById('pix-menagerDocs')
.addEventListener('click', ()=> redirection("https://documenter.getpostman.com/view/11884929/2s93XsYmN8", 'pix-manager'))
document.getElementById('pix-managerApiRepo')
.addEventListener('click', ()=> redirection('https://github.com/GazuaDev8417/api_pix', 'pix-manager'))

document.getElementById('super-form-page')
.addEventListener('click', ()=> redirection('https://super-formulario.onrender.com/', 'super-form'))
document.getElementById('super-formRepo')
.addEventListener('click', ()=> redirection('https://github.com/GazuaDev8417/super-form', 'super-form'))
document.getElementById('super-form-backendRepo')
.addEventListener('click', ()=> redirection('https://github.com/GazuaDev8417/super-form-server', 'super-form'))

document.getElementById('ifuturePage')
.addEventListener('click', ()=> redirection("https://ifuture-mk1e.onrender.com", 'ifuture'))
document.getElementById('ifuture-gp')
.addEventListener('click', ()=> redirection('https://play.google.com/store/apps/details?id=com.gazua300.ifuture', 'ifuture'))
document.getElementById('ifuture-frontRepo')
.addEventListener('click', ()=> redirection('https://github.com/GazuaDev8417/ifuture_vanilla', 'ifuture'))
document.getElementById('ifuture-mobileRepo')
.addEventListener('click', ()=> redirection('https://github.com/GazuaDev8417/ifuture-mobile', 'ifuture'))