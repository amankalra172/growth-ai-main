import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        <Image
          alt="header text"
          src="/android-chrome-192x192.png"
          className="sm:w-12 sm:h-12 w-8 h-8"
          width={32}
          height={32}
        />
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
          Growth AI
        </h1>
      </Link>
  
      <Link href="https://amankalra.com/mlops/growth-ideas-with-chatgpt" target="_blank">    
      <p className="text-left font-medium font-italic"> About </p>
      </Link>       
    </header>
  );
}