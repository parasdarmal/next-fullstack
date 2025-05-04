import { useRouter } from "next/router"

function Index() {
    const router = useRouter();

    return (
        <div>
            <h1>This is index page for {router.query.username}</h1>
            <button onClick={e => router.push(`/user/${router.query.username}/settings`)}>Go to settings page</button>
            <button onClick={e => router.push({
                pathname: "/user/[username]/settings",
                query: {username: router.query.username}
            })}>Go to settings page by another method</button>
            <button onClick={e => router.reload()}>Go to settings page by another method</button>
        </div>
    )
}

export default Index
