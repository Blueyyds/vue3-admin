/**
 * 用户表信息
 */
interface User {
  // 主键
  id: number;
  // 用户名
  username: string;
  // 密码
  password: string;
  // 真实姓名
  realName: string;
  // 性别
  gender: string;
  // 地址
  address: string;
  // 手机号
  phone: string;
  // 角色
  role: string;
  // 年龄
  age: string;
  // 是否删除(0-未删, 1-已删)
  isDeleted: number;
}
