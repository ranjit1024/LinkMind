import Image from "next/image";
import Logo from "../public/logo.png"
import Side from "../public/landing_side.png"
export default function Home() {
  return (
    <div className="flex min-h-screen text-black bg-gray-50 flex-col">
     <header className="mt-7">
      <nav className=" flex justify-center items-center w-full" >
         <div className="relative p-3 bg-white border border-gray-100 flex gap-4 ">
    <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gray-300" />
    <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gray-300" />
    <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gray-300" />
    <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gray-300" />
    <div className="flex justify-center items-center">
      <Image src={Logo} height={35} width={35} alt="logo"/>
      <h1 className="font-medium text-xl"><span className="text-2xl">L</span>inkMind</h1>
    </div>
    <div className=" w-px bg-gray-100"></div>
    <div id="navbar" className="ml-3 flex justify-between gap-8 items-center" >
      <div className="text-gray-500 font-[450]">Home</div>
      <div className="text-gray-500 font-[450]">Home</div>
      <div className="text-gray-500 font-[450]">Home</div>
      <div className="text-gray-500 font-[450]">Home</div>
    </div>

    <div className=" w-px bg-gray-100 ml-5"></div>
    <button className=" bg-gray-100 text-black px-5 py-2 text-[1.1rem] font-medium hover:cursor-pointer hover:bg-blue-100 hover:text-gray-900">Log In</button>
  </div>
        
      </nav>
     </header>
     
     <main className="px-20 mt-10  flex justify-between w-full">
      <Image src={Side} width={600} height={200} alt="side"/>
      <div className="justify-start w-full items-center h-full pt-12">fsdf</div>
     </main>
    </div>
  );
}
