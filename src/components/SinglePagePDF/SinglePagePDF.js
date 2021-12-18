
import pdf from "../../assets/VedantMukherjee_Resume.pdf";

function SinglePagePDF() {
    return (
        <object data={pdf} type="application/pdf" width="100%" height="1400"/>
    );
}

export default SinglePagePDF;