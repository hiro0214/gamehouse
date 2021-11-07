import { ChangeEvent, memo, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Button } from '../components/atoms/Button';
import { Heading } from '../components/atoms/Heading';
import { TextInput } from '../components/atoms/TextInput';
import { socket } from '../socket';
import { variable } from '../variable';

export const Entrance = memo(() => {
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [isEnter, setIsEnter] = useState(true);

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    e.target.value ? setIsEnter(false) : setIsEnter(true);
  };

  const enter = () => {
    socket.emit('common:enter', userName);
    history.push('/lobby');
  };

  return (
    <Wrapper>
      <Container>
        <Heading text={'Games House'} />
        <TextInput
          value={userName}
          placeholder={'ユーザー名を入力してください'}
          onChange={onChangeUserName}
        />
        <Button label={'入室'} isDisabled={isEnter} onclick={enter} />
      </Container>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Container = styled.div`
  width: 500px;
  padding: 20px 30px 30px;
  background: #fff;
  border: 1px solid ${variable.border};
  text-align: center;
  border-radius: 6px;
  .textContainer {
    margin-bottom: 40px;
  }
`;
