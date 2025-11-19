import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button ,Input} from '@heroui/react'
import {schemaChangePassword} from '../Schema/SchemaLogin.js'
import { changePasswordApi } from '../Services/UserServices.js';
export default function ChangePassword({setStatePassword}) {
  const [isLoadingChange, setIsLoadingChange] = useState(false);
  const [errorApi, setErrorApi] = useState(null);
let {handleSubmit,register,formState:{errors,touchedFields}}  = useForm({
    defaultValues:{
      password:'',
      newPassword:''
    },
    resolver:zodResolver(schemaChangePassword),
    mode:'onBlur',
    reValidateMode:'onBlur'
  })
 async function changePassword(userData) {
    setIsLoadingChange(true);

    const res = await changePasswordApi(userData);
    if(res.message){
      setStatePassword(false);
    }else{
      setErrorApi(res.error)
    }
    setIsLoadingChange(false);
  }
  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-40">
      <div className="text-center bg-white dark:bg-gray-900 rounded-lg p-4 w-full max-w-lg">

        <div className="flex justify-between items-center mb-3">
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">Change Password</h1>
          <button onClick={()=>{setStatePassword(false)}} className="text-gray-500 text-2xl cursor-pointer">&times;</button>
        </div>

      <form onSubmit={handleSubmit(changePassword)} className="flex flex-col gap-4">

              <Input
                type="password"
                label="Password"
                {...register("password")}
                isInvalid={Boolean(errors.password && touchedFields.password)}
                errorMessage={errors.password?.message}
                placeholder="Enter Your Password"
                isRequired
              />

              <Input
                type="password"
                label="New Password"
                {...register("newPassword")}
                isInvalid={Boolean(errors.newPassword && touchedFields.newPassword)}
                errorMessage={errors.newPassword?.message}
                placeholder="Enter Your New Password"
                isRequired
              />

              <Button
                type="submit"
                isLoading={isLoadingChange}
                disabled={isLoadingChange}
                className={`bg-cyan-400 hover:bg-cyan-500 dark:text-white text-base ${
              isLoadingChange
                ? 'bg-blue-400 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600'
            } dark:bg-gray-950 dark:hover:bg-gray-900`}
                variant="ghost"
              >
                Save
              </Button>
              </form>
              {errorApi && <span className=" text-red-700 dark:text-red-400 my-2">{errorApi}</span>}
      </div>
    </div>
    </>
  )
}
