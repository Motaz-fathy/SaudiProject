import { MapPin, Clock } from 'lucide-react';

const EventInfo = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-wrap justify-between max-w-4xl mx-auto gap-4">
        {/* Date Card */}
        <div className="w-full sm:w-[300px] md:w-[250px] lg:w-[300px] bg-[#1B3B39]/80 rounded-2xl flex flex-col items-center justify-center h-[200px] transition-transform hover:scale-105">
          <MapPin className="w-10 h-10 text-[#4CAF50] mb-4" />
          <div className="text-xl mb-2 text-white/90">19 - 21 فبراير</div>
          <div className="text-xl font-bold text-white">2025</div>
        </div>

        {/* Countdown Card */}
        <div className="w-full sm:w-[300px] md:w-[250px] lg:w-[300px] bg-[#1B3B39] rounded-2xl flex items-center justify-center h-[200px] transition-transform hover:scale-105">
          <div className="flex items-center justify-center gap-4">
            <div className="text-center">
              <div className="text-xl font-bold text-white">44</div>
              <div className="text-lg text-white/90">يوم</div>
            </div>
            <div className="text-xl font-bold text-white">:</div>
            <div className="text-center">
              <div className="text-xl font-bold text-white">15</div>
              <div className="text-lg text-white/90">ساعة</div>
            </div>
          </div>
        </div>

        {/* Location Card */}
        <div className="w-full sm:w-[300px] md:w-[250px] lg:w-[300px] bg-[#1B3B39]/80 rounded-2xl flex flex-col items-center justify-center h-[200px] transition-transform hover:scale-105">
          <Clock className="w-10 h-10 text-[#4CAF50] mb-4" />
          <div className="text-xl mb-2 text-white/90">الرياض،</div>
          <div className="text-lg font-bold text-white text-center">المملكة العربية السعودية</div>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
