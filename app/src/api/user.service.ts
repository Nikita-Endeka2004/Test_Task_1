import { IUser } from '../types/user.type';
import HttpService from './http.service';

class UserService extends HttpService {
  static async getUsers(): Promise<any> {
    const service = new UserService();
    return await service.get({
      url: 'users',
    });
  }

  static async updateUser(user: IUser): Promise<any> {
    const service = new UserService();
    return await service.put({
      url: `users/${user.id}`,
      data: user,
    });
  }

  static async createUser(user: IUser): Promise<any> {
    const service = new UserService();
    return await service.post({
      url: 'users',
      data: user,
    });
  }

  static async deleteUser(userId: number): Promise<any> {
    const service = new UserService();
    return await service.delete({
      url: `users/${userId}`,
    });
  }
}

export default UserService