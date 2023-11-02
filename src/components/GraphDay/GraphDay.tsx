import React from 'react';
import dayjs from 'dayjs';
import { TooltipContentType } from '../../types';
import ru from 'dayjs/locale/ru';
import { SET_CLASS } from '../../constans';

interface Props {
  graph: (TooltipContentType | string)[];
  index: number;
}

const GraphDay: React.FC<Props> = ({ graph, index }) => {
  return (
    <>
      <td style={{ fill: '#fff' }} className="row">
        {dayjs()
          .locale(ru)
          .day(index + 1)
          .format('dd')}
      </td>

      {graph.map((item, index) => (
        <td key={index} className={`col ${SET_CLASS(typeof item === 'object' ? item.contributions : 0)}`}></td>
      ))}
    </>
  );
};

export default GraphDay;
