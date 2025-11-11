export const increament = (value)=>{
      return {
        type : "INCREMENT",
        payload : value
      };
}
export const decreament = (value)=>{
    return {
      type : "DECREMENT",
      payload : value
    };
}