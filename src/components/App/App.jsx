import { useState, useEffect } from "react";
import { getData } from "../gallery-api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isFetch, setIsFetch] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const [modalPhoto, setModalPhoto] = useState({
    alt_description: "",
    src: "",
    description: "",
    location: "",
  });

  useEffect(() => {
    if (!query) return;
    async function getDataFromAPI() {
      try {
        setIsFetch(true);
        const data = await getData(query, page);
        setTotalPages(data.total_pages);
        if (data.results.length > 0)
          setPhotos((img) => [...img, ...data.results]);
        else toast.error("There are no results with such search!");
      } catch (error) {
        setError(error.message);
      } finally {
        setIsFetch(false);
      }
    }

    getDataFromAPI();
  }, [query, page]);

  function handleQuery(curQuery) {
    setQuery(curQuery);
    setPage(1);
    setTotalPages(0); // reset total pages
    setPhotos([]);
    setError(null);
  }

  function handleLoadMore() {
    setPage((p) => p + 1);
  }

  function handleModal(state, photo = {}) {
    setIsModalOpen(state);
    if (state) setModalPhoto(photo);
  }

  return (
    <>
      <SearchBar onSubmit={handleQuery} isLoading={isFetch} />
      <div className="container">
        {photos.length > 0 && !error && (
          <ImageGallery photos={photos} onSelect={handleModal} />
        )}
        {totalPages > page && // if current pages is equals totalPages (took from API in line 32) then button 'Load More' is not rendered
          !isFetch &&
          !error && (
            <LoadMoreBtn onClick={handleLoadMore}>Load More</LoadMoreBtn>
          )}
        {error && (
          <ErrorMessage>
            Something went wrong, because {error}. Please, try again later.
          </ErrorMessage>
        )}
        {isFetch && !error && <Loader />}
      </div>
      <ImageModal
        isOpen={isModalOpen}
        photo={modalPhoto}
        onChange={handleModal}
      />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
