import { ServicesClient } from "./components/PageClient";


export async function generateMetadata() {
    return {
        metadataBase: new URL("https://www.chinarhospitality.com"),
        title: "Our Services | Chinar Hospitality",
        description: "Explore the services we offer at our hospital.",
        alternates : {
            canonical: "/services"
        }
    };
}


const ServicesPage = () => {
    return (
        <ServicesClient />
    );
};

export default ServicesPage;