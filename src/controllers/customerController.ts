import { Response, Request, NextFunction } from "express";
import Customer from "src/models/model";
import customerRepo from "src/repositories/customerRepo";

async function getCustomer(req: Request, res: Response, next: NextFunction){
    const id = req.params.id;
    const customer = await customerRepo.getCustomer(parseInt(id!));

    if (customer){
        res.json(customer)
    }
    else{
        res.sendStatus(404)
    }
}

async function getCustomers(req: Request, res: Response, next: NextFunction) {
    const customers = await customerRepo.getCustomers();

    res.json(customers)
}