import React, { memo } from "react";
import style from "./header.module.css";

export type PageType = "Top" | "User";

const Header = (props: { handleSelect: (page: PageType) => void }) => {
  return (
    <header className={style.header}>
      <p onClick={() => props.handleSelect("Top")}>Todo List</p>
      <p onClick={() => props.handleSelect("User")}>User List</p>
    </header>
  );
};

export default memo(Header);
