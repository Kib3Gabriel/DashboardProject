import { Router } from 'express';
import { register, login, getAllUsers, deleteUserById, checkAPI, getStockData } from '../controllers/authController';
import { userRegistrationValidator, userLoginValidator } from '../middleware/validators';
import {authenticateToken} from '../middleware/auth';

const router = Router();

router.post('/register', userRegistrationValidator, register);
router.post('/login',  userLoginValidator,  login);
router.get('/getAllUsers', authenticateToken, getAllUsers);
router.post('/delete/:id',authenticateToken, deleteUserById);

router.get('/check', checkAPI);
router.get('/getData', getStockData)


export default router;