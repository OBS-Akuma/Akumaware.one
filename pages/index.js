import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <Image
        src="/img/meowhehe.gif"
        alt="meow image"
        width={600}
        height={400}
      />
      <h1>Hiya meow...</h1>

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
          font-size: 64px;
          margin-top: 30px;
        }
      `}</style>
    </div>
  );
}
