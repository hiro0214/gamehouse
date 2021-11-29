import { VFC, memo, useEffect, useState } from 'react';
import { gameConfigType } from '../../../types/config';
import { socket } from '../../socket';

export const KowloonTactics: VFC = memo(() => {
  const [config, setConfig] = useState<gameConfigType | null>(null);

  useEffect(() => {
    socket.on('common:getCurrentConfig', (config: gameConfigType) => {
      setConfig(config);
      console.log('config', config);
    });

    socket.emit('common:getCurrentConfig');
  }, []);

  return <p>クーロンタクティクス</p>;
});
