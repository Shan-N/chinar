import AboutClient from "./components/PageClient";

export async function generateMetadata() {
    return {
        title: "About Us | Chinar Hospitality",
        description: "Learn more about Chinar Hospitality & Catering, a premier luxury wedding planning company and fine dine-in restaurant."
    }
}

const AboutPage = () => {
    return (
        <AboutClient />
    )
}

export default AboutPage;