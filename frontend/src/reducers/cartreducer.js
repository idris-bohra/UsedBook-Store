let initialvalue = null

export const cartreducer = (state = initialvalue , action)=>{

    switch(action.type){
        case "cartaction" : return action.payload
        default : return state
    }
}