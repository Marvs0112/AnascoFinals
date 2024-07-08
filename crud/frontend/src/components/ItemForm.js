import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ItemForm =({item, onSuccess}) =>{
    const [first_name, setFirstname] = useState('');
    const [middle_name, setMiddleName] = useState('');
    const [last_name, setLastName] = useState('');
    const [name_ext, setNameExt] = useState('');
    const [house_no, setHouseNo] = useState('');
    const [street, setStreet] = useState('');
    const [subd, setSubd] = useState('');
    const [barangay, setBarangay] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [country, setCountry] = useState('');
    const [postal, setPostal] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date_of_birth, setDateofBirth] = useState ('');
    const [place_of_birth, setPlaceofBirth] = useState('');
    const [sex, setSex] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [civil_status, setCivilStatus] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [blood_type, setBloodType] = useState('');
    const [fathern, setFatherN] = useState('');
    const [fatherm, setFatherM] = useState('');
    const [fatherl, setFatherL] = useState('');
    const [fatherext, setFatherExt] = useState('');
    const [mothern, setMotherN] = useState('');
    const [motherm, setMotherM] = useState('');
    const [motherl, setMotherL] = useState('');


    useEffect(() => {
        if (item) {
            setFirstname(item.first_name || '');
            setMiddleName(item.middle_name || '');
            setLastName(item.last_name || '');
            setNameExt(item.name_ext || '');
            setHouseNo(item.house_no || '');
            setStreet(item.street || '');
            setSubd(item.subd || '');
            setBarangay(item.barangay || '');
            setCity(item.city || '');
            setProvince(item.province || '');
            setCountry(item.country || '');
            setPostal(item.postal || '');
            setEmail(item.email || '');
            setPhone(item.phone || '');
            setDateofBirth(item.date_of_birth || '');
            setPlaceofBirth(item.place_of_birth || '');
            setSex(item.sex || '');
            setCitizenship(item.citizenship || '');
            setCivilStatus(item.civil_status || '');
            setHeight(item.height || '');
            setWeight(item.weight || '');
            setBloodType(item.blood_type || '');
            setFatherN(item.fathern || '');
            setFatherM(item.fatherm || '');
            setFatherL(item.fatherl || '');
            setFatherExt(item.fatherext|| '');
            setMotherN(item.mothern || '');
            setMotherM(item.motherm || '');
            setMotherL(item.motherl || '');

        } else {
            setFirstname('');
            setMiddleName('');
            setLastName('');
            setNameExt('');
            setHouseNo('');
            setStreet('');
            setSubd('');
            setBarangay('');
            setCity('');
            setProvince('');
            setCountry('');
            setPostal('');
            setEmail('');
            setPhone('');
            setDateofBirth('');
            setPlaceofBirth('');
            setSex('');
            setCitizenship('');
            setCivilStatus('');
            setHeight('');
            setWeight('');
            setBloodType('');
            setFatherN('');
            setFatherM('');
            setFatherL('');
            setFatherExt('');
            setMotherN('');
            setMotherM('');
            setMotherL('');

        }

    }, [item]);
    const handleSubmit = async(event) =>{
        event.preventDefault();
        const data = 
        {first_name,middle_name,last_name,name_ext,
        house_no,street,subd,barangay,city,province,country,postal,
        email,phone,date_of_birth,place_of_birth,sex,
        citizenship,civil_status,height,weight,blood_type,
        fathern,fatherm, fatherl,fatherext, mothern, motherm, motherl,};
        
        try {
            if (item){
                await axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                await axios.post(`http://localhost:8000/api/items/`, data);
            }
            onSuccess();
        } catch (error){
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h3>PERSONAL DATA SHEET</h3>
            </div>
            <div>
                <label>First Name:</label>
                <input type='text' value={first_name} onChange={(e) => setFirstname(e.target.value)}/>
            </div>
            <div>
                <label>Middle Name:</label>
                <input type='text' value={middle_name} onChange={(e) => setMiddleName(e.target.value)} />
            </div>
            <div>
                <label>Last Name:</label>
                <input type='text' value={last_name} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
                <label>Name Extension:</label>
                <input type='text' value={name_ext} onChange={(e) => setNameExt(e.target.value)} />
            </div>
            
            <div>
                <label>Date of Birth:</label>
                <input type='text' value={date_of_birth} onChange={(e) => setDateofBirth(e.target.value)} />
            </div>
            <div>
                <label>Place of Birth:</label>
                <input type='text' value={place_of_birth} onChange={(e) => setPlaceofBirth(e.target.value)} />
            </div>
            <div>
                <label>Sex:</label>
                <input type='text' value={sex} onChange={(e) => setSex(e.target.value)} />
            </div>
            <div>
                <label>Citizenship:</label>
                <input type='text' value={citizenship} onChange={(e) => setCitizenship(e.target.value)} />
            </div>
            <div>
                <label>Civil Status:</label>
                <input type='text' value={civil_status} onChange={(e) => setCivilStatus(e.target.value)} />
            </div>
            <div>
                <label>Height:</label>
                <input type='text' value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div>
                <label>Weight:</label>
                <input type='text' value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div>
                <label>Blood Type:</label>
                <input type='text' value={blood_type} onChange={(e) => setBloodType(e.target.value)} />
            </div>

            <div>
                <h4>Address</h4>
            </div>
            <div>
                <label>House No.:</label>
                <input type='text' value={house_no} onChange={(e) => setHouseNo(e.target.value)} />
            </div>
            <div>
                <label>Street:</label>
                <input type='text' value={street} onChange={(e) => setStreet(e.target.value)} />
            </div>
            <div>
                <label>Subdivision/Village:</label>
                <input type='text' value={subd} onChange={(e) => setSubd(e.target.value)} />
            </div>
            <div>
                <label>Barangay:</label>
                <input type='text' value={barangay} onChange={(e) => setBarangay(e.target.value)} />
            </div>

            
            <div>
                <h4>Contact Info</h4>
            </div>

            <div>
                <label>Email:</label>
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Phone:</label>
                <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div><h4>Family Background</h4></div>
            <div>
                <label>Fathers Name:</label>
                <input type='text' value={fathern} onChange={(e) => setFatherN(e.target.value)} />
            </div>
            <div>
                <label>Fathers Middle Name:</label>
                <input type='text' value={fatherm} onChange={(e) => setFatherM(e.target.value)} />
            </div>
            <div>
                <label>Fathers Last Name:</label>
                <input type='text' value={fatherl} onChange={(e) => setFatherL(e.target.value)} />
            </div>
            <div>
                <label>Fathers Extension Name:</label>
                <input type='text' value={fatherext} onChange={(e) => setFatherExt(e.target.value)} />
            </div>
            <div>
                <p>Mothers Maiden Name</p>
                <label>Mothers Name:</label>
                <input type='text' value={mothern} onChange={(e) => setMotherN(e.target.value)} />
            </div>
            <div>
                <label>Mothers Middle Name:</label>
                <input type='text' value={motherm} onChange={(e) => setMotherM(e.target.value)} />
            </div>
            <div>
                <label>Mothers Last Name:</label>
                <input type='text' value={motherl} onChange={(e) => setMotherL(e.target.value)} />
            </div>
            


            <button type='submit'>Submit</button>
        </form>
    );
};
export default ItemForm;