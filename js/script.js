document.addEventListener("DOMContentLoaded", function() {
    var dropdownItems = document.querySelectorAll('.nav-item.dropdown');
    dropdownItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            var dropdownMenu = this.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.classList.add('show');
            }
        });

        item.addEventListener('mouseout', function() {
            var dropdownMenu = this.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.classList.remove('show');
            }
        });
    });
});
