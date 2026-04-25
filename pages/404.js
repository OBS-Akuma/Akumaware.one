// pages/404.js - Pages Router
import Image from 'next/image';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Page Not Found</h1>
      {/*hold up need to upload images*/}
      {/* <Image src="/meowza" alt="404 error" width={500} height={300} /> */}
      <Link href="/">Go back home</Link>
    </div>
  );
}
