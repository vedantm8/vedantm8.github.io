import React, { useState } from 'react';
import NavBar from "../components/navbar";
import { Document, Page } from 'react-pdf';
import SinglePagePDF from "../components/SinglePagePDF/SinglePagePDF";

function Resume() {
    const [numPages, setNumPages] = useState(null);
    const pageNumber = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <NavBar />
            <SinglePagePDF />
        </div>
    );
}

export default Resume;