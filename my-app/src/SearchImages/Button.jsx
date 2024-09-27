const Button = ({ loadMoreBtnClick }) => {
    return (
      <button type="button" onClick={loadMoreBtnClick} className='button'>
        Load more
      </button>
    );
  };

  export default Button
