import styled from 'styled-components';
import { Card } from 'antd';
import { DefaultBackgroundImage } from '../../assets';

export const ProfileCardStyle = styled(Card)`
  height: 100%;
  cursor: pointer;
  min-height: 300px !important;
  .ant-card-body {
    padding: 0;
    height: 100%;
  }
`;

export const CardCoverStyle = styled.div`
  background: url(${DefaultBackgroundImage});
  background-repeat: no-repeat;
  height: 93px;
  background-size: cover;
  border-radius: 8px 8px 0 0;
`;
