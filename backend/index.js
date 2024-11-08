const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const port = process.env.port || 4201;

// routers
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");
const logoRouter = require("./routes/logoRoutes");
const faviconRouter = require("./routes/faviconRoutes");
const contactRouter = require("./routes/contactRoutes");
const bannerRouter = require("./routes/bannerRoutes");
const aboutRouter = require("./routes/aboutRoutes");
const categoryRouter = require("./routes/categoriesRoutes");
const productRouter = require("./routes/productRoutes");
const flashDealRouter = require("./routes/flashDealRoutes");
const reviewRouter = require("./routes/reveiwRoutes");
const campaignBannerRouter = require("./routes/campaignBannerRoutes");
const topCampaignBannerRouter = require("./routes/TopCampaignBannerRoutes");
const brandRouter = require("./routes/brandRoutes");
const couponRouter = require("./routes/couponRoutes");
const seoRouter = require("./routes/seoRoutes");
const shippingConfigRouter = require("./routes/shippingConfigRoutes");
const galleryRouter = require("./routes/galleryRoute");
const contactMsgRouter = require("./routes/contactMsgRoute");
const academyRouter = require("./routes/academyRoute");

// General
const businessInfoRoutes = require("./routes/businessInfoRoutes");
const themeRouter = require("./routes/themeRoutes");

const orderRouter = require("./routes/orderRoutes");
const paymentRouter = require("./routes/paymentRoute");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));

// Connect Database
mongoose.connect(process.env.DB_URL).then(() => {
  console.log("Database connection is successful");
});

app.use("/admin", adminRoutes);
app.use("/user", userRoutes);
app.use("/logo", logoRouter);
app.use("/favicon", faviconRouter);
app.use("/contact", contactRouter);
app.use("/banner", bannerRouter);
app.use("/about", aboutRouter);
app.use("/category", categoryRouter);
app.use("/product", productRouter);
app.use("/flash-deal", flashDealRouter);
app.use("/review", reviewRouter);
app.use("/campaignBanner", campaignBannerRouter);
app.use("/topCampaignBanner", topCampaignBannerRouter);
app.use("/brand", brandRouter);
app.use("/coupon", couponRouter);
app.use("/seo", seoRouter);
app.use("/shippingConfig", shippingConfigRouter);
app.use("/gallery", galleryRouter);
app.use("/contactMsg", contactMsgRouter);
app.use("/academy", academyRouter);

//------General
app.use("/businessInfo", businessInfoRoutes);
app.use("/theme", themeRouter);

app.use("/order", orderRouter);
app.use("/payment", paymentRouter);

app.get("/", (req, res) => {
  res.send(`Server is Running on port ${port}`);
});

app.listen(port, () => {
  console.log(`Server is Running on port ${port}`);
});
