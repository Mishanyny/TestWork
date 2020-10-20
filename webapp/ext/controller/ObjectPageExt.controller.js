sap.ui.controller("Test.ext.controller.ObjectPageExt", {
	
	onInit: function () {
		this.extensionAPI.attachPageDataLoaded(function (oEvent) {
			sap.m.MessageToast.show(oEvent.context.getProperty("CategoryID"));
		});
	},
	
	// Btn Activate
	onClickActionCategoriesHeader1: function (oEvent) {
		
		sap.m.MessageToast.show("Здесь может быть ваш 'Hello world' ");	
		this.chngStatus( "Act" );
		
	},
	
	// Btn Delete
	onClickActionCategoriesHeader2: function (oEvent) {
		
		this.chngStatus( "Del" );
		
	},
	
	// Change status by Hndl
	// Act - set active status
	// Del - set delete status
	chngStatus: function(vHndl){
		var oProperty = { typ: vHndl };
		this.getOwnerComponent().getModel().callFunction("/toActiveStatus",{
			method: "GET",
			urlParameters: oProperty,
			success: function(oRes) {
				
				var iPreviousStatus = this.getOwnerComponent().getModel().getProperty("/Categories(1)/StatusId");
				
				if(iPreviousStatus === oRes.StatusID ){
					sap.m.MessageToast.show("Status is already set");	
				}else {
					this.getOwnerComponent().getModel().setProperty("/Categories(1)/StatusId", oRes.StatusID);
					this.getOwnerComponent().getModel().submitChanges();
					this.getOwnerComponent().getModel().refresh();
				}
			}.bind(this),
			error: function() {
				sap.m.MessageToast.show("Error responce");
			}
		}); 
	}
	
});