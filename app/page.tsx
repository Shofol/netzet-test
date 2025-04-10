import Image from "next/image";
import Banner from "./components/home/Banner";
import Header from "./components/home/Header";
import Feature from "./components/home/Feature";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-10 py-4 lg:items-start">
        <Header />
        <main>
          <div className="flex flex-col lg:flex-row">
            <Image
              src={"/mobile-mockup.png"}
              width={666}
              height={679}
              alt="background image"
              className="-z-1 order-1 pt-10 pb-0 lg:order-2 lg:-mt-20 lg:py-0"
            />

            <div className="order-2 flex flex-col justify-center lg:order-1 lg:mt-16">
              <div className="font-urbanist text-center text-2xl font-bold lg:text-start lg:text-4xl">
                <p className="relative">
                  Want to Turn Social Media <br className="lg:hidden" /> Into a
                  Profitable Career?{" "}
                </p>
                <p className="text-brand drop-shadow-text pt-2">
                  Discover your way to success <br className="lg:hidden" />
                  with Fametonic:
                </p>
              </div>
              <ul className="mx-auto max-w-xl lg:mt-4">
                <Feature text="Start growing your influence right away—no waiting required!" />
                <Feature
                  text="Create viral TikToks and Reels step by step with easy-to-follow
              lessons"
                />
                <Feature text="Use a Personal AI Worker to boost your content" />
                <Feature text="Learn from expert-led courses designed for aspiring influencers" />
              </ul>

              <div className="flex flex-col">
                <div className="text-br-gray xs:mx-20 font-figtree order-1 mt-4 text-center lg:order-2 lg:text-start">
                  <p className="pt-4 text-sm lg:pt-0">
                    By clicking &quot;Get Started&quot;, you agree with Terms
                    and Conditions, Privacy Policy, Subscription Terms
                  </p>
                  <p className="mt-5 mb-2 text-xs">
                    Fametonic 2025 ©All Rights Reserved.
                  </p>
                </div>

                <div className="xs:mx-10 order-2 lg:order-1 lg:max-w-[313px]">
                  <button className="bg-secondary hover:bg-secondary/80 shadow-btn font-urbanist mt-10 flex w-full cursor-pointer items-center justify-center rounded-lg py-3 text-xl font-bold duration-200 lg:py-2">
                    <span>GET STARTED</span>
                    <Image
                      src={"/arrow.svg"}
                      width={14}
                      height={6}
                      className="ml-1"
                      alt="arrow icon"
                    />
                  </button>
                  <p className="font-figtree mt-3 mb-10 text-center text-sm">
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
