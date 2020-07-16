$(document).ready(function(){
$("#pincode").change(function(){
	var search_value=$("#pincode").val();
	if(search_value != undefined || search_value != '' || search_value != null){
		var URL = "https://api.postalpincode.in/pincode/" + search_value
		$.ajax({url:URL , success: function(result){
			console.log(result)
			if(result.length>0){
				if(result[0].PostOffice.length>0){
					var address = result[0].PostOffice[0]
					// console.log(address)
					$("#address").val(address.Name)
					$("#apart").val('Not Found')
					$("#city").val(address.Region)
					$("#country").text(address.Country)
					$("#state").text(address.State)
				}else{
					alert('No Address Found')
				}

			}else{
				alert('No Address Found')
			}
		
		}});
	}
	
// $("#div1").html(result);

});
});

function enable() {
  document.getElementById("state").disabled=false;
}