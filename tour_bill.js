frappe.ui.form.on("Tour Bill",{
    start_date_and_time:function(frm){
    if(frm.doc.reaching_back_date_time){
    frm.set_value("total_no_of_days",  frappe.datetime.get_day_diff(frm.doc.reaching_back_date_time, frm.doc.start_date_and_time));
    refresh_field("total_no_of_days");
    }
    },
    reaching_back_date_time:function(frm){
    if(frm.doc.start_date_and_time){
    frm.set_value("total_no_of_days",  frappe.datetime.get_day_diff(frm.doc.reaching_back_date_time, frm.doc.start_date_and_time));
    refresh_field("total_no_of_days");
    }
    },
    advance_amount_taken:function(frm){
    if(!frm.doc.advance_amount_taken){
            frm.doc.advance_amount_taken = 0
        }
    if(!frm.doc.grand_total){
            frm.doc.grand_total = 0
        }
    if(frm.doc.advance_amount_taken > frm.doc.grand_total){
    frm.set_value("amount_to_return", frm.doc.advance_amount_taken - frm.doc.grand_total);
    frm.set_value("amount_to_take", 0);
    refresh_field("amount_to_return");
    refresh_field("amount_to_take");
    }
    if(frm.doc.advance_amount_taken < frm.doc.grand_total){
    frm.set_value("amount_to_return", 0);
    frm.set_value("amount_to_take", frm.doc.grand_total - frm.doc.advance_amount_taken);
    refresh_field("amount_to_return");
    refresh_field("amount_to_take");
    }
    
    },
    grand_total:function(frm){
        if(!frm.doc.advance_amount_taken){
            frm.doc.advance_amount_taken = 0
        }
        if(!frm.doc.grand_total){
                frm.doc.grand_total = 0
            }
    if(frm.doc.advance_amount_taken > frm.doc.grand_total){
    frm.set_value("amount_to_return", frm.doc.advance_amount_taken - frm.doc.grand_total);
    frm.set_value("amount_to_take", 0);
    refresh_field("amount_to_return");
    refresh_field("amount_to_take");
    }
    if(frm.doc.advance_amount_taken < frm.doc.grand_total){
    frm.set_value("amount_to_return", 0);
    frm.set_value("amount_to_take", frm.doc.grand_total - frm.doc.advance_amount_taken);
    refresh_field("amount_to_return");
    refresh_field("amount_to_take");
    }
    },
    total_hotel_bill:function(frm){
     if(!frm.doc.grand_total){
        frm.doc.grand_total = 0
    }
    if(!frm.doc.total_amount){
        frm.doc.total_amount = 0
    }
    if(!frm.doc.currency_15){
        frm.doc.currency_15 = 0
    }
    if(!frm.doc.total2){
        frm.doc.total2 = 0
    }
    if(!frm.doc.total1){
        frm.doc.total1 = 0
    }
    frm.set_value("grand_total", frm.doc.total_hotel_bill + frm.doc.total_amount + frm.doc.currency_15 + frm.doc.total2 + frm.doc.total1);
    refresh_field("grand_total");
    },
    total_amount:function(frm){
     if(!frm.doc.grand_total){
        frm.doc.grand_total = 0
    }
    if(!frm.doc.total_amount){
        frm.doc.total_amount = 0
    }
    if(!frm.doc.currency_15){
        frm.doc.currency_15 = 0
    }
    if(!frm.doc.total2){
        frm.doc.total2 = 0
    }
    if(!frm.doc.total1){
        frm.doc.total1 = 0
    }
    frm.set_value("grand_total", frm.doc.total_hotel_bill + frm.doc.total_amount + frm.doc.currency_15 + frm.doc.total2 + frm.doc.total1);
    refresh_field("grand_total");
    },
    currency_15:function(frm){
     if(!frm.doc.grand_total){
        frm.doc.grand_total = 0
    }
    if(!frm.doc.total_amount){
        frm.doc.total_amount = 0
    }
    if(!frm.doc.currency_15){
        frm.doc.currency_15 = 0
    }
    if(!frm.doc.total2){
        frm.doc.total2 = 0
    }
    if(!frm.doc.total1){
        frm.doc.total1 = 0
    }
    frm.set_value("grand_total", frm.doc.total_hotel_bill + frm.doc.total_amount + frm.doc.currency_15 + frm.doc.total2 + frm.doc.total1);
    refresh_field("grand_total");
    },
    total2:function(frm){
     if(!frm.doc.grand_total){
        frm.doc.grand_total = 0
    }
    if(!frm.doc.total_amount){
        frm.doc.total_amount = 0
    }
    if(!frm.doc.currency_15){
        frm.doc.currency_15 = 0
    }
    if(!frm.doc.total2){
        frm.doc.total2 = 0
    }
    if(!frm.doc.total1){
        frm.doc.total1 = 0
    }
    frm.set_value("grand_total", frm.doc.total_hotel_bill + frm.doc.total_amount + frm.doc.currency_15 + frm.doc.total2 + frm.doc.total1);
    refresh_field("grand_total");
    },
    total1:function(frm){
     if(!frm.doc.grand_total){
        frm.doc.grand_total = 0
    }
    if(!frm.doc.total_amount){
        frm.doc.total_amount = 0
    }
    if(!frm.doc.currency_15){
        frm.doc.currency_15 = 0
    }
    if(!frm.doc.total2){
        frm.doc.total2 = 0
    }
    if(!frm.doc.total1){
        frm.doc.total1 = 0
    }
    frm.set_value("grand_total", frm.doc.total_hotel_bill + frm.doc.total_amount + frm.doc.currency_15 + frm.doc.total2 + frm.doc.total1);
    refresh_field("grand_total");
    }
});

