import  {LIST_PRODUCT} from '../../action/types'
const intitalState={
    products:[]
}

const product = (state=intitalState,action)=>{
    switch (action.type) {
        case LIST_PRODUCT:
            {
                return {...state,products:action.payload}
            }
        default:return state;
    }
}
export default product;