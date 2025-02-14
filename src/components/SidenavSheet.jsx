import { ArrowBigRight, Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const SidenavSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="mb-8">
          <SheetTitle>Next.Js</SheetTitle>
        </SheetHeader>

        <ul className="space-y-2">
          <Link href="/">
            <li className="sidenav-li">
              <ArrowBigRight className="sidenav-li--icon" />

              <span className="ml-3">Home</span>
            </li>
          </Link>

          <Link href="/auth/edit-profile">
            <li className="sidenav-li">
              <ArrowBigRight className="sidenav-li--icon" />

              <span className="ml-3">Edit Profile</span>
            </li>
          </Link>

          <Link href="/auth/admin/create-product">
            <li className="sidenav-li">
              <ArrowBigRight className="sidenav-li--icon" />

              <span className="ml-3">Create Product</span>
            </li>
          </Link>

          <Link href="/auth/admin">
            <li className="sidenav-li">
              <ArrowBigRight className="sidenav-li--icon" />

              <span className="ml-3">Admin</span>
            </li>
          </Link>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default SidenavSheet;
