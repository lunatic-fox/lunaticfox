import { useState, useEffect } from 'react';

const useWindow = () => {
  const [win, setWin] = useState(null as Window | null);
  useEffect(() => {
    setWin(window);
  }, []);
  return win;
};

export default useWindow;
