import React from 'react';
import membersData from "./Member.json";

const Member = (props) => {
  let members = membersData.sort(() => 0.5 - Math.random()).slice(0,5);
return (
  <div style={props.memberStyle}>
    <h2>Members</h2>
    <ul>
     {members.map(member => (
     <li>
     Name: {member.name} <br />
     Age: {member.age} <br />
     Company: {member.company} <br />
     Phone: {member.phone} <br />
     Email: {member.email} <br />
     <hr />
     </li>
     )
     )}
    </ul>
  </div>
);
};

export default Member;