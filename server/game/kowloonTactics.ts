import { serverSocket, socket } from '../server';
import { kowloonTacticsConfig } from '../../types/config';
import { User } from '../../types/user';
import { currentConfig, setCurrentConfig } from '../data';
import { kowloonTacticsData } from '../../types/game/kowloonTactics';
import { shuffle } from '../utility';

type judge = 'red' | 'blue' | 'draw';
type turn = 'red' | 'blue';

const
  eventName = 'kowloonTactics',
  judgeArray: judge[] = [];

let
  gameData: kowloonTacticsData = {} as kowloonTacticsData,
  turn: turn = 'red',
  redHand = 0,
  blueHand = 0;

export const kowloonTacticsConfigInit = () => {
  const initialConfig: kowloonTacticsConfig = {
    redPlayer: {
      id: '',
      name: '',
      icon: '',
      isAdmin: false
    },
    bluePlayer: {
      id: '',
      name: '',
      icon: '',
      isAdmin: false
    },
    redSupporter: [],
    blueSupporter: []
  }

  const random = Math.floor(Math.random() * 2);
  turn = random === 0 ? 'red': 'blue';

  setCurrentConfig(initialConfig)
}

export const kowloonTacticsDataInit = () => {
  const initialData: kowloonTacticsData = {
    redPlayer: {
      "hand": [1, 2, 3, 4, 5, 6, 7, 8, 9],
      "field": []
    },
    bluePlayer: {
      "hand": [1, 2, 3, 4, 5, 6, 7, 8, 9],
      "field": []
    }
  }

  shuffle(initialData.redPlayer.hand)
  shuffle(initialData.bluePlayer.hand)
  gameData = initialData
  judgeArray.length = 0;
}

const includeCheck = (user: User) => {
  const initial: User = {
    id: '',
    name: '',
    icon: '',
    isAdmin: false
  };

  if ((<kowloonTacticsConfig>currentConfig).redPlayer.id === user.id) {
    (<kowloonTacticsConfig>currentConfig).redPlayer = initial
  }
  else if ((<kowloonTacticsConfig>currentConfig).bluePlayer.id === user.id) {
    (<kowloonTacticsConfig>currentConfig).bluePlayer = initial
  }
  else if ((<kowloonTacticsConfig>currentConfig).redSupporter.some(v => v.id === user.id)) {
    const index = (<kowloonTacticsConfig>currentConfig).redSupporter.findIndex(({id}) => id === user.id);
    (<kowloonTacticsConfig>currentConfig).redSupporter.splice(index, 1)
  }
  else if ((<kowloonTacticsConfig>currentConfig).blueSupporter.some(v => v.id === user.id)) {
    const index = (<kowloonTacticsConfig>currentConfig).blueSupporter.findIndex(({id}) => id === user.id);
    (<kowloonTacticsConfig>currentConfig).blueSupporter.splice(index, 1)
  }
}

const reverseTurn = (turn : turn): turn => {
  return turn === 'red' ? 'blue' : 'red';
}

export const kowloonTactics = {
  init: () => {
    socket.on(`${eventName}:updateConfig`, () => {
      serverSocket.emit(`${eventName}:updateConfig`, currentConfig)
    })

    socket.on(`${eventName}:setRedPlayer`, (user: User) => {
      includeCheck(user);
      (<kowloonTacticsConfig>currentConfig).redPlayer = user
      serverSocket.emit(`${eventName}:updateConfig`, currentConfig)
    })

    socket.on(`${eventName}:setBluePlayer`, (user: User) => {
      includeCheck(user);
      (<kowloonTacticsConfig>currentConfig).bluePlayer = user
      serverSocket.emit(`${eventName}:updateConfig`, currentConfig)
    })

    socket.on(`${eventName}:setRedSupporter`, (user: User) => {
      includeCheck(user);
      (<kowloonTacticsConfig>currentConfig).redSupporter.push(user)
      serverSocket.emit(`${eventName}:updateConfig`, currentConfig)
    })

    socket.on(`${eventName}:setBlueSupporter`, (user: User) => {
      includeCheck(user);
      (<kowloonTacticsConfig>currentConfig).blueSupporter.push(user)
      serverSocket.emit(`${eventName}:updateConfig`, currentConfig)
    })

    socket.on(`${eventName}:getData`, () => {
      serverSocket.emit(`${eventName}:getData`, gameData)
    })

    socket.on(`${eventName}:getTurn`, () => {
      serverSocket.emit(`${eventName}:getTurn`, turn)
    })

    socket.on(`${eventName}:selectHand`, (req) => {
      const
        user = req[0],
        index = req[1];

      if ((<kowloonTacticsConfig>currentConfig).redPlayer.id === user.id) {
        const selectHand = gameData.redPlayer.hand.splice(index, 1)[0] as number;
        gameData.redPlayer.field.push(selectHand)
        redHand = selectHand
      }
      else if ((<kowloonTacticsConfig>currentConfig).bluePlayer.id === user.id) {
        const selectHand = gameData.bluePlayer.hand.splice(index, 1)[0] as number;
        gameData.bluePlayer.field.push(selectHand)
        blueHand = selectHand
      }

      if (redHand !== 0 && blueHand !== 0) {
        const judge: judge =
          redHand === 1 && blueHand === 9 ? 'red' :
          redHand === 9 && blueHand === 1 ? 'blue':
          redHand > blueHand ? 'red':
          redHand < blueHand ? 'blue':
          'draw';

        redHand = 0
        blueHand = 0
        judgeArray.push(judge)
        turn =
          judge === 'red' ? 'red' :
          judge === 'blue' ? 'blue':
          reverseTurn(turn);

        const isFinish = judgeArray.length === 9 && true;

        serverSocket.emit(`${eventName}:checkAnimate`)
        setTimeout(() => {
          serverSocket.emit(`${eventName}:getJudge`, [judgeArray, isFinish])
          serverSocket.emit(`${eventName}:getTurn`, turn)
        }, 4000)
      }
      else {
        turn = reverseTurn(turn)
        serverSocket.emit(`${eventName}:getTurn`, turn)
      }

      serverSocket.emit(`${eventName}:getData`, gameData)
    })
  }
}