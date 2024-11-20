import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import axios, { responseEncoding } from 'axios';


const prisma = new PrismaClient();

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    //creating user with Prisma
    const user = await prisma.user.create({
      data: {
        id,
        email,
        username,
        password: hashedPassword,
      },
    });
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email }, });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(400).json({ message: 'Invalid credentials' });
      return;
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    res.cookie('token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 120), 
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });

    res.status(200).json({ message: 'Login successful',token });
    
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
    console.error(error);
  }
}


export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

// delete
export const deleteUserById = async (req:Request, res:Response) =>{
  const {id} = req.params;

  try{
    await prisma.user.delete({where:{id:Number(id)}})
    res.json({message:'User deleted successfully'})
  }catch(error:any){
    if(error.code ==='p2025'){
      res.status(404).json({message:'User not found'});
    }else{
      res.status(500).json({message:'Error deleting user', error});
    }
  }
}







//Testing Stock APIS
export const checkAPI = async (req:Request, res:Response)=>{
  try{
    const options={
      method:'GET',
      url:`https://api.finage.co.uk/last/stock/AAPL?apikey=${process.env.FINAGEAPI_KEY}`,
      json:true
    };

    const response = await axios.request(options);
    //return data in json format
    res.json(response.data);  

  }catch(error){
    console.error('API Error:', error);
    res.status(500).json({error:'Error fetching the data'})
  }
}


export const getStockData = async (req:Request, res:Response)=>{
  try{
    const stockSymbol = req.params.symbol || 'AAPL';
    const apiUrl = `https://api.finage.co.uk/last/stock/${stockSymbol}?apikey=${process.env.FINAGEAPI_KEY}`;

    const response = await axios.get(apiUrl);

    const {symbol, ask, asize, bid, bsize, timestamp} = response.data;

    const formattedTimeStamp = new Date(timestamp).toLocaleString();

    res.json({
      symbol,
      askPrice :ask,
      askSize: asize,
      bidPrice: bid,
      bidSize:bsize,
      lastUpdated: formattedTimeStamp,
    });

  }catch(error){
    console.error('Error fetching stock data:', error);
    res.status(500).json({message:'Error fetching stock data', error})
  }
}

export const checkServerRunning = async(req:Request, res:Response) =>{
  res.send('Server running ...👍👍')
}