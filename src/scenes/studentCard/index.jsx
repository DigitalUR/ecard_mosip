import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Base64Image from '../../components/base64Image';
import Navbar from '../navbar';
import { jwtDecode } from 'jwt-decode';

const StudentCard = () => {
    const { data: encodedData } = useParams(); // Access the JWT parameter
    const [image, setImage] = useState();
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
    
    // let encodedDataArray = ["eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9", ...encodedData.split(".")]
    // console.log("mbaduko ",encodedDataArray)

    let decodedData;

    try {
        decodedData = jwtDecode(encodedData); // Decode the JWT
        console.log(decodedData);
    } catch (error) {
        console.error('Invalid data', error);
        decodedData = {}; // Set default empty object on error
    }

    if(decodedData.picture){
        fetch(`https://ecard-backend.onrender.com/oath2/getImage?imageFileName=${decodedData.picture}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the response body as JSON
            data = response.json()
            setImage(data.picture)
            // return response.json();
        })
        .then(data => {
            if (dataCountConf) {
                // console.log(data);
                setDataCount(data);
                setDataCountConf(false);
            }
        })
        .catch(error => console.log(error))
    }



    return (
        <>
            <Navbar profileName = {decodedData.name}/>
            <div className="container flex_row">
                <div style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Base64Image imageData = {decodedData.image} />
                </div>
                <div>
                    <h3 style={{ marginLeft: '28px', fontWeight: 'bold' }} className="title-1">Basic Information</h3>
                    <br />
                    <table className="table-1">
                        <tbody>
                            <tr>
                                <td>Names</td>
                                <td>Reg No</td>
                                <td>School</td>
                                <td>Faculty</td>
                            </tr>
                            <tr>
                                <td>{decodedData.name || '...'}</td>
                                <td>{decodedData.regno || '...'}</td>
                                <td>{decodedData.school || '...'}</td>
                                <td>{decodedData.school || '...'}</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="table-2">
                        <tbody>
                            <tr>
                                <td>Phone Number</td>
                                <td>{decodedData.phone_number || '...'}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{decodedData.email || '...'}</td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: 'transparent' }}> &nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Date of birth</td>
                                <td>{decodedData.birthdate || '...'}</td>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td>{decodedData.address.locality || '...'}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="status_div">
                        <div style={{ fontWeight: 'bolder',textAlign:'center' }}>
                        {decodedData.active ? 'Current Student':  'Not Student'}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentCard;
