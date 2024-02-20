import NavigationSidebar from "@/components/navigation/navigation-sidebar";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full">
      <div className="hidden md:block basis-20 flex-none">
        <NavigationSidebar />
      </div>
      <main className="">{children}</main>
    </div>
  );
}
