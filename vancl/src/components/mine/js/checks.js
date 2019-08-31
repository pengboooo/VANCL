export class Checks {
  isTel (num) {
    let phone = /^[1][3,4,5,7,8][0-9]{9}$/
    if (phone.test(num)) {
      return true
    } else {
      return false
    }
  }
  isPwd (num) {
    let upwd = /^(\w){6,20}$/
    if (upwd.test(num)) {
      return true
    } else {
      return false
    }
  }
}
