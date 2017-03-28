app = {
	addVisitorDashboard: function(name){
		//validation
  	//logic here to add visitor to system (HTTP Request)
    swal(name+" added!", "Click OK to return to dashboard.", "success");
    //var form = document.getElementById("newVisitorForm");
    $("#newVisitorForm").find("input").each(function(){
    	$(this).val("");
    });
	}
}

