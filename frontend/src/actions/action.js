import axios from 'axios'
import {useState} from 'react-dom'

export const loginaction = (user)=>{
    return {
        type : 'loginaction',
        payload : user
    }
}

export const logoutaction = ()=>{
    return {
        type : 'logoutaction',
        payload : {}
    }
}

export const signupaction = (signupuser)=>{
    return {
        type : 'signupaction',
        payload : signupuser
    }
}

export const otpaction = (otps)=>{
    return{
        type : 'otpaction',
        payload : otps
    }
}

export const selleraction = (seller)=>{
    return{
        type : 'selleraction',
        payload : seller
    }
}

export const sellerlogoutaction = ()=>{
    return{
        type : 'sellerlogoutaction',
        payload : null
    }
}

export const catproductsaction = (products , category)=>{

    return{
        type : 'catproductsaction',
        category : category,
        payload : products
    }
}

export const bigcardaction = (result)=>{

    return{
        type : 'bigcardaction',
        payload : result
    }
}

export const cartaction = (result)=>{

    return{
        type : 'cartaction',
        payload : result
    }
}







