import { data } from "../../data/home/hero";
import Container from "../Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <Container disableYPadding={true}>
      <div className="flex flex-col lg:flex-row bg-[#F9F3EF] gap-20 rounded-xl items-center p-10 lg:p-32">
        <div className="lg:w-1/2 space-y-8">
          <div className="space-y-5">
            <h1 className="text-primary font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-snug">
              {data.title}
            </h1>
            <p className="text-primary/80">{data.summary}</p>
          </div>
          <Button invert={data.button.invert}>{data.button.label}</Button>
        </div>
        <div className="lg:w-1/2">
          <img src={data.image} alt="hero" className="w-full h-full" />
        </div>
      </div>
    </Container>
  );
}
