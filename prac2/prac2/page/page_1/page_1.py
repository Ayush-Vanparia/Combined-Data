import frappe
from frappe import _

def get_my_doctype_data():
  data = frappe.db.get_list('Purchase Order', fields=['title', 'supplier'])
  return data