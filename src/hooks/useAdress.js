import { useState, useEffect } from 'react';
import axios from 'axios';

const useAddress = (address) => {
  const [map, setMap] = useState({});
  const params = {
    access_key: '34a348af6fb9b074ae9a640a3dc6e319',
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
