sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("invoicelist.invoice01.controller.MainView", {
            onInit: function () {
                var oJSONModel = new sap.ui.model.json.JSONModel();
                var oView = this.getView();
                oJSONModel.loadData("../model/SelectionScreenMenu.json");
                oView.setModel(oJSONModel, "selectionScreen");
             },
            onFilter: function (oEvent){


            },
            onClearFilter: function(){
                    const oModelSelSelection =this.getView().getModel("selectionScreen");
                    oModelSelSelection.setProperty("/CountryKey","");
                    oModelSelSelection.setProperty("/ShipName","");
                    }
                });
    });
