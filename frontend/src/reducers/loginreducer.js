const initialvalue = null;

export const loginreducer = (state = initialvalue , action)=>{

    switch(action.type){
        case "loginaction" : return action.payload
        case "logoutaction" : return null
        default : return state
    }
}

