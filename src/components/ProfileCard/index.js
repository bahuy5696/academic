import { CardCoverStyle, ProfileCardStyle } from './styles';
import { Avatar, Tooltip } from 'antd';
import { ReadFilled, TrophyFilled, UserOutlined } from '@ant-design/icons';

const ProfileCard = ({
  photo,
  name,
  position,
  department,
  totalAwards,
  totalPublications,
}) => {
  return (
    <ProfileCardStyle>
      <CardCoverStyle />
      <div className="text-center relative">
        <Avatar
          className={`absolute top-[-60px] right-0 left-0 m-auto ${
            !photo && 'bg-gray-400'
          }`}
          size={120}
          src={photo}
          icon={<UserOutlined />}
        />
        <div className="pt-[65px]">
          <a
            href="#"
            className="text-[#3D5980] font-bold text-base hover:underline hover:text-[#3D5980]"
          >
            {name}
          </a>
        </div>
        {position && (
          <div
            className="mb-1 italic"
            dangerouslySetInnerHTML={{ __html: position }}
          ></div>
        )}
        <a
          className="font-normal text-base text-inherit hover:text-inherit hover:underline"
          href="#"
        >
          {department}
        </a>
        <div className="flex mt-1 justify-center gap-4">
          {totalPublications && (
            <Tooltip placement="leftTop" title="Total Publications">
              <div className="text-lg flex justify-center items-center">
                <span className="mr-1">{totalPublications}</span>
                <ReadFilled />
              </div>
            </Tooltip>
          )}
          {totalAwards && (
            <Tooltip placement="rightTop" title="Total Awards">
              <div className="text-lg flex justify-center items-center">
                <span className="mr-1">{totalAwards}</span>
                <TrophyFilled />
              </div>
            </Tooltip>
          )}
        </div>
      </div>
    </ProfileCardStyle>
  );
};
export default ProfileCard;
