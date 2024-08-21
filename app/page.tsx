import Link from "next/link";

export default function Home() {
  return (
    <main >
  
   <h1 className="text-center text-4xl m-8 font-extrabold">Assignment Submission Form</h1>
  <div className=" flex flex-col sm:flex-row md:flex-row items-center justify-center p-8">
 <Link href={'/sign-in'} className="px-4 text-xl font-bold hover:text-blue-500 border border-gray-100 p-4 bg-slate-100 rounded-lg "><h1>Sign in</h1></Link>  
 <Link href={'/sign-up'} className="px-4 text-xl font-bold hover:text-blue-500 border border-gray-100 p-4 bg-slate-100 rounded-lg"><h1>Sign up</h1></Link> 
 </div>
    </main>
  );
}
