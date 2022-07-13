let initialvalue = null;

export const catproductsreducer = (state = initialvalue , action)=>{
    
    switch(action.type){
        case "catproductsaction" : return {'result' : action.payload , 'category' : action.category}
        default : return state
    }
}