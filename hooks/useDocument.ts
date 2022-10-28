import { useState, useEffect } from 'react';

const useDocument = () => {
  const [doc, setDoc] = useState(null as Document | null);
  useEffect(() => {
    setDoc(document);
  }, []);
  return doc;
};

export default useDocument;
