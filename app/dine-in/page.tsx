
import DineInComponent from "./components/PageClient";

export async function generateMetadata() {
    return {
        title: "Dine In | Chinar Hospitality",
        description: "Experience the finest Kashmiri, North Indian, and Mughlai cuisines at Chinar Hospitality."
    };
}

const DineInPage = () => {
    return(
        <DineInComponent />
    )
}

export default DineInPage;