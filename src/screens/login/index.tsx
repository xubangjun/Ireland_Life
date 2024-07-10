import { useAuth } from "context/auth-context";
import { FormEvent } from "react";

// const apiUrl = process.env.REACT_APP_API_URL;
export const LoginScreen = () => {
  const { login, user } = useAuth();
  // const login =(param: {username: string, password: string}) =>{
  //     fetch(`${apiUrl}/register`, {
  //         method: 'POST',
  //         headers:{
  //             'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(param)
  //     }).then(
  //         async(response)=>{
  //             if(response.ok){

  //             }
  //         }
  //     )
  // }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    //阻止表带提交默认行为
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    login({ username, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      {user ? <div>登陆成功，用户名: {user?.name}</div> : null}
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={"username"}></input>
      </div>
      <div>
        <label>密码</label>
        <input type="password" id={"password"}></input>
      </div>
      <button type={"submit"}>登陆</button>
    </form>
  );
};
