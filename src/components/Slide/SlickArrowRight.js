import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const SlickArrowRight = ({
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
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
  >
    <RightOutlined />
  </Button>
);

export default SlickArrowRight;
