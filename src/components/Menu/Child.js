import React from "react";

import Item from "./Item";
import { Accordion } from "nq-component";

function Child({ menu, onClick }) {
  const { name, icon, label, route, id } = menu;
  let key = id || label || name.replaceAll(" ", "");
  return (
    <React.Fragment key={key}>
      <li className="nav-item">
        <Accordion
          eventKey={key}
          className="nav-link font-size-sm text-truncate"
        >
          <div className="d-inline">
            <i className={icon}></i>
            <span className="ms-2 small">{label || name}</span>
          </div>
          <div className="float-end p-1">
            <i className="bi bi-chevron-down"></i>
          </div>
        </Accordion>
      </li>
      <Accordion.Collapse eventKey={key}>
        <ul className="navbar-nav ms-4">
          {route.map((m, i) => {
            return <Item menu={m} onClick={onClick} />;
          })}
        </ul>
      </Accordion.Collapse>
    </React.Fragment>
  );
}

export default Child;
