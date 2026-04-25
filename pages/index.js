import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <Image
        src="/img/meowhehe.gif"
        alt="meow image"
        width={200}
        height={200}
      />
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
