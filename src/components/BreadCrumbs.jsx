import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import menuList from "../constants/menu-list.json";
import { boldTitleFont } from "../style/theme";

export default function BreadCrumbs() {
  // TODO: linkList는 hook으로 꼭 빼기
  // TODO: example) <BreadCrumbs linkList={linkList} />
  const [linkList, setLinkList] = useState([]);

  const { pathname } = useLocation();
  useEffect(() => {
    try {
      const pathList = pathname
        .split("/")
        .filter((e) => e)
        .map((path) => ({ path }));
      if (pathList.length === 0) {
        setLinkList([]);
        return;
      }

      for (const menu of menuList) {
        if (menu.path === pathList[0].path) {
          pathList[0].name = menu.name;

          if (menu.subMenuList == null || pathList.length < 2) {
            break;
          }

          for (const sub of menu.subMenuList) {
            if (sub.path === pathList[1].path) {
              pathList[1].name = sub.name;
            }
          }
        }
      }

      setLinkList(pathList);
    } catch (error) {
      console.error(error);
      setLinkList([]);
    }
  }, [pathname]);

  return (
    <>
      {linkList.length > 0 && (
        <div
          css={css`
            ${boldTitleFont}
            text-align: start;
            padding: 0 30px;
            font-size: 20px;
          `}
        >
          {linkList.map((link, index) => (
            <span key={`breadcrumbs-${link.name}-${link.path}`}>{`${link.name || link.path}${
              index === linkList.length - 1 ? "" : " ▶︎ "
            }`}</span>
          ))}
        </div>
      )}
    </>
  );
}
