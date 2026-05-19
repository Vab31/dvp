// pages/coming-soon.js

// import Head from 'next/head';

// export default function ComingSoon() {
//   return (
//    <div className='bg-white h-screen flex flex-col items-center justify-center'>
//     <h1 className='font-bold text-5xl'>Coming Soon</h1>
//    </div>
//   );
// }


import Head from 'next/head';

export default function PdfPreview() {
  return (
    <>
      <Head>
        <title>PDF Preview</title>
        <meta name="description" content="View the uploaded PDF document" />
      </Head>

      <div className="w-screen h-screen overflow-hidden">
        <iframe
          src="/paper.pdf"
          className="w-full h-full border-none"
          title="PDF Preview"
        />
      </div>
    </>
  );
}