import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useEffect, useState } from "react";
import React from "react";
import { cleanObject, useDebounce, useMount } from "utils";
import * as qs from "qs";
// eslint-disable-next-line
const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
  const [param, setParam] = useState({ name: "", personId: "" });

  const debouncedParam = useDebounce(param, 2000);
  const [list, setList] = useState([]);

  const [users, setUsers] = useState([]);

  console.log(users);
  useEffect(() => {
    fetch(
      `${apiUrl}/project/getProjects?${qs.stringify(cleanObject(debouncedParam))}`,
    ).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [debouncedParam, param]);

  useMount(() => {
    fetch(`${apiUrl}/user/getUsers`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
