let initialvalue = null

export const bigcardreducer = (state = initialvalue , action)=>{

    switch(action.type){
        case "bigcardaction" : return action.payload
        default : return state
    }
}