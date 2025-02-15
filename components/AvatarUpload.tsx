// import { CloudDownload } from "lucide-react";
// import React, { useCallback, useState } from "react";
// import { useDropzone } from "react-dropzone";

// interface AvatarUploadProps {
//   onUpload: (imageUrl: string) => void;
// }

// const AvatarUpload: React.FC<AvatarUploadProps> = ({ onUpload }) => {
//   const [error, setError] = useState<string | null>(null);
//   const [preview, setPreview] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   const onDrop = useCallback(
//     async (acceptedFiles: File[]) => {
//       const file = acceptedFiles[0];
//       if (!file) return;
//       setLoading(true);
//       setError(null);

//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onloadend = async () => {
//         const base64Image = reader.result as string;

//         setPreview(base64Image);

//         try {
//           console.log("Sending request to /api/upload..."); // Debug log
//           const response = await fetch("/api/upload", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ image: base64Image }),
//           });

//           console.log("Response received:", response); // Debug log

//           if (!response.ok) {
//             const errorData = await response.text(); // Read the response as text
//             console.error("API Error:", errorData); // Debug log
//             throw new Error(errorData || "Image upload failed");
//           }

//           const data = await response.json();
//           console.log("Upload successful:", data); // Debug log

//           if (data.url) {
//             onUpload(data.url); // Use the uploaded image URL
//           }
//         } catch (error) {
//           console.error("Upload error:", error); // Debug log
//           setError(
//             error instanceof Error ? error.message : "Image upload failed"
//           );
//         } finally {
//           setLoading(false);
//         }
//       };
//     },
//     [onUpload]
//   );
//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop,
//     accept: {
//       "image/jpeg": [],
//       "image/png": [],
//     },
//     maxSize: 2 * 1024 * 1024, // 2MB limit
//   });

//   return (
//     <div>
//       <div
//         {...getRootProps()}
//         className="flex flex-col w-44 h-44 md:w-60 md:h-60 z-10 items-center justify-center border-4 bg-lightBg-100 border-brandColor-100 rounded-2xl selection:cursor-pointer"
//       >
//         <input {...getInputProps()} />
//         {preview ? (
//           <img
//             src={preview}
//             alt="Preview"
//             className="mx-auto w-44 h-44 md:w-60 md:h-60 rounded-2xl object-cover"
//           />
//         ) : (
//           <div className="flex flex-col justify-center items-center">
//             <CloudDownload />
//             <p className="text-center p-2">Drag & drop, or click to upload</p>
//           </div>
//         )}
//         {loading && <p className="mt-2 text-sm text-gray-300">Uploading...</p>}
//         {error && <p className="text-red-500">{/* {error} {preview} */}</p>}
//       </div>
//     </div>
//   );
// };

// export default AvatarUpload;

import { CloudDownload, Trash2 } from "lucide-react";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface AvatarUploadProps {
  onUpload: (imageUrl: string) => void;
}

const AvatarUpload: React.FC<AvatarUploadProps> = ({ onUpload }) => {
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (!file) return;
      setLoading(true);
      setError(null);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        const base64Image = reader.result as string;
        setPreview(base64Image);

        try {
          const response = await fetch("/api/upload", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ image: base64Image }),
          });

          if (!response.ok) {
            const errorData = await response.text();
            throw new Error(errorData || "Image upload failed");
          }

          const data = await response.json();
          if (data.url) {
            onUpload(data.url);
          }
        } catch (error) {
          setError(
            error instanceof Error ? error.message : "Image upload failed"
          );
        } finally {
          setLoading(false);
        }
      };
    },
    [onUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/jpeg": [], "image/png": [] },
    maxSize: 2 * 1024 * 1024, // 2MB limit
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className="relative flex flex-col w-44 h-44 md:w-60 md:h-60 z-10 items-center justify-center border-4 bg-lightBg-100 border-brandColor-100 rounded-2xl cursor-pointer overflow-hidden"
      >
        <input {...getInputProps()} />
        {preview ? (
          <div className="relative w-full h-full">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full rounded-2xl object-cover"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 flex items-center justify-center rounded-2xl transition-opacity duration-300">
              {/* <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering file upload on click
                  setPreview(null);
                }}
                className="bg-white text-red-500 p-2 rounded-full flex items-center gap-2"
              >
                <Trash2 size={18} />
                Remove
              </button> */}
              <div className="flex flex-col justify-center items-center">
                <CloudDownload />
                <p className="text-center p-2">
                  Drag & drop, or click to upload
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <CloudDownload />
            <p className="text-center p-2">Drag & drop, or click to upload</p>
          </div>
        )}
        {loading && <p className="mt-2 text-sm text-gray-300">Uploading...</p>}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default AvatarUpload;
