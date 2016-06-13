var checkboxes = 'input[type="checkbox"]',
    calc_prev = 0;

$(document).ready(function() {
    // checkboxes
    $('input[type="checkbox"]').each(function(){
        $(this).on('change', function() {
            toggleCb($(this));
            animateCb($(this));
            addBtn();
            addNum();
            youSave($(this));
            maxBtn($('#max-button'));
        });
    });
    // max savings button
    $('#max-button').click(function() {
        cascadeCb($(this));
        return false;
    });
    // show more button
    $('.show-more a').click(function() {
        showMore($(this));
        return false;
    });
    // show more button
    $('#add-button').click(function() {
        if (!$(this).hasClass('disabled')) {
            alert('To the cart page!');
        }
        return false;
    });
    // init mobile save block
    $('#add-save-container').css('bottom', function() {
        var bottom = $(this).outerHeight();
        return -Math.abs(bottom);
    })
});

// checkbox function
function toggleCb(cb) {
    var cbs = cb.closest('ul').find('li input[type="checkbox"]');
    if (cb.is(':checked')) {
        cbs.prop('checked', false).parent('li').addClass('text-muted');
        cb.prop('checked', true).parent('li').removeClass('text-muted');
    } else {
        cb.closest('ul').find('li').removeClass('text-muted');
    }
}

// animate function
function animateCb(cb) {
    // animate
    if (cb.is(':checked')) {
        var addPos = $('#add-button-box').offset(),
            addW = $('#add-button').outerWidth(),
            addH = $('#add-button').outerHeight(),
            labelW = cb.next('label').outerWidth(),
            labelH = cb.next('label').outerHeight(),
            labelPos = cb.parent('li').offset();
        // make the div
        $('<div/>')
            .addClass('animated')
            .css({top:labelPos.top, left:labelPos.left, width:labelW, height:labelH})
            .appendTo('body')
            .animate({top:addPos.top, left:addPos.left, width:addW, height:addH}, 500, function(){
                $(this).fadeOut(250, function(){
                    $(this).remove();
                });
            });
    }
}

function addBtn() {
    if ($('input[type="checkbox"]:checked').length > 0) {
        // enable
        $("#add-save-container").animate({bottom: 0}, 500);
        $('#you-save').show();
        $('#add-button').removeClass('disabled');
    } else {
        // disable
        $("#add-save-container").animate({
            bottom: -Math.abs($(this).outerHeight())
        }, 500);
        $('#you-save').hide();
        $('#add-button').addClass('disabled');
    }
}

function addNum() {
    $('#dot').show().text($('input[type="checkbox"]:checked').length);
    if ($('#dot').text() == 0) {
        $('#dot').hide()
    };
}

////////////////////
// MAX SAVINGS BUTTON
////////////////////
function maxBtn(btn){
    var bestCbs = $('li.best input[type="checkbox"]'),
        bestChkCbs = $('li.best input[type="checkbox"]:checked');
    if (bestCbs.length == bestChkCbs.length) {
        btn.addClass('disabled').text('Max Savings Selected!');
    } else {
        btn.removeClass('disabled').text('Select Max Savings');
    }
}

function cascadeCb(btn) {
    if (!btn.hasClass('disabled')) {
        $('li.best input[type="checkbox"]:not(:checked)').each(function(i){
            var el = $(this);
            setTimeout(function() {
                el.prop('checked', true).change();
            }, i * 250);
        });
    }
}

////////////////////
// YOU SAVE
////////////////////
function youSave(cb) {
    // calculate current value for all checkboxes
    var calc_cur = 0,
        calc_old_cur = [];
    calc_old_cur.push(calc_prev); // push global var
    $('input[type="checkbox"]:checked').each(function(){
        calc_cur += parseFloat($(this).val());
    });
    calc_cur = calc_cur.toFixed(2);
    calc_old_cur.push(calc_cur); // push new/current value
    calc_prev = calc_cur; // set global var

    // if selecting play animation, else no animation for you
    if (cb.is(':checked')) {
        animateNum(calc_old_cur[0], calc_old_cur[1]);
    } else {
        $('#amt').text(formatNum(calc_old_cur[1]));
    }
}

function formatNum(num){
    while (/(\d+)(\d{3})/.test(num.toString())){
        num = num.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return num;
}

function animateNum(old, cur) {
    var decimal_places = 2,
        decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);
    $('input[type="checkbox"]:checked').each(function(){
        cur += parseFloat($(this).val());
    });
    old = parseFloat(old * 100);
    $('#amt')
        .prop('number', old)
        .animateNumber({
            number: cur * decimal_factor,
            numberStep: function(now, tween) {
                var floored_number = Math.floor(now) / decimal_factor,
                    target = $(tween.elem);
                if (decimal_places > 0) {
                    floored_number = floored_number.toFixed(decimal_places);
                    floored_number = formatNum(floored_number);
                }
                target.text(floored_number);
            }
        }, 250);
}

////////////////////
// SHOW MORE DRUGS
////////////////////

function showMore(el) {
    el.closest('.show-more').prev('ul').toggleClass('hidden');
    el.closest('.show-more').find('a').each(function(){
        $(this).toggle();
    });
    return false;
}