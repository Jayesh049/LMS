import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return ( 
        <div className="h-full">
            <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
                <Navbar />
            </div>
            {/* sidebar should be hidden  */}
            <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
                <Sidebar />
            </div>
            {/* to show the contents of children the sidebar width is 56 so we have to add ml-56 */}
            <main
                className="md:pl-56 pt-[80px] h-full">
                    {children}
            </main>
        </div>
     );
}
 
export default DashboardLayout;