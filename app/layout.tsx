import { PropsWithChildren } from 'react';
import 'styles/main.css';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="bg-black overflow-hidden w-[100vw] h-[100vh]">
        {children}
      </body>
    </html>
  );
}
//  <main className="w-full h-full flex flex-col">
//   {children}
//   {/* <div className="overflow-scroll"></div> */}
// </main>
