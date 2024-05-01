sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.core.mvc.Filter} Filter
     * @param {typeof sap.ui.core.mvc.FilterOperator} FilterOperator
     */
    function (Controller, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("invoicelist.invoice01.controller.MainView", {
            onInit: function () {
                var oJSONModel = new sap.ui.model.json.JSONModel();
                var oView = this.getView();
                oJSONModel.loadData("../model/SelectionScreenMenu.json");
                oView.setModel(oJSONModel, "selectionScreen");
             },
            onFilter: function (oEvent){
                var oData = this.getView().getModel("selectionScreen").getData();
                let filters = [];

                if (oData.ShipName !== ""){
                    filters.push(new Filter("ShipName", FilterOperator.Contains, oData.ShipName) )
                }
                if (oData.ShipName !== ""){
                    filters.push(new Filter("Country", FilterOperator.EQ, oData.CountryKey) )
                }

                const oList = this.getView().byId("invoicesList");
                const oBlinding = new oList.getBlinding("items");
                oBlinding.filter(filters);

            },
            onClearFilter: function(){
                    var oModelSelSelection =this.getView().getModel("selectionScreen");
                    oModelSelSelection.setProperty("/CountryKey","");
                    oModelSelSelection.setProperty("/ShipName","");

                    const oList = this.getView().byId("invoicesList");
                    const oBlinding = new oList.getBlinding("items");
                    oBlinding.filter([]);
                    }
                    
                });
    });
