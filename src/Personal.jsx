const Personal = (props) => {
  return ( 
    <div>
      <h1>Personal</h1>
        <ul>
          <>
          <li>{props.card.username}</li>
          <li>{props.card.phone}</li>
          </>
        </ul>
      </div>
  );
}

export default Personal;