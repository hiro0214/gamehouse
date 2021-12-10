import { VFC, memo } from 'react';
import styled from 'styled-components';

type props = {
  text: string;
  size?: string;
};

export const Heading: VFC<props> = memo((props) => {
  const { text, size } = props;
  return <_Heading className={size && `heading--${size}`}>{text}</_Heading>;
});

Heading.defaultProps = {
  size: '1',
};

const _Heading = styled.div`
  margin-bottom: 25px;
  font-weight: bold;
  text-align: center;
  &.heading--1 {
    font-size: 28px;
  }
  &.heading--2 {
    font-size: 24px;
  }
  &.heading--3 {
    font-size: 20px;
  }
  &.heading--4 {
    font-size: 18px;
  }
`;
