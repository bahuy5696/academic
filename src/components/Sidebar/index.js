import { AutoComplete, Checkbox, Collapse } from 'antd';
import Divider from 'components/Divider';
import { useState } from 'react';

const { Panel } = Collapse;
const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const Sidebar = () => {
  const items = [
    {
      key: '1',
      label: 'This is panel header with arrow icon',
      children: <p>{text}</p>,
    },
  ];

  const [options, setOptions] = useState([]);

  const onChange = (key) => {
    console.log(key);
  };
  const onSelect = (data) => {
    console.log('onSelect', data);
  };
  const getPanelValue = (searchText) =>
    !searchText
      ? []
      : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  return (
    <div className="bg-[#D8D8D8] w-1/4 min-h-[100vh]">
      <div className="p-2 border-b-[1px]">
        <h4 className="text-lg font-extrabold m-[10px]">Faculty</h4>
        <AutoComplete
          className="px-[10px] [&_.ant-select-selection-search-input:text-red]"
          options={options}
          style={{ width: '100%', height: 45 }}
          onSelect={onSelect}
          onSearch={(text) => setOptions(getPanelValue(text))}
          placeholder="Type faculty name (e.g. David)"
        />
      </div>
      <Divider />
      <div className="p-2">
        <h6 className="m-[10px] text-sm font-extrabold">Filter</h6>
        <Collapse
          className="bg-white [&_.ant-collapse-content]:border-0"
          expandIconPosition="end"
          defaultActiveKey={['1']}
          onChange={onChange}
        >
          <Panel
            header={<p className="m-0 text-[1rem] font-normal">Verified</p>}
            key="1"
          >
            <Checkbox className="ml-4" onChange={onChange}>
              Verified
            </Checkbox>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};
export default Sidebar;
