import { VFC, memo, useEffect, SetStateAction, Dispatch } from 'react';
import styled from 'styled-components';

type props = {
  context: string;
  setCanvas: Dispatch<SetStateAction<HTMLCanvasElement | null>>;
  // user: 線の色を変えるのに必要
};

let isDraw = false,
  offsetX = 0,
  offsetY = 0;

export const Canvas: VFC<props> = memo((props) => {
  const { context, setCanvas } = props;

  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const canvasContext = canvas.getContext('2d') as CanvasRenderingContext2D;

    canvasContext.lineCap = 'round';
    canvasContext.lineWidth = 4;
    canvasContext.strokeStyle = '#ff0000';

    canvas.addEventListener('mousedown', (e: MouseEvent) => {
      isDraw = true;
      offsetX = e.offsetX;
      offsetY = e.offsetY;
    });

    canvas.addEventListener('mousemove', (e: MouseEvent) => {
      if (!isDraw) return;

      const toX = e.offsetX;
      const toY = e.offsetY;
      drawLine(canvasContext, offsetX, offsetY, toX, toY);
      offsetX = toX;
      offsetY = toY;
    });

    canvas.addEventListener('mouseout', () => {
      isDraw = false;
      setCanvas(canvas);
    });

    canvas.addEventListener('mouseup', () => {
      isDraw = false;
      setCanvas(canvas);
    });

    const drawLine = (
      context: CanvasRenderingContext2D,
      startX: number,
      startY: number,
      endX: number,
      endY: number
    ) => {
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(endX, endY);
      context.stroke();
    };
  }, []);

  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const canvasContext = canvas.getContext('2d') as CanvasRenderingContext2D;

    if (context.length) {
      const img = new Image();
      img.src = context;
      img.onload = () => canvasContext.drawImage(img, 0, 0);
    }
  }, [context]);

  return <_Canvas id="canvas" width={750} height={500}></_Canvas>;
});

const _Canvas = styled.canvas`
  border: 3px solid #ccc;
  border-radius: 6px;
`;
