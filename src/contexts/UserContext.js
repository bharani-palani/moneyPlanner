import React, { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AccountPlanner from "../components/accountPlanner/AccountPlanner";
import Settings from "../components/configuration/settings";
import Intl18 from "../components/configuration/Intl18";
import Home from "../components/Home/Home";
import Workbook from "../components/workbook/wokbookIndex";
import QueryBuilder from "../components/queryBuilder/QueryBuilder";
import FileStorage from "../components/fileStorage/FileStorage";
import apiInstance from "../services/apiServices";

export const UserContext = createContext([{}, () => {}]);

function UserContextProvider(props) {
  const defUserData = {
    type: "public",
    theme: "",
    audioShown: false,
    videoShown: false,
    email: null,
    imageUrl: null,
    name: null,
    source: "self",
    userId: null,
    menu: [],
  };
  const defUserConfig = {
    webMenuType: "topMenu",
  };

  // note: to set default on page load ls is required
  const lsUserData =
    JSON.parse(localStorage.getItem("userData")) || defUserData;
  const lsUserConfig =
    JSON.parse(localStorage.getItem("userConfig")) || defUserConfig;

  const [userData, setUserData] = useState(lsUserData);
  const [userConfig, setUserConfig] = useState(lsUserConfig);
  const [openAppLoginModal, setOpenAppLoginModal] = useState(false);

  const linklist = [
    {
      page_id: "dashboard",
      hasAccessTo: ["public", "admin", "superAdmin"],
      href: "/",
      label: "Dashboard",
      component: Home,
    },
    {
      page_id: "workbook",
      hasAccessTo: ["admin", "superAdmin"],
      href: "/workbook",
      label: "Workbook",
      component: Workbook,
    },
    {
      page_id: "moneyPlanner",
      hasAccessTo: ["superAdmin"],
      href: "/moneyPlanner",
      label: "Money Planner",
      component: AccountPlanner,
    },
    {
      page_id: "settings",
      hasAccessTo: ["superAdmin"],
      href: "/settings",
      label: "Settings",
      component: Settings,
    },
    {
      ...(userConfig.isOwner === "1" && {
        page_id: "internationalization",
        hasAccessTo: ["superAdmin"],
        href: "/internationalization",
        label: "internationalization",
        component: Intl18,
      }),
    },
    {
      ...(userConfig.isOwner === "1" && {
        page_id: "queryBuilder",
        hasAccessTo: ["superAdmin"],
        href: "/queryBuilder",
        label: "queryBuilder",
        component: QueryBuilder,
      }),
    },
    {
      ...(userConfig.isOwner === "1" && {
        page_id: "fileStorage",
        hasAccessTo: ["superAdmin"],
        href: "/fileStorage",
        label: "fileStorage",
        component: FileStorage,
      }),
    },
  ];

  const addUserData = response => {
    setUserData(response);
  };

  const updateBulkUserData = response => {
    setUserData({ ...userData, ...response });
  };

  const updateUserData = (key, object) => {
    setUserData(prev => ({ ...prev, [key]: object }));
  };

  const removeUserData = keyArray => {
    const copiedUserData = { ...userData };
    keyArray.forEach(key => {
      delete copiedUserData[key];
    });
    setUserData(userData => ({ ...copiedUserData }));
  };

  useEffect(() => {
    if (userData.type) {
      const bMenu = linklist.filter(f =>
        f?.hasAccessTo?.includes(userData.type),
      );
      updateUserData("menu", bMenu);
    }
  }, [JSON.stringify(userData)]);

  useEffect(() => {
    if (userConfig?.webTheme) {
      setTimeout(() => {
        updateBulkUserData({ theme: userConfig.webTheme });
      }, 100);
    }
  }, [userConfig]);

  const getUserConfig = async appId => {
    const formdata = new FormData();
    formdata.append("appId", appId);
    return await apiInstance.post("/getUserConfig", formdata);
  };

  const renderToast = ({
    autoClose = 5000,
    type = "success",
    icon = "fa fa-check-circle",
    position = "top-right",
    message,
  }) =>
    toast[type](
      <div>
        <span>
          <i className={icon} />{" "}
          <span dangerouslySetInnerHTML={{ __html: message }} />
        </span>
      </div>,
      {
        autoClose,
        position,
      },
    );

  return (
    <UserContext.Provider
      value={{
        linklist,
        userData,
        addUserData,
        updateUserData,
        removeUserData,
        renderToast,
        openAppLoginModal,
        setOpenAppLoginModal,
        userConfig,
        setUserConfig,
        updateBulkUserData,
        defUserData,
        defUserConfig,
        getUserConfig,
      }}
    >
      <ToastContainer className='bniToaster' />
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
