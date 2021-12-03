const modal = ()=>{
    const btns = document.querySelectorAll('[data-modal]');
    const modal = document.querySelector('.modal');
    const close = modal.querySelector('[data-close]');


    function openModal(btns) {
        btns.forEach(btn => {
            btn.addEventListener('click',function(e){
                modal.classList.remove('hide');
                modal.classList.add('show');
                document.documentElement.style.overflow = 'hidden';
            });
        });
    }

    function closeModal(e) {
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.documentElement.style.overflow = '';
    }

    function outSide(e) {
        if(!e.target.closest('.modal__dialog') && !e.target.closest('[data-modal]')){
            closeModal();
        }
    }

    openModal(btns);
    
    close.addEventListener('click',closeModal);
    document.addEventListener('click', outSide);

    document.addEventListener('keydown', (e)=>{
        if(e.code === "Escape" && modal.classList.contains('show')){
            closeModal();
        }
    });

};
export default modal;
