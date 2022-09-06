import express from 'express'
const router = express.Router();

import {stories} from "../datas.js";

router.get("/api/v1/story/all", (req, res) => {      
    res.status(200).json({
        msg: "stories retrieved",
        stories: stories,
    })
});

router.get("/api/v1/story/:id", (req, res) => {
    const story = stories.find(story => story.id === parseInt(req.params.id));
    res.status(200).json({
        msg: "story retrieved",
        story: story,
    });
});

export default router;