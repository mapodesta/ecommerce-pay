import { useState, useEffect } from 'react';
import axios from 'axios';

const useAddress = (address) => {
  const [map, setMap] = useState({});
  const params = {
    access_key: process.env.MAP_ID,
    query: address,
    limit: 1,
  };

  useEffect(() => {
    const getAddress = async () => {
      const data = await axios.get('http://api.positionstack.com/v1/forward', {
        params,
      });

      setMap(data.data.data);
    };
    getAddress();
  }, [address]);

  return map;
};

export default useAddress;
