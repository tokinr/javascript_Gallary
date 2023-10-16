const main = document.querySelector('#main-image');
const thumbs = document.querySelectorAll('.thumb');
thumbs.forEach(function(item, index) {
    item. onmouseover = function() {
        main.src = this.dataset.image;
    }
  });


// console.log(main);
// console.log(thumbs);