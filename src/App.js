import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList, UserEdit, UserCreate } from './users';
import { PostList, PostEdit, PostCreate } from './posts';
import authProvider from './authProvider'
import Dashboard from './Dashboard'




const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name='users' list={UserList} edit={UserEdit} create={UserCreate} />
    <Resource name='posts' list={PostList} edit={PostEdit} create={PostCreate} />
  </Admin>
);

export default App;
