const dropdowns = document.querySelectorAll('.menuDropdown');

dropdowns.forEach(dropdown =>{
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');
    console.log('teste');
    select.addEventListener("click", (evt)=>{
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option =>{
        option.addEventListener('click', ()=>{
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            /*
            option.forEach(option =>{
                option.classList.remove('active');
            });
            option.classList.add('active');
            */
        });
    });
});