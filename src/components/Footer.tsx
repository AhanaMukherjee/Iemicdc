import { LocateFixed, Mail, Phone } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="w-full h-[40vh] bg-purple-300 mt-10 flex flex-col items-center justify-between">
      <div className="w-full h-[90%] flex items-center justify-between px-32">
        <div className=" h-full flex flex-col items-center justify-center gap-0">
          <Image src="/images/logo-nobg.png" width={200} height={180} alt="" />
          <p className="text-sm text-purple-900 text-center">
            3rd International Conference on 
            <br />
            Computational Intelligence, Data{" "}
            Science and Cloud Computing
            <br />
            April 11-12, 2025
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center gap-4 text-purple-900">
          <div className="flex items-center justify-start gap-2">
            <LocateFixed />
            <p>
              Institute of Engineering & Management, <br /> Salt Lake, Kolkata <br />
              West Bengal, India{" "}
            </p>
          </div>
          <div className="w-full flex items-center justify-start gap-2">
            <Mail />
            <p>iemicdc@iem.edu.in</p>
          </div>
          <div className="w-full flex items-center justify-start gap-2">
            <Phone />
            <p>+91 94635 87654</p>
          </div>
        </div>
      </div>
      <div className="bg-purple-300 w-full text-center text-purple-900 pb-1">Copyright @2025 IEM-ICDC . All Rights Reserved. </div>
    </div>
  );
};
