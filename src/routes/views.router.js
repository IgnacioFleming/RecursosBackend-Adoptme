import { Router } from "express";
import { petsService, usersService } from "../services/index.js";
const router = Router();

router.get("/", (req, res) => {
  res.render("home", {});
});

router.get("/users", async (req, res) => {
  const users = await usersService.getAll().lean();
  res.render("users", { users });
});

router.get("/pets", async (req, res) => {
  const pets = await petsService.getAll().lean();
  res.render("pets", { pets });
});

export default router;
