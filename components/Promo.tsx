import Image from 'next/image';
import promoBG from '../assets/promo-bg.jpg';

const Promo = () => (
  <section className="relative">
    <Image src={promoBG} alt="Promo" layout="responsive" />
    <div className="absolute top-0 left-0 w-full h-full flex text-center justify-center items-center font-europa text-6xl leading-[70px] tracking-[6.5px] text-white uppercase">
      The new
      <br />
      collection
      <br />
      is out
    </div>
  </section>
);

export default Promo;
