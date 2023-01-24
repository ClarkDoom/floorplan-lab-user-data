const Company = (props) => {
  return ( 
    <div>
      <h1>Business</h1>
      <ul>
        <>
          <li>{props.card.company.name}</li>
          <li>{props.card.website}</li>
          <li>{props.card.email}</li>
        </>
      </ul>
    </div>
  );
}

export default Company;