import React from "react";
import Child from "./Child";
import classNames from "../../classNames";

const defaultIcon = "bi bi-journal-text";
const defaultProps = {
  onClick: () => {},
};

function Item({ menu, onClick }) {
  const { name, icon, label, disabled } = menu;
  const route = menu.route || "/" + name;
  if (Array.isArray(route)) {
    return <Child menu={menu} onClick={onClick} />;
  }
  return (
    <li className="nav-item" key={route}>
      <a
        onClick={(e) => onClick(e, menu)}
        href={route}
        className={classNames(
          "nav-link text-truncate",
          disabled ? "disabled" : ""
        )}
        to={route}
      >
        <i className={icon || defaultIcon}></i>
        <span className="ms-2 small">{label || name}</span>
      </a>
    </li>
  );
}

Item.defaultProps = defaultProps;
export default Item;
