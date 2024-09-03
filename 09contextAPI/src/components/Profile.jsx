import { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {

    const {user} = useContext(UserContext);

    if(!user) {
        return <div className="bg-gray-200 p-4 rounded-md">
            <div className="text-xl font-bold mb-2">User not Logged In</div>
            <p>Please log in to view your profile.</p>
        </div>
    }
    
    return (
        <div className="bg-blue-500 text-white p-4 rounded-md">
            Welcome {user.username}
        </div>
    );
}
