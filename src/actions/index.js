/**
 * Created Date: 2017/12/21
 * Author: luojinghui
 */
export const login = (data) => {
  return dispatch => {
    dispatch({
      type: 'logined',
      data: {
        status: "200",
        message: "login success",
        user: {
          userName: "qqq",
          userId: "1"
        },
        token: "123123123123"
      }
    });
  };
};