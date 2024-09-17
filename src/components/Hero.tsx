import hero from '../assets/hero.png';


export const Hero = () => {
  return (
    <div className="">
        <img src={hero} alt="Hero image" className='w-full max-h-[600px] object-cover' />
    </div>
  )
}
