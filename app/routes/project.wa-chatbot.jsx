import { Link } from "@remix-run/react";
import sistemDesign from "../../public/image/wa-chatbot-system-design.png";
import chatbotDemo from "../../public/image/chatbot-demo.webm";

export default function WAChatbot() {
  return (
    <>
      <div id="container" className="flex-1 overflow-y-auto my-20">
        <div className="w-1/4 mb-10 flex items-center justify-center">
          <Link
            to={"/"}
            className="flex items-center justify-center cursor-pointer hover:font-bold"
          >
            <i className="bi bi-arrow-left text-yellow-500 text-3xl" />
            <div className="bg-[#D9D9D9] rounded-full w-[50px] h-[50px]" />
            <p className="-ml-[25px] mr-2 font-mono">Back to Home</p>
          </Link>
        </div>
        <div id="project-detail" className="mx-36">
          <p className="leading-10 font-[Helvetica Neue] font-normal antialiased text-xl">
            Imagine being able to pay your bills without the need for a separate
            app, saving your phone's storage space. Users can handle the entire
            process within the familiar environment of WhatsApp, a platform
            everyone uses nowadays.
          </p>
          <p className="leading-10 font-[Helvetica Neue] font-normal antialiased text-xl mt-5">
            To make this possible, I’ve streamlined the process. I’ve registered
            a dedicated WhatsApp number that acts as our chatbot. All you have
            to do is send specific message to this number, and our chatbot will
            respond promptly, guiding you through the payment process step by
            step. The WhatsApp chatbot instantly provides you with the payment
            details, including the amount due and a unique transaction number.
            No more navigating through complex interfaces or downloading
            multiple apps—everything you need is just a WhatsApp message away.
          </p>
          <div className="flex items-center justify-center flex-col my-10">
            <img
              src={sistemDesign}
              className="w-[680px] border-2 border-black-300 p-10"
              alt="System Design"
            />
            <p className="text-lg font-extralight m-auto">The System Design</p>
          </div>

          <p className="leading-10 font-[Helvetica Neue] font-normal antialiased text-xl">
            Behind the scenes, I’ve built the software logic using Node.js. For
            secure and reliable hosting, we've deployed our web server on
            DigitalOcean Droplets, offering a secure HTTPS connection for
            seamless communication with WhatsApp's Webhook services. To generate
            transaction tickets and facilitate payments, we've established a
            secure connection to our client's RPC (Remote Procedure Call) system
            through a VPN (Virtual Private Network). With the expertise of our
            client's networking team, we've seamlessly integrated our cloud web
            server with their RPC, enabling quick and secure transactions.
          </p>
          <p className="leading-10 font-[Helvetica Neue] font-normal antialiased text-xl mt-5">
            See the chatbot in operation by viewing the video clip below.
          </p>
          <div className="flex items-center justify-center flex-col my-10">
            <video width="280" controls preload="metadata">
              <source src={chatbotDemo} type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <p className="text-lg font-extralight m-auto">Chatbot Demo</p>
          </div>
        </div>
      </div>
    </>
  );
}
