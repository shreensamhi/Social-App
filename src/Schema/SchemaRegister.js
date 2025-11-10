import * as zod from 'zod'

export const schema= zod.object({
  name:zod.string().nonempty('name is required').min(3,'name at least 3 char').max(20,'name at most 20 char'),
  email:zod.string().nonempty('email is required').regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,'Invalid email format'),
  password:zod.string().nonempty('password is required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,'Password must be 6+ characters with uppercase, lowercase, number & symbol.'),
  rePassword:zod.string().nonempty('rePassword is required'),
  dateOfBirth:zod.coerce.date('date is required').refine((value)=>{
    const userAge = value.getFullYear();
    const now = new Date().getFullYear();
    const age = now - userAge;    
    return age>=18
  },'age less than 18'),
  gender:zod.string().nonempty('password is required')
}).refine((data)=>data.password === data.rePassword , {path:['rePassword'],message:'repassword and password must be same'})

