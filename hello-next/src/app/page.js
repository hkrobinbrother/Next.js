

export default function Home() {
  return (
    <div className="relative w-full h-[800px] overflow-hidden">
      
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video1.mp4" type="video/mp4" />
      </video>

      {/* 🧱 Overlay (optional for dark effect) */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 📝 Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold">Welcome to My Website</h1>
      </div>

    </div>
  );
}
