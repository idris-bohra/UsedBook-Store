let initialvalue = {}

export const otpreducer = (state = initialvalue , action)=>{

    switch(action.type){
        case "otpaction" : return action.payload
        default : return state
    }
}