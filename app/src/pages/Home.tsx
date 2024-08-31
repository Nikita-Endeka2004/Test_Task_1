import { FC, useState } from 'react';
import UserService from '../api/user.service';  
import { useLoaderData } from 'react-router-dom';
import { IUser } from '../types/user.type';
import UserTable from '../components/UserTable';

export const userLoader = async () => {
  const data = await UserService.getUsers()
  return data
}

const Home: FC = () => {
  const data = useLoaderData() as IUser[]
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredUsers = data.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone.includes(searchTerm)
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search by name, username or email..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 mt-2 px-4 py-2 border border-gray-300 rounded"
      />
      <UserTable users={filteredUsers}/>
    </>
  );
}

export default Home;