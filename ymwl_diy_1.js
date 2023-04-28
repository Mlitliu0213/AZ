
            /**
             *
             * 自定义版 客服咨询js
             * @return {[type]} [description]
             */
                var head = document.getElementsByTagName('head')[0];
                var link = document.createElement('link');
                    link.type='text/css';
                    link.rel = 'stylesheet';
                    link.href ='http://a15.yfi6.com/assets/style1/css/chatStyle.css';
                    head.appendChild(link);

                var blzx ={
                visiter_id:(typeof ymwl=='undefined' || typeof ymwl.visiter_id == 'undefined')?'':ymwl.visiter_id,
                     visiter_name:(typeof ymwl=='undefined' || typeof ymwl.visiter_name == 'undefined')?'':ymwl.visiter_name,
                     avatar:(typeof ymwl=='undefined' || typeof ymwl.avatar == 'undefined')?'':ymwl.avatar,
                     product:(typeof ymwl=='undefined' || typeof ymwl.product == 'undefined')?'{}':ymwl.product,
                     open:function(){
                        var d =document.getElementById('blzxMinChatWindowDiv');
                        if(!d){
                            var div =document.createElement('div');
                            div.id ="blzxMinChatWindowDiv";
                            document.body.appendChild(div);
                            var w =document.getElementById('blzxMinChatWindowDiv');
                            w.innerHTML='<div id="minblzxmsgtitlecontainer"><img id="minblzxWinlogo" src="http://a15.yfi6.com/assets/style1/img/wechatLogo.png"><div id="minblzxmsgtitlecontainerlabel" onclick="blzx.connenct(0)">在线咨询</div><img id="minblzxmsgtitlecontainerclosebutton" onclick="blzx.closeMinChatWindow(\'blzxMinChatWindowDiv\');" src="http://a15.yfi6.com/assets/style1/img/closewin.png"><img id="minblzxNewBigWin" onclick="blzx.connenct(0)" src="http://a15.yfi6.com/assets/style1/img/up_arrow.png"></div>';
                            document.getElementById('minblzxmsgtitlecontainer').style.backgroundColor='#488BFF';
                        }
                     },
                     connenct:function(groupid){
                     document.getElementById('blzxMinChatWindowDiv').style.display="none";
                      var id =groupid;
                      var web =encodeURI('http://a15.yfi6.com/layer?theme=7571f9&visiter_id='+blzx.visiter_id+'&visiter_name='+blzx.visiter_name+'&avatar='+blzx.avatar+'&business_id=1&groupid='+groupid+'&product='+blzx.product);
                      
                      var moblieweb = encodeURI('http://a15.yfi6.com/mobile/index/home?theme=7571f9&visiter_id='+blzx.visiter_id+'&visiter_name='+blzx.visiter_name+'&avatar='+blzx.avatar+'&business_id=1&groupid='+groupid+'&product='+blzx.product);
                       var s =document.getElementById('wolive-talk');
                        
                       if(!s){

                            var div = document.createElement('div');
                            div.id ="wolive-talk";
                            div.name=id;
                            if(blzx.isMobile()){
                               div.style.width='100%';
                               
                           }
                            document.body.appendChild(div);
                            div.innerHTML='<i class="blzx-close" onclick="blzx.closeMinChatWindow(\'wolive-talk\')"></i><iframe id="wolive-iframe" src="'+web+'"></iframe>'
                          
                        }else{
                           
                            var title =s.name;
                            if(title == groupid){
                                s.style.display ='block';
                            }else{
                                s.parentNode.removeChild(s);
                                blzx.connenct(groupid); 
                            }
                        }
                      
                     },closeMinChatWindow:function(id){
                        document.getElementById(id).style.display="none";
                        if(id==='wolive-talk'){
                            document.getElementById('blzxMinChatWindowDiv').style.display="block";
                        }
                    },isMobile:function(){
                        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
                            return true;
                        }else{
                            return false;
                        }
                    }
                }

                window.onload =blzx.open();
                setTimeout(function () {
                    blzx.connenct(0);
                },0);

        