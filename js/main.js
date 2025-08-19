$(document).ready(function(){
    $(".dropdown-toggle").click(function(){
      $(".dropdown").slideToggle("slow");
    });
  });


    /*---------- NAVIGATION HAMBURGER ----------*/
    $(".navigation-hamburger").on("click", function() {
        if ($(this).hasClass('-open')) {
            $(this).removeClass('-open').addClass('-close');
            $('body').removeClass('menu-open');
        } else {
            $(this).removeClass('-close').addClass('-open');
            $('body').addClass('menu-open');
            $("#subsidiaries").hide();
            $(".btn-subsidiaries").removeClass('close');
        }
    });

    $(".btn-subsidiaries").on("click", function(e) {
        $("html").scrollTop(0);
        $("#subsidiaries").slideToggle();
        $(this).toggleClass('close');
        if ($(".navigation-hamburger").hasClass('-open')) {
            $(".navigation-hamburger").removeClass('-open').addClass('-close');
            $('body').removeClass('menu-open');
        }
        e.preventDefault();
    });

    function closeSubsidiaries() {
        if ($("#subsidiaries").is(":visible")) {
            $("#subsidiaries").slideToggle();
            $(".btn-subsidiaries").toggleClass('close');
        }
    }

    $(".btn-subsidiaries-close").on("click", function(e) {
        closeSubsidiaries();
        e.preventDefault();
    });
