// const router = require("express").Router();
// const Comment = require("../model/comments");
// const Post = require("../models/post");

// router.post("/:postId/createComment", async (req, res) => {
//   const { postId } = req.params;
//   const { content, username } = req.body;
//   const newComment = new Comment({
//     postId,
//     content,
//     username,
//   });

//   try {
//     const savedComment = await newComment.save();
//     res.status(200).json("comment created successfully");
//   } catch (error) {
//     console.error(error);
//     res.status(500).json("comment can't be created");
//   }
// });

// //UPDATE COMMENT
// router.put("/:id", async (req, res) => {
//   try {
//     const my_comment = await Comment.findById(req.params.id);
//     if (my_comment.username === req.body.username) {
//       try {
//         const updatedComment = await Comment.findByIdAndUpdate(
//           req.params.id,
//           {
//             $set: req.body,
//           },
//           { new: true }
//         );
//         res.status(200).json(updatedComment);
//       } catch (error) {}
//     } else {
//       res.status(404).json("you can only update your comment");
//     }
//   } catch (error) {
//     res.status(500).json("we have encoutred a problem");
//   }
// });

// //DELETE COMMENT
// router.delete("/:id", async (req, res) => {
//   try {
//     const the_comment = await Comment.findById(req.params.id);
//     if (the_comment.username === req.body.username) {
//       try {
//         await the_comment.delete();
//         res.status(200).json("comment deleted succefuly");
//       } catch (error) {
//         console.error("there is something wrong");
//         res.status(500).json("error deleting comment");
//       }
//     } else {
//       res.status(404).json("you can only delete your comment");
//     }
//   } catch (error) {
//     res.status(500).json("we have encoutred a problem");
//   }
// });

// //GET ALL COMMENTS FOR A POST
// router.get("/:postId/comments", async (req, res) => {
//   const { postId } = req.params;
//   try {
//     const comments = await Comment.find({ postId });
//     res.status(200).json(comments);
//   } catch (error) {
//     res.status(500).json("problem occured durring getting");
//   }
// });

// module.exports = router;
