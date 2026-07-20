import DashboardDrawer from "@/Component/DashboardComponent/Drawer";

export default function DashboardLayout({ children }) {
  return (
    <div
      className=" flex min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300 ">
      <DashboardDrawer />

      <main
        className=" flex-1 p-6 bg-gray-50 min-w-0 dark:bg-gray-950 transition-colors duration-300 ">
        {children}
      </main>
    </div>
  );
}