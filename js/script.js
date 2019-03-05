 var visible="login";

function swap() {
	if (visible =="login"){
		document.getElementById('container').style.display='none';
		document.getElementById('reset-box').style.display='block';
		visible='reset';
	}
	else
	{
		document.getElementById('container').style.display='block';
		document.getElementById('reset-box').style.display='none';
		visible='login';
		alert('please check your email for the new password')
	}
	
}