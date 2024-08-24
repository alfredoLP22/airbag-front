import { Avatar, Popover } from "antd";
import Logout from "./Logout";
import useUserStore from "../../../store/useUserStore";
import { getInitials } from "../../pages/Dashboard/helpers/getInitials";

const Header = () => {
  const user = useUserStore((state) => state.user);

  return (
    <header className="flex justify-end px-8 bg-concrete-100 shadow-lg py-3">
      <div className="w-50 flex items-center gap-2">
        <Popover placement="bottom" content={<Logout />} arrow={true}>
          <Avatar className="bg-cod-gray-800 text-concrete-50 hover:ring-2 hover:ring-cod-gray-950 xs:w-20 w-11 h-11 cursor-pointer transition-all duration-300">
            <span className="font-bold">
              {user?.firstName && user?.lastName
                ? getInitials(user.firstName, user.lastName)
                : "?"}
            </span>
          </Avatar>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
