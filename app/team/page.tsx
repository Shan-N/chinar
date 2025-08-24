
import { TeamClient } from "./components/PageClient"


export async function generateMetadata() {
    return {
        metadataBase: new URL("https://www.chinarhospitality.com/"),
        title: "Our Team | Chinar Hospitality",
        description: "Meet the dedicated professionals behind our success.",
        alternates: {
            canonical: "/team"
        }
    }
}

export default function TeamPage() {
    return (
        <TeamClient />
    )
}