frappe.ui.form.on('Hotel Stay Table', {
	per_day: function(frm, cdt, cdn) {
	    const d = locals[cdt][cdn];
	    if(d.no_of_days){
	    frappe.model.set_value(cdt, cdn, "total", d.per_day * d.no_of_days);
        refresh_field("total");
	    }
	},
	no_of_days: function(frm, cdt, cdn) {
    const d = locals[cdt][cdn];
    if(d.per_day){
    frappe.model.set_value(cdt, cdn, "total", d.per_day * d.no_of_days);
    refresh_field("total");
    }
	},
	table_11_remove: function(frm, cdt, cdn) {
	    const d = locals[cdt][cdn];
	    var total = 0;
	    for(var i = 0; i < frm.doc.table_11.length; i++){
	         if(!frm.doc.table_11[i]['total']){
	            frm.doc.table_11[i]['total'] = 0
	        }
	        total+=frm.doc.table_11[i]['total'];    
	    }
	    frm.set_value("total_hotel_bill",  total);
        refresh_field("total_hotel_bill");
	},
	total: function(frm, cdt, cdn) {
	    const d = locals[cdt][cdn];
	    var total = 0;
	    for(var i = 0; i < frm.doc.table_11.length; i++){
	        if(!frm.doc.table_11[i]['total']){
	            frm.doc.table_11[i]['total'] = 0
	        }
	        total+=frm.doc.table_11[i]['total'];    
	    }
	    frm.set_value("total_hotel_bill",  total);
        refresh_field("total_hotel_bill");
	}
});

frappe.ui.form.on('Travel Data Table', {
	table_5_remove: function(frm, cdt, cdn) {
	    const d = locals[cdt][cdn];
	    var total = 0;
	    for(var i = 0; i < frm.doc.table_5.length; i++){
	         if(!frm.doc.table_5[i]['ticket_amt']){
	            frm.doc.table_5[i]['ticket_amt'] = 0
	        }
	        total+=frm.doc.table_5[i]['ticket_amt'];    
	    }
	    frm.set_value("total1",  total);
        refresh_field("total1");
	},
	ticket_amt: function(frm, cdt, cdn) {
	    const d = locals[cdt][cdn];
	    var total = 0;
	    for(var i = 0; i < frm.doc.table_5.length; i++){
	        if(!frm.doc.table_5[i]['ticket_amt']){
	            frm.doc.table_5[i]['ticket_amt'] = 0
	        }
	        total+=frm.doc.table_5[i]['ticket_amt'];    
	    }
	    frm.set_value("total1",  total);
        refresh_field("total1");
	}
});

frappe.ui.form.on('Local Travel Table', {
	table_8_remove: function(frm, cdt, cdn) {
	    const d = locals[cdt][cdn];
	    var total = 0;
	    for(var i = 0; i < frm.doc.table_8.length; i++){
	         if(!frm.doc.table_8[i]['ticket_amt']){
	            frm.doc.table_8[i]['ticket_amt'] = 0
	        }
	        total+=frm.doc.table_8[i]['ticket_amt'];    
	    }
	    frm.set_value("total2",  total);
        refresh_field("total2");
	},
	ticket_amt: function(frm, cdt, cdn) {
	    const d = locals[cdt][cdn];
	    var total = 0;
	    for(var i = 0; i < frm.doc.table_8.length; i++){
	        if(!frm.doc.table_8[i]['ticket_amt']){
	            frm.doc.table_8[i]['ticket_amt'] = 0
	        }
	        total+=frm.doc.table_8[i]['ticket_amt'];    
	    }
	    frm.set_value("total2",  total);
        refresh_field("total2");
	}
})

frappe.ui.form.on('Expense Table', {
	data_16_remove: function(frm, cdt, cdn) {
	    const d = locals[cdt][cdn];
	    var total = 0;
	    for(var i = 0; i < frm.doc.data_16.length; i++){
	         if(!frm.doc.data_16[i]['amount']){
	            frm.doc.data_16[i]['amount'] = 0
	        }
	        total+=frm.doc.data_16[i]['amount'];    
	    }
	    frm.set_value("currency_15",  total);
        refresh_field("currency_15");
	},
	amount: function(frm, cdt, cdn) {
	    const d = locals[cdt][cdn];
	    var total = 0;
	    for(var i = 0; i < frm.doc.data_16.length; i++){
	        if(!frm.doc.data_16[i]['amount']){
	            frm.doc.data_16[i]['amount'] = 0
	        }
	        total+=frm.doc.data_16[i]['amount'];    
	    }
	    frm.set_value("currency_15",  total);
        refresh_field("currency_15");
	}
})

frappe.ui.form.on('Miscellaneous Expense Table', {
	table_18_remove: function(frm, cdt, cdn) {
	    const d = locals[cdt][cdn];
	    var total = 0;
	    for(var i = 0; i < frm.doc.table_18.length; i++){
	         if(!frm.doc.table_18[i]['amount']){
	            frm.doc.table_18[i]['amount'] = 0
	        }
	        total+=frm.doc.table_18[i]['amount'];    
	    }
	    frm.set_value("total_amount",  total);
        refresh_field("total_amount");
	},
	amount: function(frm, cdt, cdn) {
	    const d = locals[cdt][cdn];
	    var total = 0;
	    for(var i = 0; i < frm.doc.table_18.length; i++){
	        if(!frm.doc.table_18[i]['amount']){
	            frm.doc.table_18[i]['amount'] = 0
	        }
	        total+=frm.doc.table_18[i]['amount'];    
	    }
	    frm.set_value("total_amount",  total);
        refresh_field("total_amount");
	}
})
