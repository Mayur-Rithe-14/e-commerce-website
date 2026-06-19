import AdminSidebar from "./AdminSidebar";

const AdminLayout = ({children}) => {
  return (
    <div className="admin-layout">
      <AdminSidebar />

      <main className="admin-content">{children}</main>
    </div>
  );
};

export default AdminLayout;
