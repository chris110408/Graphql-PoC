import React from "react";
import { Layout } from "antd";
import { ContainerQuery } from "react-container-query";
import classNames from "classnames";
import SiderMenu from "./SiderMenu";
import { getMenuData } from "./MenuData";
import GlobalHeader from './GlobalHeader'
import { enquireScreen } from "../utils/enquireScreen";

const { Header, Content, Footer } = Layout;

const query = {
    "screen-xs": {
        maxWidth: 575
    },
    "screen-sm": {
        minWidth: 576,
        maxWidth: 767
    },
    "screen-md": {
        minWidth: 768,
        maxWidth: 991
    },
    "screen-lg": {
        minWidth: 992,
        maxWidth: 1199
    },
    "screen-xl": {
        minWidth: 1200
    }
};


export const BasicLayout = ({
                                location,
                                children
                            }) => {



    const [isMobile,setIsMobile] = React.useState(true)
    const [collapsed,setCollapsed] = React.useState(true)
    React.useEffect(()=>{
        enquireScreen(mobile => {
            setIsMobile(mobile );
        });
    },)
    const toggle = () => {
        setCollapsed( !collapsed );
    };

   console.log(collapsed)
    return (
        <div>
            <ContainerQuery query={query}>
                {params => <div className={classNames(params)}>
                    <Layout>
                        <SiderMenu
                            menuData={getMenuData()}
                            collapsed={collapsed}
                            location={location}
                            isMobile={isMobile}
                            onCollapse={(collapsed)=>setCollapsed( collapsed )}
                        />

                        <Layout>

                            <Content style={{ margin: "24px 24px 0", height: "100%" }}>
                                {children}
                            </Content>
                            <Footer style={{ textAlign: "center" }}>
                                Create By Chris For Graphql State PoC
                            </Footer>
                        </Layout>
                    </Layout>
                </div>}
            </ContainerQuery>
        </div>
    );
};


export default BasicLayout