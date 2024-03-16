
const Card = ({cardHeading, children, tailStyle}) => {
  return (
    <div className={"bg-gray-800 " + tailStyle}>
        {cardHeading && <h3 className="font-bold text-xl mb-4">{cardHeading}</h3>}
        <div className="w-[100%]">
            {children}
        </div>
    </div>
  )
}

export default Card