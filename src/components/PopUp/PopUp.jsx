const PopUp = ({children, exitForm, ...props}) => {

  return (
    <>
      <div className="pop-up-background" onClick={exitForm}/>
      <div className="f g-1 pop-up">
        {children}
      </div>
    </>
  )
}

export default PopUp;
