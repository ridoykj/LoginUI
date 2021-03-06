/*
 * File: app/view/MyViewport.js
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

Ext.define('login.view.MyViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.myviewport',

    requires: [
        'login.view.MyViewportViewModel',
        'login.view.MyViewportViewController',
        'Ext.form.Panel',
        'Ext.button.Button'
    ],

    controller: 'myviewport',
    viewModel: {
        type: 'myviewport'
    },
    height: 250,
    width: 400,
    layout: 'center',

    items: [
        {
            xtype: 'form',
            animateShadow: true,
            shadow: 'drop',
            shadowOffset: 4,
            height: 479,
            html: '<h1>Configration</h1>     <br>     <h4>     >> 1st. Move (upload) all file on your server direactory (server: xampp, onlineServer etc.). <br>     >> 2nd. Start the Server <br>     >> 3rd. execute SQL command (mysql) whice have "README/sqlCommand.txt" Directory <br>     >> 4th. if your mysql is not user = \'root\' and password = \'\' please edit api.php file whice have "PHP" Directory and set your password <br>     >> 5th. First login username = \'ridoy\' and password = \'kumar\' <br>     >> 6th. You Can Register     </h4>',
            itemId: 'configration',
            width: 662,
            bodyPadding: 10,
            title: 'Developer:- ridoykj@gmail.com',
            layout: {
                type: 'vbox',
                align: 'center',
                pack: 'end'
            },
            items: [
                {
                    xtype: 'button',
                    height: 43,
                    itemId: 'continue',
                    width: 167,
                    text: 'Continue',
                    listeners: {
                        click: 'onContinueClick'
                    }
                }
            ]
        }
    ]

});