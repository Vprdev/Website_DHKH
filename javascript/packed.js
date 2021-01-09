
// show elements list menu right
function ShowRight(){ 
	var hiddenList = document.getElementById('listIdRight');
	if(hiddenList.style.display ==='block') {
		hiddenList.style.display = 'none';
		document.getElementById('showMenuRight').style.backgroundColor = '#003c6c';
		document.getElementById('showMenuRight').style.color = '#fff';
	} else {
		hiddenList.style.display = 'block';
		document.getElementById('showMenuRight').style.backgroundColor = '#fff';
		document.getElementById('showMenuRight').style.color = '#000';
	}
	
}
 
// show elements list menu left
function ShowLeft(){ 
	var hiddenList = document.getElementById('listIdLeft');
	if(hiddenList.style.display ==='block') {
		hiddenList.style.display = 'none';
		document.getElementById('showMenuLeft').style.backgroundColor = '#003c6c';
		document.getElementById('showMenuLeft').style.color = '#fff';
	} else {
		hiddenList.style.display = 'block';
		document.getElementById('showMenuLeft').style.backgroundColor = '#fff';
		document.getElementById('showMenuLeft').style.color = '#000';
	}
	
}
 
// js on page Đăng Ký Học Tập

	// hidden notify note 
function hiddenNotify(){
	var hiddeN = document.getElementById('hiddenNotifyContent');
	if( hiddeN.style.display='block') {
		hiddeN.style.display='none';
		document.getElementById('hideMargin').style.marginTop = '0';
	}
}

	// show tabs elements contents
function showElementTabs1() {
	document.getElementById('tabs-3').style.display ='none';
	document.getElementById('tabs-2').style.display ='none';
	document.getElementById('tabs-1').style.display ='block';
	document.getElementById('tabs-1').style.animation = 'animationShowTabs 1s normal';
	document.getElementById('tabs-1').setAttribute('class','brc_content-body_tabs-3_funcjs');
}
function showElementTabs2() {
	var showTabs = document.getElementById('tabs-2');
	if(showTabs.style.display==='none') {
		showTabs.style.display='block';
		document.getElementById('tabs-1').style.display='none';
		document.getElementById('tabs-3').style.display='none';
	}
	 else {
		showTabs.style.display='block';
		document.getElementById('tabs-1').style.display='none';
		document.getElementById('brc_tabs-1').style.backgroundColor = '#fff';
		document.getElementById('brc_tabs-1').style.color = '#337ab7';
		document.getElementById('brc_tabs-1').style.border = 'none';
		document.getElementById('tabs-2').style.animation = 'animationShowTabs 1s normal';
	}
}

function showElementTabs3() {
	document.getElementById('tabs-1').style.display ='none';
	document.getElementById('tabs-2').style.display ='none';
	document.getElementById('tabs-3').style.display ='block';
	document.getElementById('tabs-3').style.animation = 'animationShowTabs 1s normal';
	document.getElementById('tabs-3').setAttribute('class','brc_content-body_tabs-3_funcjs');
}


//  hàm jquery sự kiện click chuột vào phần tử nào thì phần tử đó đổi class   ====>>>> video 13 Fedu- Nguyễn Đức Việt
// $(function() {
// 	// click vao nut thi doi class
// 	$('.bonnut li').click(function() {
// 		$('.bonnut li').removeClass('active');
// 		$(this).addClass('active');

// 		x = $(this).index();
// 		x = x + 1;
// 		console.log(" click ok" + x);

// 		// cho nội dung tương ứng hiện lên
// 		$('.bonnd ul li').removeClass('hienlen');
// 		$('.bonnd ul li:nth-child(x)').addClass('hienlen');
// 	})
// })

