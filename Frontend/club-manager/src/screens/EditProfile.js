import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment';
import { BiSolidPencil } from "react-icons/bi";

import ProfileInputEdit from '../components/Profile/ProfileInputEdit'
import ProfileImage from '../assets/images/profile-icon.jpg'
import { editProfile } from '../store/actions/profile';


const EditProfile = ({ user, isAuthenticated, editProfile }) => {
    const history = useNavigate()

    const inputRef = useRef("");

    const [img, setImg] = useState(user?.img || "")
    const [name, setName] = useState(user?.name)
    const [email, setEmail] = useState(user?.email)
    const [mobile, setMobile] = useState(user?.mobile)
    const [usn, setUSN] = useState(user?.usn)
    const [collegename, setCollegeName] = useState(user?.collegename)
    const [gender, setGender] = useState(user?.gender)
    const [sem, setSem] = useState(user?.sem)
    const [course, setCourse] = useState(user?.course)
    const [dateofbirth, setDOB] = useState('')

    console.log(dateofbirth);


    useEffect(() => {
        setImg(user?.img)
        setName(user?.name)
        setEmail(user?.email)
        setMobile(user?.mobile)
        setUSN(user?.usn)
        setCollegeName(user?.collegename)
        setGender(user?.gender)
        setSem(user?.sem)
        setCourse(user?.course)
        setDOB(user?.dateofbirth)
    }, [user])

    const handleImageChange = (e) => {
        console.log(e?.target?.files);
        setImg(e?.target?.files[0]);
    };

    const handleImageClick = () => {
        inputRef.current.click();
      };

    const onSubmit = e => {
        e.preventDefault()
        const dob = moment.utc(dateofbirth).local().format('YYYY-MM-DDTHH:mm:SS.sss')
        console.log(dob);
        editProfile(img, name, mobile, usn, collegename, gender, course, sem, dob, history);
        // setAlert('Profile Edited', 'bg-green-500')
    }

    return (
        <div className='flex items-center flex-col p-14' >
            <p className='text-3xl font-bold' >Edit Your Profile</p>
            <div>
                <div>
                    <form action="" className=" flex flex-col mt-7">
                        <div className="relative w-48 mx-auto mb-5" onClick={handleImageClick}>
                            <img
                                src={img ? URL.createObjectURL(img) : ProfileImage}
                                alt="dp"
                                className="h-44 w-44 rounded-full mx-auto overflow-hidden object-cover border-2 "
                            />
                            <div className="absolute right-0 bottom-2 bg-white rounded-full p-1 border-2">
                                <BiSolidPencil style={{ fontSize: 35 }} />
                            </div>
                            <input
                                type="file"
                                onChange={handleImageChange}
                                ref={inputRef}
                                accept="image/png, image/jpeg"
                                style={{ display: "none" }}
                            />
                        </div>
                        <ProfileInputEdit onChange={e => setName(e.target.value)} title={'Name'} value={name} type={'text'} name={'name'} />
                        <ProfileInputEdit disabled={true} onChange={e => setEmail(e.target.value)} title={'Email'} value={email} type={'email'} name={'email'} />
                        <ProfileInputEdit onChange={e => setMobile(e.target.value)} title={'Mobile Number'} value={mobile} type={'tel'} name={'mobile'} />
                        <ProfileInputEdit onChange={e => setUSN(e.target.value)} title={'USN'} value={usn} type={'text'} name={'usn'} />
                        <ProfileInputEdit onChange={e => setCollegeName(e.target.value)} title={'College Name'} value={collegename} type={'text'} name={'collegename'} />
                        <ProfileInputEdit onChange={e => setGender(e.target.value)} title={'Gender'} value={gender} type={'text'} name={'gender'} />
                        <ProfileInputEdit onChange={e => setSem(e.target.value)} title={'Semester'} value={sem} type={'number'} name={'sem'} />
                        <ProfileInputEdit onChange={e => setCourse(e.target.value)} title={'Course'} value={course} type={'text'} name={'course'} />
                        <ProfileInputEdit onChange={e => setDOB(e.target.value)} title={'Date Of Birth'} value={dateofbirth} type={'date'} name={'dob'} />
                        <button onClick={onSubmit} className="bg-green-800 self-end mr-5 mt-5 rounded-lg text-white p-2 px-5 hover:scale-105 duration-300">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
});

export default connect(mapStateToProps, { editProfile })(EditProfile)