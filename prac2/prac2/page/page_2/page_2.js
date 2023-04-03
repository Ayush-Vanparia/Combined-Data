
// =================================================Getting Purchase order Data============================================================
function getPurchaseOrders(startDate, endDate) {
    frappe.call({
        method: 'prac2.prac2.page.page_2.page_2.get_purchase_orders',
        args: {
            start_date: startDate,
            end_date: endDate
        },
        callback: function(data) {
            var rows = '';
            $.each(data.message, function(i, d) {
                rows += '<tr><td>' + d.name + '</td><td>' + d.supplier + '</td><td>' + d.supplier_name + '</td><td>' + d.transaction_date + '</td><td>' + d.shedule_date + '</td><td>' + d.company + '</td><td>' + d.buying_price_list + '</td><td>' + d.price_list_currency + '</td><td>' + d.total_qty + '</td><td>' + d.total + '</td></tr>';
            });
            $('#po-table tbody').html(rows);
        }
    });
}

// =================================================Getting Sales Order Data===============================================================
function getSalesOrders(startDate, endDate) {
    frappe.call({
        method: 'prac2.prac2.page.page_2.page_2.get_sales_orders',
        args: {
            start_date: startDate,
            end_date: endDate
        },
        callback: function(data) {
            var rows = '';
            $.each(data.message, function(i, d) {
                rows += '<tr><td>' + d.name + '</td><td>' + d.customer + '</td><td>' + d.customer_name + '</td><td>' + d.transaction_date + '</td><td>' + d.delivery_date + '</td><td>' + d.company + '</td><td>' + d.currency + '</td><td>' + d.selling_price_list + '</td><td>' + d.total_qty + '</td><td>' + d.total + '</td></tr>';
            });
            $('#so-table tbody').html(rows);
        }
    });
}


// =======================================================Frappe Page declaration============================================================

frappe.pages['page-2'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
        parent: wrapper,
        title: 'Data',
        single_column: true
    });
	
// ==========================================================filter html code================================================================
    var filters = $('<div class="form-group row main-row">\
		<div class=" col ">\
		<div class="row">\
		<div class="col from-col">\
					<label  class="control-label col text-center" id="from-date">From Date :</label>\
				</div>\
				<div class="col">\
					<input type="date"  class="form-control"  id="start-date">\
				</div>\
				</div>\
				</div>\
				<div class=" col ">\
				<div class="row">\
				<div class="col to-col" >\
					<label class="control-label col" id="to-date">To Date :</label>\
				</div>\
				<div class="col">\
					<input type="date"  class="form-control " id="end-date">\
				</div>\
			</div>\
			</div>\
	</div>\
    ');

	
// =======================================================Purchase Table =====================================================================

	var po = $('<h3 class="mt-5 text-center ">Purchase Order</h3>')
	
    var po_table = $('<table class="table table-bordered" id="po-table">\
        <thead>\
		<tr>\
				<th>Name</th>\
                <th>Supplier</th>\
				<th>Supplier Name</th>\
				<th>Transaction Date</th>\
				<th>Schedule Date</th>\
				<th>Company</th>\
				<th>Buying Price List</th>\
				<th>Price List Currency</th>\
				<th>Total QTY</th>\
                <th>Total</th>\
            </tr>\
        </thead>\
        <tbody>\
        </tbody>\
    </table>');
// ================================================================Sales Table==============================================================

var so = $('<h3 class="mt-5 text-center">Sales Order</h3>')
var so_table = $('<table class="table table-bordered" id="so-table">\
<thead>\
		<tr>\
				<th>Name</th>\
                <th>Customer</th>\
				<th>Customer Name</th>\
				<th>Transaction Date</th>\
				<th>Delivery Date</th>\
				<th>Company</th>\
				<th>Currency</th>\
				<th> Selling Price List </th>\
				<th>Total QTY</th>\
                <th>Total</th>\
				</tr>\
        </thead>\
        <tbody>\
        </tbody>\
		</table>'
		);
		
		
// ===================================================Adding tables to page================================================================
		
		
		page.main.append(filters, po, po_table, so, so_table);
		
//======================================================= Filtering Dates==================================================================
	
	// Update data when date inputs change
	$('#start-date, #end-date').on('change', function() {
			var startDate = $('#start-date').val();
			var endDate = $('#end-date').val();
			getPurchaseOrders(startDate, endDate);
			getSalesOrders(startDate, endDate);
		});
		
		wrapper.page.set_primary_action('Print', function() {
			window.print();
			
		});


	    // $('.page-actions').hide();
		// $('.page-title').remove();

	};
	
	//   // Fetch data on page load with default dates
	//   var startDate = moment().subtract(7, 'days').format('YYYY-MM-DD');
	//   var endDate = moment().format('YYYY-MM-DD');
	//   getPurchaseOrders(startDate, endDate);
	//   getSalesOrders(startDate, endDate);
	// $('#print-button').click(function() {
				//     printTable();
				// });
				
				// $('#filter-button').click(function() {
//     var startDate = $('#start-date').val();
//     var endDate = $('#end-date').val();
//     getPurchaseOrders(startDate, endDate);
// 	getSalesOrders(startDate, endDate)
// });
// <div class="form-group">\
// <button class="btn btn-primary" id="filter-button">Filter</button>\
// // </div>\

// <input type="text" placeholder = "From Date" onfocus="(this.type= \'date\')" class="form-control col-lg-6" id="start-date">\
// <input type="text" placeholder = "To Date"  onfocus="(this.type=\'date\')" class="form-control col-lg-6" id="end-date">\
// <p class="col-lg-1></p>\