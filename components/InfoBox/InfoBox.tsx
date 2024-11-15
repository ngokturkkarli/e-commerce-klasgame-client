import React from 'react';
import Container from '../Container';
import {MdContactSupport, MdOutlineSecurity} from 'react-icons/md';
import {CiClock1, CiFaceSmile} from 'react-icons/ci';

const InfoBox = () => {
  return (
    <div className="w-full center">
      <Container className="grid grid-rows-4 lg:flex gap-2">
        <div className="center flex-col gap-2 rounded-lg bg-stone-900 py-4 lg:w-[calc(100%/4)]">
          <div className="flex flex-col items-center gap-2">
            <MdOutlineSecurity size={40} color="#f97316"/>
            <p className="text-xl text-brand font-bold">Güvenlik</p>
          </div>
          <p className="px-4">
            Klasgamede gelişmiş 8 güvenlik yöntemi ile hesabınızı koruma altına
            alabilirsiniz.
          </p>
        </div>
        <div className="center flex-col gap-2 rounded-lg bg-stone-900 py-4 lg:w-[calc(100%/4)]">
          <div className="flex flex-col items-center gap-2">
            <CiClock1 size={40} color="#f97316"/>
            <p className="text-xl text-brand font-bold">Hızlı Teslimat</p>
          </div>
          <p className="px-4">
            Klasgamede satın almış olduğunuz ürünler 7 gün 24 saat en hızlı
            şekilde tarafınıza teslim edilmektedir.
          </p>
        </div>
        <div className="center flex-col gap-2 rounded-lg bg-stone-900 py-4 lg:w-[calc(100%/4)]">
          <div className="flex flex-col items-center gap-2">
            <MdContactSupport size={40} color="#f97316"/>
            <p className="text-xl text-brand font-bold">Destek Servisi</p>
          </div>
          <p className="px-4">
            7/24 Telefon, Canlı Destek, Whatsapp ile İletişimin gücü
            KLASGAMEde.
          </p>
        </div>
        <div className="center flex-col gap-2 rounded-lg bg-stone-900 py-4 lg:w-[calc(100%/4)]">
          <div className="flex flex-col items-center gap-2">
            <CiFaceSmile size={40} color="#f97316"/>
            <p className="text-xl text-brand font-bold">Mutlu Müşteri</p>
          </div>
          <p className="px-4">
            Klasgamede gelişmiş 8 güvenlik yöntemi ile hesabınızı koruma altına
            alabilirsiniz.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default InfoBox;
