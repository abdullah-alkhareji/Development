import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PostList } from "../post";
import { CommentList } from "../comments";
import { UserList } from "../users";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} />
      <Resource name="comments" list={CommentList} />
      <Resource name="users" list={UserList} />
    </Admin>
  );
};

export default App;
