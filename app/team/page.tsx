import { TeamClient } from "./components/PageClient"


export async function generateMetadata() {
    return {
        title: "Our Team | Chinar Hospitality",
        description: "Meet the dedicated professionals behind our success."
    }
}

export default function TeamPage() {
    return (
        <TeamClient />
    )
}