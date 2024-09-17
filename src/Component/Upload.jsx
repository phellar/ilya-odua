import React from 'react'
import supabase from '../Config/SupabaseClient'
import { useState } from 'react'

const Upload = () => {
    // const [imageSelected, setImageSelected] = useState(false)
    // const [postImage, setPostImage] = useState<string | file | null >(nul)
    // const postImageUrl = 'https://mpfxcjjgxqjenjxhiwju.supabase.co'

    // const uploadPostImage =(e)=>{
    //     const imageFile = e.target.files?.[0];
    //     if(imageFile){
    //         setPostImage(imageFile);
    //         setImageSelected(true);
    //     }
    // }

    // const handleCreatChief = async (data) =>{
    //     let imageUrl = ''

    //     try {
    //         if (postImage instanceof File){
    //             const randomSuffix = math.floor( 1000000000 = math.random()* 9000000000).toString();
    //         }

    //         const imageName = `${randomSuffix}-${postImage.name}`;
    //         const {data: imageUploadResponse, error: imageUploadError}= await supabase.storage
    //         .from('chief-image')
    //         .upload(imageName, postImage, {
    //             cacheControl: "3600",
    //             upsert:true,
    //         })

    //         if(imageUploadResponse){
    //             imageUrl = imageUploadResponse.path;
    //         } else{
    //             console.error('error uploading image:', imageUploadError?.message);
    //             return;
    //         }

    //         const {data: newChief,error}= await supabase
    //         .from('cheif')
    //         .insert([
    //             name: data.title,
    //             ProfilePicture: `${postImageUrl}${imageUrl}`,
    //             ...data,
    //         ])
    //         .select();

    //         if(newChief){
    //             navigate('/')
    //             alert('chief created')
    //         } else{
    //             alert('failed to chief created')

    //         }
            
    //     } 
        
    //     catch (error) {
            
    //     }


    // }

  return (
    <div>test</div>
  )
}

export default Upload