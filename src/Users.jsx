import Personal from "./Personal";
import Company from "./Company";

const Users = (props) => {
  return (
    <div>
    {props.users.map(user =>
      <>
        <h1>Contact Info for {user.name}</h1>

        <Personal key={user.username} card={user}/>
        <Company key={user.company} card={user}/>
      </>
      )}
    </div>
  );
}
export default Users;