import { ChangeEvent, memo, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../components/atoms/Button';
import { Heading } from '../components/atoms/Heading';
import { TextInput } from '../components/atoms/TextInput';
import { useEnter } from '../hooks/useEnter';
import { variable } from '../variable';

export const Entrance = memo(() => {
  const [userName, setUserName] = useState('');
  const [isEnter, setIsEnter] = useState(true);
  const { enter } = useEnter();

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    e.target.value ? setIsEnter(false) : setIsEnter(true);
  };

  const onclickEnter = () => enter(userName);

  return (
    <_Wrapper>
      <_Container>
        <Heading text={'Games House'} />
        <TextInput
          value={userName}
          placeholder={'ユーザー名を入力してください'}
          onChange={onChangeUserName}
        />
        <Button label={'Join the game!'} isDisabled={isEnter} onclick={onclickEnter} />
      </_Container>
    </_Wrapper>
  );
});

const _Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const _Container = styled.div`
  width: 500px;
  padding: 20px 30px 30px;
  background: #fff;
  border: 1px solid ${variable.border};
  text-align: center;
  border-radius: 6px;
  box-shadow: 0 0 10px 2px rgba(160, 174, 192, 0.6);
  .textContainer {
    margin-bottom: 40px;
  }
`;
