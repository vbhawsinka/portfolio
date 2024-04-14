function show(){
    document.getElementById('side_nav').classList.toggle('on');
}

function hide(){
    document.getElementById('side_nav').classList.remove('on');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('ul li a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('ul li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } //else {
            //entry.target.classList.remove('show');
        //}
    });
});


const boxes = document.querySelectorAll('.hidden');
boxes.forEach((el)=> observer.observe(el));
