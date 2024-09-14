import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "CLASSY의 100% 환불 보장 정책은 무엇인가요?",
    answer: "약속이 불발될 경우 전액 환불을 보장합니다.",
    value: "item-1",
  },
  {
    question: "CLASSY의 만남 보장 정책이란 무엇인가요?",
    answer:
      "상대방의 귀책 사유로 만남이 이루어지지 않을 경우 100% 환불을 보장하며, 첫 만남 후 불만족 시 재매칭을 제공합니다.",
    value: "item-2",
  },
  {
    question:
      "가짜 회원이 없다는 것은 어떻게 보장하나요?",
    answer:
      "철저한 본인 인증 시스템을 통해 가짜 회원이 없음을 보장합니다.",
    value: "item-3",
  },
  {
    question: "커플 매니저 서비스는 무엇인가요?",
    answer: "수천 건 이상의 매칭 경험을 바탕으로 회원의 만남을 주선하고, 만남 성사까지 전 과정을 케어합니다.",
    value: "item-4",
  },
  {
    question:
      "CLASSY는 어떻게 비매너 회원을 관리하나요?",
    answer:
      "비매너 회원은 100% 영구 제명하여 철저히 관리합니다.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        자주 묻는{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          질문
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        더 궁금한 사항이 있으신가요?{" "}
        <a
          rel="noreferrer noopener"
          href="mailto:help@classy.city"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
