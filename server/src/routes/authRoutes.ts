import { Router } from 'express';
import { register, login, getAllUsers, getUserById, updateUser, deleteUserById } from '../controllers/authController';
import { userRegistrationValidator, userLoginValidator } from '../middleware/validators';

const router = Router();

router.post('/register', userRegistrationValidator, register);
router.post('/login', userLoginValidator, login);
router.get('/getAllUsers', getAllUsers);
router.get('/getUserById/:id', getUserById);
router.patch('/updateUser/:id', updateUser);
router.delete('/deleteUserById/:id', deleteUserById);

export default router;