import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
//import Create from "../customComponents/Create";

import {
  Create,
  List,
  Edit,
  Datagrid,
  ReferenceField,
  TextField,
  EditButton,
  DisabledInput,
  LongTextInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  Filter,
  Responsive,
  SimpleList,
  Show,
  SimpleShowLayout,
  RichTextField,
  DateField
} from "react-admin/lib";

export const CustomerList = props => (
  <List {...props} title="Lista de clientes" filters={<CustomerFilter />}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.rfc}
          secondaryText={record => record.razonSocial}
          tertiaryText={record => "otrocampo"}
          linkType="show"
        />
      }
      medium={
        <Datagrid>
          {/*<TextField source="id" />*/}
          {/*<ReferenceField label="User" source="userId" reference="users">
              <TextField source="name" />
        </ReferenceField>*/}
          <TextField source="rfc" />
          <TextField source="razonSocial" />
          <EditButton />
        </Datagrid>
      }
    />
  </List>
);

const CustomerTitle = ({ record }) => {
  return <span>Cliente {record ? `"${record.id}"` : ""}</span>;
};

export const CustomerCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="show">
      <TextInput label="RFC" source="rfc" />
      <TextInput source="razonSocial" />
    </SimpleForm>
  </Create>
);

export const CustomerShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField label="RFC" source="rfc" />
      <TextField source="razonSocial" />
    </SimpleShowLayout>
  </Show>
);

export const CustomerEdit = props => (
  <Edit title={<CustomerTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />

      {/*<ReferenceInput label="User" source="userId" reference="users">
        <SelectInput optionText="name" />
</ReferenceInput>*/}
      <TextInput label="RFC" source="rfc" />
      <TextInput source="razonSocial" />
    </SimpleForm>
  </Edit>
);

const CustomerFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="text" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);
