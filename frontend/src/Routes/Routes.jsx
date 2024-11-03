import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Spinner from "../components/Spinner/Spinner";
import Offer from "../pages/Offer/Offer";
import Services from "../pages/Services/Services";
import OurBride from "../pages/OurBride/OurBride";
import Gallery from "../pages/Admin/Gallery/Gallery";
import AddGallery from "../pages/Admin/Gallery/AddGallery";
import ContactMsgList from "../pages/Admin/ContactMsg/ContactMsgList";
import ContactMsgDetail from "../pages/Admin/ContactMsg/ContactMsgDetail";
import Academy from "../pages/Academy/Academy";
import AddAcademy from "../pages/Admin/Academy/AddAcademy";
import AcademyList from "../pages/Admin/Academy/AcademyList";
import EditAcademy from "../pages/Admin/Academy/EditAcademy";

// User Pages
const AboutUs = lazy(() => import("../pages/AboutUs/AboutUs"));
const Cart = lazy(() => import("../pages/Cart/Cart"));
const FAQ = lazy(() => import("../pages/FAQ/FAQ"));
const Login = lazy(() => import("../pages/Login/Login"));
const Contactus = lazy(() => import("../pages/Contactus/Contactus"));
const ProductDetails = lazy(() =>
  import("../pages/ProductDetails/ProductDetails")
);
const Shop = lazy(() => import("../pages/Shop/Shop"));
const Signup = lazy(() => import("../pages/Signup/Signup"));
const Checkout = lazy(() => import("../pages/Checkout/Checkout"));
const PaymentResult = lazy(() => import("../pages/Checkout/PaymentResult"));

// Account Pages
const AccountLayout = lazy(() => import("../Layout/AccountLayout"));
const PrivateRoute = lazy(() => import("../PrivateRoute/PrivateRoute"));
const EditProfile = lazy(() =>
  import("../pages/Account/EditePeofile/EditePeofile")
);
const Profile = lazy(() => import("../pages/Account/Profile/Profile"));

const MyReviews = lazy(() => import("../pages/Account/Reviews/MyReviews"));

// Admin Pages
const AdminLayout = lazy(() => import("../Layout/AdminLayout/AdminLayout"));
const AdminRoute = lazy(() => import("../PrivateRoute/AdminRoute"));
const Dashboard = lazy(() => import("../pages/Admin/Dashboard/Dashboard"));

// Category Management
const AddCategory = lazy(() =>
  import("../pages/Admin/Category/Categories/AddCategory")
);
const AllCategories = lazy(() =>
  import("../pages/Admin/Category/Categories/AllCategories")
);
const EditCtg = lazy(() =>
  import("../pages/Admin/Category/Categories/EditCtg")
);

const AddSubCategory = lazy(() =>
  import("../pages/Admin/Category/SubCategories/AddSubCategory")
);
const AllSubCategories = lazy(() =>
  import("../pages/Admin/Category/SubCategories/AllSubCategories")
);
const EditSubCategory = lazy(() =>
  import("../pages/Admin/Category/SubCategories/EditSubCategory")
);

const AddSubSubCategory = lazy(() =>
  import("../pages/Admin/Category/SubSubCategory/AddSubSubCategory")
);
const AllSubSubCategory = lazy(() =>
  import("../pages/Admin/Category/SubSubCategory/AllSubSubCategory")
);
const EditSubSubCategory = lazy(() =>
  import("../pages/Admin/Category/SubSubCategory/EditSubSubCategory")
);

// Brand Management
const AllBrands = lazy(() => import("../pages/Admin/Brand/AllBrands"));
const AddBrand = lazy(() => import("../pages/Admin/Brand/AddBrand"));
const EditBrand = lazy(() => import("../pages/Admin/Brand/EditBrand"));

// Product Management
const AddProduct = lazy(() => import("../pages/Admin/Product/AddProduct"));
const ProductList = lazy(() => import("../pages/Admin/Product/ProductList"));
const EditProduct = lazy(() => import("../pages/Admin/Product/EditProduct"));

// Order Management
const AllOrders = lazy(() => import("../pages/Admin/Order/AllOrders"));
const OrderDetails = lazy(() => import("../pages/Admin/Order/OrderDetails"));

// Review Management
const AllReview = lazy(() => import("../pages/Admin/AllReview/AllReview"));

// User Management
const AllUsers = lazy(() => import("../pages/Admin/User/AllUsers"));

// Administrator Management
const AddAdministrator = lazy(() =>
  import("../pages/Admin/Administrator/AddAdministrator")
);
const Administrator = lazy(() =>
  import("../pages/Admin/Administrator/Administrator")
);
const EditAdministrator = lazy(() =>
  import("../pages/Admin/Administrator/EditAdmin")
);

