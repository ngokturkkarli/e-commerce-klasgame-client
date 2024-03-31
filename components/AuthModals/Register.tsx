import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';

const Register = () => {
  return (
    <Dialog>
      <DialogTrigger className="w-full h-10 center hover:bg-white/20 transition-all duration-200">
        Kayıt Ol
      </DialogTrigger>
      <DialogContent className="bg-stone-900 border-black text-white">
        <DialogHeader className="center  border-b border-b-white/10 pb-2">
          <DialogTitle className="text-xl font-bold">Kayıt Ol</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-sm">Email</p>
            <input
              placeholder="Email"
              type="text"
              className="h-10 bg-stone-800 outline-none rounded-lg px-4 ring-brand focus:ring-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm">Kullanını Adı</p>
            <input
              placeholder="Kullanını Adı"
              type="text"
              className="h-10 bg-stone-800 outline-none rounded-lg px-4 ring-brand focus:ring-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm">Şifre</p>
            <input
              placeholder="Şifre"
              type="password"
              className="h-10 bg-stone-800 outline-none rounded-lg px-4 ring-brand focus:ring-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm">Tekrar Şifre</p>
            <input
              placeholder="Tekrar Şifre"
              type="password"
              className="h-10 bg-stone-800 outline-none rounded-lg px-4 ring-brand focus:ring-2"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" className="bg-white/10 rounded-md w-6 h-6" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Kullanıcı sözleşmesini kabul ediyorum.
            </label>
          </div>
          <Button className="bg-brand hover:bg-orange-700 text-lg font-bold">
            Kayıt Ol
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Register;
