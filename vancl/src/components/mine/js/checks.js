export class Checks {
  isTel (num) {
    let phone = /^[1][3,4,5,7,8][0-9]{9}$/
    console.log(num)
    if (phone.test(num)) {
      return true
    } else {
      return false
    }
  }
  isPwd (num) {
    let upwd = /^[0-9 a-z]{6}$/
    if (upwd.test(num)) {
      return true
    } else {
      return false
    }
  }
}
