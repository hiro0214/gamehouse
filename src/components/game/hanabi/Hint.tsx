import { VFC, memo } from 'react';
import styled from 'styled-components';
// import hintImg from '../../../images/img_hint.png';

type props = {
  hint: number;
};

export const Hint: VFC<props> = memo((props) => {
  const { hint } = props;
  return (
    <_Container>
      {[...Array(hint)].map((i) => (
        <_Hint key={i} />
      ))}
    </_Container>
  );
});

const _Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 50px);
  grid-template-rows: repeat(2, 50px);
  gap: 5px;

  margin-left: 30px;
  padding: 10px;
  background: #fff;
  border-radius: 8px;
`;

const _Hint = styled.div`
  background-image: url('/assets/images/img_hint.png');
  background-size: 100%;
  background-repeat: no-repeat;
`;

// background-image: url(${hintImg});
