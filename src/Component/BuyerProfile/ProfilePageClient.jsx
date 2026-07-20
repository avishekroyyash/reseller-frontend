"use client";

import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";
import ProfileForm from "./ProfileForm";


export default function ProfilePageClient({user}){

  return(
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:.5}}
      className="min-h-screen bg-orange-50 dark:bg-gray-950 py-6 sm:py-10 transition-colors duration-500"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-5">

        <motion.div
          initial={{opacity:0,y:-20}}
          animate={{opacity:1,y:0}}
          transition={{duration:.5}}
          className="mb-8 sm:mb-10"
        >

          <h1 className="text-3xl sm:text-4xl font-bold text-orange-600 dark:text-orange-400">
            My Profile
          </h1>

          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
            Manage your personal information
          </p>

        </motion.div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-8">


          <motion.div
            initial={{opacity:0,x:-30}}
            animate={{opacity:1,x:0}}
            transition={{duration:.5}}
          >

            <ProfileCard user={user}/>

          </motion.div>


          <motion.div
            initial={{opacity:0,x:30}}
            animate={{opacity:1,x:0}}
            transition={{duration:.5}}
            className="lg:col-span-2"
          >

            <ProfileForm user={user}/>

          </motion.div>


        </div>


      </div>


    </motion.div>
  );
}