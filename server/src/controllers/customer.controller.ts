
import Router from 'express'

import { saveCustomer } from '../services/customer.service';

const customer = Router();

customer.post('/', saveCustomer);

export default customer;
