function register()
		{
			var xhr=new XMLHttpRequest();
			xhr.onreadystatechange=function()
			{
				if(xhr.readyState==4&&xhr.status==200)
				{
					var res=xhr.responseText;
				}
			}
			xhr.open("post","/myuser/register",true);
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			var formdata="uname="+uname.value+"&upwd="+upwd.value+"&phone="+phone.value+"&user_name="+user_name.value;
			xhr.send(formdata);
		}

//检查用户名是否有被占用
function checkUname()
{
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function()
	{
		if(xhr.readyState==4&&xhr.status==200)
		{var result=xhr.responseText;
			console.log(result);
			if(result==1){
				UName.innerHTML="可以注册";
			}else{
				UName.innerHtml="用户名被占用";
			}
		}
	}
	xhr.open("get","/myuser/checkUname?uname="+uname.value,true);
	xhr.send(null);
}





















function getstr(){
	var str=[];
	for(var i=0;i<6;i++){
		str[i]=String.fromCharCode(Math.random()*9+48);//将Unicode码转为字符
	}//转换后的str是数组对象
	//str=str.toString();//默认字符之间用逗号隔开的字符串。
	str=str.join('');//按指定的字符连接字符，将数组转为字符串
	ver.innerHTML=str;
}
getstr();