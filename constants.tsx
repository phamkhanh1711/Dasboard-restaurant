
import { Order, OrderStatus, AreaType } from './types';

export const INITIAL_ORDERS: Order[] = [
  {
    id: '1',
    orderNumber: '#DH-1023',
    table: 'Bàn 10',
    customerType: 'Khách lẻ',
    status: OrderStatus.NEW,
    area: AreaType.ALL,
    timestamp: '2024-05-20T10:00:00Z',
    elapsedTime: '08:45',
    note: 'Không hành tây phở bò',
    items: [
      { id: 'i1', name: 'Phở bò đặc biệt', quantity: 2, isCompleted: false },
      { id: 'i2', name: 'Trà đá', quantity: 1, isCompleted: false },
      { id: 'i3', name: 'Quẩy giòn', quantity: 1, isCompleted: false }
    ]
  },
  {
    id: '2',
    orderNumber: '#DH-1024',
    table: 'Bàn 05',
    customerType: 'VIP Tầng 2',
    status: OrderStatus.NEW,
    area: AreaType.FLOOR2,
    timestamp: '2024-05-20T10:30:00Z',
    elapsedTime: '01:20',
    items: [
      { id: 'i4', name: 'Lẩu thái hải sản', quantity: 1, isCompleted: false },
      { id: 'i5', name: 'Bia Tiger', quantity: 4, isCompleted: false }
    ]
  },
  {
    id: '3',
    orderNumber: '#DH-1025',
    table: 'Mang Về',
    customerType: 'GrabFood',
    status: OrderStatus.NEW,
    area: AreaType.ALL,
    timestamp: '2024-05-20T10:45:00Z',
    elapsedTime: '00:45',
    items: [
      { id: 'i6', name: 'Cơm tấm sườn bì', quantity: 1, isCompleted: false }
    ]
  },
  {
    id: '4',
    orderNumber: '#DH-1019',
    table: 'Bàn 03',
    customerType: 'Sân vườn',
    status: OrderStatus.PROCESSING,
    area: AreaType.GARDEN,
    timestamp: '2024-05-20T09:45:00Z',
    elapsedTime: '12:10',
    items: [
      { id: 'i7', name: 'Salad cá ngừ', quantity: 1, isCompleted: true },
      { id: 'i8', name: 'Khoai tây chiên', quantity: 1, isCompleted: true },
      { id: 'i9', name: 'Bò bít tết (Medium)', quantity: 1, isCompleted: false }
    ]
  },
  {
    id: '5',
    orderNumber: '#DH-1021',
    table: 'Bàn 08',
    customerType: 'Tầng 1',
    status: OrderStatus.PROCESSING,
    area: AreaType.FLOOR1,
    timestamp: '2024-05-20T10:15:00Z',
    elapsedTime: '05:30',
    items: [
      { id: 'i10', name: 'Nước cam ép', quantity: 2, isCompleted: false }
    ]
  },
  {
    id: '6',
    orderNumber: '#DH-1015',
    table: 'Bàn 12',
    customerType: 'Khách lẻ',
    status: OrderStatus.READY,
    area: AreaType.ALL,
    timestamp: '2024-05-20T09:30:00Z',
    elapsedTime: '22:15',
    imageUrl: 'https://picsum.photos/200/200?random=1',
    items: [
      { id: 'i11', name: 'Combo Gia Đình', quantity: 1, isCompleted: true }
    ]
  },
  {
    id: '7',
    orderNumber: '#DH-1018',
    table: 'Bàn 01',
    customerType: 'Khách lẻ',
    status: OrderStatus.READY,
    area: AreaType.FLOOR1,
    timestamp: '2024-05-20T09:40:00Z',
    elapsedTime: '15:20',
    imageUrl: 'https://picsum.photos/200/200?random=2',
    items: [
      { id: 'i12', name: 'Cafe Đen', quantity: 2, isCompleted: true }
    ]
  },
  {
    id: '8',
    orderNumber: '#DH-1012',
    table: 'Mang Về',
    customerType: 'Khách lẻ',
    status: OrderStatus.READY,
    area: AreaType.ALL,
    timestamp: '2024-05-20T09:50:00Z',
    elapsedTime: '10:10',
    imageUrl: 'https://picsum.photos/200/200?random=3',
    items: [
      { id: 'i13', name: 'Trà Sữa Trân Châu', quantity: 3, isCompleted: true }
    ]
  }
];
