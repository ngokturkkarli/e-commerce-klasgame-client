import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';

const Login = () => {
  return (
    <Dialog>
      <DialogTrigger className="w-full h-10 center hover:bg-white/20 transition-all duration-200">
        Giriş Yap
      </DialogTrigger>
      <DialogContent className="bg-stone-900 border-black text-white">
        <DialogHeader className="center  border-b border-b-white/10 pb-2">
          <DialogTitle className="text-xl font-bold">Giriş Yap</DialogTitle>
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
            <p className="text-sm">Şifre</p>
            <input
              placeholder="Şifre"
              type="password"
              className="h-10 bg-stone-800 outline-none rounded-lg px-4 ring-brand focus:ring-2"
            />
          </div>
          <Button className="bg-brand hover:bg-orange-700 text-lg font-bold">
            Giriş Yap
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
