import {loginreducer} from "./loginreducer" 
import {signupreducer} from "./signupreducer" 
import { otpreducer } from "./otpreducer"
import { sellerreducer } from "./sellerreducer"
import { catproductsreducer } from "./catproductsreducer"
import { bigcardreducer } from "./bigcardreducer"
import {cartreducer} from "./cartreducer"

import { combineReducers } from "redux"

export const rootReducer = combineReducers({
    loginreducer, signupreducer, otpreducer,sellerreducer,catproductsreducer,bigcardreducer,cartreducer
    // logoutreducer  // when we dispatch any dispatch function then it dispatched to every function
})

