import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className="flex flex-col">
            <CardTitle className="text-lg">프라이빗 매칭 서비스</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pb-2">
          <p>
            얼굴 노출 걱정 없이 1:1 프라이빗 매칭을 제공합니다.
          </p>
        </CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle>커플 매니저 서비스</CardTitle>
          {/* <CardDescription className="font-normal text-primary">
            사회적 명망과
            경제력을 갖춘 이들의 선택
          </CardDescription> */}
        </CardHeader>

        <CardContent className="pb-2">
          <p>
            수천 건 이상의 매칭 경험을 바탕으로 약속을 주선하고, 만남까지 케어합니다.
          </p>
        </CardContent>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            100% 환불 보장
          </CardTitle>

          <CardDescription>
            약속 불발 시 100% 환불을 보장하여, 신뢰할 수 있는 만남을 책임집니다.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div>
            <CardTitle>엄격한 회원 관리</CardTitle>
            <CardDescription className="text-md mt-2">
              철저한 본인 인증 시스템을 통해 가짜 회원 없이 신뢰할 수 있는 만남을 제공합니다.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
