'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      // Adicionar ponto ao rastro
      const newTrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now() + Math.random()
      };
      
      setTrail(prev => [...prev.slice(-8), newTrailPoint]);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.classList.contains('hover-effect')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.classList.contains('hover-effect')) {
        setIsHovering(false);
      }
    };

    // Adicionar listeners
    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    // Limpar rastro periodicamente
    const clearTrail = setInterval(() => {
      setTrail(prev => prev.slice(-6));
    }, 80);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      clearInterval(clearTrail);
    };
  }, []);

  return (
    <>
      {/* Cursor principal */}
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''}`}
        style={{
          left: cursorPosition.x - 10,
          top: cursorPosition.y - 10,
        }}
      />

      {/* Rastro de bolinhas */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="custom-cursor-trail"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            opacity: (index + 1) / trail.length * 0.7,
            transform: `scale(${(index + 1) / trail.length})`,
          }}
        />
      ))}
    </>
  );
}