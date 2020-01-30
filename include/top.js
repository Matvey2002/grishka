function formTopLoginControl(){this.clearIfFilled=function(i,v,out){if(out){if(i.value==''){i.value=v;i.style.color='silver';i.style.fontStyle='italic';}}else if(i.value==v){i.value='';i.style.color='black';i.style.fontStyle='normal';}}
this.validateFormTopSearch=function(){if((!$('#top_s').val().trim())||($('#top_s').val().trim()=='Поиск…')){alert('Введите фамилию и имя для поиска');return false;}else
return true;}
this.validate_mail=function(value){var reg=/[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/;if(value.match(reg))return true;else
return false;}
this.validateFormTopLogin=function(){if(!$('#login_top').val().trim()){alert('Введите логин для входя на сайт');return false;}else if(!this.validate_mail($('#login_top').val().trim())){alert('Некорректный адрес e-mail');return false;}else if(!$('#password_top').val().trim()){alert('Введите пароль для входя на сайт');return false;}else
return true;}
this.showTopLogin=function(){$('#top_login_fuzz').css('height',$(document).height());$('#top_login_fuzz').fadeIn();$('#top_login_div').css('left',$('#td_top_menu').offset().left+$('#td_top_menu').width()/2-$('#top_login_div').width()/2).css('top',$('#td_top_menu').offset().top+40).show();}}var ftlc=new formTopLoginControl();