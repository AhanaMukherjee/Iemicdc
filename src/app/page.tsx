import Carousel from "@/components/Carousel";
import { Container } from "@/components/Container";
import { Bot, Cpu, ImageIcon, ShieldHalf } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <Container className=" flex flex-col items-center justify-start gap-10">
      <Carousel />
      <div className="w-[60%] space-y-6">
        <h1 className="w-full text-center text-4xl text-purple-600 font-bold">
          Welcome To IEM-ICDC 2025!
        </h1>
        <p className="text-gray-500">
          IEM-ICDC 2025: International Conference on Computational Intelligence,
          Data Science and Cloud Computing is an endeavour in enticing interest
          for Computational Intelligence and Data Science applications in
          diverse domains. As the world is moving towards industry 4.0,
          Computational Intelligence, Data Science and Cloud Computing are
          becoming more and more relevant in our society in all possible ways.
          <br />
          The most substantial new findings about AI and Robotics, Image
          processing and NLP, Cloud Computing and big data analytics as well as
          in Cyber security, Blockchain and IoT and various allied fields will
          be presented in the three-day event comprised of insightful invited
          talks, innovative technical sessions and informative workshops. The
          general chair, the convener, along with the entire team invite
          researchers and industry personnel around the world to take part in
          the upcoming event to make the event a grand success.
        </p>
      </div>

      <div className="w-[60%] flex flex-col items-center justify-center gap-3">
        <h1 className="w-full text-4xl text-center text-purple-600 font-bold after:w-fit after:absolute relative after:bottom-0 after:left-0 after:h-[2px] after:bg-purple-600">Our Technical Partners</h1>
        {/* <div className="w-full h-[2px] bg-purple-300 "></div> */}
        <div className=" w-full flex items-center justify-between px-10">
          <Image src="/images/SP1.jpg" width={200} height={200} alt="SP1" />
          <Image src="/images/SP2.jpg" width={400} height={200} alt="SP2" />
        </div>
      </div>

      <div className="w-[60%] space-y-6">
        <h1 className="w-full text-center text-4xl text-purple-600 font-bold">
          Tracks Of The Conference
        </h1>
        <ul className="text-gray-500 text-2xl space-y-5">
          <li className=" flex items-center gap-2"><Bot /> AI and Robotics</li>
          <li className=" flex items-center gap-2"><ImageIcon /> Image processing and NLP</li>
          <li className=" flex items-center gap-2"><Cpu /> Cloud Computing and big data analytics</li>
          <li className=" flex items-center gap-2"><ShieldHalf /> Cyber security, Blockchain and IoT</li>
        </ul>
      </div>

    </Container>
  );
}
