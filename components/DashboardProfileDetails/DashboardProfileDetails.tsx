import React, { useState } from 'react';
import { Text } from '../typography/typography';
import ProfileDetailsModal from '../Modals/ProfileDetailsModal';
import { userService } from '../../services';


const CLOUDINARY_UPLOAD_PRESET  = 'my-uploads';
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dfrp4wi75/image/upload'


const DashboardTopBar = ({currentSubject}: any) => {
    const [createObjectURL, setCreateObjectURL] = useState<string>('http://cdn.onlinewebfonts.com/svg/img_569204.png');

    
    // profile picture upload to client
    const handleUploadProfileImageToClient = (event: any) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            
            setCreateObjectURL(URL.createObjectURL(file));
        }
    };


    // profile picture upload to server
    async function handleUploadProfileImageToServer (event: any) {
        event.preventDefault();

        const form = event.currentTarget;
        const fileInput = form.elements[0];
        const file = fileInput.files[0];


        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

        // formData.forEach((value, key) => {
        //     console.log(key,':', value);
        // })

        const data = await fetch(CLOUDINARY_URL, {
            method: 'POST',
            body: formData 
        }).then(res => res.json());


        if (data.secure_url !== '') {
            const profilePicture = data.secure_url;

            const formData = new FormData();
            formData.append('profilePicture', profilePicture);
            
            // formData.forEach((value, key) => {
            //     console.log(key,':', value);
            // })

            try {
                if(formData.keys === profilePicture){
                    await userService.update('image', formData);
                }
            
            } catch (event: any) {
                // console.log(event.message);
            
            } finally {}
        }
    };





    return (
        <>
            <div 
                className="w-full sm:py-1 py-0 sm:px-2 px-0 rounded-xl flex w-full justify-center items-center"
            >
                <ProfileDetailsModal 
                    createObjectURL={createObjectURL} 
                    currentSubject={currentSubject} 
                    handleUploadProfileImageToClient={handleUploadProfileImageToClient}
                    handleUploadProfileImageToServer={handleUploadProfileImageToServer}
                />
                            
                <div className="md:block hidden ml-3 flex flex-col items-start">
                    <Text variant='paragraph_4' className="font-semibold text-gray-700">
                        {`${currentSubject === undefined ? 
                            'Guest' : 
                            `${currentSubject.firstName} ${currentSubject.lastName}`
                        }`}
                    </Text>
                    <Text variant='paragraph_4' className='font-normal capitalize'>
                        {`${currentSubject === undefined ? 'User' : currentSubject.userType}`}
                    </Text>
                </div>
            </div>
        </>
    )
}

export default DashboardTopBar
