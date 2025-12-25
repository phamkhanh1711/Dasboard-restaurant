
import React from 'react';
import { Order, OrderStatus, OrderItem } from '../types';

interface OrderCardProps {
  order: Order;
  onStatusChange: (id: string, newStatus: OrderStatus) => void;
  onItemToggle?: (orderId: string, itemId: string) => void;
}

const OrderCard: React.FC<OrderCardProps> = ({ order, onStatusChange, onItemToggle }) => {
  const isUrgent = parseInt(order.elapsedTime.split(':')[0]) > 8;

  if (order.status === OrderStatus.READY) {
    return (
      <div className="flex items-stretch justify-between gap-4 rounded-lg bg-card-dark p-4 border border-green-900/30 shadow-md">
        <div className="flex flex-col justify-between flex-1">
          <div>
            <div className="flex justify-between">
              <p className="text-white text-lg font-bold">{order.table}</p>
              <span className="text-green-500 text-[10px] font-bold border border-green-900 bg-green-900/20 px-1.5 py-0.5 rounded">DONE</span>
            </div>
            <p className="text-gray-500 text-xs">{order.orderNumber}</p>
            <div className="mt-2 space-y-1">
              {order.items.map((item) => (
                <p key={item.id} className="text-gray-300 text-sm">
                  {item.quantity}x {item.name}
                </p>
              ))}
            </div>
          </div>
          <button 
            onClick={() => onStatusChange(order.id, OrderStatus.SERVED)}
            className="mt-3 py-2 px-3 rounded bg-[#2e3928] hover:bg-[#3a4732] text-white text-xs font-bold flex items-center justify-center gap-1 transition"
          >
            <span className="material-symbols-outlined text-[16px]">room_service</span>
            {order.table === 'Mang Về' ? 'Đã giao' : 'Đã phục vụ'}
          </button>
        </div>
        {order.imageUrl && (
          <div 
            className="w-20 bg-center bg-no-repeat bg-cover rounded-lg shrink-0 opacity-80" 
            style={{ backgroundImage: `url("${order.imageUrl}")` }}
          ></div>
        )}
      </div>
    );
  }

  if (order.status === OrderStatus.PROCESSING) {
    const completedItems = order.items.filter(i => i.isCompleted).length;
    const progressPercent = (completedItems / order.items.length) * 100;

    return (
      <div className="flex flex-col gap-3 rounded-lg bg-card-dark p-4 border border-l-4 border-accent-blue shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-700">
          <div className="h-full bg-accent-blue transition-all duration-300" style={{ width: `${progressPercent}%` }}></div>
        </div>
        <div className="flex justify-between items-start pt-2">
          <div>
            <h4 className="text-white text-xl font-bold">{order.table}</h4>
            <p className="text-gray-400 text-xs mt-1">{order.customerType} • {order.orderNumber}</p>
          </div>
          <div className="flex items-center gap-1 text-white font-mono font-bold bg-card-border px-2 py-1 rounded border border-gray-600">
            <span className="material-symbols-outlined text-[16px]">timelapse</span>
            {order.elapsedTime}
          </div>
        </div>
        
        <div className="flex flex-col gap-2 mt-1">
          {order.items.map((item) => (
            <label 
              key={item.id} 
              className={`flex items-center gap-3 p-2 rounded cursor-pointer transition ${item.isCompleted ? 'bg-[#253020] opacity-60' : 'bg-[#253020] hover:bg-[#2e3928]'}`}
            >
              <input 
                type="checkbox" 
                checked={item.isCompleted}
                onChange={() => onItemToggle?.(order.id, item.id)}
                className="size-5 rounded border-gray-600 bg-transparent text-primary focus:ring-primary focus:ring-offset-gray-900"
              />
              <span className={`text-sm ${item.isCompleted ? 'text-gray-400 line-through' : 'text-white font-medium'}`}>
                {item.quantity}x {item.name}
              </span>
            </label>
          ))}
        </div>

        <div className="flex gap-2 mt-2">
          <button className="flex-1 py-2 rounded-lg border border-card-border text-gray-300 font-medium text-sm hover:bg-[#2e3928] transition">
            Báo sự cố
          </button>
          <button 
            onClick={() => onStatusChange(order.id, OrderStatus.READY)}
            className="flex-1 py-2 rounded-lg bg-accent-blue text-white font-bold text-sm hover:bg-blue-500 transition shadow-[0_0_15px_rgba(37,99,235,0.3)]"
          >
            Hoàn tất
          </button>
        </div>
      </div>
    );
  }

  // DEFAULT: NEW STATUS
  return (
    <div className={`flex flex-col gap-3 rounded-lg bg-card-dark p-4 border-l-4 shadow-lg hover:bg-[#253020] transition-colors group ${isUrgent ? 'border-accent-red' : 'border-primary'}`}>
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-white text-xl font-bold">{order.table}</h4>
          <p className="text-gray-400 text-xs mt-1">{order.customerType} • {order.orderNumber}</p>
        </div>
        <div className={`flex items-center gap-1 font-mono font-bold px-2 py-1 rounded ${isUrgent ? 'text-accent-red bg-accent-red/10' : 'text-primary bg-primary/10'}`}>
          <span className="material-symbols-outlined text-[16px]">timer</span>
          {order.elapsedTime}
        </div>
      </div>
      <div className="h-px bg-card-border w-full"></div>
      <ul className="flex flex-col gap-2 text-sm text-gray-200">
        {order.items.map((item) => (
          <li key={item.id} className="flex justify-between">
            <span><b className="text-primary">{item.quantity}x</b> {item.name}</span>
          </li>
        ))}
      </ul>
      {order.note && (
        <div className="mt-2 text-xs text-accent-red italic bg-accent-red/5 p-2 rounded">
          * Ghi chú: {order.note}
        </div>
      )}
      <button 
        onClick={() => onStatusChange(order.id, OrderStatus.PROCESSING)}
        className="mt-2 w-full py-2.5 rounded-lg bg-primary text-background-dark font-bold text-sm hover:bg-primary-dark transition flex items-center justify-center gap-2"
      >
        <span className="material-symbols-outlined text-[18px]">cooking</span>
        Nhận đơn
      </button>
    </div>
  );
};

export default OrderCard;
