import { useRouter } from "next/router"

function Settings() {
    const { query } = useRouter();


    return (
        <div>
            <h1>This is setting page for {query.username}</h1>
        </div>
    )
}

export default Settings
