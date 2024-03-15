import { useEffect, useRef } from 'react';

const useRenderCount = () => {
  const renderCount = useRef(0);

  useEffect(() => {
        renderCount.current++;
        ('HELLLLLLLLLL')
    
   
  });

  return renderCount.current;
};

export default useRenderCount;