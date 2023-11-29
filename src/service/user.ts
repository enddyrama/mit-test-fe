/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserType } from "../types/user";
import api from "./config";

export const getAllUser = async (limit: number, sort: string) => {
  const endpoint = `/users?limit=${limit}&sort=${sort}`;
  try {
    const response = await api.get(endpoint);
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

export const getUserById = async (id: string) => {
  const endpoint = `/users/${id}`;
  try {
    const response = await api.get(endpoint);
    return {
      code: response.status,
      data: response.data,
    };
  } catch (error: any) {
    return {
      code: error.response.status,
      message: error.response.data,
    };
  }
};

export const postAddUser = async (payload: UserType) => {
  const endpoint = `/users`;
  try {
    const response = await api.post(endpoint, payload);
    return {
      code: response.status,
      data: response.data,
    };
  } catch (error: any) {
    return {
      code: error.response.status,
      message: error.response.data,
    };
  }
};

export const patchEditUser = async (payload: UserType, id: string) => {
  const endpoint = `/users/${id}`;
  try {
    const response = await api.patch(endpoint, payload);
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

export const deleteUser = async (id: number) => {
  const endpoint = `/users/${id}`;
  try {
    const response = await api.delete(endpoint);
    return {
      code: response.status,
      data: response.data,
    };
  } catch (error: any) {
    return {
      code: error.response.status,
      message: error.response.data,
    };
  }
};
