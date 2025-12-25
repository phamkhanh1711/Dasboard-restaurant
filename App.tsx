
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import Column from './components/Column';
import { Order, OrderStatus, AreaType } from './types';
import { INITIAL_ORDERS } from './constants';

const App: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);
  const [activeArea, setActiveArea] = useState<AreaType>(AreaType.ALL);
  const [lastUpdate, setLastUpdate] = useState<string>("Just now");

  // Handle order status transitions
  const handleStatusChange = useCallback((id: string, newStatus: OrderStatus) => {
    setOrders(prev => {
      if (newStatus === OrderStatus.SERVED) {
        return prev.filter(o => o.id !== id);
      }
      return prev.map(o => o.id === id ? { ...o, status: newStatus } : o);
    });
  }, []);

  // Handle item completion toggles (for Processing column)
  const handleItemToggle = useCallback((orderId: string, itemId: string) => {
    setOrders(prev => prev.map(o => {
      if (o.id === orderId) {
        return {
          ...o,
          items: o.items.map(item => 
            item.id === itemId ? { ...item, isCompleted: !item.isCompleted } : item
          )
        };
      }
      return o;
    }));
  }, []);

  // Filter orders by area
  const filteredOrders = orders.filter(o => 
    activeArea === AreaType.ALL || o.area === activeArea || o.area === AreaType.ALL
  );

  const getOrdersByStatus = (status: OrderStatus) => filteredOrders.filter(o => o.status === status);

  // Fake live update timer for "Just now"
  useEffect(() => {
    const timer = setInterval(() => {
      setLastUpdate("1s ago");
      setTimeout(() => setLastUpdate("Just now"), 500);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header 
        pendingCount={orders.filter(o => o.status === OrderStatus.NEW).length} 
        avgTime="08:30" 
      />
      
      <FilterBar 
        activeArea={activeArea} 
        onAreaChange={setActiveArea} 
        lastUpdate={lastUpdate} 
      />

      <main className="flex-1 overflow-x-auto overflow-y-hidden p-6 bg-background-dark">
        <div className="flex h-full gap-6 min-w-[1024px]">
          <Column 
            title="Đơn Mới" 
            status={OrderStatus.NEW}
            orders={getOrdersByStatus(OrderStatus.NEW)}
            badgeColor="bg-primary"
            onStatusChange={handleStatusChange}
          />
          
          <Column 
            title="Đang Chế Biến" 
            status={OrderStatus.PROCESSING}
            orders={getOrdersByStatus(OrderStatus.PROCESSING)}
            badgeColor="bg-accent-blue"
            isProcessing={true}
            onStatusChange={handleStatusChange}
            onItemToggle={handleItemToggle}
          />
          
          <Column 
            title="Sẵn sàng phục vụ" 
            status={OrderStatus.READY}
            orders={getOrdersByStatus(OrderStatus.READY)}
            badgeColor="bg-green-700"
            onStatusChange={handleStatusChange}
          />
        </div>
      </main>

      {/* Floating Action Button for smaller screens (mock action) */}
      <div className="absolute bottom-6 right-6 md:hidden">
        <button className="size-14 rounded-full bg-primary text-background-dark shadow-lg flex items-center justify-center hover:bg-primary-dark transition active:scale-95">
          <span className="material-symbols-outlined text-3xl">add</span>
        </button>
      </div>
    </div>
  );
};

export default App;
