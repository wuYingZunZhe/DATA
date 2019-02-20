<template>
  <div class=" app-index">
    <div class="row ">
        <div class="col-lg-9 carousel">
            
                <mt-swipe :auto="2500">
                    <mt-swipe-item v-for="item in list" :key="item.id">
                        <img :src="item.url">
                    </mt-swipe-item>
            </mt-swipe>
            </div>
            <!-- <div >
            <div class="ddd "> 
                 <div class="box ">  推 荐</div>     
                <p class=" p-2 index_title">  <img src="http://127.0.0.1:3000/img/resizeApi.png" class="pl-3 pr-2">目前火爆的网赚项目-粉象生活，零投资、零成本！轻松赚钱，无忧创业！<span class="hot">HOT</span> </p>
            </div>
            <div class="ddd ">
            
                 <div class="box ">  推 荐</div>
                <p class="p-2 index_title "> <img src="http://127.0.0.1:3000/img/resizeApi.png" class="pl-3 pr-2"> 近来N多人在找的虚拟币交易所平台源码+WAP专业手机版+钱包对接教程<span class="hot">HOT</span></p>
            </div>
             <div class="ddd ">
            
                 <div class="box ">  推 荐</div>
                <p class="p-2 index_title"> <img src="http://127.0.0.1:3000/img/resizeApi.png" class="pl-3 pr-2"> 全网独家-最新微交易系统平台V8.0商业运营风控版源码[正版程序]无授权、无加密-全权使用！<span class="hot">HOT</span></p>
            </div>
                <div class="ddd ">
            
                 <div class="box ">  推 荐</div>
                <p class="p-2 index_title"> <img src="http://127.0.0.1:3000/img/resizeApi.png" class="pl-3 pr-2"> 全网独家-猜猜乐2018H5游戏全新UI猜GZ简单粗暴游戏，无需公众号配置也可玩<span class="hot">HOT</span></p>
            </div>
             <div class="ddd ">
            
                 <div class="box ">  推 荐</div>
                <p class="p-2 index_title">  <img src="http://127.0.0.1:3000/img/resizeApi.png" class="pl-3 pr-2">全网首发-ThinkPHP开发的装饰公司整站源码+WAP手机版-完美破解授权-后台功能无限使用！<span class="hot">HOT</span></p>
            </div>
             <div class="ddd ">
            
                 <div class="box ">  推 荐</div>
                <p class="p-2 index_title">  <img src="http://127.0.0.1:3000/img/resizeApi.png" class="pl-3 pr-2">全网首发-最新某商城整站程序无减删+全站数据+WAP，二开程序，值得收藏！<span class="hot">HOT</span></p>
            </div>
             <div class="ddd ">
            
                 <div class="box ">  推 荐</div>
                <p class="p-2 index_title">  <img src="http://127.0.0.1:3000/img/resizeApi.png" class="pl-3 pr-2">全网首发-ThinkPHP框架开发的精品网络公司整站源码无减删+WAP手机端-同步WEB<span class="hot">HOT</span></p>
            </div>
           </div> -->
                   <div class="col-lg-3">
            <div class="index_right ">
                <div >
                <form >
                 <div class="d-flex flex-column justify-content-center">
             <input type="text" placeholder="登录ID / 邮箱账号" >
         </div>
      </form>
     </div> 
            </div>
            </div>
    </div>
    
        

            <!--  <div class="pt-3">
            <div class="update pt-2">最近更新 </div>
           <p class="update right_update pt-0"></p>
            </div>
             <ul class="h-shadow">
                <li class=" index_new">我爱源码论坛整站打包</li>
                <li class="index_new">YX语音群呼系统V4.0+安装教程+注册机</li>
                <li class="index_new">12套Laravel框架开发的YLC所有模板均支持BI接口</li>
                <li class="index_new">某一条龙商城程序带数据整站打包</li>
                <li class="index_new">前端Vue+Node+MongoDB高级全栈开发教程完结版</li>
                <li class="index_new">Laravel框架从入门到精通全套商业教程</li>
                <li class="index_new">E站网友分享的几款游戏源码</li>
                <li class=" index_new">某源码商城整站打包程序带数据无任何减删</li>
                <li class=" index_new">很多人在找的Laravel框架开发的极客展示站带后台管理</li>
                <li class=" index_new">目前火爆的网赚项目-粉象生活，零投资、零成本！轻松赚钱，无忧创业！</li>
                <li class=" index_new">Dedecms二开的大型装饰公司整站含数据+WAP手机版</li>
                <li class=" index_new">PHP创意装饰公司整站</li>
                <li class=" index_new">全网独家-DSNCLY3功能加强版带独立代理系统+WAP手机版+网页采集结算</li>
                <li class=" index_new">ThinkPHP内核开发/N多人在找的香港S马+卡密充值</li>
                <li class=" index_new">ThinkPHP５开发-微交易微盘小客户极简清爽版</li>
                <li class="index_new">Kaijiang网全站+WAP手机端带后台</li>
                <li class="index_new">大杂烩源码分享</li>
                <li class="index_new">香港SMSC两套源码</li>
                <li class="index_new">bet365源码+wap手机版</li>
                <li class="index_new">某服务器打包TYC源码</li>
                <li class="index_new">爱之购商城分销系统资金盘整站源码</li>
                <li class="index_new">商业完整版/价值2000左右/微信SSC公众号娱乐游戏带域名防封系统带上下分和飞单功能等等…</li>
                <li class="index_new">全网独家-ThinkPHP５开发-N多人在找的黑马YULE整站源码+WAP手机版+KJ采集器</li>
                <li class="index_new">红中MJ全套源码+架设视频教程</li>
                <li class="index_new">8款大杂烩源码分享</li>
                <li class="index_new">星力+手游运营版本完整版打包下载 代理+服务端+后台+更新+APP</li>
                <li class="index_new">欢乐农场PHP源码</li>
                <li class="index_new">10套大杂烩源码分享</li>
                <li class="index_new">Laravel框架开发的旅游网站管理系统</li>
                <li class="index_new">全网首发-红包雨程序官方商业强化版-无加密无授权</li>
                <li class="index_new">用钱宝小额借贷PHP整站程序开源版无授权</li>
                <li class="index_new">Laravel内核制作的精仿小米官网商城整站源码</li>
                <li class="index_new">H5游戏富贵鸡最新优化版+集成短信插件带教程</li>
                <li class="index_new">E站网友分享的Cocos Creator js房卡MJ游戏源码带安装视频教程</li>
                <li class="index_new">Laravel框架开发的微盘云微赢源码程序</li>
                <li class="index_new">微盘交易平台源码分享</li>
             </ul>
              <div class="pt-3">
            <div class="update pt-2">标签排行 </div>
           <p class="update right_update pt-0"></p>
            </div>
           <div>
             <button>企业网站</button> <button>公司网站</button>
             <button>整站源码</button>
           </div> -->
        </div>
  
