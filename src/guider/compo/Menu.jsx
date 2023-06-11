import { UserOutlined,LogoutOutlined } from '@ant-design/icons';
import { Menu} from '@mantine/core';
import Avatar from 'antd/es/avatar/avatar';

export default function Menupro() {
  return (
    <Menu width={200} shadow="md" >
      <Menu.Target>
      <Avatar style={{ backgroundColor:"sky", verticalAlign: 'middle' }} className='cursor-pointer' >
        J
      </Avatar>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
        icon= <UserOutlined /> >
        GuiderProfile
        </Menu.Item>

        <Menu.Item
        icon= <LogoutOutlined />>
       Sign-out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}