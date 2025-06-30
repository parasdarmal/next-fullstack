import { useEffect, useState } from "react"
import { useRouter } from "next/router"

const UserInfoPage = () => {
    const [userInfo, setUserInfo] = useState(null);
    const router = useRouter();

    console.log(userInfo);

    useEffect(() => {
        const id = router.query.id;
        async function getUserbyId(id){
            const data = await fetch(`https://dummyjson.com/users/${id}`);
            setUserInfo(await data.json())
        }
        getUserbyId(id)
    },[router.query.id])

    return(
        userInfo && 
        <div>
            <h1>User Details</h1>
            <h2>User: {userInfo.firstName}</h2>
            <h2>Gender: {userInfo.gender}</h2>
        </div>
    )
}

export default UserInfoPage