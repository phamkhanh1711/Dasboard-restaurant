
import React from 'react';

interface HeaderProps {
  pendingCount: number;
  avgTime: string;
}

const Header: React.FC<HeaderProps> = ({ pendingCount, avgTime }) => {
  return (
    <header className="flex-none flex items-center justify-between whitespace-nowrap border-b border-solid border-card-border px-6 py-3 bg-[#131811] z-20">
      <div className="flex items-center gap-4 text-white">
        <div className="size-8 flex items-center justify-center bg-primary rounded text-background-dark">
          <span className="material-symbols-outlined font-bold">restaurant_menu</span>
        </div>
        <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">Bếp / Quản lý Đơn hàng</h2>
      </div>
      
      <div className="flex flex-1 justify-end gap-6 items-center">
        <div className="hidden lg:flex gap-6 mr-6 border-r border-card-border pr-6">
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">Đang chờ:</span>
            <span className="text-primary font-bold text-lg">{pendingCount}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">TB Chế biến:</span>
            <span className="text-white font-bold text-lg">{avgTime}</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button className="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-card-border hover:bg-[#3a4732] text-white transition-colors relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 size-2 bg-accent-red rounded-full ring-2 ring-card-border"></span>
          </button>
          <button className="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-card-border hover:bg-[#3a4732] text-white transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
        
        <div 
          className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-primary cursor-pointer" 
          style={{ backgroundImage: 'url("https://picsum.photos/100/100?random=chef")' }}
        ></div>
      </div>
    </header>
  );
};

export default Header;
