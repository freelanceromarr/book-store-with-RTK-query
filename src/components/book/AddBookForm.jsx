import { useState } from "react";
import { useAddBookMutation } from "../../features/api/apiSlice";

const AddBookForm = () => {
    const [input, setInput] = useState({
        name:'',
        author:'',
        thumbnail:'',
        price:'',
        rating:'',
        featured: false,
    })
    const resetForm = () => {
       setInput( {
            name:'',
            author:'',
            thumbnail:'',
            price:'',
            rating:'',
            featured: false,
        })
    }

    const [addBook, {data, isLoading, isError, isSuccess}]= useAddBookMutation()
    const formSubmitHandler = (e)=>{
        e.preventDefault();
        addBook(input)
    }
  return (
    <div>
      <form onSubmit={formSubmitHandler} class="book-form">
        <div class="space-y-2">
          <label for="lws-bookName">Book Name</label>
          <input
            required
            class="text-input"
            type="text"
            id="lws-bookName"
            name="name"
            onChange={e=>setInput({...input, name: e.target.value})}
          />
        </div>

        <div class="space-y-2">
          <label for="lws-author">Author</label>
          <input
            required
            class="text-input"
            type="text"
            id="lws-author"
            name="author"
            onChange={e=>setInput({...input, author: e.target.value})}
          />
        </div>

        <div class="space-y-2">
          <label for="lws-thumbnail">Image Url</label>
          <input
            required
            class="text-input"
            type="text"
            id="lws-thumbnail"
            name="thumbnail"
            onChange={e=>setInput({...input, thumbnail: e.target.value})}
          />
        </div>

        <div class="grid grid-cols-2 gap-8 pb-4">
          <div class="space-y-2">
            <label for="lws-price">Price</label>
            <input
              required
              class="text-input"
              type="number"
              id="lws-price"
              name="price"
              onChange={e=>setInput({...input, price: e.target.value})}
            />
          </div>

          <div class="space-y-2">
            <label for="lws-rating">Rating</label>
            <input
              required
              class="text-input"
              type="number"
              id="lws-rating"
              name="rating"
              min="1"
              max="5"
              onChange={e=>setInput({...input, rating: e.target.value})}
            />
          </div>
        </div>

        <div class="flex items-center">
          <input
            id="lws-featured"
            type="checkbox"
            name="featured"
            class="w-4 h-4"
            onChange={e=>setInput({...input, featured: !input.featured})}
          />
          <label for="lws-featured" class="ml-2 text-sm">
            {" "}
            This is a featured book{" "}
          </label>
        </div>

        <button type="submit" class="submit" id="lws-submit">
          Add Book
        </button>
      </form>
     {isSuccess && <p className="success">Book added Successfully</p>} 
    </div>
  );
};

export default AddBookForm;
