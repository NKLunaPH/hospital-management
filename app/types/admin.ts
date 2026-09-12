export interface StaffMember {
  id: string;
  name: string;
  role: string;
  department: string;
  shift: string;
  status: "Active" | "Leave" | "On Call";
}

export interface RoomBed {
  id: string;
  room: string;
  type: "ICU" | "General" | "Private" | "Observation";
  patient: string | null;
  status: "Available" | "Occupied" | "Cleaning";
}

export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  reorderLevel: number;
  supplier: string;
}
