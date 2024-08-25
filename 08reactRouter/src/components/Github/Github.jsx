/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import { useLoaderData } from 'react-router-dom';

export default function Github() {

     const data = useLoaderData();
//   const [data, setData] = useState(null)
//   useEffect(() => {
//     fetch('https://api.github.com/users/arkaslittlemind')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setData(data)
//     })
//   }, [])

  return (
    <div className='bg-gray-600 text-white text-3xl m-4 text-center p-4'>
        GitHub Followers: {data?.followers}
        <div className='flex flex-col justify-center items-center min-h-screen'>
        <img src={data?.avatar_url} alt='git avatar' width={300}/>
        </div>
    </div>
  )
}


export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/arkaslittlemind');
    return response.json();
}