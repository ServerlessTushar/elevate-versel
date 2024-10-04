"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

interface IconTextCardProps {
  id: number;
  img: any;
  title: string;
  disc: string;
}

interface WholeBodyApproachMobileProps {
  data: IconTextCardProps[];
}

const WholeBodyApproachMobile: React.FC<WholeBodyApproachMobileProps> = ({
  data,
}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel setApi={setApi} className="w-full max-w-xs relative">
        <CarouselContent>
          {data.map((obj) => (
            <CarouselItem key={obj.id}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center px-6  border border-solid border-black rounded-lg ">
                  <div className="b-white">
                    <Image
                      src={obj.img}
                      alt={obj.title}
                      width={40}
                      height={40}
                    />
                    <h1 className="text-lg font-bold mt-2 mb-1">{obj.title}</h1>
                    <p className="text-sm md:mb-8 md:mx-14">{obj.disc}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground mt-4">
        <button
          type="button"
          className={`w-3 h-3 rounded-full ${
            current === 1 ? "bg-slate-600" : "bg-white"
          } mx-2`}
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className={`w-3 h-3 rounded-full ${
            current === 2 ? "bg-slate-600" : "bg-white"
          } mx-2`}
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className={`w-3 h-3 rounded-full ${
            current === 3 ? "bg-slate-600" : "bg-white"
          } mx-2`}
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          className={`w-3 h-3 rounded-full ${
            current === 4 ? "bg-slate-600" : "bg-white"
          } mx-2`}
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
      </div>
    </div>
  );
};

export default WholeBodyApproachMobile;
