/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 2017/7/5
 * Time: 下午3:36
 */

export function setItem(key, value) {
  if (key && value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export const getItem = (key) => {
  return new Promise((resolve, reject) => {
    if(localStorage.getItem(key)) {
      resolve(JSON.parse(localStorage.getItem(key)));
    } else {
      reject(new Error(`no search value about ${key}`));
    }
  });
};

export function clearItem(keys) {
  localStorage.removeItem(keys);
}

export function clearAllItem(keys) {
  localStorage.clear();
}