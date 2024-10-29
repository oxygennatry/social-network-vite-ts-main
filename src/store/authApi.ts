import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseUrl } from "../utils/baseUrl";
import { IUser } from "./userSlice";

interface IRegistrationUserPayload {
  mail: string;
  phone_number: number;
  user_id: number;
  name: string;
  reg_date: string;
  city: string;
}

interface IRegisterUserResponse {
  status: number;
  user_id: number;
}

interface ILoginUserPayload {
  email: string;
  password: string;
}

interface ILoginUserResponse extends IRegisterUserResponse {}

interface IGetUserResponse {
  status: 1;
  message: IUser;
}

interface IChangeProfilePayload {
  user_id: number;
  change_info: string;
  new_data: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: BaseUrl }),
  endpoints: (builder) => ({
    register: builder.mutation<IRegisterUserResponse, IRegistrationUserPayload>(
      {
        query: (payload) => ({
          url: "/registration",
          method: "POST",
          body: payload,
        }),
      }
    ),
    loginUser: builder.mutation<ILoginUserResponse, ILoginUserPayload>({
      query: (payload) => ({
        url: "/login",
        method: "POST",
        body: payload,
      }),
    }),
    getUser: builder.query<IGetUserResponse, string>({
      query: (userId) => `/user?user_id=${userId}`,
    }),
    changeUser: builder.mutation<string, IChangeProfilePayload>({
      query: (payload) => ({
        url: "/change-profile",
        method: "PUT",
        body: payload,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginUserMutation, useGetUserQuery } =
  authApi;
