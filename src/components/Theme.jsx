import Button from './button'

const Theme = () => {
  return (
    <div className="mx-6 text-lg mb-4  lg:mb-0">
      <p className="font-custom text-lg">
        <span className="font-bold text-[#D82026]">
          THEME:
        </span> Development For The Growth Of The Creative Economy</p>
      <div className=" flex flex-col">
        <div>
          <p className=" font-semibold font-custom py-6"> 3rd - 14th August 2024 <br /><span className='text-[#D82026]'> Moi Girls Eldoret</span> </p>
        </div>
        <div className=''>
          <Button className="font-custom">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Theme