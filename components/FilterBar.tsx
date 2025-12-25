
import React from 'react';
import { AreaType } from '../types';

interface FilterBarProps {
  activeArea: AreaType;
  onAreaChange: (area: AreaType) => void;
  lastUpdate: string;
}

const FilterBar: React.FC<FilterBarProps> = ({ activeArea, onAreaChange, lastUpdate }) => {
  const areas = Object.values(AreaType);

  return (
    <div className="flex-none px-6 py-4 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between bg-background-dark border-b border-card-border">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide w-full md:w-auto">
        {areas.map((area) => (
          <button
            key={area}
            onClick={() => onAreaChange(area)}
            className={`flex h-9 whitespace-nowrap items-center justify-center px-4 rounded-lg text-sm font-bold transition ${
              activeArea === area
                ? 'bg-primary text-background-dark'
                : 'bg-card-border text-white hover:bg-[#3a4732]'
            }`}
          >
            {area}
          </button>
        ))}
      </div>
      
      <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
        <div className="flex items-center gap-2 bg-card-border rounded-lg p-1 px-3">
          <span className="material-symbols-outlined text-primary text-[20px]">volume_up</span>
          <span className="text-xs font-medium text-gray-300">Âm báo</span>
        </div>
        <div className="text-sm text-gray-400">
          Cập nhật: <span className="text-white font-mono">{lastUpdate}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
