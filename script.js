document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.project-image').forEach(function(image) {
        image.addEventListener('click', function() {
            if (image.classList.contains('small-image')) {
                image.classList.remove('small-image');
                image.classList.add('expanded-image');
            } else {
                image.classList.remove('expanded-image');
                image.classList.add('small-image');
            }
        });
    });
});
