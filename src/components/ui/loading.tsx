// components/Loading.jsx
export default function Loading() {
  return (
    <div
      className="w-12 aspect-square grid"
      style={{
        animation: "l14 4s infinite",
      }}
    >
      <div className="absolute inset-0 rounded-full border-8 border-t-red-500 border-r-red-500 border-b-transparent border-l-transparent mix-blend-darken animate-spin" />
      <div className="absolute inset-0 rounded-full border-8 border-b-blue-500 border-l-blue-500 border-t-transparent border-r-transparent mix-blend-darken animate-spin-reverse" />
      <style jsx global>{`
        @keyframes l14 {
          to {
            transform: rotate(1turn);
          }
        }
        .animate-spin-reverse {
          animation: l14 1s infinite linear reverse;
        }
      `}</style>
    </div>
  );
}
