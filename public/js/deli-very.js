/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: '#info_wrapper',
    data: {
        currentOrder : {},
        orderCount: 1
  },
    methods: {
        formatInfo: function(){
            var customerInfo = readCustomerInfo();
            var name = customerInfo[0] + " " + customerInfo[1];
            var email = customerInfo[2];
            var payment = customerInfo[3];
            var note = customerInfo[4];
            var gender = customerInfo[5];
            var misc = "(" + email + ", " + payment + ", " + note + ", " +  gender + ")";
            var custInfo = [];
            custInfo.push(name);
            custInfo.push(misc);
            return custInfo;
        },
        // Removed getNext since we're not receiving information about the order queue
        // anymore, which it depended on. 
        addOrder: function (event) {
            var orderedBurgers = readBurgers();
            var offset = {x: event.currentTarget.getBoundingClientRect().left,
                          y: event.currentTarget.getBoundingClientRect().top};
            var customerInfo = this.formatInfo();
            socket.emit("addOrder", { orderId: this.orderCount,
                                      details: { x: this.currentOrder.details.x,
                                                 y: this.currentOrder.details.y},
                                      orderItems: orderedBurgers,
                                      orderInfo: customerInfo
                                    });
            this.orderCount++;
            },
        displayOrder : function (event){
            var offset = {x: event.currentTarget.getBoundingClientRect().left,
                          y: event.currentTarget.getBoundingClientRect().top};
            this.currentOrder = ({
                details: { x: event.clientX - 10 - offset.x,
                           y: event.clientY - 10 - offset.y }
            });
        }
    }
});
