import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
reducerPath:"ApiOne",
baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
endpoints:(builder)=>({

    GetPost: builder.query({
        query:()=>"/posts"
    }),
    

})
})
export const { useGetPostQuery }=api
export default api;