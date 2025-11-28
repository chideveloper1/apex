import Nav from "../dashboard/components/nav";
import OnboardingSidebar from "./components/sidebar";

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-slate-900">
      <OnboardingSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Nav />
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
