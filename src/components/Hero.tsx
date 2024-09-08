import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">

          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              CLASSY
            </span>
            로
          </h1>{" "}
          <br />
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              좋은 인연
            </span>
            을
          </h2>
          <br />
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              만나
            </span>
            보세요
          </h2>
          <br />
        </main>

        {/* <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          한 사람과의 단 한번의 만남이 인생을 바꿀 수도 있습니다.
        </p> */}

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex space-x-4">
            {/* Google Play Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.esc.classy&hl=KR"
              className="flex items-center px-4 py-2 border border-white text-white rounded-md hover:bg-gray-700 transition"
            >
              {/* <img
                src="https://e1.pngegg.com/pngimages/55/408/png-clipart-google-play-icon-logo-512-google-play-logo.png"
                alt="Google Play"
                className="w-6 h-6 mr-2"
              /> */}
              <span className="font-medium">Google Play</span>
            </a>

            <a
              href="https://apps.apple.com/kr/app/classy-%ED%81%B4%EB%9E%98%EC%94%A8-%ED%94%84%EB%9D%BC%EC%9D%B4%EB%B9%97-%ED%95%98%EC%9D%B4%EC%97%94%EB%93%9C-%EB%8D%B0%EC%9D%B4%ED%8C%85%EC%95%B1/id6477568998"
              className="flex items-center px-4 py-2 border border-white text-white rounded-md hover:bg-gray-700 transition"
            >
              {/* <img
                src="https://e7.pngegg.com/pngimages/718/1015/png-clipart-app-store-apple-google-play-apple-text-logo.png"
                alt="Apple Store"
                className="w-6 h-6 mr-2"
              /> */}
              <span className="font-medium">Apple Store</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
