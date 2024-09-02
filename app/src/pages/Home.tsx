import { FC } from 'react';
import UserService from '../api/user.service';  
import { useLoaderData } from 'react-router-dom';
import { IUser } from '../types/user.type';
import UserTable from '../components/UserTable';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectSearchTerm, setSearchTerm } from '../store/user/userSlice';

export const userLoader = async () => {
  const data = await UserService.getUsers()
  return data
}

const Home: FC = () => {
  const data = useLoaderData() as IUser[]
  const searchTerm = useAppSelector(selectSearchTerm);
  const dispatch = useAppDispatch();

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
        placeholder="Search by name, username, email or phone..."
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        className="mb-4 mt-2 px-4 py-2 border border-gray-300 rounded"
      />
      <UserTable users={filteredUsers}/>
    </>
  );
}

export default Home;