import { ContactClient } from "./components/PageClient";


export async function generateMetadata() {
    return {
        title: "Contact Us | Chinar Hospitality",
        description: "Get in touch with us for any inquiries or support."
    }
}

export default function ContactPage() {

    return (
        <ContactClient />
    )
}