// Ecommerce Settings
const CouponLists = lazy(() =>
  import("../pages/Admin/EcommerceSetting/Coupon/CouponLists")
);
const AddCoupon = lazy(() =>
  import("../pages/Admin/EcommerceSetting/Coupon/AddCoupon")
);
const EditCoupon = lazy(() =>
  import("../pages/Admin/EcommerceSetting/Coupon/EditCoupon")
);

const ShippingConfiguration = lazy(() =>
  import(
    "../pages/Admin/EcommerceSetting/ShippingConfiguration/ShippingConfiguration"
  )
);

// General Settings
const AdminProfile = lazy(() =>
  import("../pages/Admin/GeneralSetting/AdminProfile/AdminProfile")
);
const Themes = lazy(() => import("../pages/Admin/GeneralSetting/Theme/Themes"));
const BusinessInfo = lazy(() =>
  import("../pages/Admin/GeneralSetting/BusinessInfo/BusinessInfo")
);

// Banner Management
const Banner = lazy(() =>
  import("../pages/Admin/EcommerceSetting/Banner/Banner")
);
const AddBanner = lazy(() =>
  import("../pages/Admin/EcommerceSetting/Banner/AddBanner")
);
const EditBanner = lazy(() =>
  import("../pages/Admin/EcommerceSetting/Banner/EditBanner")
);

const CampaignBanners = lazy(() =>
  import("../pages/Admin/EcommerceSetting/CampaignBanners/CampaignBanners")
);
const AddCampaignBanner = lazy(() =>
  import("../pages/Admin/EcommerceSetting/CampaignBanners/AddCampaignBanner")
);
const EditCampaignBanner = lazy(() =>
  import("../pages/Admin/EcommerceSetting/CampaignBanners/EditCampaignBanner")
);
const TopCampaignBanner = lazy(() =>
  import("../pages/Admin/EcommerceSetting/TopCampaignBanner/TopCampaignBanner")
);

// Front-End Settings
const About = lazy(() => import("../pages/Admin/FrontEnd/About/About"));
const Contact = lazy(() => import("../pages/Admin/FrontEnd/Contact/Contact"));
const Logo = lazy(() => import("../pages/Admin/FrontEnd/Logo/Logo"));
const Favicon = lazy(() => import("../pages/Admin/FrontEnd/Favicon/Favicon"));

// Flash Deals
const FlashDealList = lazy(() =>
  import("../pages/Admin/FlashDeal/FlashDealList")
);
const AddFlashDeal = lazy(() =>
  import("../pages/Admin/FlashDeal/AddFlashDeal")
);
const EditFlashDeal = lazy(() =>
  import("../pages/Admin/FlashDeal/EditFlashDeal")
);

