import AddBookForm from "../components/book/AddBookForm";

const AddBook = () => {
  return (
    <div class="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
      <h4 class="mb-8 text-xl font-bold text-center">Add New Book</h4>
      <AddBookForm/>
    </div>
  );
};

export default AddBook;