</template>
<script>

export default {
    data(){
        return{
        list:[
         {id:1,url:"http://127.0.0.1:3000/img/index/index1.jpg"},
         {id:2,url:"http://127.0.0.1:3000/img/index/index2.jpg"},
          {id:3,url:"http://127.0.0.1:3000/img/index/index3.jpg"},
           {id:4,url:"http://127.0.0.1:3000/img/index/index4.jpg"}
        ]
        }
    }
}
</script>
<style>
.index_new{
      font-size: 16px;
    color: #555;
    margin-bottom: 10px;
}

.index_new:hover{
    color:#ff6100;
}
.index_title:hover{
     color:#ff6100;
}
.right_update{
    width:100%;
    height:3px;
}

.my_ul_width{
  width:80%;
  margin:1px auto;
}
.hot{
    width:30px;
    height:20px;
    background:#ff6100;
    color:#fff;
     text-align: center;
}
 body{
     margin: 0;
     padding: 0;
 }
 div{
     margin: 0;
 }
   .carousel{
       width:100%;
       height:100rem;
   }

   /* .top-box {
       width:100%;
       height:40px;
        background:#eaeaea;
     
       } */
       .ddd{
           background:#ddd url(http://127.0.0.1:3000/img/index/top_post.gif) no-repeat;
           /* margin-bottom: 1px; */
       }
     
       .box{
          
        width: 80px;
        height: 40px;
         line-height: 40px;
        font-size: 14px;
        color: #666;
        text-align: center;
        float: left;
       }
       .index_right{
           width:100%;
           height:50%;
           background:#2C3747;;
       }
   
</style>