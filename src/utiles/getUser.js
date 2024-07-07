"use client";
import { auth } from '@/app/firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';

export const GetUser = () => {
    const [user] = useAuthState(auth);

    return {user};
};

// export default UserComponent;