// SEO Settings
const SEOSetting = lazy(() => import("../pages/Admin/SEOSetting/SEOSetting"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Spinner />}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shops",
        element: <Shop />,
      },
      {
        path: "/shops/:category",
        element: <Shop />,
      },
      {
        path: "/shops/:category/:subCategory",
        element: <Shop />,
      },
      {
        path: "/shops/:category/:subCategory/:subSubCategory",
        element: <Shop />,
      },
      {
        path: "/shops/brand/:brand",
        element: <Shop />,
      },
      {
        path: "/product/:slug",
        element: <ProductDetails />,
      },
      {
        path: "/academy",
        element: <Academy />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/services/all",
        element: <Services />,
      },
      {
        path: "/services/:slug",
        element: <Services />,
      },

      {
        path: "/offers",
        element: <Offer />,
      },
      {
        path: "/our-brides",
        element: <OurBride />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contact-us",
        element: <Contactus />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment-result/:transactionId",
        element: (
          <PrivateRoute>
            <PaymentResult />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/account",
    element: (
      <Suspense fallback={<Spinner />}>
        <PrivateRoute>
          <AccountLayout />
        </PrivateRoute>
      </Suspense>
    ),
    children: [
      {
        path: "/account/profile",
        element: <Profile />,
      },
      {
        path: "/account/profile/edite",
        element: <EditProfile />,
      },
      {
        path: "/account/reviews",
        element: <MyReviews />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <Suspense fallback={<Spinner />}>
        <AdminRoute>
          <AdminLayout />
        </AdminRoute>
      </Suspense>
    ),
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/services",
        element: <AllCategories />,
      },
      {
        path: "/admin/category/add-category",
        element: <AddCategory />,
      },
      {
        path: "/admin/category/edit/:id",
        element: <EditCtg />,
      },
      {
        path: "/admin/category/sub-categories",
        element: <AllSubCategories />,
      },
      {
        path: "/admin/category/add-sub-category",
        element: <AddSubCategory />,
      },
      {
        path: "/admin/category/edit-sub-category/:id",
        element: <EditSubCategory />,
      },
      {
        path: "/admin/category/sub-sub-categories",
        element: <AllSubSubCategory />,
      },
      {
        path: "/admin/category/add-sub-sub-category",
        element: <AddSubSubCategory />,
      },
      {
        path: "/admin/category/edit-sub-sub-category/:id",
        element: <EditSubSubCategory />,
      },
      {
        path: "/admin/brands",
        element: <AllBrands />,
      },
      {
        path: "/admin/add-brand",
        element: <AddBrand />,
      },
      {
        path: "/admin/edit-brand/:id",
        element: <EditBrand />,
      },
      {
        path: "/admin/service/all-services",
        element: <ProductList />,
      },
      {
        path: "/admin/service/add-service",
        element: <AddProduct />,
      },
      {
        path: "/admin/service/edit-service/:id",
        element: <EditProduct />,
      },
      {
        path: "/admin/academy/all-academy",
        element: <AcademyList />,
      },
      {
        path: "/admin/academy/add-academy",
        element: <AddAcademy />,
      },
      {
        path: "/admin/academy/edit-academy/:id",
        element: <EditAcademy />,
      },
      {
        path: "/admin/order/all-orders",
        element: <AllOrders />,
      },
      {
        path: "/admin/order/:id",
        element: <OrderDetails />,
      },
      {
        path: "/admin/customer/all-customers",
        element: <AllUsers />,
      },

      //--------------Flash Deal
      {
        path: "/admin/flash-deal/add",
        element: <AddFlashDeal />,
      },
      {
        path: "/admin/flash-deal",
        element: <FlashDealList />,
      },
      {
        path: "/admin/flash-deal/edit/:id",
        element: <EditFlashDeal />,
      },

      //--------------Review
      {
        path: "/admin/reviews",
        element: <AllReview />,
      },

      //--------------Gallery
      {
        path: "/admin/gallery",
        element: <Gallery />,
      },
      {
        path: "/admin/gallery/add",
        element: <AddGallery />,
      },

      //--------------Administrator
      {
        path: "/admin/administrator/all-administrator",
        element: <Administrator />,
      },
      {
        path: "/admin/administrator/add-administrator",
        element: <AddAdministrator />,
      },
      {
        path: "/admin/administrator/edit-administrator/:id",
        element: <EditAdministrator />,
      },

      //--------------ecommerce-setting
      {
        path: "/admin/ecommerce-setting/coupons",
        element: <CouponLists />,
      },
      {
        path: "/admin/ecommerce-setting/coupons/add-coupon",
        element: <AddCoupon />,
      },
      {
        path: "/admin/ecommerce-setting/coupons/edit-coupon/:id",
        element: <EditCoupon />,
      },

      {
        path: "/admin/ecommerce-setting/shipping-configuration",
        element: <ShippingConfiguration />,
      },

      //-------------Banner
      {
        path: "/admin/ecommerce-setting/banner",
        element: <Banner />,
      },
      {
        path: "/admin/ecommerce-setting/add-banner",
        element: <AddBanner />,
      },
      {
        path: "/admin/ecommerce-setting/edit-banner/:id",
        element: <EditBanner />,
      },

      //---------Contact msg
      {
        path: "/admin/contact-msg",
        element: <ContactMsgList />,
      },
      {
        path: "/admin/contact-msg/:id",
        element: <ContactMsgDetail />,
      },

      //---------Top Campaign Banner
      {
        path: "/admin/ecommerce-setting/top-campaign-banner",
        element: <TopCampaignBanner />,
      },

      //---------CampaignBanner
      {
        path: "/admin/ecommerce-setting/campaign-banner",
        element: <CampaignBanners />,
      },
      {
        path: "/admin/ecommerce-setting/add-campaign-banner",
        element: <AddCampaignBanner />,
      },
      {
        path: "/admin/ecommerce-setting/edit-campaign-banner/:id",
        element: <EditCampaignBanner />,
      },

      //----------General Setting
      {
        path: "/admin/general-setting/profile",
        element: <AdminProfile />,
      },
      {
        path: "/admin/general-setting/business-info",
        element: <BusinessInfo />,
      },
      {
        path: "/admin/general-setting/themes",
        element: <Themes />,
      },

      //--------------Front-End
      {
        path: "/admin/front-end/logo",
        element: <Logo />,
      },
      {
        path: "/admin/front-end/favicon",
        element: <Favicon />,
      },
      {
        path: "/admin/front-end/about-us",
        element: <About />,
      },
      {
        path: "/admin/front-end/contact-us",
        element: <Contact />,
      },

      //----------SEO Setting
      {
        path: "/admin/seo-setting",
        element: <SEOSetting />,
      },
    ],
  },
]);
