import React, { useEffect, useMemo, useState } from 'react';
import './ContributionGraph.css';
import dayjs from 'dayjs';
import { MONTH_NUMBER, MONTHS, RANGE_CHECK } from '../../constans';
import { DatesType, GraphDateResponse, GraphType, TooltipContentType } from '../../types';
import GraphDay from '../../components/GraphDay/GraphDay';
import ru from 'dayjs/locale/ru';

interface Props {
  dates: DatesType;
  loading: boolean;
}

const ContributionGraph: React.FC<Props> = ({ dates, loading }) => {
  const startDate = dayjs().subtract(50, 'weeks');
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

  const generateCollaborations = useMemo(() => {
    const dateListResponse = () => {
      const datesResponse: GraphDateResponse[] = [];
      const keys = Object.keys(dates) as (keyof GraphDateResponse)[];
      let type = 0;

      keys.forEach((item) => {
        const countDate = parseInt(dates[item] as never);

        if (RANGE_CHECK(10, countDate)) type = 1;
        else if (RANGE_CHECK(20, countDate)) type = 2;
        else if (RANGE_CHECK(30, countDate)) type = 3;
        else if (RANGE_CHECK(40, countDate)) type = 4;

        const obj: GraphDateResponse = {
          date: item,
          type,
          collaboration: dates[item],
        };

        datesResponse.push(obj);
      });

      return datesResponse;
    };

    const graphSortMonth = graph.map((item) =>
      item.sort((a, b) => MONTH_NUMBER.indexOf(a.month) - MONTH_NUMBER.indexOf(b.month)),
    );

    const graphMutation = graphSortMonth.map((item) => {
      const newResponseDate = dateListResponse().map((item) => dayjs(item.date).format('YYYY/MM/DD'));

      return item.map((item2) => {
        let obj: TooltipContentType | string = '';

        const type = dateListResponse().find((el) => dayjs(el.date).format('YYYY/MM/DD') === item2.data) || null;

        if (newResponseDate.includes(item2.data)) {
          if (type) {
            obj = {
              contributions: type.type,
              type: type.collaboration,
              week: dayjs(type.date).locale(ru).format('dddd'),
              month: dayjs(type.date).locale(ru).format('MMMM'),
              day: dayjs(type.date).date(),
              year: dayjs(type.date).year(),
              fullData: type.date,
            };
          }
        } else {
          obj = item2.data;
        }

        return obj;
      });
    });

    return (
      <>
        {graphMutation.map((itemWeek, indexWeek) => (
          <tr key={indexWeek}>
            <GraphDay graph={itemWeek} index={indexWeek} />
          </tr>
        ))}
      </>
    );
  }, [graph, dates]);

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
            {!loading ? (
              generateCollaborations
            ) : (
              <tr>
                <td>Загрузка...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContributionGraph;
