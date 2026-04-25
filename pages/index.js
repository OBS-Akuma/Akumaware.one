import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <div className="image-wrapper">
        <Image
          src="/img/meowhehe.gif"
          alt="meow image"
          width={200}
          height={200}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <h1 className="float">Hiya meow...</h1>

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
        .image-wrapper {
          background: transparent;
          line-height: 0;
        }
        h1 {
          font-size: 64px;
          margin-top: 30px;
        }
        .float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
