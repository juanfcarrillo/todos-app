
const AddButton = ({handleAddButton}) => {
    return (
      <div className="f-rr">
        <button className="button shadow border" onClick={handleAddButton}>Add</button>
      </div>
    );
};

export default AddButton