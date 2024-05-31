function stickHeader() {
    const header = document.querySelector('#header');
    if (    
        document.body.scrollTop > window.innerHeight ||
        document.documentElement.scrollTop > window.innerHeight
    ) {
        header.classList.add('fixed-top');
        console.log(header.querySelector('ul'))
        header.querySelector('ul').style.position = 'relative';
        header.style.backgroundColor = 'rgb(209, 194, 161)';
    }
    else {
        header.classList.remove('fixed-top');
        header.querySelector('ul').style.position = 'absolute';
        header.style.backgroundColor = '';
    }

}

window.onscroll = function () {
    stickHeader();
};
stickHeader();
