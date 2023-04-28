
            /**
             *
             * wolive 浮层版 客服咨询js
             * [wolive description]
             * @return {[type]} [description]
             */

                var head = document.getElementsByTagName('head')[0];
                var link = document.createElement('link');
                    link.type='text/css';
                    link.rel = 'stylesheet';
                    link.href ='/assets/css/index/ymwl_online.css';
                    head.appendChild(link);

                var ymwl ={
                     visiter_id:'',
                     visiter_name:'',
                     avatar:'',
                     product:'',
                     open:function(){
                        var d =document.getElementById('wolive-box');
                        if(!d){
                            var div =document.createElement('div');
                            div.id ="ymwl-kefu";
                            div.className +='ymwl-form';
                            document.body.appendChild(div);
                            var w =document.getElementById('ymwl-kefu');
                            w.innerHTML=' <i class="ymwl-icon"></i><p class="ymwl-item zidong" onclick="ymwl.connenct(0)" >在线咨询</p>';
                        }
                     },
                     connenct:function(groupid){
                      var id =groupid;
                      var web =encodeURI('/layer?visiter_id='+this.visiter_id+'&visiter_name='+this.visiter_name+'&avatar='+this.avatar+'&business_id=26&groupid='+groupid+'&product='+this.product);
                      
                      var moblieweb = encodeURI('/mobile/index/home?visiter_id='+this.visiter_id+'&visiter_name='+this.visiter_name+'&avatar='+this.avatar+'&business_id=26&groupid='+groupid+'&product='+this.product);

                       if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
                        
                         window.open(moblieweb); 
                       
                       }else{

                       var s =document.getElementById('wolive-talk');
                        
                       if(!s){

                            var div = document.createElement('div');
                            div.id ="wolive-talk";
                            div.name=id;
                            document.body.appendChild(div);
                            div.innerHTML='<i class="ymwl-close" onclick="ymwl.narrow()"></i><iframe id="wolive-iframe" src="'+web+'"></iframe>'
                          
                        }else{
                           
                            var title =s.name;
                            if(title == groupid){
                                s.style ='display:block';
                            }else{
                                s.parentNode.removeChild(s);
                                ymwl.connenct(groupid);
                            }
                        }
                      }
                     },
                     narrow:function(){
                        document.getElementById('wolive-talk').style="display:none";
                     }
                }

                window.onload =ymwl.open();

        