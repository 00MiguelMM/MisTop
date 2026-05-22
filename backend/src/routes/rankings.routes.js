import express from "express";

import {
  getRankings,
  getRankingById,
  createRanking,
  updateRanking,
  deleteRanking,
} from "../controllers/rankings.controller.js";

const router = express.Router();

router.get("/", getRankings);

router.get("/:id", getRankingById);

router.post("/", createRanking);

router.put("/:id", updateRanking);

router.delete("/:id", deleteRanking);

export default router;