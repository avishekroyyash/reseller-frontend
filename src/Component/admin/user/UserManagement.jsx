"use client";

import { useEffect, useMemo, useState } from "react";
import UserToolbar from "./UserToolbar";
import UserTable from "./UserTable";
import { GetAllUser } from "@/lib/apiGetCall/GetAllUser";
import UpdateUserModal from "./UpdateUserModal";
import DeleteUserModal from "./DeleteUserModal";
import { AdminDeleteUserData, AdminUpdateUserData, AdminUserStatusUpdate } from "@/lib/action/AdminUpdateDelete";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";



export default function UserManagement() {

  const router = useRouter()

  const [selectedUser, setSelectedUser] = useState(null);
const [updateModal, setUpdateModal] = useState(false);
const [deleteModal, setDeleteModal] = useState(false);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [role, setRole] = useState("all");
  const [status, setStatus] = useState("all");


  const handleOpenUpdate = (user) => {
  setSelectedUser(user);
  setUpdateModal(true);
};

const handleCloseUpdate = () => {
  setSelectedUser(null);
  setUpdateModal(false);
};


//user update api
const handleSave = async (updatedUser) => {
  // console.log(updatedUser,'UPDATE-USER');
  const update = {
      name: updatedUser.name,
      role: updatedUser.role,
      status: updatedUser.status,
    }
    // console.log(update,'UPDATE');
    const result = await AdminUpdateUserData(updatedUser._id,update)
  // API call will be added in Part 5
   if (result.modifiedCount > 0) {
      toast.success("User updated successfully");

      setUsers((prev) =>
        prev.map((user) =>
          user._id === updatedUser._id
            ? {
                ...user,
                name: updatedUser.name,
                role: updatedUser.role,
                status: updatedUser.status,
              }
            : user
        )
      );

      handleCloseUpdate();
    }
  
};


const handleOpenDelete = (user) => {
  setSelectedUser(user);
  setDeleteModal(true);
};

const handleCloseDelete = () => {
  setSelectedUser(null);
  setDeleteModal(false);
};

// user delete api
const handleDelete = async (user) => {
  // console.log("Delete User:", user);

   try {
    const result = await AdminDeleteUserData(user?._id);

    if (result.deletedCount > 0) {
      toast.success("User deleted successfully");

      setUsers((prev) =>
        prev.filter((item) => item._id !== user?._id)
      );

      handleCloseDelete();
    }
  } catch (error) {
    console.log(error);
    toast.error("Delete failed");
  }

  setDeleteModal(false);
};

//update user status 
const handleBlockUser = async (user) => {
  try {
    const newStatus =
      user.status === "active"
        ? "blocked"
        : "active";

    const result = await AdminUserStatusUpdate(
      user?._id,
      newStatus
    );

    if (result.modifiedCount > 0) {
      toast.success(
        newStatus === "blocked"
          ? "User blocked"
          : "User unblocked"
      );

      setUsers((prev) =>
        prev.map((item) =>
          item._id === user._id
            ? { ...item, status: newStatus }
            : item
        )
      );
    }
  } catch (error) {
    // console.log(error);
    toast.error("Status update failed");
  }
};



  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    setLoading(true);

    const data = await GetAllUser();


      setUsers(data);
    

    setLoading(false);
  }

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const keyword = search.toLowerCase();

      const searchMatch =
        user.name?.toLowerCase().includes(keyword) ||
        user.email?.toLowerCase().includes(keyword);

      const roleMatch =
        role === "all" ||
        user.role?.toLowerCase() === role.toLowerCase();

      const statusMatch =
        status === "all" ||
        user.status?.toLowerCase() === status.toLowerCase();

      return searchMatch && roleMatch && statusMatch;
    });
  }, [users, search, role, status]);

  return (
    <div className="min-h-screen bg-orange-50 p-4 md:p-6">

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-gray-800">
          Manage Users
        </h1>

        <p className="text-gray-500 mt-2">
          Admin can monitor and control platform users.
        </p>

      </div>

      <UserToolbar
        search={search}
        setSearch={setSearch}
        role={role}
        setRole={setRole}
        status={status}
        setStatus={setStatus}
      />

      {/* Total Users */}

      <div className="mb-4">

        <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-orange-700 font-semibold">
          Total Users : {filteredUsers.length}
        </span>

      </div>

<UserTable
  users={filteredUsers}
  loading={loading}
  onUpdate={handleOpenUpdate}
   onDelete={handleOpenDelete}
    onBlock={handleBlockUser}
/>
    

<UpdateUserModal
  isOpen={updateModal}
  onClose={handleCloseUpdate}
  user={selectedUser}
  onSave={handleSave}
/>

<DeleteUserModal
  isOpen={deleteModal}
  onClose={handleCloseDelete}
  user={selectedUser}
  onDelete={handleDelete}
/>
    </div>
  );
}