import React from 'react';
import dayjs from 'dayjs';
import { GraphType } from '../../types';
import ru from 'dayjs/locale/ru';

interface Props {
  graph: GraphType[];
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

      {graph.map((itemI, index) => (
        <td key={index} className="col">
          0
        </td>
      ))}
    </>
  );
};

export default GraphDay;
