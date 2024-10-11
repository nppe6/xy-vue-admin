import http from "@/plugins/axios";

interface User{
  name: string,
  age: number,
  avatar: string
}

export function axiosGetUser(){
  return http.request<User>({
    url: '/user'
  })
}