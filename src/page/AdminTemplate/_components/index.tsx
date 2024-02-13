import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { DesktopOutlined, FileOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { actLogOut } from "../AuthPage/duck/action";

const { Header, Content, Footer, Sider } = Layout;
function getItem(label: any, key: any, icon: any, children: any) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Khóa Học", "1", <DesktopOutlined />, [
    getItem("Danh Sách", "2", <NavLink to="/admin/sanpham"></NavLink>),
    getItem("Thêm Khóa Học", "3", <NavLink to="/admin/them-sanpham"></NavLink>),
  ]),
  getItem("Người Dùng", "sub1", <UserOutlined />, [
    getItem("Danh Sách", "5", <NavLink to="/admin/nguoidung"></NavLink>),
    getItem(
      "Thêm Người Dùng",
      "6",
      <NavLink to="/admin/them-nguoidung"></NavLink>
    ),
  ]),
];

export default function NavbarAdmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
          className="alert alert-warning"
        >
          <div className="d-flex justify-content-between">
            <h1>ADMIN MANANAGE</h1>
            <div className="pr-5">
              <button
                className="btn btn-info"
                onClick={() => {
                  dispatch(actLogOut(navigate));
                }}
              >
                ĐĂNG XUẤT
              </button>
            </div>
          </div>
        </Header>

        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
