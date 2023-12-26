import styled from 'styled-components';

export const SlideStyles = styled.div`
  .ant-carousel {
    padding: 0 5px;
    .slick-slide {
      margin: 0 30px;
    }
    .slick-slider {
      .slick-arrow {
        border: 1px solid #d9d9d9;
        z-index: 99;
        background: #ffffff;
        color: rgba(0, 0, 0, 0.88);
        font-size: 20px;
        height: 32px;
        min-width: 32px;
        &:before {
          display: none;
        }
      }
      .slick-track {
        display: flex;
      }
      
    }
  }
`;
