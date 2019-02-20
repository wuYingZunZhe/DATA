<template>
    <div class="app-login">
        <div class="row">
          <div class="col-1"></div>
          <div class="col-3">
            <div>
                <img src="http://127.0.0.1:3000/img/login/loginheader.png">
             </div>
             <div>
                <img src="http://127.0.0.1:3000/img/login/loginldea.png">
             </div>
            </div>
            <div class="col-4"></div>
            <div class="col-3">
                <p class="login_right">提示：您的后台路劲为/admin/,建议更改为更安全的路径！</p>
                 <p >技术支持：QQ群：22015355</p>
                 <p>官方网站： www.zye.cc</p>
                 <div class="mylogin">
                    <form action="">
                        用户名： <input type="text">
                        密码 ： <input type="password">

                    </form>
                 </div>
            </div>
            <div class="col-1"></div>
            </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.app-login{
     background:url(http://127.0.0.1:3000/img/login/background.png) no-repeat;
    height:100%;
    width:100%;
    position: absolute;
    top:0;
    z-index:110000;
}
p .login_right{
    color:red;

}
.mylogin{
      background:url(http://127.0.0.1:3000/img/login/loginsign.png) no-repeat;
     
}
</style>
