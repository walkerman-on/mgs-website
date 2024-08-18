import { FC, ReactNode, useState } from "react";
import { DocumentContext } from "../lib/DocumentContext";

interface IDocumentProvider {
    children: ReactNode;
}

export const DocumentProvider: FC<IDocumentProvider> = ({ children }) => {
    const [documentID, setDocumentID] = useState(null)

    const onDocumentClick = (id: string) => {
        setDocumentID(id)
    }

    return (
        <DocumentContext.Provider value={{ documentID, onDocumentClick }}>
            {children}
        </DocumentContext.Provider>
    );
};