// import React from 'react';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { Badge } from "@/components/ui/badge";
// import { X, CheckCircle } from 'lucide-react';

// const DocumentStatusTable = ({ error, successMessage }) => {
//   // Combine and process error and success messages
//   const documents = [];
  
//   // Process error messages
//   if (error) {
//     error.split('\n').forEach(err => {
//       const [fileName, errorMessage] = err.split(': ');
//       documents.push({
//         name: fileName,
//         categories: [],
//         status: 'failed',
//         message: errorMessage
//       });
//     });
//   }
  
//   // Process success messages
//   if (successMessage) {
//     successMessage.split('\n').forEach(msg => {
//       const match = msg.match(/(.*?) processed successfully \(Categories: (.*?)\)/);
//       if (match) {
//         documents.push({
//           name: match[1],
//           categories: match[2].split(', '),
//           status: 'success',
//           message: null
//         });
//       }
//     });
//   }

//   return (
//     <div className="w-full">
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="w-1/3">Document Name</TableHead>
//             <TableHead className="w-1/3">Categories</TableHead>
//             <TableHead className="w-1/3">Status</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {documents.map((doc, index) => (
//             <React.Fragment key={index}>
//               <TableRow>
//                 <TableCell className="font-medium">{doc.name}</TableCell>
//                 <TableCell>{doc.categories.join(', ') || '-'}</TableCell>
//                 <TableCell>
//                   <div className="flex items-center gap-2">
//                     {doc.status === 'success' ? (
//                       <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
//                         <CheckCircle className="h-4 w-4" />
//                         Success
//                       </Badge>
//                     ) : (
//                       <Badge className="bg-red-100 text-red-800 flex items-center gap-1">
//                         <X className="h-4 w-4" />
//                         Failed
//                       </Badge>
//                     )}
//                   </div>
//                 </TableCell>
//               </TableRow>
//               {doc.status === 'failed' && (
//                 <TableRow>
//                   <TableCell colSpan={3} className="bg-red-50 text-red-600 text-sm py-2">
//                     Error: {doc.message}
//                   </TableCell>
//                 </TableRow>
//               )}
//             </React.Fragment>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default DocumentStatusTable;









// import React from 'react';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { Badge } from "@/components/ui/badge";
// import { X, CheckCircle } from 'lucide-react';

// const DocumentStatusTable = ({ error, successMessage }) => {
//   // Format error message to split into two lines after the period
//   const formatErrorMessage = (message) => {
//     if (!message) return ['', ''];
//     const [firstLine, secondLine] = message.split('.');
//     return [`${firstLine}.`, secondLine?.trim() || ''];
//   };

//   // Process documents
//   const documents = [];
  
//   // Process error messages
//   if (error) {
//     error.split('\n').forEach(err => {
//       const [fileName, errorMessage] = err.split(': ');
//       documents.push({
//         name: fileName,
//         categories: [],
//         status: 'failed',
//         message: formatErrorMessage(errorMessage || '')
//       });
//     });
//   }
  
//   // Process success messages
//   if (successMessage) {
//     successMessage.split('\n').forEach(msg => {
//       const match = msg.match(/(.*?) processed successfully \(Categories: (.*?)\)/);
//       if (match) {
//         documents.push({
//           name: match[1],
//           categories: match[2].split(', '),
//           status: 'success',
//           message: null
//         });
//       }
//     });
//   }

//   return (
//     <div className="w-full">
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="w-1/3">Document Name</TableHead>
//             <TableHead className="w-1/3">Categories</TableHead>
//             <TableHead className="w-1/3">Status</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {documents.map((doc, index) => (
//             <React.Fragment key={index}>
//               <TableRow>
//                 <TableCell className="font-medium">{doc.name}</TableCell>
//                 <TableCell>{doc.categories.join(', ') || '-'}</TableCell>
//                 <TableCell>
//                   <div className="flex items-center gap-2">
//                     {doc.status === 'success' ? (
//                       <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
//                         <CheckCircle className="h-4 w-4" />
//                         Success
//                       </Badge>
//                     ) : (
//                       <Badge className="bg-red-100 text-red-800 flex items-center gap-1">
//                         <X className="h-4 w-4" />
//                         Failed
//                       </Badge>
//                     )}
//                   </div>
//                 </TableCell>
//               </TableRow>
//               {doc.status === 'failed' && doc.message[0] && (
//                 <>
//                   <TableRow>
//                     <TableCell colSpan={3} className="bg-red-50 text-red-600 text-sm py-2">
//                       Error: {doc.message[0]}
//                     </TableCell>
//                   </TableRow>
//                   {doc.message[1] && (
//                     <TableRow>
//                       <TableCell colSpan={3} className="bg-red-50 text-red-600 text-sm py-2">
//                         {doc.message[1]}
//                       </TableCell>
//                     </TableRow>
//                   )}
//                 </>
//               )}
//             </React.Fragment>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default DocumentStatusTable;


import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { X, CheckCircle } from 'lucide-react';

const DocumentStatusTable = ({ error, successMessage }) => {
  // Format error message to split into two lines after the period
  const formatErrorMessage = (message) => {
    if (!message) return ['', ''];
    const [firstLine, secondLine] = message.split('.');
    return [`${firstLine}.`, secondLine?.trim() || ''];
  };

  // Process documents
  const documents = [];
  
  // Process error messages
  if (error) {
    error.split('\n').forEach(err => {
      const [fileName, errorMessage] = err.split(': ');
      documents.push({
        name: fileName,
        categories: [],
        status: 'failed',
        message: formatErrorMessage(errorMessage || '')
      });
    });
  }
  
  // Process success messages
  if (successMessage) {
    successMessage.split('\n').forEach(msg => {
      const match = msg.match(/(.*?) processed successfully \(Categories: (.*?)\)/);
      if (match) {
        documents.push({
          name: match[1],
          categories: match[2].split(', '),
          status: 'success',
          message: null
        });
      }
    });
  }

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3">Document Name</TableHead>
            <TableHead className="w-1/3">Categories</TableHead>
            <TableHead className="w-1/3">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {documents.map((doc, index) => (
            <React.Fragment key={index}>
              <TableRow>
                <TableCell className="font-medium">{doc.name}</TableCell>
                <TableCell>{doc.categories.join(', ') || '-'}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {doc.status === 'success' ? (
                      <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
                        <CheckCircle className="h-4 w-4" />
                        Success
                      </Badge>
                    ) : (
                      <Badge className="bg-red-100 text-red-800 flex items-center gap-1">
                        <X className="h-4 w-4" />
                        Failed
                      </Badge>
                    )}
                  </div>
                </TableCell>
              </TableRow>
              {doc.status === 'failed' && doc.message[0] && (
                <TableRow>
                  <TableCell colSpan={3} className="p-0">
                    <div className="bg-red-50 text-red-600">
                      <div className="px-4 py-2">
                        Error: {doc.message[0]}
                      </div>
                      {doc.message[1] && (
                        <div className="px-4 py-2 border-t-0">
                          {doc.message[1]}
                        </div>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DocumentStatusTable;