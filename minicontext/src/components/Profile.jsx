import React ,{useContext} from 'react'
import UserContext from '../context/UserContext';

function Profile() {
    const { user } = useContext(UserContext);
    return (
        <div>
            <h2>Welcome</h2>
            {user ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Password: {user.password}</p>
                </div>
            ) : (
                <p>Please log in</p>
            )}
        </div>
    )
}

export default Profile
