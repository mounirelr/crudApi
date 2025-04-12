


export default function User({user}){

    

    return <tr>
    <td>{user.id}</td>
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>{user.phone}</td>
    <td>
      <button className="btn btn-sm btn-primary me-2" data-id={user.id}>Edit</button>
      <button className="btn btn-sm btn-danger" data-id={user.id}>Delete</button>
    </td>
  </tr>
}