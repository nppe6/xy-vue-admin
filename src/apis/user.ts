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

interface LoginInterface{
  token: string
}

export function axiosLogin(data:any){
  return http.request<LoginInterface>({
    url:'/login',
    method:'POST',
    data
  })
}