window.addEventListener('load', function(){
    var links = document.querySelectorAll('.link');
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {

            links.forEach(function (otherLink) {
                otherLink.classList.remove('active');
                var spanBar = otherLink.parentElement.querySelector('.bar');
                if (spanBar) {
                    spanBar.classList.remove('active');
                }
            });

            link.classList.add('active');
            var spanBar = link.parentElement.querySelector('.bar');
            if (spanBar) {
                spanBar.classList.add('active');
            }
        });
   });

   var side_bar = document.querySelector('.side-bar');
   var hamburger = document.querySelector('.test_burger');
   var over = this.document.querySelector('.over');
   burgerToggle = () => {
        side_bar.classList.toggle('active');
        over.classList.toggle('active');
   }; 
   hamburger.addEventListener('click', function() {
        burgerToggle();
    });
    over.addEventListener('click', function(){
        burgerToggle();
       hamburger.checked = !hamburger.checked;
   });
});