import { NextFunction, Request, Response } from "npm:express@4.18.2";

export class AuthController {
    signUp(req: Request, res: Response, next: NextFunction) {
        return res.status(200).json({ message: 'Hello Sign up endpoint' })
    }
}