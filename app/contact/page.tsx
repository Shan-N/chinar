import { ContactClient } from "./components/PageClient";


export async function generateMetadata() {
    return {
        metadataBase: new URL("https://www.chinarhospitality.com/"),
        title: "Contact Us | Chinar Hospitality",
        description: "Get in touch with us for any inquiries or support.",
        alternates: {
            canonical: "/contact"
        }
    }
}

export default function ContactPage() {

    return (
        <ContactClient />
    )
}
