<template>

    <div class="app-header">

      <div class="row">

        <div class="col-lg-4   d-flex justify-content-center">
          <router-link to="/">
            <img :src="img" class="my_img"></router-link>
        </div>
        <div class="col-lg-6 col-sm-12 pt-4 d-flex justify-content-left">
          <i>专注于收集整理各类网站源码、教程、软件为一体的资源分享学习平台，为中国站长提供动力！</i>
        </div>
        <div  class="col-lg-2 col-sm-12 pt-4  ">
            <div class="d-flex justify-content-center d-lg-block d-none">
            <input type="text" placeholder="搜资源..." class="">
            <button class="btn btn-dark h-75 ml-2">搜索资源</button>
            </div>
        </div>
       
      </div>
      <div class="d-sm-none d-lg-block">
        <div class="row">
            <div class="col-lg-4 d-flex justify-content-around  pt-3 pl-5 header_float">
            <a>
                <img src="http://127.0.0.1:3000/img/header/email.png">
                <p>联系我们</p>
            </a>
            <a>
                <img src="http://127.0.0.1:3000/img/header/join.png">

                <p>加入e站</p>
            </a>
            <a>
                <img src="http://127.0.0.1:3000/img/header/error.png">
                <p>失效通知</p>
            </a>
                <a>
                <img src="http://127.0.0.1:3000/img/header/idc.png">
                <p>e站数据</p>
                </a>
            </div>
                
            <div class="col-lg-8">
                <div class=" d-flex justify-content-lg-end">
                    <button class="paid">订阅更新</button>
                    <button class="update">最近更新</button>
                </div>
                <div>
                <div id="bignew">
                    <div id="mynew" >
                    <p  v-for="item of myList" :key="item.id">  <img class="pr-2" src="http://127.0.0.1:3000/img/volume_easyicon.png">{{item.title}}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
      <!-- 折叠 -->
   <div class="navbar bg-dark navbar-dark navbar-expand-sm" >
       <button class="navbar-toggler" data-toggle="collapse" data-target="#content">
           <span class="navbar-toggler-icon"></span>E站导航
       </button>
       <div class="collapse navbar-collapse" id="content">
        <ul class="navbar-nav">
            <li class="nav-item "><a class="nav-link" href="#">首页</a></li>
            <li class="nav-item"><a class="nav-link" href="#">精品源码</a></li>
            <li class="nav-item"><a class="nav-link" href="#">网站模板</a></li>  
            <li class="nav-item"><a class="nav-link" href="#">会员专享</a></li> 
            <li class="nav-item"><a class="nav-link" href="#">站长工具</a></li>
            <li class="nav-item"><a class="nav-link" href="#">软件分享</a></li>   
            <li class="nav-item"><a class="nav-link" href="#">技术文档</a></li>   
            <li class="nav-item"><a class="nav-link" href="#">会员中心</a></li>   
            <li class="nav-item"><a class="nav-link" href="#">永久会员独享资源</a></li>   

        </ul>
        </div>
   </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            j:1,
            i:0,
            startTop:0,
             img:'',
             myList:[{id:1,title:'企业如何利用网络营销挣钱？'},
             {id:2,title:"移动电商取得成功的六大策略"},
             {id:3,title:"优质的服务器对SEO的影响有多大"},
             {id:4,title:"自适应网页设计：不同的设备呈现同样的网页"},
             {id:5,title:"企业网站优化需要注重3点seo细节"},
             {id:6,title:"效果营销实战派：如何将一套8000元的沙发，卖到58000元"},]

        }

    },
    created(){
        this.getIamge();
        setInterval(()=>{
            var myDiv=document.getElementById("mynew");
            if(this.startTop==0) this.j=1;
            if(this.startTop==200) this.j=-1;
            if(this.j==1) {
                this.startTop=40*this.i*this.j;
                myDiv.style.marginTop=-this.startTop+"px";
                this.i++;
            }
            if(this.j==-1){
                this.i--;
                this.startTop=40*this.i*this.j;
                myDiv.style.marginTop=this.startTop+"px";
            }
        },1000);
    },
    methods: {
        
        getIamge(){
            var url="http://127.0.0.1:3000/getImages"
            this.axios.get(url).then(res=>{
                this.img=res.data[0].img_url;
                console.log(this.img);
            })
        }
    },
}
</script>
<style>

#bignew{
   
    height: 40px;
    overflow:hidden;
}
#mynew{
    transition:all 1s;
    padding: 5px;
    
}
#mynew p{
    margin:0;
    height:40px;
    color:#000;
    padding:10px 10px;
    font-size: 12px;
      display: flex;
    justify-content: flex-end;
}

.header_float{
   transition:all 1s;
}
.header_float div:hover{
    transform:translateY(-5px);
}
.app-header{
    margin: 5px;
}
  div p{
      font-size:15px;
     
  }
 
  .my_img:hover{
      transform:scale(1.5);
      overflow :hidden;
  }
  div i{
    color: #32415b;
    font-size: 16px;
    font-style: italic;
    float: left;
  }
  .update{
    font-size: 14px;
    width: 93px;
    height: 34px;
    background: #2C3747;
    color: #FFF;
    text-align: center;
  }
   .paid{
    font-size: 14px;
    width: 93px;
    height: 34px;
    background: #FF6100;
    color: #FFF;
    text-align: center;
  }



</style>


