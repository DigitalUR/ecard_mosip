import React from 'react';
import { useParams } from 'react-router-dom';
import Base64Image from '../../components/base64Image';
import Navbar from '../navbar';
import { jwtDecode } from 'jwt-decode';

const StudentCard = () => {
    const { data: encodedData } = useParams(); // Access the JWT parameter
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
    
    let encodedDataArray = ["eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9", ...encodedData.split(".")]
    console.log("mbaduko ",encodedDataArray)

    let decodedData;

    try {
        decodedData = jwtDecode(encodedData); // Decode the JWT
        console.log(decodedData);
    } catch (error) {
        console.error('Invalid data', error);
        decodedData = {}; // Set default empty object on error
    }

    decodedData.image = "image1"
    decodedData.regNo = "image1"
    decodedData.school = "image1"
    decodedData.faculty = "image1"
    decodedData.phoneNumber = "image1"
    decodedData.email = "image1"
    decodedData.dateOfBirth = "image1"
    decodedData.location = "image1"


    return (
        <>
            <Navbar />
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
                                <td>{decodedData.name || 'Maria Powell'}</td>
                                <td>{decodedData.regNo || 'bbb'}</td>
                                <td>{decodedData.school || '...'}</td>
                                <td>{decodedData.faculty || '...'}</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="table-2">
                        <tbody>
                            <tr>
                                <td>Phone Number</td>
                                <td>{decodedData.phoneNumber || '8763740607'}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{decodedData.email || 'maria@test.io'}</td>
                            </tr>
                            <tr>
                                <td style={{ backgroundColor: 'transparent' }}> &nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Date of birth</td>
                                <td>{decodedData.dateOfBirth || '1992/04/29'}</td>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td>{decodedData.location || 'ABC City'}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="status_div">
                        <div style={{ fontWeight: 'bolder' }}>
                            {decodedData.status || 'Current Student'}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentCard;
