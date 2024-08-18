import { useContext } from "react";
import { DocumentContext } from "./DocumentContext";

export const useDocument = () => {
  const context = useContext(DocumentContext);

  if (context === null) {
    throw new Error('useDocument must be used within a DocumentContextProvider');
  }

  return context;
};