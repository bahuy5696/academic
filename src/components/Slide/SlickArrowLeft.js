import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

const SlickArrowLeft = ({
  onClick,
  className,
  currentSlide,
  slideCount,
  ...props
}) => (
  <Button
    onClick={onClick}
    className={className}
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
  >
    <LeftOutlined />
  </Button>
);

export default SlickArrowLeft;
