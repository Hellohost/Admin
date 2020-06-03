import React from 'react';
import { Create, List, Datagrid, TextField, EmailField, Edit, UrlField, SimpleForm, TextInput, Filter, ReferenceInput, SelectInput } from 'react-admin';
import MyUrlField from './MyUrlField';

const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <ReferenceInput label='User' source='userId' reference='users' allowEmpty>
      <SelectInput optionText='name' />
    </ReferenceInput>
  </Filter>
);
export const UserList = props => (
  <List filters={<UserFilter />} {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='name' />
      <TextField source='username' />
      <EmailField source='email' />
      <TextField source='address.street' label='Address' />
      <TextField source='phone' />
      <MyUrlField source="website" />
      <TextField source='company.name' label='Company' />
    </Datagrid>
  </List>
);

export const UserEdit = props => (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='name' />
        <TextInput source='username' />
        <TextInput source='email' />
        <TextInput source='address.street' label='Address' />
        <TextInput source='phone' />
        <UrlField source='website' />
        <TextInput source='company.name' label='Company' />
      </SimpleForm>
    </Edit>
  );
  export const UserCreate = props => (
    <Create {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput source='username' />
        <TextInput source='email' />
        <TextInput source='address.street' label='Address' />
        <TextInput source='phone' />
        <UrlField source='website' />
        <TextInput source='company.name' label='Company' />
      </SimpleForm>
    </Create>
  );