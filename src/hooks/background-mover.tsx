import { useState, useEffect } from 'react';

const useBackgroundMover = (multiplier = 2) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      const { clientX: x, clientY: y } = e;
      const { innerWidth: width, innerHeight: height } = window;

      const xPos = 50 + (x / width - 0.5) * 100 * multiplier;
      const yPos = 50 + (y / height - 0.5) * 100 * multiplier;

      setPosition({ x: xPos, y: yPos });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [multiplier]);

  return position;
};

export default useBackgroundMover;