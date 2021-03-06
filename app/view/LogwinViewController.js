/*
 * File: app/view/LogwinViewController.js
 *
 * This file was generated by Sencha Architect version 4.2.6.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.5.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.5.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('login.view.LogwinViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.logwin',

    onSignIn: function(button, e, eOpts) {
        var username = Ext.getCmp('i_userid').value;
        var password = Ext.getCmp('i_pass').value;

        Ext.Ajax.request({
            url: 'php/api.php',
            method: 'POST',
            params: {'username': username, 'password': password },
            headers:
            {
                'Content-Type': 'application/x-www-form-urlencoded'
            },

            success: function(response, opts) {
                var getdataserver = response.responseText;
                if(getdataserver === "rid777")
                {
                    // >>>>>>>>>>>>>>>>> If Not Found or any error <<<<<<<<<<<<<<<<<
                    var vv = Ext.getCmp('l_status').setText('Status: Wrong user name and password');
                    alert('Wrong user name and password');
                }else
                {
                    // >>>>>>>>>>>>>>>>> If No error and connection is successful <<<<<<<<<<<<<<<<<
                    var sto = Ext.getStore('tempDatas');
                    var dd = Ext.decode(getdataserver);
                    sto.loadRawData(dd, true);

                    var v = Ext.create('login.view.userinfovew',{});
                    v.show();
                    Ext.getCmp('logfrom').destroy();
                }
            },

            failure: function(response, opts) {
                console.log('server-side failure with status code ' + response.status);
            }
        });
    },

    onSignUp: function(button, e, eOpts) {
        console.log('I am work');
        var vv = Ext.create('login.view.pageSignup');
        vv.show();
        this.getView().destroy();
    },

    onLoginWinClose: function(panel, eOpts) {
        var v = Ext.create('login.view.MyViewport',{});
        v.show();
    }

});
