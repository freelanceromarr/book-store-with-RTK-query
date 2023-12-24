import { useParams } from "react-router-dom";
import {useGetBookQuery } from "../features/api/apiSlice";
import EditForm from "../components/book/EditForm";

const Edit = () => {
  const { bookId } = useParams();
  const {
    data: book,
    isLoading: bookLoading,
    isError,
  } = useGetBookQuery(bookId);

  // decide what to render
  let content = null;
  if (bookLoading && !isError) {
    content = <div className="loading">Loading..</div>;
  }
  if (!bookLoading && isError) {
    content = <div className="loading">Something wrong</div>;
  }
  if (!bookLoading && !isError && book?.id) {
    content = <EditForm book={book} />;
  }

  return (
    <div class="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
      <h4 class="mb-8 text-xl font-bold text-center">Edit Book</h4>
      {content}
    </div>
  );
};

export default Edit;
