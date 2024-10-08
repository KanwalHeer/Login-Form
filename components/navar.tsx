import { UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <div className="flex items-center p-4 bg-slate-100">
      {/* <MobileSidebar/> */}
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default Navbar;