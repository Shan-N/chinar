
import AboutClient from "./components/PageClient";

export async function generateMetadata() {
    return {
        metadataBase: new URL("https://www.chinarhospitality.com/"),
        title: "About Us | Chinar Hospitality",
        description: "Learn more about Chinar Hospitality & Catering, a premier luxury wedding planning company and fine dine-in restaurant.",
        alternates: {
            canonical: "/about"
        }
    }
}

const AboutPage = () => {
    return (
        <AboutClient />
    )
}

export default AboutPage;