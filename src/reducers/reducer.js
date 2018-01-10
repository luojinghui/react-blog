/**
 * Created Date: 2017/12/21
 * Author: luojinghui
 */
export const login = (state = {
  data: "hello world"
}, action) => {
  switch (action.type) {
    case 'logined':
      return action.data;
    default :
      return state;
  }
};