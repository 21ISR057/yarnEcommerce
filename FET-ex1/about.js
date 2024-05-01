<script src="js/jquery-latest.min.js"></script>
    $(window).scroll(function(){
        if($(this).scrollTop() > 100) {
            $(".header-wrp").addClass("fixed-header");
        }
        else{
            $(".header-wrp").removeClass("fixed-header");
        }
    });