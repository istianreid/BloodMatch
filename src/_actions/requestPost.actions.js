
import {RequestPostService} from "../_services";
import {requestPostConstants} from "../_constants"


const addRequestPostAction = (details) => {
  
  return (dispatch) => {

    RequestPostService.addRequestPost(details).then((res) => {

      console.log(res)

      if (res.type === "success") {
        dispatch({
          type: requestPostConstants.REQUESTPOST_CREATE_SUCCESS,
          errors: {
            type: "warning",
            message: "success",
          }
        });
      }
      else if (res.type === "error") {
        dispatch({
          type: requestPostConstants.REQUESTPOST_CREATE_FAIL,
          errors: {
            type: "warning",
            message: "error",
          }
        });
      } 
    })
  }
}


export const requestPostActions = {
  addRequestPostAction
};
