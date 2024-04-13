import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  backgroundImage: ImageWidget;
  snowLayer1: ImageWidget;
  snowLayer2: ImageWidget;
  headingText: string;
  imageHeadingText: ImageWidget;
}


export default function SnowAnimation({
  backgroundImage,
  snowLayer1,
  snowLayer2,
  headingText,
  imageHeadingText
}: Props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .snow {
              position: absolute;
              width: 100%;
              height: 100%;
              background-image: url(${snowLayer1});
              background-repeat: repeat;
              animation: snow 120s linear infinite;
            }
            .snow-behind {
                position: absolute;
                width: 100%;
                height: 100%;
                background-image: url(${snowLayer2});
                background-repeat: repeat;
                opacity: .3;
                animation: snowBehind 120s linear infinite;
            }

            @keyframes snow {
                from {
                    background-position: 0 0;
                }
                to {
                    background-position: 0 800em;
                }
            }
            @keyframes snowBehind {
                from {
                    background-position: 0 0;
                }
                to {
                    background-position: 500em 500em;
                }
            }
            `,
        }}
      >
      </style>
      <div class="relative z-20" style="box-shadow: 0 0 50px 100px #fff"></div>
        <div
          class={`max-w-full max-h-full w-full bg-fixed relative z-10`}
        >
          <div
            style={{
              backgroundImage: "url(" + backgroundImage + ")",
              backgroundSize: "auto",
              zIndex: -20,
              height: "200vh",
              backgroundPosition: "top"
            }}
            class={"max-w-full max-h-full w-full bg-fixed relative py-24"}
          >
            <div
              class={`snow-behind`}
            />
            <div
              class={`snow`}
            />
            <h3 
              class="uppercase text-[transparent] text-center font-bold text-8xl lg:text-[120px] sticky top-[30%] w-full"
              style={{
                backgroundImage: "url(" + imageHeadingText + ")",
                "-webkit-text-stroke": ".5vh #000",
                "-webkit-background-clip": "text",
                backgroundClip: "text",
                backgroundPosition: "center",
              }}
            >{headingText}</h3>
          </div>
        </div>
        <div class="relative z-20" style="box-shadow: 0 0 50px 100px #fff"></div>
    </>
  );
}
