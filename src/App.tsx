import React, { useState } from 'react';
import { DragContext, DragArea, DragItem } from './components';
import users from './users.json';

type UserProps = {
    id: number;
    name: string;
    email: string;
};

const UserItem = ({ name, email, id }: UserProps) => {
    return (
        <li className='user'>
            <div className='user-id'>
                <p className='avatar'>{id}</p>
            </div>
            <div className='user-data'>
                <span className='user-name'>{name}</span>
                <p>{email}</p>
            </div>
        </li>
    );
};

export const App = () => {
    const [exampleUsers, setExampleUsers] = useState(users);

    return (
        <DragContext>
            <ul className='users-wrapper'>
                <DragArea items={exampleUsers} onChange={setExampleUsers}>
                    {exampleUsers.map((user, i) => (
                        <DragItem index={i} key={user.id}>
                            <UserItem
                                id={user.id}
                                name={user.firstName}
                                email={user.email}
                            />
                        </DragItem>
                    ))}
                </DragArea>
            </ul>
        </DragContext>
    );
};

export default App;
