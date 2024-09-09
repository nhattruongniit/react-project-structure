import { Switch } from 'antd';

// context
function HeaderBar() {
  return (
    <div className="relative flex items-center h-full w-full justify-between">
      <div className="flex flex-grow items-center"></div>

      <div className="flex items-center">
        <Switch checkedChildren="🌛" unCheckedChildren="🔆" className="mr-4" />
        <div className="flex px-0 py-2 text-sm text-white transition-all ease-nav-brand flex-row items-center cursor-pointer  ml-auto">
          <span className="sm:inline text-ellipsis">truong.nn</span>
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
