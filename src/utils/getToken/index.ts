export const getTokenAsync = async () => {
  if (typeof document !== "undefined") {
    await new Promise((resolve) => {
      document.addEventListener("DOMContentLoaded", resolve);
    });

    const tokenMatch = document.cookie.match(/token=(.*?);/);

    if (tokenMatch) {
      const token = tokenMatch[1];
      return token;
    } else {
      return "default-token";

      // Handle the case where the token is not found in the cookie
    //   throw new Error("Token not found in cookie");
    }
  } else {
    // Handle the case where 'document' is not defined (e.g., in a non-DOM environment)
    throw new Error("Document is not defined");
  }
};
