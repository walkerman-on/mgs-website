import { createContext } from 'react';

interface DocumentContextType {
  documentID: string;
  onDocumentClick: (id: string) => void;
};

export const DocumentContext = createContext<DocumentContextType | null>(null);