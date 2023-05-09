import { NextFunction } from 'express';
import { AnyObject } from 'mongoose';
import { nextTick } from 'process';
import z from 'zod';

const validateSchema = (schema: AnyObject) => (req:Request, res:Response, next:NextFunction) {

}