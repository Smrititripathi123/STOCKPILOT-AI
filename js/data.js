/**
 * StockPilot AI - Demo Seed Data
 *
 * Edit this file when you want to change the initial demo products, users,
 * customers, suppliers, warehouses, or notifications.
 */

function createSeedData() {
  return {
    users: [
      { id: 1, name: 'Admin', email: 'admin@inventory.local', password: 'Admin@123', role: 'Admin' },
      { id: 2, name: 'Manager', email: 'manager@inventory.local', password: 'Manager@123', role: 'Manager' },
      { id: 3, name: 'Sales Staff', email: 'sales@inventory.local', password: 'Sales@123', role: 'Sales Staff' }
    ],
    products: [
      { id: 1, name: 'Wireless Mouse', sku: 'WM-001', category: 'Electronics', brand: 'LogiTech', purchase: 500, sell: 999, stock: 42, min: 10 },
      { id: 2, name: 'Mechanical Keyboard', sku: 'KB-001', category: 'Electronics', brand: 'LogiTech', purchase: 700, sell: 1299, stock: 35, min: 10 },
      { id: 3, name: 'USB-C Cable', sku: 'UC-001', category: 'Accessories', brand: 'Anker', purchase: 250, sell: 499, stock: 60, min: 15 },
      { id: 4, name: 'Premium Notebook', sku: 'NB-001', category: 'Office Supplies', brand: 'Classmate', purchase: 80, sell: 150, stock: 20, min: 10 },
      { id: 5, name: 'Ergonomic Office Chair', sku: 'OC-001', category: 'Furniture', brand: 'FeatherLite', purchase: 6000, sell: 8500, stock: 6, min: 8 },
      { id: 6, name: 'Webcam HD', sku: 'WC-001', category: 'Electronics', brand: 'LogiTech', purchase: 1800, sell: 2799, stock: 18, min: 8 }
    ],
    sales: [],
    purchases: [],
    transactions: [],
    audit: [],
    customers: [
      { id: 1, name: 'Walk-in Customer', phone: '-' },
      { id: 2, name: 'ABC Pvt Ltd', phone: '9876543210' },
      { id: 3, name: 'Chandigarh Tech Club', phone: '9811111111' }
    ],
    suppliers: [
      { id: 1, name: 'Tech Supplies India', phone: '9876500000' },
      { id: 2, name: 'Office World', phone: '9876511111' },
      { id: 3, name: 'Digital Mart', phone: '9876522222' }
    ],
    warehouses: [
      { id: 1, name: 'Main Warehouse', location: 'Chandigarh' },
      { id: 2, name: 'Campus Store', location: 'Mohali' }
    ],
    notifications: [
      { id: 1, type: 'warning', text: 'Ergonomic Office Chair is below minimum stock.', time: Date.now() },
      { id: 2, type: 'info', text: 'AI Copilot is ready to analyze your inventory.', time: Date.now() }
    ]
  };
}
