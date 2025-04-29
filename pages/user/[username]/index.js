import { useRouter } from "next/router"

function Index() {
    const { query } = useRouter();


    return (
        <div>
            <h1>This is index page for {query.username}</h1>
        </div>
    )
}

export default Index
