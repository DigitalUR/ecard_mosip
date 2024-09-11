const StudentCard = () => {
    return ( <>
    <div class="container flex_row">
    <div style={{padding:"20px", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <img class="profile_image" src="images/...?>" style={{marginTop: 0}} alt="hello"/>
    </div>
    <div>
        <h3 style={{marginLeft: "28px", fontWeight: "bold"}} class="title-1">Basic Information</h3>
    <br/>
    <table class="table-1">
        <tr>
        
            <td>Names</td>
            <td>Reg No</td>
            <td>School</td>
            <td>Faculty</td>
       
        </tr>

        <tr>
           
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
       
        </tr>
 
    </table>

    <table class="table-2">
        <tr>
            <td>Phone Number</td>
            <td>...</td>
        </tr>
        <tr>
            <td>Email</td>
            <td>...</td>
        </tr>
    </table> 

    <div class="status_div">
        
        <div style={{fontWeight: "bolder"}}>Current Student</div>
    </div>
    </div>
    
</div>

    </> );
}
 
export default StudentCard;