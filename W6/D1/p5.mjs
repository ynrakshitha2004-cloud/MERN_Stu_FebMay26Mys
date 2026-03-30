// ES module exports
// Named export for a shared constant
export const taxRate = 0.18;

// Named export for reusable function
export function calculateTotal(subtotal) {
    return subtotal + subtotal * taxRate;
}
// Default export: main feature of module
export default function createInvoiceLabel(invoiceNumber) {
    return "Invoice: " + invoiceNumber;
}