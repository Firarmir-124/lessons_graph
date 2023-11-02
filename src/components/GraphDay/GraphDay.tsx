import React from 'react';
import dayjs from 'dayjs';
import { TooltipContentType } from '../../types';
import ru from 'dayjs/locale/ru';
import { SET_CLASS } from '../../constans';
import Tooltip from '../Tooltip/Tooltip';

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
        <td key={index} className={`col ${SET_CLASS(typeof item === 'object' ? item.contributions : 0)}`}>
          <Tooltip
            content={
              <>
                {typeof item === 'object' ? (
                  <>
                    <p className="tooltip-title">{item.type} contributions</p>
                    <p className="tooltip-text">
                      {item.week}, {item.month} {item.day}, {item.year}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="tooltip-title">No contributions</p>
                    <p className="tooltip-text">
                      {dayjs(item).locale(ru).format('dddd')}, {dayjs(item).locale(ru).format('MMMM')},{' '}
                      {dayjs(item).date()}, {dayjs(item).year()}
                    </p>
                  </>
                )}
              </>
            }
          >
            <span>0</span>
          </Tooltip>
        </td>
      ))}
    </>
  );
};

export default GraphDay;
