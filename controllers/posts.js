import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js"


export const getPost = async (req, res) => {
    try {
        const postMessage = await PostMessage.find();
        res.status(200).json(postMessage);
        // res.send(postMessage);
 
            // console.log(postMessage)
    } catch (err) {

        console.log(err)
    }
    // res.send("THis is actually working")
}

export const createPost = async (req, res) => {

    const post = req.body;

    const newPost = new PostMessage(post);
    try {
        await newPost.save()
        res.status(201).json(newPost);
    } catch (err) {
        res.status(409).json({message:error.message})
    }
    // res.send('post creation')
}
export const updatePost = async (req, res) => {
    const { id : _id } = req.params; //rename id
    const post = req.body;
     try {
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no post with that id');
         const updataePost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true }); //for updating post
         console.log('working')
     } catch (err) {
         console.log(err)
     }
}
export const deletePost = async (req, res) => {
    const { id } = req.params;
    console.log('working')

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post with that id');
    console.log('working')
    
    await PostMessage.findByIdAndRemove(id);
    console.log('working')

    res.json({message:'post deleted successfully'})
}

export const likePost = async (req, res) => {
    const { id } = req.params;
  

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post with that id');
   
    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { LikeCount: post.LikeCount + 1 }, { new: true })
    res.json(updatedPost)
}