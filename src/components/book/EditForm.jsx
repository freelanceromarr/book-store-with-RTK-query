import { useState } from "react";
import { useEditBookMutation } from "../../features/api/apiSlice";

const EditForm = ({book}) => {
    const {
        name: bookName,
        author: bookAuthor,
        thumbnail: bookThumbnail,
        price: bookPrice,
        rating: bookRating,
        featured: bookFeatured,
      } = book;

      const [input, setInput] = useState({
        name: bookName,
        author: bookAuthor,
        thumbnail:bookThumbnail,
        price: bookPrice,
        rating: bookRating,
        featured: bookFeatured,
      });
      //   edit handler 
const [editBook , {isSuccess:editSuccess}] = useEditBookMutation()
const submitHandler =(e)=>{
    e.preventDefault();
    editBook({id:book.id, data:input})

}
    return ( <div>
        <form onSubmit={submitHandler} class="book-form">
        <div class="space-y-2">
          <label for="lws-bookName">Book Name</label>
          <input
            onChange={e=>setInput({...input, name: e.target.value})}
            required
            class="text-input"
            type="text"
            id="lws-bookName"
            name="name"
            value={input.name}
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
            value={input.author}
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
            value={input.thumbnail}
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
              value={input.price}
              
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
              value={input.rating}
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
            checked={input.featured}
          />
          <label for="lws-featured" class="ml-2 text-sm">
            {" "}
            This is a featured book{" "}
          </label>
        </div>

        <button type="submit" class="submit" id="lws-submit">
          Edit Book
        </button>
      </form>
      <p>{editSuccess && "Successfully edited"}</p>
    </div> );
}
 
export default EditForm;