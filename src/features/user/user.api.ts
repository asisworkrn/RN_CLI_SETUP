import { api } from "@src/services/api/baseApi";
import { ENDPOINTS } from "@src/services/api/endpoints";


// Types
export type User = {
  id: string;
  name: string;
  email: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type UpdateUserPayload = {
  name?: string;
  email?: string;
};

// GET USER
export const getUser = () => {
  return api.get<User>(ENDPOINTS.USER);
};

// LOGIN
export const login = (data: LoginPayload) => {
  return api.post<{ token: string; user: User }>(
    ENDPOINTS.LOGIN,
    data
  );
};

// UPDATE USER (PUT = full update)
export const updateUser = (data: UpdateUserPayload) => {
  return api.put<User>(ENDPOINTS.UPDATE_USER, data);
};

// PARTIAL UPDATE (PATCH)
export const patchUser = (data: UpdateUserPayload) => {
  return api.patch<User>(ENDPOINTS.UPDATE_USER, data);
};

// DELETE USER
export const deleteUser = () => {
  return api.delete<void>(ENDPOINTS.USER);
};