// "use client";
// import React, { useState } from "react";
// import { FileUpload as UploadComponent } from "../../../components/ui/file-upload.jsx";

// // Alias the imported component to avoid conflict

// export default function FileUploadPage() { // Rename the local function to avoid name conflict
//   const [files, setFiles] = useState([]);

//   const handleFileUpload = (files) => {
//     setFiles(files);
//   };

//   return (
//     <div>
//       <h1>Upload Your Files</h1>
//       {/* Use the aliased imported FileUpload component */}
//       <UploadComponent onUpload={handleFileUpload} />
//     </div>
//   );
//}

"use client";
import React, { useState } from "react";
import { FileUpload as UploadComponent } from "../../components/ui/file-upload.jsx";

export default function AiScan() {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (files) => {
    setFiles(files);
  };

  return (
    <div className="h-full w-full">
      <h1>AI Scanner</h1>
      <UploadComponent onUpload={handleFileUpload} />
    </div>
  );
}





