import Link from 'next/link';
import Container from '../Container';
import {
  BsInstagram,
  BsLinkedin,
  BsTwitch,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="relative bg-stone-900 flex justify-center py-12">
      <Container className="flex gap-4 mb-4">
        <div className="flex flex-col gap-4 h-full justify-center">
          <Link href={'/'}>
            <h2 className="text-4xl font-bold tracking-widest">
              <span className="text-brand">KLAS</span>GAME
            </h2>
          </Link>
          <div className="flex justify-center gap-2">
            <div className="p-1 hover:bg-white/10 transition-all duration-300 rounded-lg cursor-pointer center">
              <BsTwitter size={20} color="blue" />
            </div>
            <div className="p-1 hover:bg-white/10 transition-all duration-300 rounded-lg cursor-pointer center">
              <BsInstagram size={20} color="pink" />
            </div>
            <div className="p-1 hover:bg-white/10 transition-all duration-300 rounded-lg cursor-pointer center">
              <BsYoutube size={20} color="red" />
            </div>
            <div className="p-1 hover:bg-white/10 transition-all duration-300 rounded-lg cursor-pointer center">
              <BsTwitch size={20} color="purple" />
            </div>
            <div className="p-1 hover:bg-white/10 transition-all duration-300 rounded-lg cursor-pointer center">
              <BsLinkedin size={20} color="blue" />
            </div>
          </div>
        </div>
        <div className="flex-1 flex gap-4 justify-around">
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-bold pl-2">KLASGAME</h2>
            <div className="flex flex-col gap-1">
              <p className="hover:bg-white/10 rounded-lg px-2 py-1 cursor-pointer">
                Hakkımızda
              </p>
              <p className="hover:bg-white/10 rounded-lg px-2 py-1 cursor-pointer">
                Kariyer
              </p>
              <p className="hover:bg-white/10 rounded-lg px-2 py-1 cursor-pointer">
                Blog
              </p>
              <p className="hover:bg-white/10 rounded-lg px-2 py-1 cursor-pointer">
                Haberler
              </p>
              <p className="hover:bg-white/10 rounded-lg px-2 py-1 cursor-pointer">
                İletişim
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-bold pl-2">Genel</h2>
            <div className="flex flex-col gap-1">
              <p className="hover:bg-white/10 rounded-lg px-2 py-1 cursor-pointer">
                Sıkça Sorulan Sorular
              </p>
              <p className="hover:bg-white/10 rounded-lg px-2 py-1 cursor-pointer">
                Öneri ve Şikayet
              </p>
              <p className="hover:bg-white/10 rounded-lg px-2 py-1 cursor-pointer">
                İade ve İptal
              </p>
              <p className="hover:bg-white/10 rounded-lg px-2 py-1 cursor-pointer">
                Gizlilik Sözleşmesi
              </p>
              <p className="hover:bg-white/10 rounded-lg px-2 py-1 cursor-pointer">
                Üyelik Sözleşmesi
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-bold pl-2">İletişim</h2>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col hover:bg-white/10 rounded-lg px-2 py-1 transition-all duration-300 cursor-pointer">
                <p>Mail Adresimiz</p>
                <p className="text-brand">destek@klasgame.com</p>
              </div>
              <div className="flex flex-col hover:bg-white/10 rounded-lg px-2 py-1 transition-all duration-300 cursor-pointer">
                <p>Telefon Numaramız</p>
                <p className="text-brand">08503046554</p>
              </div>
              <div className="flex flex-col hover:bg-white/10 rounded-lg px-2 py-1 transition-all duration-300 cursor-pointer">
                <p>Whatsapp</p>
                <p className="text-brand">908503046554</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="absolute bottom-0 left-0 w-full py-2 border-t border-t-white/10 center">
        Copyright © 2005-2024 Klasgame, Tüm hakları saklıdır.
      </div>
    </div>
  );
};

export default Footer;
