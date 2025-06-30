import Link from "next/link";
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function UserPage() {

    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     async function fetchUser() {
    //         const data = await fetch("https://dummyjson.com/users")
    //         setUsers(await data.json());
    //     }
    //     fetchUser()
    // },[])

    const { data, error } = useSWR("https://dummyjson.com/users", fetcher)

    if(error){
      return <h2>Error Occured</h2>
    }

    if(!data){
      return <h2>Loading</h2>
    }

    return (
      <div>
        <h1>Users</h1>
        {
          data && data.users && data.users.map((user) => (
            <Link href={`/csr-users/${user.id}`} key={user.id}>
              <div>{user.firstName}</div>
            </Link>
          ))
        }
      </div>
    )
}
  
export default UserPage