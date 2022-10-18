/*global QUnit*/

sap.ui.define([
	"ExpenseOnline/expenseonline/controller/EXPUIEXD01.controller"
], function (Controller) {
	"use strict";

	QUnit.module("EXPUIEXD01 Controller");

	QUnit.test("I should test the EXPUIEXD01 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
