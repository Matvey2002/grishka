																																							
function sendMsgToAdminsControl()
{
    var me = this;
    var IntervalID = false;
    var CloseInterval = 3;
    var from = '';
    
    $('[p|="mta_close"]').click( function() {
        if(me.IntervalID !== false)
        {
            clearInterval(me.IntervalID);
            me.IntervalID = false;    
        }
        $('#mta_fuzz').fadeOut();
    });
    
    this.clearIfFilled = function(i, v, out) {
    	if(out)
    	{
    		if(!$(i).val().trim())
                $(i).val(v).css('color', 'silver').css('fontStyle', 'italic');
    	}
    	else if($(i).val() == v)
            $(i).val('').css('color', 'black').css('fontStyle', 'normal');
    }
    
    $('#mta_msg').bind('blur', function(e) {
        me.clearIfFilled(this, $(this).attr('default'), true);
    });   
    
    $('#mta_msg').bind('focus', function(e) {
        me.clearIfFilled(this, $(this).attr('default'), false);
    });
    
    this.show = function(el, from) {
        me.from = from;
        me.IntervalID = false;
        me.CloseInterval = 3;
        $('#mta_close').val(' Закрыть ('+me.CloseInterval+') ');
        $('#mta_btns').show();
        $('#mta_msg').show();
        $('#mta_ajax').hide();
        $('#mta_ajax_success').hide();
        $('#mta_fuzz').css('height', $(document).height());
        $('#mta_fuzz').fadeIn();
        $('#mta_div').css('left', $(el).offset().left+$(el).width() / 2-$('#mta_div').width() / 2).css('top', $(el).offset().top+40).show();
    }
    
    this.close = function()
    {
        if(me.CloseInterval == 0)
        {   
            if(me.IntervalID !== false)
            {
                clearInterval(me.IntervalID);
                me.IntervalID = false;    
            }
            $('#mta_fuzz').fadeOut();   
        }
        else
        {
            me.CloseInterval--;
            $('#mta_close').val(' Закрыть ('+me.CloseInterval+') ');
        }
    }
    
    $('#mta_send').click( function() {
        if($('#mta_msg').val().trim() && ($('#mta_msg').val() != $('#mta_msg').attr('default')))
        {
            $.post('/ajax/msg_to_admins.php', {msg: $('#mta_msg').val().trim(), from: me.from}, function(data) {
    			    $('#mta_ajax').hide();
                    $('#mta_ajax_success').show();
                    me.IntervalID = setInterval(me.close, 1000);      	
    			});
            $('#mta_btns').hide();
            $('#mta_msg').hide();
            $('#mta_ajax').show();
        } 
        else
            alert('Пожалуйста, введите текст сообщения');
    });
}

jQl.loadjQ('//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js');