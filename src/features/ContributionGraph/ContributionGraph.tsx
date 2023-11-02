import React, { useEffect, useState } from 'react';
import './ContributionGraph.css';
import dayjs from 'dayjs';
import { MONTHS } from '../../constans';
import { GraphType } from '../../types';
import GraphDay from '../../components/GraphDay/GraphDay';

const startDate = dayjs().subtract(50, 'weeks');

const ContributionGraph = () => {
  const [graph, setGraph] = useState<GraphType[][]>(new Array(7).fill(0).map(() => new Array(51).fill(0)));

  useEffect(() => {
    let currentDatePointer = startDate.clone();
    const copy = [...graph];

    for (let week = 0; week < 51; week++) {
      for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
        copy[currentDatePointer.subtract(1, 'day').day()][week] = {
          month: currentDatePointer.month(),
          data: currentDatePointer.format('YYYY/MM/DD'),
        };

        currentDatePointer = currentDatePointer.add(1, 'day');
      }
    }

    setGraph(copy);
  }, []);

  return (
    <div className="section_calendar">
      <div className="calendar">
        <table>
          <thead>
            <tr>
              {MONTHS.map((month, index) => (
                <td key={index}>{month}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {graph.map((item, index) => (
              <tr key={index}>
                <GraphDay graph={item} index={index} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContributionGraph;
