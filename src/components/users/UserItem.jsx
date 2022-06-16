import React from 'react';
import { Link } from 'react-router-dom';

export const UserItem = ({ user: { login, avatar_url } }) => {
 return (
  <div className='card shadow-md comnpact side bg-bases bases-100'>
   <div className='flex-row item-center space-x-4 card-body'>
    <div>
     <div className='avatar'>
      <div className='rounded-full shadow w-14 h-14'>
       <img src={avatar_url} alt='Profile' />
      </div>
     </div>
    </div>
    <h2 className='card-title'>{login}</h2>
    <Link className='text-base-content text-opacity-40' to={`/user/${login}`}>
     View Profile
    </Link>
   </div>
  </div>
 );
};