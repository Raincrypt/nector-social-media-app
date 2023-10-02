import SignOutBtn from '@/components/ui/SignOutBtn';
import { OrganizationSwitcher, SignedIn, currentUser } from "@clerk/nextjs";
import { dark } from '@clerk/themes';
import Image from "next/image";
import Link from "next/link";
import SignInBtn from '../ui/SignInBtn';

const Topbar = async () => {
  const user = await currentUser()
  return (
    <nav className="topbar">
      <Link className="flex items-center gap-4" href="/">
        <Image src="./logo.svg" alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Nector</p>
      </Link>
      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutBtn />
          </SignedIn>
        </div>

        {!user && <SignInBtn/>}

        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4"
            }
          }}
        />

      </div>
    </nav>
  );
};

export default Topbar;
