import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { getUser } from "../action/getUser";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();
  return (
    <div>
      <Navbar user={user} />
      {children}
      <Footer />
    </div>
  );
}
