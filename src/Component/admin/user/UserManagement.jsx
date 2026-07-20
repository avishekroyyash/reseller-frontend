"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

import UserToolbar from "./UserToolbar";
import UserTable from "./UserTable";
import UpdateUserModal from "./UpdateUserModal";
import DeleteUserModal from "./DeleteUserModal";

import {
  AdminDeleteUserData,
  AdminUpdateUserData,
  AdminUserStatusUpdate,
} from "@/lib/action/AdminUpdateDelete";


export default function UserManagement({ initialUsers }) {


  const [selectedUser,setSelectedUser]=useState(null);

  const [updateModal,setUpdateModal]=useState(false);
  const [deleteModal,setDeleteModal]=useState(false);

  const [users,setUsers]=useState(initialUsers || []);

  const [loading,setLoading]=useState(false);


  const [search,setSearch]=useState("");
  const [role,setRole]=useState("all");
  const [status,setStatus]=useState("all");



  const handleOpenUpdate=(user)=>{
    setSelectedUser(user);
    setUpdateModal(true);
  };


  const handleCloseUpdate=()=>{
    setSelectedUser(null);
    setUpdateModal(false);
  };



  // UPDATE USER

  const handleSave=async(updatedUser)=>{

    const update={
      name:updatedUser.name,
      role:updatedUser.role,
      status:updatedUser.status,
    };


    const result=await AdminUpdateUserData(
      updatedUser._id,
      update
    );


    if(result.modifiedCount>0){

      toast.success("User updated successfully");


      setUsers(prev=>
        prev.map(user=>
          user._id===updatedUser._id
          ?
          {
            ...user,
            ...update
          }
          :
          user
        )
      );


      handleCloseUpdate();

    }

  };
  // DELETE MODAL

  const handleOpenDelete=(user)=>{
    setSelectedUser(user);
    setDeleteModal(true);
  };


  const handleCloseDelete=()=>{
    setSelectedUser(null);
    setDeleteModal(false);
  };

  // DELETE USER

  const handleDelete=async(user)=>{

    try{

      const result=
      await AdminDeleteUserData(user?._id);


      if(result.deletedCount>0){

        toast.success("User deleted successfully");


        setUsers(prev=>
          prev.filter(
            item=>item._id!==user?._id
          )
        );


        handleCloseDelete();

      }


    }catch(error){

      toast.error("Delete failed");

    }

  };


  const handleBlockUser=async(user)=>{

    try{

      const newStatus=
      user.status==="active"
      ?
      "blocked"
      :
      "active";

      const result=
      await AdminUserStatusUpdate(
        user._id,
        newStatus
      );

      if(result.modifiedCount>0){


        toast.success(
          newStatus==="blocked"
          ?
          "User blocked"
          :
          "User unblocked"
        );


        setUsers(prev=>
          prev.map(item=>
            item._id===user._id
            ?
            {
              ...item,
              status:newStatus
            }
            :
            item
          )
        );


      }



    }catch(error){

      toast.error("Status update failed");

    }


  };

  const filteredUsers=useMemo(()=>{


    return users.filter(user=>{


      const keyword=
      search.toLowerCase();



      const searchMatch=
      user.name?.toLowerCase()
      .includes(keyword)
      ||
      user.email?.toLowerCase()
      .includes(keyword);



      const roleMatch=
      role==="all"
      ||
      user.role?.toLowerCase()
      ===
      role.toLowerCase();



      const statusMatch=
      status==="all"
      ||
      user.status?.toLowerCase()
      ===
      status.toLowerCase();



      return (
        searchMatch &&
        roleMatch &&
        statusMatch
      );


    });


  },[
    users,
    search,
    role,
    status
  ]);


  return (

    <motion.div

      initial={{
        opacity:0,
        y:30
      }}

      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        duration:0.5
      }}

      className="min-h-screen bg-orange-50 dark:bg-gray-950 p-4 sm:p-6 transition-colors duration-300"

    >

      {/* HEADER */}

      <motion.div

        initial={{
          opacity:0,
          x:-30
        }}

        animate={{
          opacity:1,
          x:0
        }}

        className="mb-8"

      >
        <h1 className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400">
          Manage Users
        </h1>


        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Admin can monitor and control platform users.
        </p>


      </motion.div>

      {/* FILTER */}


      <UserToolbar

        search={search}
        setSearch={setSearch}

        role={role}
        setRole={setRole}

        status={status}
        setStatus={setStatus}

      />


      {/* COUNT */}


      <motion.div

        initial={{
          opacity:0,
          scale:0.8
        }}

        animate={{
          opacity:1,
          scale:1
        }}

        className="my-5"

      >

        <span className="inline-flex items-center rounded-full bg-orange-100 dark:bg-orange-900 px-4 py-2 text-orange-700 dark:text-orange-300 font-semibold">

          Total Users : {filteredUsers.length}

        </span>


      </motion.div>






      {/* TABLE */}


      <UserTable

        users={filteredUsers}

        loading={loading}

        onUpdate={handleOpenUpdate}

        onDelete={handleOpenDelete}

        onBlock={handleBlockUser}

      />








      {/* MODALS */}


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



    </motion.div>

  );

}