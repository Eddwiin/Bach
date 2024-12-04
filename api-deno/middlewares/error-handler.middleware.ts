import { type NextFunction, type Request, type Response } from "npm:express@4.18.2";

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    return res.status(Number(err.name)).json({
        errors: err.message
    })
}

export default errorHandler;