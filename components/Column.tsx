
import React from 'react';
import { Order, OrderStatus } from '../types';
import OrderCard from './OrderCard';

interface ColumnProps {
  title: string;
  status: OrderStatus;
  orders: Order[];
  badgeColor: string;
  onStatusChange: (id: string, newStatus: OrderStatus) => void;
  onItemToggle?: (orderId: string, itemId: string) => void;
  isProcessing?: boolean;
}

const Column: React.FC<ColumnProps> = ({ title, status, orders, badgeColor, onStatusChange, onItemToggle, isProcessing }) => {
  return (
    <div className="flex-1 flex flex-col min-w-[320px] bg-[#1a2316] rounded-xl border border-card-border h-full overflow-hidden">
      <div className="p-4 border-b border-card-border flex justify-between items-center bg-[#1f291a] rounded-t-xl shrink-0">
        <div className="flex items-center gap-2">
          <div className={`size-3 rounded-full ${badgeColor} ${isProcessing ? 'animate-pulse' : ''}`}></div>
          <h3 className="text-white text-lg font-bold">{title}</h3>
          <span className={`px-2 py-0.5 rounded text-sm font-bold ${status === OrderStatus.PROCESSING ? 'bg-accent-blue/20 text-blue-400' : status === OrderStatus.READY ? 'bg-green-900/40 text-green-400' : 'bg-primary/20 text-primary'}`}>
            {orders.length}
          </span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto custom-scrollbar p-3 flex flex-col gap-3">
        {orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-40 text-gray-600 opacity-50">
            <span className="material-symbols-outlined text-4xl mb-2">inventory_2</span>
            <p className="text-sm">Trống</p>
          </div>
        ) : (
          orders.map((order) => (
            <OrderCard 
              key={order.id} 
              order={order} 
              onStatusChange={onStatusChange} 
              onItemToggle={onItemToggle}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Column;
