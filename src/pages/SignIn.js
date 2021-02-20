const SignIn = async () => {
  const view = `
      <form id="register-form"> 
      <input id="name1" type="text" placeholder="Name" value=""/>
      <input id="pw" type="password" placeholder="Password" value=""/>
      <input id="rgstr_btn" type="submit" value="get Account" /> 
    </form>

    <form id="login-form"> 
      <input id="userName" type="text" placeholder="Enter Username" value=""/>
      <input id="userPw" type="password" placeholder="Enter Password" value=""/>
      <input id="login_btn" type="submit" value="Login" /> 
    </form>
  `;
  return view;
}

export default SignIn;