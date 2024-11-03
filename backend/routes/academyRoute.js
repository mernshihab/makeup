const express = require("express");
const multer = require("multer");
const {
  createAcademy,
  getAllAcademies,
  getAcademyBySlug,
  getAcademyById,
  updateAcademy,
  deleteAcademy,
} = require("../controllers/academyController");

const router = express.Router();

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/academies");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

// Routes
router.post("/add-academy", upload.single("image"), createAcademy);
router.get("/all-academies", getAllAcademies);
router.get("/academy/:slug", getAcademyBySlug);
router.get("/academy/id/:id", getAcademyById);
router.patch("/update-academy/:id", upload.single("image"), updateAcademy);
router.delete("/delete-academy/:id", deleteAcademy);

module.exports = router;
