import Image from 'next/image';
import headerBG from '../assets/header-bg.jpg';
import logoWhite from '../assets/logo-white.svg';
import searchIcon from '../assets/search.svg';
import likeIcon from '../assets/like-white.svg';
import cartIcon from '../assets/cart.svg';

const Header = () => (
  <header className="relative">
    <Image src={headerBG} alt="" layout="responsive" />
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="container max-w-[1320px] mx-auto py-[60px] flex justify-between font-europa text-xs tracking-[2px] text-white uppercase">
        <Image src={logoWhite} alt="MIISTA" />

        <nav>
          <ul className="grid grid-flow-col gap-10">
            <li>
              <a href="#">SHOP</a>
            </li>
            <li>
              <a href="#">E8 by MIISTA</a>
            </li>
            <li>
              <a href="#">STORES</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">Journal</a>
            </li>
          </ul>
        </nav>

        <div>
          <ul className="grid grid-flow-col gap-3">
            <li>
              <a href="#">EN$</a>
            </li>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Assistance</a>
            </li>
            <li>
              <a href="#">
                <Image src={searchIcon} alt="Search" />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src={likeIcon} alt="Favorites" />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src={cartIcon} alt="Shopping cart" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
