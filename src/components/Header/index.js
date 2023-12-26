import { AcademyLogo } from 'assets';
import { Select } from 'antd';
import {
  ROUTE_CONCEPT,
  ROUTE_FACULTY,
  ROUTE_HOME,
  ROUTE_INSTITUTION,
  ROUTE_VENUE,
} from 'constants/routes';
import { useLocation } from 'react-router-dom';

const Menus = [
  {
    name: 'Home',
    path: ROUTE_HOME,
  },
  {
    name: 'Faculty',
    path: ROUTE_FACULTY,
  },
  {
    name: 'Institution',
    path: ROUTE_INSTITUTION,
  },
  {
    name: 'Venue',
    path: ROUTE_VENUE,
  },
  {
    name: 'Concept',
    path: ROUTE_CONCEPT,
  },
];
const Header = () => {
  const handleChange = () => {};
  const { pathname } = useLocation();
  return (
    <header className="flex justify-between items-center">
      <img
        className="max-w-full h-[55px]"
        src={AcademyLogo}
        alt="academy logo"
      />
      <div>
        <ul className="p-0 flex justify-between items-center list-none">
          {Menus.map((item) => (
            <li
              className={`p-5 mx-2 text-xl hover:bg-[#eeeeee] cursor-pointer ${
                pathname === item.path && 'bg-[#eeeeee]'
              }`}
            >
              <a className="no-underline text-[#000000DD]" href={item.path}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex">
        <Select
          size="large"
          defaultValue="All"
          onChange={handleChange}
          style={{ width: 200 }}
          options={[]}
        />
      </div>
    </header>
  );
};

export default Header;
