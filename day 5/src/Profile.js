import React from "react";
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
import pro from './proicon.jpeg';
import './profile.css';
function Profile(){
return(
<div>
<div className="picon">
<img src={pro} width={100} height={100}/>
<h3>UserName:</h3>
<h5>Rohit</h5>
<h3>Email</h3>
<h5>hitman@bcci.com</h5>
</div>

</div>
    );

}
export default Profile;