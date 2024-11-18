import { Request, Response, NextFunction, RequestHandler } from 'express';
import { body, validationResult } from 'express-validator';

// Middleware to handle validation results
export const validate = (req: Request, res: Response, next: NextFunction): void => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }
    next();
};

// Validator for user registration
export const userRegistrationValidator:RequestHandler[] = [
    body('username')
        .notEmpty()
        .withMessage('Username required')
        .isString()
        .withMessage('Username must be a string')
        .isLength({ min: 3 })
        .withMessage('Username must be at least 3 characters long'),
    body('email')
        .notEmpty()
        .withMessage('Email is required')
        // .isEmail()
        // .withMessage('Email must be valid')
        .normalizeEmail(),    //Normalize email to lowercase
    body('password')
        .notEmpty()
        .withMessage('Password is required')
        .isLength({ min: 6 }),
        // .withMessage('Password must be at least 6 characters long'),
        // .matches(/[a-z]/)
        // .withMessage('Password must contain at least one lowercase letter')
        // .matches(/[A-Z]/)
        // .withMessage('Password must contain at least one uppercase letter')
        // .matches(/\d/)
        // .withMessage('Password must contain at least one number')
        // .matches(/[@$!%*?&]/)
        // .withMessage('Password must contain at least one special character'),
    validate
];

// Validator for user login
export const userLoginValidator = [
    body('email')
        .notEmpty()
        .withMessage('Email is required')
        // .isEmail()
        // .withMessage('Email must be valid')
        .normalizeEmail(),
    body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
    // .matches(/[a-z]/)
    // .withMessage('Password must contain at least one lowercase letter')
    // .matches(/[A-Z]/)
    // .withMessage('Password must contain at least one uppercase letter')
    // .matches(/\d/)
    // .withMessage('Password must contain at least one number')
    // .matches(/[@$!%*?&]/)
    // .withMessage('Password must contain at least one special character'),
    validate
];
