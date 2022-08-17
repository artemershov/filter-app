import Image from 'next/image';
import NewsletterForm from './NewsletterForm';
import logoBlack from '../assets/logo-black.svg';
import instagramIcon from '../assets/instagram.svg';
import pinterestIcon from '../assets/pinterest.svg';
import facebookIcon from '../assets/facebook.svg';
import twitterIcon from '../assets/twitter.svg';
import youtubeIcon from '../assets/youtube.svg';
import whatsappIcon from '../assets/whatsapp.svg';

const Footer = () => (
  <footer className="bg-[#F1EBDD]">
    <div className="container max-w-[1320px] mx-auto py-20">
      <NewsletterForm />
    </div>

    <div className="border border-black border-t-0 opacity-10" />

    <div className="container max-w-[1200px] mx-auto py-16 grid grid-cols-4 font-europa tracking-[2px] text-xs leading-loose uppercase">
      <nav>
        <h3 className="mb-8">Company</h3>
        <ul>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Stockist</a>
          </li>
          <li>
            <a href="#">Careers </a>
          </li>
          <li>
            <a href="#">Press</a>
          </li>
          <li>
            <a href="#">CSR</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Site map</a>
          </li>
        </ul>
      </nav>
      <nav>
        <h3 className="mb-8">Find a store</h3>
        <ul>
          <li>
            <a href="#">London</a>
          </li>
          <li>
            <a href="#">Paris</a>
          </li>
          <li>
            <a href="#">Barcelona</a>
          </li>
          <li>
            <a href="#">New York</a>
          </li>
          <li>
            <a href="#">Copenhagen</a>
          </li>
          <li>
            <a href="#">By Studio Appointment</a>
          </li>
        </ul>
      </nav>
      <nav>
        <h3 className="mb-8">Customer Service</h3>
        <ul>
          <li>
            <a href="#">Shipping info</a>
          </li>
          <li>
            <a href="#">Terms and conditions</a>
          </li>
          <li>
            <a href="#">Returns</a>
          </li>
          <li>
            <a href="#">Ordering</a>
          </li>
          <li>
            <a href="#">Order status</a>
          </li>
          <li>
            <a href="#">Shoe Care</a>
          </li>
          <li>
            <a href="#">Size guide</a>
          </li>
          <li>
            <a href="#">FAQ´s</a>
          </li>
        </ul>
      </nav>
      <nav>
        <h3 className="mb-8">Assistance</h3>
        <ul>
          <li>
            <a href="#">Call</a>
          </li>
          <li>
            <a href="#">Email</a>
          </li>
          <li>
            <a href="#">Live chat</a>
          </li>
        </ul>
        <h3 className="my-8">Legal & Cookies</h3>
        <ul>
          <li>
            <a href="#">Privacy policy </a>
          </li>
          <li>
            <a href="#">Cookies Policy </a>
          </li>
          <li>
            <a href="#">Terms and conditions</a>
          </li>
          <li>
            <a href="#">Transparency in the supply chain</a>
          </li>
        </ul>
      </nav>
    </div>

    <div className="border border-black border-t-0 opacity-10" />

    <div className="container max-w-[1320px] mx-auto py-12 flex justify-between font-europa tracking-[2px] text-xs uppercase">
      <Image src={logoBlack} alt="MIISTA" />
      <div>All right reserved</div>
      <div>
        <ul className="grid grid-flow-col gap-2">
          <li className="mr-4">Social</li>
          <li>
            <a href="#">
              <Image src={instagramIcon} alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <Image src={pinterestIcon} alt="Pinterest" />
            </a>
          </li>
          <li>
            <a href="#">
              <Image src={facebookIcon} alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <Image src={twitterIcon} alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <Image src={youtubeIcon} alt="Youtube" />
            </a>
          </li>
          <li>
            <a href="#">
              <Image src={whatsappIcon} alt="Whatsapp" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
