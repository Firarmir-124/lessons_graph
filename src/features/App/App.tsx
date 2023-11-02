import React, { useState, useEffect, useCallback } from 'react';
import ContributionGraph from '../ContributionGraph/ContributionGraph';
import axiosApi from '../../axios';
import { DatesType } from '../../types';

const App = () => {
  const [dates, setDates] = useState<DatesType>({});
  const [loading, setLoading] = useState(true);

  const fetch = useCallback(async () => {
    try {
      const res = await axiosApi.get('');
      setDates(res.data);
    } catch (e) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetch().catch(console.error);
  }, [fetch]);

  return <ContributionGraph dates={dates} loading={loading} />;
};

export default App;
