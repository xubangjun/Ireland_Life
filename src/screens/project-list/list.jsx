import React from "react";
export const List = ({ list, users }) => {
  return (
    <table>
      <thread>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thread>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>
              {users.find((user) => user.id === project.personId)?.name ||
                "未知"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
