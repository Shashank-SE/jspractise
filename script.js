const body = document.querySelector('body');
const btn = document.querySelectorAll('.buttons');


btn.forEach((btn1) => {
    console.log(btn1);
    btn1.addEventListener('click', (e) => {
        console.log(e);
        console.log(e.target);

        switch (e.target.id) {
            case 'red':
                body.style.backgroundColor = 'red';
                break;
            case 'blue':
                body.style.backgroundColor = 'blue';
                break;
            case 'grey':
                body.style.backgroundColor = 'grey';
                break;
            case 'green':
                body.style.backgroundColor = 'green';
                break;
            case 'pink':
                body.style.backgroundColor = 'pink';
                break;
        
            default:
                break;
        }
    });
});
