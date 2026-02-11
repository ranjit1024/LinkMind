import Image from "next/image";
import Logo from "../public/logo.png"

export default function Home() {
  return (
    <div className="flex min-h-screen text-black bg-zinc-50">
     <header className="mt-7">
      <nav className=" flex justify-center items-center w-screen" >
        <div className="border-[0.5px] p-3 border-zinc-200 flex rounded-xs">
          <Image src={Logo} width={30} height={50} alt="Logo"/>
          <h1>LinkMind</h1>
        </div>
        <div></div>
      </nav>
     </header>
    </div>
  );
}
