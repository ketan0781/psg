 $(window).scroll(function () {  
     var offset = $('.mobile-btn').offset();  
       var scrollTop = $(window).scrollTop(); // check the visible top of the browser  
       if (offset.bottom<scrollTop) $('.mobile-btn').addClass('fixed');  
       else $('.mobile-btn').removeClass('fixed');  
      });  

$(document).ready(function() {
           $('.pageLink').on('click', function() {
            $('#link-menu').toggleClass('display')
            })
// check where the shoppingcart-div is  
           

// get number of switch available. 
            $(function() {
            var totolDrug = $('#family').find('input[type="checkbox"]');
            var totalD = totolDrug.length;
            $('.totalNumb').html('(' + totalD + ')');
            $('.numOfDrug').html(totalD);
            });
// end of number of available switch

    //Cart counter hide and show on cheched box
    $('#wrapper').on('change', 'input[type="checkbox"]', function() {
            var AllCheck = $('#wrapper').find('input[type="checkbox"]');
            if ($(AllCheck).is(':checked')) {
                $('#wrapper .cust-header button>span').show();
                $('.mobile-btn button>span').show();
                $('.d-sign').show();
                $('.d-sign2').show();

                $('.cust-header div:last-child p').css('background', '#F5F5F5');
            } else {
                $('#wrapper .cust-header button>span').hide();
                 $('.mobile-btn button>span').hide()
                $('.d-sign').hide();
                $('.d-sign2').hide();
                $('.cust-header div:last-child p').css('background', '#FFFFFF')
            }

        })
        //end of Cart counter hide/show

    //This for Check-All box only 
    $('.check-All').on('change', 'input[type="checkbox"]', function() {
        var allCheck = $('#family').find('input[type="checkbox"]');
        $(allCheck).prop('checked', this.checked);
        n2 = allCheck.length;
        if ($(allCheck).is(':checked')) {
            $('button>span').text(n2);
            $('.inputDisabled').attr('disabled', false);
            var count2 = parseInt(n2 * 150);
            // $('.count').text(count);
            animateNum2(count2);
        } else {
            $('button>span').text(0);
            $('.count').text(0);
        }
    });
    // End of Check-ALl box only 
    
    $('#family').on('change', '.checkbox', function() {

        if($('#family input[type="checkbox"]:not(:checked)').length){
             $('.check-All').find('input[type="checkbox"]').prop('checked', false);
        } else {
            $('.check-All').find('input[type="checkbox"]').prop('checked', true);
        }
        var count;    
        var countChecked = function() {
            n = $("#family input:checked").length;
            $("button>span").text(n);
            var abc = count = n*150;   
        };
         if($(this).is(':checked')){
            countChecked();
             animateNum(count);
        }else{
            countChecked();
            animateStop(count)
        } 
    });
// ==============================================================================

// animate number ========================================= 
         var animateNum = function(cnt){
       
                $('.total-amount').each(function () {
                    $(this).prop('Counter',$(this).text()).animate({
                     Counter: cnt
                 }, {
                    duration: 150,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
        // select All ===
         var animateNum2 = function(cnt){
           
                $('.total-amount').each(function () {
                    $(this).prop('Counter',$(this).text()).animate({
                     Counter: cnt
                 }, {
                    duration: 500,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
// animate number stop===========================================        
        var animateStop = function(cnt){
            
                $('.total-amount').each(function () {
                    $(this).prop('Counter',$(this).text()).animate({
                     Counter: cnt
                 }, {
                    duration: 00,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }

    //==================animate on checkbook select all ==========================
    $('#checkboxAll').on('click', function() {
        if ($(this).is(':checked')) {
            var totalbox = $('#family').find('.animate-box');
            $(totalbox).each(function(i) {
                var cart = $('.inputDisabled');
                var imgtofly = $(this);
                if (imgtofly)
                    if (imgtofly) {
                        var imgclone = imgtofly.clone()
                            .offset({
                                top: imgtofly.offset().top,
                                left: imgtofly.offset().left
                            })
                            .addClass('animateBox')
                            .appendTo($('body'))
                            .animate({
                                'top': cart.offset().top + 44,
                                'left': cart.offset().left + 0

                            }, 500, 'easeOutCubic');
                        imgclone.animate({
                            'width': 0,
                            'height': 0
                        }, function() {
                            $(this).detach()
                        });
                    } else {}

            });
        } else {
            // alert('unchecked');
        }
    });
    //=================animate on checkbox for single check box====================
    $('.checkbox').change(function() {
        if ($(this).is(':checked')) {
            var cart = $('.inputDisabled');
            var imgtofly = $(this).parent('.check').prev(".animate-box").eq(0);
            if (imgtofly) {
                var imgclone = imgtofly.clone().css('width','0px')
                    .offset({
                        top: imgtofly.offset().top,
                        left: imgtofly.offset().left
                    })
                    .addClass('animateBox')
                    .appendTo($('body'))

                    .animate({
                        'top': cart.offset().top + 44,
                        'left': cart.offset().left + 0
                

                    }, 500);
                imgclone.animate({
                    'width': 0,
                    'height': 0
                }, function() {
                    $(this).remove()
                });
            }
        } else {}
    })

}); //End of doc ready
