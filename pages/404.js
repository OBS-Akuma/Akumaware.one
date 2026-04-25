import Link from 'next/link';
import Image from 'next/image';

export default function Custom404() {
  return (
    <div className="container">
      <Image
        src="/img/404.gif"
        alt="404 image"
        width={400}
        height={300}
      />
      <h1>404</h1>
      <p>Page not found</p>
      <Link href="/">Go home</Link>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #0a0a0a;
          color: white;
          text-align: center;
          font-family: sans-serif;
        }
        h1 {
          font-size: 80px;
          margin: 20px 0 10px;
        }
        p {
          font-size: 20px;
          margin-bottom: 20px;
          color: #ccc;
        }
        a {
          color: #667eea;
          text-decoration: none;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
}
