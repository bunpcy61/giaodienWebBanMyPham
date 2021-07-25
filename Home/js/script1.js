
$(document).on('click', '.like',function(){
	var like = parseInt($('input[name="soluong"]').val());
	if(like == 0){
		$('input[name="soluong"]').val(1);
		$('.like').css('background-color','green')
		$('input[name="soluong"').css('background-color','green')
		
	}
	else{
		$('input[name="soluong"]').val(0);
		$('.like').css('background-color','#17a2b8')
		$('input[name="soluong"').css('background-color','#17a2b8')
	}
	
});
$(document).on('click', '.cong',function(){
	var cong = parseInt($('input[name="giatri"]').val());
	$('input[name="giatri"]').val(cong + 1);
});

$(document).on('click', '.tru',function(){
	var cong = parseInt($('input[name="giatri"]').val());
	if(cong >=2 )
		$('input[name="giatri"]').val(cong - 1);
});