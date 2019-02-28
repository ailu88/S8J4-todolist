// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require activestorage
//= require_tree .

//= require jquery3
//= require jquery_ujs
//= require_tree .



$(document).ready(() => {

// toggle lists within categories

    var $listtitle = $('div.container > ul > li');

        $listtitle.each(function() {

            $(this).on('click', function() {
                console.log($(this).next());
                $(this).next().toggle();
                })

    });

// click on avatar to make login/logout/signup pop up

    var $avatar =$('.navbar div img');
    $avatar.css('width', '100px');
    $avatar.on('click', function() {

    });
/*
    var $loginmenu = $('.navbar .nav-item');
    $loginmenu.wrap('<h1></h1>');
    console.log($loginmenu);
    $avatar.after($loginmenu);
*/






})