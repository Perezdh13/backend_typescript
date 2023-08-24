import  express from "express"
import * as diary from"../services/diary"

const router = express.Router();

router.get("/",(_req,res) => {
res.send(diary.getEntriesWithoutSensitiveInfo())
});

router.post("/",(_req,res) => {
res.send("saving a diary!")
});

export default router;