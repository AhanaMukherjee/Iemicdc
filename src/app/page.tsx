import GithubCardShiny from "@/components/animata/card/github-card-shiny";
import Carousel from "@/components/Carousel";
import { Container } from "@/components/Container";
import { DataBox } from "@/components/DataBox";
import { Separator } from "@/components/Separator";
import { Bot, CalendarCheck, CalendarDays, Cpu, ImageIcon, ShieldHalf } from "lucide-react";
import Image from "next/image";
import React from "react";

const Card = ({
  track,
  Avatar,
}: {
  track: string;
  Avatar: React.ReactNode;
}) => {
  return (
    <GithubCardShiny className="w-[35%] h-[35vh] cursor-pointer px-0 py-2 bg-gray-100 text-primary shadow-sm">
      <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-2">
        {Avatar}
        <h1 className="text-lg text-center h-[10vh] font-bold">{track}</h1>
      </div>
    </GithubCardShiny>
  );
};

export default function Home() {
  return (
    <Container className=" flex flex-col items-center justify-start gap-10">
      <Carousel />

      <DataBox
        title="Welcome To IEM-ICDC 2025!"
        data="IEM-ICDC 2025: International Conference on Computational Intelligence,
          Data Science and Cloud Computing is an endeavour in enticing interest
          for Computational Intelligence and Data Science applications in
          diverse domains. As the world is moving towards industry 4.0,
          Computational Intelligence, Data Science and Cloud Computing are
          becoming more and more relevant in our society in all possible ways.
          <br />
          <br />
          The most substantial new findings about AI and Robotics, Image
          processing and NLP, Cloud Computing and big data analytics as well as
          in Cyber security, Blockchain and IoT and various allied fields will
          be presented in the three-day event comprised of insightful invited
          talks, innovative technical sessions and informative workshops. The
          general chair, the convener, along with the entire team invite
          researchers and industry personnel around the world to take part in
          the upcoming event to make the event a grand success."
      />

      <Separator />

      <div className="w-[100%] flex flex-col items-center justify-center gap-3">
        <h1 className="w-full text-4xl text-center text-primary font-bold after:w-fit after:absolute relative after:bottom-0 after:left-0 after:h-[2px] after:bg-primary">
          Our Technical Partners
        </h1>
        <div className=" w-full flex items-center justify-center gap-20 my-4">
          <Image src="/images/SP1.jpg" width={200} height={200} alt="SP1" />
          <Image src="/images/SP2.jpg" width={300} height={200} alt="SP2" />
          <Image src="/images/SP3.jpeg" width={200} height={200} alt="SP2" />
          <Image src="/images/SP4.jpeg" width={200} height={200} alt="SP2" />
        </div>
      </div>

      <Separator />

      <div className="w-[80%] space-y-6 my-10">
        <h1 className="w-full text-center text-4xl text-primary font-bold mb-10">
          Tracks Of The Conference
        </h1>
        <div className="w-full flex items-center justify-center gap-4">
          <Card
            track="AI And Robotics"
            Avatar={<Bot className="size-[60%]" />}
          />

          <Card
            track="Image Processing And NLP"
            Avatar={<ImageIcon className="size-[60%]" />}
          />

          <Card
            track="Cloud Computing And Big Data Analytics"
            Avatar={<Cpu className="size-[60%]" />}
          />

          <Card
            track="Cyber Security, Blockchain And IoT"
            Avatar={<ShieldHalf className="size-[60%]" />}
          />
        </div>
      </div>

      <Separator />

      <div className=" space-y-3 text-center w-[80%]">
        <h1 className="text-4xl font-bold text-primary mb-10">Important Dates</h1>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-primary">
            <thead className="text-primary uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 flex items-center justify-start gap-2 text-lg font-extrabold">
                  <CalendarCheck className="" />
                  <p className="">Event</p>
                </th>
                <th scope="col" className="px-6 py-3 text-lg font-bold">
                  <div className="flex items-center justify-start gap-2">
                  <CalendarDays />
                  <p>Date</p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-gray-50 border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-lg text-gray-700 whitespace-nowrap"
                >
                  Deadline for full paper Submission
                </th>
                <td className="px-6 py-4 text-lg">January 10, 2025</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50 border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-lg text-gray-700 whitespace-nowrap"
                >
                  Acceptance notification for papers
                </th>
                <td className="px-6 py-4 text-lg">March 04, 2025</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50 border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-lg text-gray-700 whitespace-nowrap"
                >
                  Deadline for camera ready paper submission:
                </th>
                <td className="px-6 py-4 text-lg">March 14, 2025</td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50 border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-lg text-gray-700 whitespace-nowrap"
                >
                  Deadline for paper and participation registration
                </th>
                <td className="px-6 py-4 text-lg">March 20, 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
}
