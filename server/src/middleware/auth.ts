import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // const token = req.headers['authorization']?.split(' ')[1];
  // Access the token from cookies
  const token = req.cookies.token;
if (!token){
   res.status(401).json({ message: 'Access Denied: no token provided' });
   return 
  }
 const secretToken=process.env.JWT_SECRET
 if(!secretToken){
  res.status(404).json({message:'JWT_SECRET not found'})
  return
 }
  const user=jwt.verify(token,secretToken)
   if(!user){    
    return 
   }
    next();

};
