import AdminLayout from "../../components/admin/AdminLayout";
import "./AdminSettings.css";

const AdminSettings = () => {
  return (
    <AdminLayout>
      <div className="settings-header">
        <h1>Store Settings</h1>
        <p>Manage your store configuration</p>
      </div>

      <div className="settings-card">
        <div className="form-group">
          <label>Store Name</label>
          <input type="text" defaultValue="E-Shop" />
        </div>

        <div className="form-group">
          <label>Store Email</label>
          <input type="email" defaultValue="support@eshop.com" />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="text" defaultValue="+91 9876543210" />
        </div>

        <div className="form-group">
          <label>Currency</label>
          <select>
            <option>INR (₹)</option>
            <option>USD ($)</option>
            <option>EUR (€)</option>
          </select>
        </div>

        <button className="save-btn">Save Changes</button>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
