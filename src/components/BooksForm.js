import React from 'react';

const BooksForm = () => {
  const booksCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <div className="form-group">
      <label htmlFor="title">Example select</label>
      <select className="form-control">
        {booksCategories.map((books) => <p>{books}</p>)}
      </select>
    </div>
  );
};

export default BooksForm;
