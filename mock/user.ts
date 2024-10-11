// test.ts

import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/user',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          name: '萧先生',
        },
      }
    },
  },
] as MockMethod[]
