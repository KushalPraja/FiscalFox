import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg] mr-4" />
      <p className="text-[44px]"> Fiscal Fox</p>
    </div>
  );
}
