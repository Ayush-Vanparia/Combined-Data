import frappe

@frappe.whitelist()
def get_purchase_orders(start_date, end_date):
    return frappe.db.sql("""
        SELECT name, supplier, supplier_name, transaction_date, schedule_date, company, buying_price_list, price_list_currency, total qty, total
        FROM `tabPurchase Order`
        WHERE transaction_date BETWEEN %s AND %s
    """, (start_date, end_date), as_dict=True)

@frappe.whitelist()
def get_sales_orders(start_date, end_date):
    return frappe.db.sql("""
        SELECT name, customer, customer_name, transaction_date, delivery_date, company, currency, selling_price_list, total qty, total
        FROM `tabSales Order`
        WHERE transaction_date BETWEEN %s AND %s
    """, (start_date, end_date), as_dict=True)


# 'name', 'supplier', 'supplier_name', 'transaction_date', 'schedule_date', 'company', 'buying_price_list', 'price_list_currency', 'set_from_warehouse', 'total_qty']