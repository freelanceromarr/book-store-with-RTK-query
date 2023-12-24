import Nav from "../components/Nav";
import BookList from "../components/books/BookList";
import { useGetBooksQuery } from "../features/api/apiSlice";

const Home = () => {
    const {data:books, isLoading, isError, error} = useGetBooksQuery();
    // decide what to render 
    let content = null;
    if (isLoading && !isError) {
        content = <div className="loading">Loading...</div>
    }
    if (!isLoading && isError) {
        content = <div className="error"> Something wrong</div>
    }
    if (!isLoading && !isError && books.length === 0 ){
        content = <div className="no-content"> No Books Found</div>
    }
    if (!isLoading && !isError && books.length > 0 ){
        content = books?.map(book => <BookList key={book.id} book={book} />)
    }

  return (
    <div>
     

      
        <div class="order-2 xl:-order-1">
          <div class="flex items-center justify-between mb-12">
            <h4 class="mt-2 text-xl font-bold">Book List</h4>

            <div class="flex items-center space-x-4">
              <button class="lws-filter-btn active-filter">All</button>
              <button class="lws-filter-btn">Featured</button>
            </div>
          </div>
          <div class="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* <!-- Card 1 --> */}
           { content }
            
          </div>
        </div>
      
    </div>
  );
};

export default Home;
