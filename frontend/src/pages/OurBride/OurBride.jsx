import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import { useGetGalleryQuery } from "../../Redux/gallery/galleryApi";
import Spinner from "../../components/Spinner/Spinner";

export default function OurBride() {
  window.scrollTo(0, 0);
  const { data, isLoading } = useGetGalleryQuery();

  const gallery = data?.data?.result;

  if (isLoading) return <Spinner />;

  return (
    <section className="bg-slate-100 py-10">
      <div className="container">
        <h2 className="mb-7">Our Brides Are Amazing</h2>
        <PhotoProvider>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 3, 750: 3, 900: 3 }}
          >
            <Masonry gutter="7px">
              {gallery?.map((gallery, i) => (
                <PhotoView
                  key={i}
                  src={`${import.meta.env.VITE_BACKEND_URL}/gallery/${
                    gallery?.image
                  }`}
                >
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/gallery/${
                      gallery?.image
                    }`}
                    alt=""
                    className="block"
                  />
                </PhotoView>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </PhotoProvider>
        <div className="mt-8">
          <h2 className="mb-5">Contact for Booking</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
