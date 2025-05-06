import React from "react";
import Item from "./Item";

function Menu({ menus, onClickItem }) {
  function renderDivider(index) {
    return <hr key={index} className="dropdown-divider bg-light" />;
  }

  return (
    <ul className="navbar-nav ">
      {/*<li>*/}
      {/*    <div className="text-muted small fw-bold text-uppercase">Features</div>*/}
      {/*</li>*/}
      {menus.map((menu, i) => {
        if (!Object.keys(menu).length) return renderDivider(i);
        const key = menu.key || menu.route || "menu-" + i;
        return <Item key={key} menu={menu} onClick={onClickItem} />;
      })}
    </ul>
  );
}

export default Menu;
