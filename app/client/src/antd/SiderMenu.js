import React from "react";
import { Layout, Icon,Menu } from "antd";


import { Link } from "react-router-dom";
import styled from "styled-components";
import 'rc-drawer-menu/assets/index.css'
import DrawerMenu from 'rc-drawer-menu'
const { Sider } = Layout;
const { SubMenu } = Menu;

const DivLogo = styled.div`
  height: 64px;
  position: relative;
  line-height: 64px;
  padding-left: (@menu-collapsed-width - 32px) / 2;
  transition: all 0.3s;
  background: #002140;
  overflow: hidden;
  img {
    display: inline-block;
    vertical-align: middle;
    height: 32px;
  }
  h1 {
    color: white;
    display: inline-block;
    vertical-align: middle;
    font-size: 20px;
    margin: 0 0 0 12px;
    font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
    font-weight: 600;
  }
`;

const StyledSider = styled(Sider)`
  min-height: 100vh;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  position: relative;
  z-index: 10;
`;

// Allow menu.js config icon as string or ReactNode
//   icon: 'setting',
//   icon: 'http://demo.com/icon.png',
//   icon: <Icon type="setting" />,
const getIcon = icon => {
    if (typeof icon === "string" && icon.indexOf("http") === 0) {
        return <img src={icon} alt="icon" className="icon" />;
    }
    if (typeof icon === "string") {
        return <Icon type={icon} />;
    }
    return icon;
};

const SiderMenu = ({
                              collapsed,
                              onCollapse,
                              isMobile,
                              location,
                              menuData
                          }) => {
    const conversionPath = path => {
        if (path && path.indexOf("http") === 0) {
            return path;
        } else {
            return `/${path || ""}`.replace(/\/+/g, "/");
        }
    };

    /**
     *
     * Judge whether it is http link.return a or Link
     * @memberof SiderMenu
     */
    const getMenuItemPath = item => {
        const itemPath = conversionPath(item.path);
        const icon = getIcon(item.icon);
        const { name } = item;
        // Is it a http link
        if (/^https?:\/\//.test(itemPath)) {
            return (
                <a href={itemPath}>
                    {icon}
                    <span>{name}</span>
                </a>
            );
        }
        return (
            <Link
                to={itemPath}
                replace={itemPath === location.pathname}
                onClick={
                    isMobile
                        ? () => {
                            onCollapse(true);
                        }
                        : undefined
                }
            >
                {icon}
                <span>{name}</span>
            </Link>
        );
    };

    /**
     * get SubMenu or Item
     */
    const getSubMenuOrItem = item => {
        if (item.children && item.children.some(child => child.name)) {
            const childrenItems = getNavMenuItems(item.children);
            // Do not show SubMenu if there is no childeren ITEM
            if (childrenItems && childrenItems.length > 0) {
                return (
                    <SubMenu
                        title={
                            item.icon ? (
                                <span>
                  {getIcon(item.icon)}
                                    <span>{item.name}</span>
                </span>
                            ) : (
                                item.name
                            )
                        }
                        key={item.path}
                    >
                        {childrenItems}
                    </SubMenu>
                );
            }
            return null;
        } else {
            return <Menu.Item key={item.path}>{getMenuItemPath(item)}</Menu.Item>;
        }
    };

    const getNavMenuItems = menusData => {
        if (!menusData) {
            return [];
        }
        return menusData
            .filter(item => item.name && !item.hideInMenu)
            .map(item => {
                // make dom
                const ItemDom = getSubMenuOrItem(item);
                return ItemDom;
            })
            .filter(item => item);
    };

    return (
        <StyledSider

            collapsible
            collapsed={collapsed}
            breakpoint="lg"
            onCollapse={onCollapse}
            width={256}
        >
            <DivLogo>
                <Link to="/">
                    <img
                        className="logo"
                        src="https://www.karsun-llc.com/wp-content/uploads/2016/09/Logo-cropped.png"
                        alt="logo"
                    />
                    <h1>PoC State</h1>
                </Link>
            </DivLogo>
            <Menu
                key="Menu"
                theme="dark"
                mode="inline"
                style={{ padding: "16px 0", width: "100%" }}
            >
                {getNavMenuItems(menuData)}
            </Menu>
        </StyledSider>
    );
};



export default props => {
  console.log(props.collapsed)
  return  (
        <SiderMenu {...props} />
    )
}