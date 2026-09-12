export interface BillingRecord {
  id: string;
  patientName: string;
  invoiceNumber: string;
  amount: number;
  status: "Paid" | "Pending" | "Overdue";
  date: string;
}

export interface PaymentRecord {
  id: string;
  patientName: string;
  method: "Card" | "Cash" | "Insurance" | "Bank Transfer";
  amount: number;
  date: string;
  status: "Approved" | "Pending";
}
