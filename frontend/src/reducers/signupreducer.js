let initialvalue = {}

export const signupreducer = (state = initialvalue , action)=>{

    switch(action.type){
        case "signupaction" : return action.payload
        default : return state
    }
}