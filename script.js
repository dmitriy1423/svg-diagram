let captionList = document.querySelectorAll('.caption-item');
let unitsList = document.querySelectorAll('.unit');

captionList.forEach(function(item, index) {
    item.addEventListener('mouseover', function() {
        unitsList[index].classList.add('hovered');
    });

    item.addEventListener('mouseout', function() {
        unitsList[index].classList.remove('hovered');
    })
});
