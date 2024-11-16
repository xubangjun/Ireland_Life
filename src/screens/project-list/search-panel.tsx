import { Box } from "@mui/material";
import React from "react";
export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

interface SearchPaneProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPaneProps["param"]) => void;
}

export const SearchPanel = ({ users, param, setParam }: SearchPaneProps) => {
  // setParam(Object.assign({}, param, {name: evt.target.value}))
  return (
    <form action="">
      <Box>
        <input
          type="text"
          value={param.name}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        ></input>
        <select
          value={param.personId}
          onChange={(evt) =>
            setParam({
              ...param,
              personId: evt.target.value,
            })
          }
        >
          <option>负责人</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </Box>
    </form>
  );
};
