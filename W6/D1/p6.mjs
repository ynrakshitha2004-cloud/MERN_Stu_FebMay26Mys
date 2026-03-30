// Import ES moduless
import createInvoiceLabel, { calculateTotal, taxRate } from "./p5.mjs";
const subtotal = 400;
const total = calculateTotal(subtotal);
const label = createInvoiceLabel("INV-2026-001");
console.log("Invoice Label:", label);
console.log("Tax rate:", taxRate);
console.log("Final total:", total);