

import DineInComponent from "./components/PageClient";

export async function generateMetadata() {
    return {
        metadataBase: new URL("https://chinarhospitality.com/"),
        title: "Dine In | Chinar Hospitality",
        description: "Experience the finest Kashmiri, North Indian, and Mughlai cuisines at Chinar Hospitality.",
        alternates: {
            canonical: "/dine-in"
        }
    };
}

const DineInPage = () => {
    return(
        <DineInComponent />
    )
}

export default DineInPage;