let initialvalue = null

export const sellerreducer = (state = initialvalue , action)=>{

    switch(action.type){
        case "selleraction" : return action.payload
        case "sellerlogoutaction" : return action.payload
        default : return state
    }
}