frappe.pages['page-1'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Page 1',
		single_column: true
	});
	
	

	// Create the Sales Order table
	var $sales_order_table = $('<table id="sales_order_table" class="table table-bordered"></table>').appendTo(page.body);
	$sales_order_table.append('<thead><tr><th>Sales Order</th><th>Customer</th></tr></thead><tbody></tbody>');

	
  
	// Fetch Sales Order data
	frappe.db.get_list('Sales Order', {
		
	  fields: ['name', 'customer']
	}).then(function(sales_orders) {
	  $.each(sales_orders, function(i, sales_order) {
		$sales_order_table.find('tbody').append('<tr><td>' + sales_order.name + '</td><td>' + sales_order.customer + '</td></tr>');
	  });
	});
	
	// Create the Purchase Order table
	var $purchase_order_table = $('<table id="purchase_order_table" class="table table-bordered"></table>').appendTo(page.body);
	$purchase_order_table.append('<thead><tr><th>Purchase Order</th><th>Supplier</th><th>Supplier Name</th><th>Transaction Date</th><th>Schedule Date</th><th>company</th><th>buying price list</th><th>price list currency</th><th>set from warehouse</th><th>total qty</th></tr></thead><tbody></tbody>');
  
	// Fetch Purchase Order data
	frappe.db.get_list('Purchase Order', {
	  fields: ['name', 'supplier', 'supplier_name', 'transaction_date', 'schedule_date', 'company', 'buying_price_list', 'price_list_currency', 'set_from_warehouse', 'total_qty']
	}).then(function(purchase_orders) {
	  $.each(purchase_orders, function(i, purchase_order) {
		$purchase_order_table.find('tbody').append('<tr><td>' + purchase_order.name + '</td><td>' + purchase_order.supplier + '</td><td>' + purchase_order.supplier_name + '</td><td>' + purchase_order.transaction_date + '</td><td>' + purchase_order.schedule_date + '</td><td>' + purchase_order.company + '</td><td>' + purchase_order.buying_price_list + '</td><td>' + purchase_order.price_list_currency + '</td><td>' + purchase_order.set_from_warehouse + '</td><td>' + purchase_order.total_qty + '</td></tr>');
	  });
	});
	  
	  
	 
	 
	 
	  wrapper.page.set_primary_action('Print', function() {
		  window.print();
		});
		
		
	

	// $(frappe. render_template ("page_1",{})) .appendTo(page. body)
}
