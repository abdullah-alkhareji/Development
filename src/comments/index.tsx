import {
  Datagrid,
  EmailField,
  List,
  ReferenceField,
  TextField,
} from "react-admin";

export const CommentList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <ReferenceField source="postId" reference="posts">
          <TextField source="id" />
        </ReferenceField>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <TextField source="body" />
      </Datagrid>
    </List>
  );
};
