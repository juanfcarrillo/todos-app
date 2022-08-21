
const AddTodo = ({handleAddButton}) => {
    return (
      <div className="f-rr" onClick={handleAddButton}>
        <button className="button shadow border">Add</button>
      </div>
    );
};

export default AddTodo