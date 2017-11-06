import React from "react";
import { ListGroupItem } from "reactstrap";

export const Tile = ({ id, value, onClick }) => (
  <ListGroupItem
    id={id}
    value={value}
    className="w-25"
    onClick={() => onClick(id)}
  >
    {value}
  </ListGroupItem>
);
