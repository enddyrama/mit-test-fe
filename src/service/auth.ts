/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./config";

interface LoginPayloadTypes {
  username: string;
  password: string;
}
export const postLogin = async (payload: LoginPayloadTypes) => {
  const endpoint = `/auth/login`;
  try {
    const response = await api.post(endpoint, payload);
    return {
      code: response.status,
      data: response.data,
    };
  } catch (error: any) {
    console.error("Error during login:", error);
    return {
      code: error.response.status,
      message: error.response.data,
    };
  }
};
