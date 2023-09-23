import React from "react";
export const SearchPanel = ({ users, param, setParam }) => {
  // setParam(Object.assign({}, param, {name: evt.target.value}))
  return (
    <form action="">
      <div>
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
          value={param.persionId}
          onChange={(evt) =>
            setParam({
              ...param,
              persionId: evt.target.value,
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
      </div>
    </form>
  );
};
