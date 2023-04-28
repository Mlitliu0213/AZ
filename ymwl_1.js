
            /**
             *
             * 浮层版 客服咨询js
             * @return {[type]} [description]
             */
                var head = document.getElementsByTagName('head')[0];
                var link = document.createElement('link');
                    link.type='text/css';
                    link.rel = 'stylesheet';
                    link.href ='http://kefu01.zh36.cn/assets/css/index/ymwl_online.css';
                    head.appendChild(link);

                var blzx ={
                    visiter_id:(typeof ymwl=='undefined' || typeof ymwl.visiter_id == 'undefined')?'':ymwl.visiter_id,
                     visiter_name:(typeof ymwl=='undefined' || typeof ymwl.visiter_name == 'undefined')?'':ymwl.visiter_name,
                     avatar:(typeof ymwl=='undefined' || typeof ymwl.avatar == 'undefined')?'':ymwl.avatar,
                     product:(typeof ymwl=='undefined' || typeof ymwl.product == 'undefined')?'{}':ymwl.product,
                     open:function(){
                        var d =document.getElementById('wolive-box');
                        if(!d){
                            var div =document.createElement('div');
                            div.id ="ymwl-kefu";
                            div.className +='ymwl-form';
                            div.style.backgroundColor='#488BFF'
                            document.body.appendChild(div);
                            var w =document.getElementById('ymwl-kefu');
                            w.innerHTML=' <i class="ymwl-icon"></i><p class="ymwl-item zidong" onclick="blzx.connenct(0)" >在线咨询</p>';
                        }
                     },
                     connenct:function(groupid){
                      var id =groupid;
                      var web =encodeURI('http://kefu01.zh36.cn/layer?theme=7571f9&visiter_id='+blzx.visiter_id+'&visiter_name='+blzx.visiter_name+'&avatar='+blzx.avatar+'&business_id=1&groupid='+groupid+'&product='+blzx.product);
                      
                      var moblieweb = encodeURI('http://kefu01.zh36.cn/mobile/index/home?theme=7571f9&visiter_id='+blzx.visiter_id+'&visiter_name='+blzx.visiter_name+'&avatar='+blzx.avatar+'&business_id=1&groupid='+groupid+'&product='+blzx.product);

                       if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
                        
                         window.open(moblieweb); 
                       
                       }else{

                       var s =document.getElementById('wolive-talk');
                        
                       if(!s){

                            var div = document.createElement('div');
                            div.id ="wolive-talk";
                            div.name=id;
                            div.style.backgroundColor='#488BFF'
                            document.body.appendChild(div);
                            div.innerHTML='<i class="ymwl-close" onclick="blzx.narrow()"></i><iframe id="wolive-iframe" src="'+web+'"></iframe>'
                          
                        }else{
                           
                            var title =s.name;
                            if(title == groupid){
                                s.style.display ='block';
                            }else{
                                s.parentNode.removeChild(s);
                                blzx.connenct(groupid); 
                            }
                        }
                      }
                     },
                     narrow:function(){
                        document.getElementById('wolive-talk').style.display="none";
                     }
                }

                window.onload =blzx.open();

        