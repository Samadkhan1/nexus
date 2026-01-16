import React, { useState } from "react";
import {
  FileText,
  Upload,
  Download,
  Trash2,
  Share2,
  PenTool,
} from "lucide-react";
import { Card, CardHeader, CardBody } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";

type DocumentStatus = "Draft" | "In Review" | "Signed";

interface DocumentItem {
  id: number;
  name: string;
  type: string;
  size: string;
  lastModified: string;
  status: DocumentStatus;
}

const initialDocuments: DocumentItem[] = [
  {
    id: 1,
    name: "Startup Agreement.pdf",
    type: "PDF",
    size: "2.4 MB",
    lastModified: "2024-02-15",
    status: "Draft",
  },
  {
    id: 2,
    name: "Investor NDA.docx",
    type: "Document",
    size: "1.2 MB",
    lastModified: "2024-02-10",
    status: "In Review",
  },
  {
    id: 3,
    name: "Term Sheet.pdf",
    type: "PDF",
    size: "3.1 MB",
    lastModified: "2024-02-05",
    status: "Signed",
  },
];

export const DocumentsPage: React.FC = () => {
  const [documents, setDocuments] =
    useState<DocumentItem[]>(initialDocuments);
  const [selectedDoc, setSelectedDoc] = useState<DocumentItem | null>(null);

  const signDocument = () => {
    if (!selectedDoc) return;

    setDocuments((prev) =>
      prev.map((doc) =>
        doc.id === selectedDoc.id
          ? { ...doc, status: "Signed" }
          : doc
      )
    );

    setSelectedDoc({ ...selectedDoc, status: "Signed" });
  };

  const statusColor = (status: DocumentStatus) => {
    switch (status) {
      case "Draft":
        return "secondary";
      case "In Review":
        return "warning";
      case "Signed":
        return "success";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Document Chamber
          </h1>
          <p className="text-gray-600">
            Manage contracts, review, and e-sign documents
          </p>
        </div>

        <Button leftIcon={<Upload size={18} />}>
          Upload Document
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Document List */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <h2 className="text-lg font-medium">Documents</h2>
            </CardHeader>

            <CardBody className="space-y-2">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  onClick={() => setSelectedDoc(doc)}
                  className="flex items-center p-4 rounded-lg hover:bg-gray-50 cursor-pointer"
                >
                  <div className="p-2 bg-primary-50 rounded-lg mr-4">
                    <FileText className="text-primary-600" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-gray-900">
                        {doc.name}
                      </h3>
                      <Badge variant={statusColor(doc.status)}>
                        {doc.status}
                      </Badge>
                    </div>

                    <p className="text-sm text-gray-500">
                      {doc.type} • {doc.size} • Modified{" "}
                      {doc.lastModified}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Download size={18} />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 size={18} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-error-600"
                    >
                      <Trash2 size={18} />
                    </Button>
                  </div>
                </div>
              ))}
            </CardBody>
          </Card>
        </div>

        {/* Preview + Signature Panel */}
        <div>
          <Card>
            <CardHeader>
              <h2 className="text-lg font-medium">
                Document Preview
              </h2>
            </CardHeader>

            <CardBody className="space-y-4">
              {!selectedDoc ? (
                <p className="text-sm text-gray-500">
                  Select a document to preview
                </p>
              ) : (
                <>
                  <div className="border rounded-lg p-4 bg-gray-50 text-sm text-gray-700">
                    <p className="font-medium">
                      {selectedDoc.name}
                    </p>
                    <p className="text-gray-500 mt-1">
                      Preview not available (mock)
                    </p>
                  </div>

                  {/* Signature Mock */}
                  {selectedDoc.status !== "Signed" && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium">
                        E-Signature
                      </p>

                      <div className="h-24 border border-dashed rounded-lg flex items-center justify-center text-gray-400">
                        Signature Pad (Mock)
                      </div>

                      <Button
                        leftIcon={<PenTool size={16} />}
                        onClick={signDocument}
                        className="w-full"
                      >
                        Sign Document
                      </Button>
                    </div>
                  )}

                  {selectedDoc.status === "Signed" && (
                    <Badge variant="success">
                      Document Signed ✔
                    </Badge>
                  )}
                </>
              )}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};
