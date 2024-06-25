
const Divider = ({title}) => {
  return (
    <div className="relative">
    {/* divider */}
    <div className="absolute inset-0 flex items-center">
      <div className="border border-slate-200 w-9/12 mx-auto"></div>
    </div>
    {/*  text */}
    <div className="flex justify-center relative ">
      <div className="font-display text-slate-600 text-4xl bg-white px-4 ">
        {title}
      </div>
    </div>
  </div>
  )
}

export default Divider