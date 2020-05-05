class User {
  constructor(
    // CustomerID,
    CustomerName,
    CustomerUsername,
    CustomerPassword,
    CustomerSex,
    CustomerBirthday,
    CustomerMail,
    CustomerTel,
    CustomerAdd
  ) {
    this.id = 0
    this.name = CustomerName
    this.username = CustomerUsername
    this.password = CustomerPassword
    this.sex = CustomerSex
    this.birthday = CustomerBirthday
    this.email = CustomerMail
    this.tel = CustomerTel
    this.address = CustomerAdd
    this.login = 0
  }

  addUserSQL() {
    let sql = `INSERT INTO CUSTOMER(CustomerName, CustomerUsername, CustomerPassword, CustomerSex, CustomerBirthday, CustomerMail, CustomerTel, CustomerAdd, CustomerLogin, CustomerJoinDate) \
                   VALUES('${this.name}', '${this.username}', '${this.password}', '${this.sex}', '${this.birthday}', '${this.email}', '${this.tel}', '${this.address}', 0, NOW())`
    return sql
  }

  updateUserByIdSQL(id) {
    let sql = `UPDATE CUSTOMER \
               SET CustomerName = '${this.name}', CustomerUsername = '${this.username}', CustomerPassword = '${this.password}', CustomerSex = '${this.sex}', CustomerBirthday = '${this.birthday}', CustomerMail = '${this.email}', CustomerTel = '${this.tel}', CustomerAdd = '${this.address}', CustomerLogin = ${this.login} \
               WHERE CustomerID =  ${id}`
    return sql
  }

  // static是與實例化無關
  static getUserByIdSQL(id) {
    let sql = `SELECT * FROM CUSTOMER WHERE CustomerID = ${id}`
    return sql
  }

  // static是與實例化無關
  static getUserByQuerySQL(query) {
    const where = []

    if (query.CustomerName) where.push(`CustomerName = '${query.CustomerName}'`)
    if (query.CustomerMail) where.push(`CustomerMail = '${query.CustomerMail}'`)
    if (query.CustomerSex) where.push(`CustomerSex = '${query.CustomerSex}'`)
    if (query.CustomerTel) where.push(`CustomerTel = '${query.CustomerTel}'`)
    if (query.CustomerAdd) where.push(`CustomerAdd = '${query.CustomerAdd}'`)
    if (query.CustomerUsername)
      where.push(`CustomerUsername = '${query.CustomerUsername}'`)
    if (query.CustomerBirthday)
      where.push(`CustomerBirthday = '${query.CustomerBirthday}'`)

    let sql = ''

    if (where.length)
      sql = `SELECT * FROM CUSTOMER WHERE ` + where.join(' AND ')
    else sql = `SELECT * FROM CUSTOMER`

    return sql
  }

  static deleteUserByIdSQL(id) {
    let sql = `DELETE FROM USERS WHERE CustomerID = ${id}`
    return sql
  }

  static getAllUserSQL() {
    let sql = `SELECT * FROM CUSTOMER`
    return sql
  }
}

export default User
