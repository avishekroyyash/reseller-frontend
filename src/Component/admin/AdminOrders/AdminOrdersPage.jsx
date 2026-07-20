"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiRefreshCw } from "react-icons/fi";

import OrderToolbar from "./OrderToolbar";
import OrderStats from "./OrderStats";
import EmptyState from "@/Component/SellerOrders/EmptyState";
import OrderTable from "./OrderTable";
import OrderDetailsModal from "./OrderDetailsModal";
import UpdateStatusModal from "./UpdateStatusModal";
import DisputeModal from "./DisputeModal";
import LoadingSkeleton from "./LoadingSkeleton";

import { GetAllOrders } from "@/lib/apiGetCall/GetAllOrder";


export default function AdminOrdersPage() {

  const [disputeOpen,setDisputeOpen]=useState(false);
  const [statusModalOpen,setStatusModalOpen]=useState(false);
  const [selectedOrder,setSelectedOrder]=useState(null);
  const [isDetailsOpen,setIsDetailsOpen]=useState(false);

  const [orders,setOrders]=useState([]);
  const [loading,setLoading]=useState(true);

  const [search,setSearch]=useState("");
  const [statusFilter,setStatusFilter]=useState("all");
  const [paymentFilter,setPaymentFilter]=useState("all");
  const [sortBy,setSortBy]=useState("newest");



  const loadOrders=async()=>{

    try{

      setLoading(true);

      const data=await GetAllOrders();

      setOrders(Array.isArray(data)?data:[]);

    }finally{

      setLoading(false);

    }

  };



  useEffect(()=>{
    loadOrders();
  },[]);





  const handleViewOrder=(order)=>{
    setSelectedOrder(order);
    setIsDetailsOpen(true);
  };


  const handleUpdate=(order)=>{
    setSelectedOrder(order);
    setStatusModalOpen(true);
  };


  const handleDispute=(order)=>{
    setSelectedOrder(order);
    setDisputeOpen(true);
  };






  const filteredOrders=useMemo(()=>{

    let result=[...orders];


    if(search){

      const text=search.toLowerCase();

      result=result.filter(order=>

        order?.productInfo?.productTitle
        ?.toLowerCase()
        .includes(text)

        ||

        order?.buyerInfo?.name
        ?.toLowerCase()
        .includes(text)

        ||

        order?.sellerInfo?.name
        ?.toLowerCase()
        .includes(text)

      );

    }



    if(statusFilter!=="all"){

      result=result.filter(
        order=>order.orderStatus===statusFilter
      );

    }




    if(paymentFilter!=="all"){

      result=result.filter(
        order=>order.paymentStatus===paymentFilter
      );

    }





    result.sort((a,b)=>{

      if(sortBy==="newest"){

        return new Date(b.createdAt)-new Date(a.createdAt);

      }

      return new Date(a.createdAt)-new Date(b.createdAt);

    });



    return result;


  },[
    orders,
    search,
    statusFilter,
    paymentFilter,
    sortBy
  ]);





  if(loading){

    return <LoadingSkeleton/>;

  }




  return (

    <motion.section

      initial={{opacity:0,y:20}}

      animate={{opacity:1,y:0}}

      transition={{duration:.5}}

      className="min-h-screen space-y-6 p-4 sm:p-6 lg:p-8 bg-orange-50 dark:bg-gray-950 transition-colors duration-500"

    >



      {/* Header */}


      <motion.div

        initial={{opacity:0,x:-20}}

        animate={{opacity:1,x:0}}

        className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"

      >



        <div>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">

            Manage Orders

          </h1>


          <p className="text-gray-500 dark:text-gray-400 mt-1">

            Monitor every order across the marketplace.

          </p>


        </div>





        <button

          onClick={loadOrders}

          className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl transition w-full sm:w-fit"

        >

          <FiRefreshCw/>

          Refresh

        </button>



      </motion.div>







      {/* Toolbar */}



      <motion.div

        initial={{opacity:0,y:20}}

        animate={{opacity:1,y:0}}

        transition={{delay:.2}}

      >

        <OrderToolbar

          search={search}

          setSearch={setSearch}

          statusFilter={statusFilter}

          setStatusFilter={setStatusFilter}

          paymentFilter={paymentFilter}

          setPaymentFilter={setPaymentFilter}

          sortBy={sortBy}

          setSortBy={setSortBy}

        />

      </motion.div>








      {/* Stats */}


      <motion.div

        initial={{opacity:0,scale:.95}}

        animate={{opacity:1,scale:1}}

        transition={{delay:.3}}

      >

        <OrderStats orders={filteredOrders}/>

      </motion.div>







      {/* Table */}



      <motion.div

        initial={{opacity:0,y:30}}

        animate={{opacity:1,y:0}}

        transition={{delay:.4}}

        className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden transition-colors duration-500"

      >


      {
        filteredOrders.length===0

        ?

        <EmptyState/>

        :

        <OrderTable

          orders={filteredOrders}

          onView={handleViewOrder}

          onUpdate={handleUpdate}

          onDispute={handleDispute}

        />

      }


      </motion.div>








      {/* Modals */}


      <OrderDetailsModal

        isOpen={isDetailsOpen}

        order={selectedOrder}

        onClose={()=>{

          setIsDetailsOpen(false);

          setSelectedOrder(null);

        }}

      />




      <UpdateStatusModal

        isOpen={statusModalOpen}

        order={selectedOrder}

        onClose={()=>{

          setStatusModalOpen(false);

          setSelectedOrder(null);

        }}

        onSuccess={loadOrders}

      />




      <DisputeModal

        isOpen={disputeOpen}

        order={selectedOrder}

        onClose={()=>{

          setDisputeOpen(false);

          setSelectedOrder(null);

        }}

        onSuccess={loadOrders}

      />



    </motion.section>

  );

}