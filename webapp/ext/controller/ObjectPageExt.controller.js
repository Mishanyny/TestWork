sap.ui.controller("Test.ext.controller.ObjectPageExt", {
	
	onInit: function () {
		this.extensionAPI.attachPageDataLoaded(function (oEvent) {
			sap.m.MessageToast.show(oEvent.context.getProperty("CategoryID"));
		});
	},
	onClickActionCategoriesHeader1: function (oEvent) {
		sap.m.MessageToast.show("Здесь может быть ваш 'Hello world' ");	
	},
	onClickActionCategoriesHeader2: function (oEvent) {
	}
});