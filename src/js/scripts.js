import $ from 'jquery';

$(window).on('load',function(){
    if (window.location.pathname == '/') {
        var tab01 = document.querySelector('.tab-1');
        var tab02 = document.querySelector('.tab-2');
        var tab03 = document.querySelector('.tab-3');
        var tabs = document.querySelectorAll('.tab-item');

        var content01 = document.querySelector('.tab-1-content');
        var content02 = document.querySelector('.tab-2-content');
        var content03 = document.querySelector('.tab-3-content');
        var content = document.querySelectorAll('.tab-content-item')

        tab01.addEventListener('click', function() {
            tabs.forEach(item => {
                item.classList.remove('tab-border');
            });
            tab01.classList.add('tab-border');

            content.forEach(item => {
                item.classList.remove('show');
            });
            content01.classList.add('show');

        })

        tab02.addEventListener('click', function() {
            tabs.forEach(item => {
                item.classList.remove('tab-border');
            });
            tab02.classList.add('tab-border');

            content.forEach(item => {
                item.classList.remove('show');
            });
            content02.classList.add('show');
        })

        tab03.addEventListener('click', function() {
            tabs.forEach(item => {
                item.classList.remove('tab-border');
            });
            tab03.classList.add('tab-border');

            content.forEach(item => {
                item.classList.remove('show');
            });
            content03.classList.add('show');
        })

    }
});