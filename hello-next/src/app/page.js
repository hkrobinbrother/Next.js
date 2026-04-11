import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
        Welcome to Next.js 14!
      </h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        This is a simple starter template for your Next.js 14 application.
      </p>
      <div className="mt-6">
        <Image
          src="/nextjs-logo.png"
          alt="Next.js Logo"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
