import React from 'react';
import { SetStateAction, useState } from 'react';

import InputText from './InputText';

const Info = () => {
    const [output, setOutput] = useState({
        textInput: '',
        fullName: '',
        occupation: '',
        jobTitle: '',
        company: '',
        workAdress: '',
        phoneNumber: '',
        workEmail: '',
        website: '',

        LinkedInLink: '',
        GitHubLink: '',
        ArtStationLink: '',
        YoutubeLink: '',
        TwitterLink: '',
        InstagramLink: '',
    });
    const handleChange = e => {
        setOutput({ ...output, [e.target.name]: e.target.value })
    }
    const [image, setImage] = useState('');
    const onImageChange = e => {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    }



    return (
        <>
            <div className='m-8'>
                <div className='w-full p-4
        border-b border-gray-100'>
                    <h1 className='text-2xl font-bold text-nureply-blue-full underline decoration-nureply-blue'>Your info</h1>
                    <p className='text-base text-gray-600'>Enter your data and see how it looks on your selected layout</p>
                </div>
                <div className='my-4 pb-4 border-b border-background'>
                    <InputText
                        color='text-default'
                        label='Full Name'
                        id='fullName'
                        name='fullName'
                        value={output.fullName}
                        onChange={handleChange}
                    />
                    <InputText
                        color='text-default'
                        label='Occupation'
                        id='occupation'
                        name='occupation'
                        value={output.occupation}
                        onChange={handleChange}
                    />
                    <InputText
                        color='text-default'
                        label='Job Title'
                        id='jobTitle'
                        name='jobTitle'
                        value={output.jobTitle}
                        onChange={handleChange}
                    />
                    <InputText
                        color='text-default'
                        label='Company'
                        id='company'
                        name='company'
                        value={output.company}
                        onChange={handleChange}
                    />
                    <InputText
                        color='text-default'
                        label='Work Adress'
                        id='workAdress'
                        name='workAdress'
                        value={output.workAdress}
                        onChange={handleChange}
                    />
                    <InputText
                        color='text-default'
                        label='Phone Number'
                        id='phoneNumber'
                        name='phoneNumber'
                        value={output.phoneNumber}
                        onChange={handleChange}
                    />
                    <InputText
                        color='text-default'
                        label='Work Email'
                        id='workEmail'
                        name='workEmail'
                        value={output.workEmail}
                        onChange={handleChange}
                    />
                    <InputText
                        color='text-default'
                        label='Website'
                        id='website'
                        name='website'
                        value={output.website}
                        onChange={handleChange}
                    />
                </div>

                <div className='my-4 pb-4 border-b border-background'>
                    <InputText
                        color='text-nureply-blue-full'
                        label='LinkedIn'
                        id='LinkedInLink'
                        name='LinkedInLink'
                        value={output.LinkedInLink}
                        onChange={handleChange}
                    />
                    <InputText
                        color='text-nureply-blue-full'
                        label='GitHub'
                        id='GitHubLink'
                        name='GitHubLink'
                        value={output.GitHubLink}
                        onChange={handleChange}
                    />
                    <InputText
                        color='text-nureply-blue-full'
                        label='ArtStation'
                        id='ArtStationLink'
                        name='ArtStationLink'
                        value={output.ArtStationLink}
                        onChange={handleChange}
                    />
                    <InputText
                        color='text-nureply-blue-full'
                        label='Youtube'
                        id='YoutubeLink'
                        name='YoutubeLink'
                        value={output.YoutubeLink}
                        onChange={handleChange}
                    />
                    <InputText
                        color='text-nureply-blue-full'
                        label='Twitter'
                        id='TwitterLink'
                        name='TwitterLink'
                        value={output.TwitterLink}
                        onChange={handleChange}
                    />
                    <InputText
                        color='text-nureply-blue-full'
                        label='Instagram'
                        id='InstagramLink'
                        name='InstagramLink'
                        value={output.InstagramLink}
                        onChange={handleChange}
                    />
                </div>

                <label htmlFor='image'
                    className='block p-1 text-base font-semibold text-nureply-blue-full hover:text-nureply-blue'>Upload Image</label><input
                    className='hidden'
                    type='file'
                    id='image'
                    name='image'
                    accept='image/*'
                    onChange={onImageChange}
                />
            </div>
        </>
    );
};

export default Info;
