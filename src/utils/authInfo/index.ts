// authInfoHandler.ts
export const setAuthInfo = (authInfo: any) => {
  // Implement your own logic to store authentication information
  // For example, you can use sessionStorage, cookies, or any other secure storage mechanism
  // This is just a placeholder, and you should replace it with your actual implementation
  localStorage.setItem("auth", JSON.stringify(authInfo));
};

export const getAuthInfo = (): any | null => {
  // Implement your own logic to retrieve authentication information
  // This is just a placeholder, and you should replace it with your actual implementation
  const authInfoStr = localStorage.getItem("auth");
  return authInfoStr ? JSON.parse(authInfoStr) : null;
};

export const removeAuthInfo = () => {
  // Implement your own logic to remove authentication information
  // For example, you can use sessionStorage, cookies, or any other storage mechanism
  // This is just a placeholder, and you should replace it with your actual implementation
  localStorage.removeItem("auth");
  localStorage.removeItem("token");
};

export const isUserLoggedIn = () => {
  const authInfo = getAuthInfo();
  return !!authInfo;
};
