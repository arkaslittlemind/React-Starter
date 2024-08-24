import React from 'react'
import { useParams } from 'react-router-dom';

function User() {
    const { userId } = useParams();
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
        <button className='text-white rounded transition-colors px-4 py-2 bg-orange-600 hover:bg-orange-700'>
            User: {userId}
        </button>
        </div>
    )
}

export default User