
export enum OrderStatus {
  NEW = 'NEW',
  PROCESSING = 'PROCESSING',
  READY = 'READY',
  SERVED = 'SERVED'
}

export enum AreaType {
  ALL = 'Tất cả khu vực',
  FLOOR1 = 'Tầng 1',
  FLOOR2 = 'Tầng 2 (VIP)',
  GARDEN = 'Sân vườn'
}

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  isCompleted: boolean;
}

export interface Order {
  id: string;
  orderNumber: string;
  table: string;
  customerType: string;
  status: OrderStatus;
  area: AreaType;
  timestamp: string;
  elapsedTime: string;
  items: OrderItem[];
  note?: string;
  imageUrl?: string;
  source?: string;
}
