import React from 'react';
import Tooltip from '../Tooltip/Tooltip';
import '../BoxesGraph/BoxesGraph.css';

const BoxesGraph = () => {
  return (
    <div className="boxes">
      <p className="text-left">Меньше</p>
      <Tooltip content={<p className="tooltip-title">No contributions</p>}>
        <div className="box box1"></div>
      </Tooltip>
      <Tooltip content={<p className="tooltip-title">1-9 contributions</p>}>
        <div className="box box2"></div>
      </Tooltip>
      <Tooltip content={<p className="tooltip-title">10-20 contributions</p>}>
        <div className="box box3"></div>
      </Tooltip>
      <Tooltip content={<p className="tooltip-title">20-30 contributions</p>}>
        <div className="box box4"></div>
      </Tooltip>
      <Tooltip content={<p className="tooltip-title">30+ contributions</p>}>
        <div className="box box5"></div>
      </Tooltip>
      <p className="text-right">Больше</p>
    </div>
  );
};

export default BoxesGraph;
