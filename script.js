$(document).ready(function(){
    $(".menu-navigation li a").click(function(e){
        e.preventDefault();
        
        $.ajax({
            url: this.href,
            success: function(html){
                $(".description").empty().append(html);
            }
        });
        return false;
    });

    $.ajax({
        url: 'home.html',
        success: function(html){
            $(".description").empty().append(html);
        }
    })
    
})