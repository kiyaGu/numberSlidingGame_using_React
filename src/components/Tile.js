import React from "react";
import { ListGroupItem } from "reactstrap";

export const Tile = ({ id, value, gameWidth, onClick }) => (
  <ListGroupItem
    id={id}
    value={value}
    className={gameWidth}
    onClick={() => onClick(id)}
  >
    {value}
  </ListGroupItem>
);
