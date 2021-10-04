import { isUrl } from "../utils";

export const menuData = [
    {
        name: "Add",
        icon: "plus",
        path: "Add",
        children: [
            {
                name: "Add user",
                path: "addUser"
            }
        ]
    },
    {
        name: "StateDemo",
        icon: "appstore",
        path: "state",
        children: [
            {
                name: "context store",
                path: "context"
            },
            {
                name: "refetchQueries",
                path: "refetchQueries"
            }
            ,
            {
                name: "cache",
                path: "cache"
            }

        ]
    },

];

function formatter(data, parentPath = "", parentAuthority) {
    return data.map(item => {
        let { path } = item;
        if (!isUrl(path)) {
            path = parentPath + item.path;
        }
        const result = {
            ...item,
            path,
            authority: item.authority || parentAuthority
        };
        if (item.children) {
            result.children = formatter(
                item.children,
                `${parentPath}${item.path}/`,
                item.authority
            );
        }
        return result;
    });
}

export const getMenuData = () => formatter(menuData);