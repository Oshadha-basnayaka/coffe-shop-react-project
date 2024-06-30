import {Router} from "express";
import { SaveOrder } from "../services/order.service";

const order = Router();

order.post('/',SaveOrder);

export default order