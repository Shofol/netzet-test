import Image from "next/image";
import Banner from "./components/home/Banner";
import Header from "./components/home/Header";
import Feature from "./components/home/Feature";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="flex flex-col items-center lg:items-start max-w-7xl mx-auto py-4 w-full relative px-10">
        <Header />
        <main>
          <div className="flex flex-col lg:flex-row ">
            <Image
              src={"/mobile-mockup.png"}
              width={666}
              height={679}
              alt="background image"
              className="pt-10 pb-0 lg:py-0 order-1 lg:order-2 -z-1 lg:-mt-20"
            />

            <div className="flex flex-col justify-center order-2 lg:order-1 lg:mt-16">
              <div className="text-2xl lg:text-4xl text-center lg:text-start font-bold font-urbanist">
                <p className="relative">
                  Want to Turn Social Media <br className="lg:hidden" /> Into a
                  Profitable Career?{" "}
                </p>
                <p className="text-brand drop-shadow-text pt-2">
                  Discover your way to success <br className="lg:hidden" />
                  with Fametonic:
                </p>
              </div>
              <ul className="max-w-xl mx-auto lg:mt-4">
                <Feature text="Start growing your influence right away—no waiting required!" />
                <Feature
                  text="Create viral TikToks and Reels step by step with easy-to-follow
              lessons"
                />
                <Feature text="Use a Personal AI Worker to boost your content" />
                <Feature text="Learn from expert-led courses designed for aspiring influencers" />
              </ul>

              <div className="flex flex-col">
                <div className="order-1 lg:order-2 text-br-gray text-center lg:text-start mt-4 xs:mx-20 font-figtree">
                  <p className="text-sm pt-4 lg:pt-0">
                    By clicking &quot;Get Started&quot;, you agree with Terms
                    and Conditions, Privacy Policy, Subscription Terms
                  </p>
                  <p className="text-xs mt-5 mb-2">
                    Fametonic 2025 ©All Rights Reserved.
                  </p>
                </div>

                <div className="xs:mx-10 lg:max-w-[313px] order-2 lg:order-1">
                  <button className=" cursor-pointer text-xl rounded-lg py-3 lg:py-2 flex items-center justify-center bg-secondary hover:bg-secondary/80 duration-200 w-full shadow-btn mt-10 font-urbanist font-bold">
                    <span>GET STARTED</span>
                    <Image
                      src={"/arrow.svg"}
                      width={14}
                      height={6}
                      className="ml-1"
                      alt="arrow icon"
                    />
                  </button>
                  <p className="mt-3 mb-10 text-center font-figtree text-sm">
                    1-minute quiz for personalized Insights
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
