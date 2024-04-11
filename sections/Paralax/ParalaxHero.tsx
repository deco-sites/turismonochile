import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  backgroundImage: ImageWidget;
  image: ImageWidget;
  cloudImage?: ImageWidget;
  headingText: string;
  imageHeadingText: ImageWidget;
  starsAnimation?: boolean;
}

export default function ParalaxHero({
  backgroundImage,
  image,
  cloudImage,
  headingText,
  imageHeadingText,
  starsAnimation = true
}: Props) {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
                @keyframes cloud-in-sky {
                    from {
                        transform: translateX(200%)
                    }
                    to {
                        transform: translateX(-200%)
                    }
                }   
                .cloud-animation {
                    animation: cloud-in-sky 60s linear infinite;
                }

                @keyframes stars {
                  from {
                      background-position: 0 100%;
                  }
                  to {
                    background-position: 100% 100%;
                  }
                } 
                .stars {
                  animation: stars 60s linear infinite forwards;
                }

                @keyframes hidden-hero {
                    from {
                        opacity: 1;
                    }
                    to {
                        opacity: 0;
                        transform: scale(1.5);
                    }
                } 
                .hero-hidden {
                    animation: hidden-hero linear forwards;
                    animation-timeline: view();
                    animation-range: exit 100px;
                }

                @keyframes heading-animation {
                  100% {
                    left: 25%;
                    font-size: 260px;
                  }
                }

                .heading-animation {
                  animation: heading-animation linear forwards;
                  animation-timeline: scroll();
                }
            `,
        }}
      >
      </style>
      <div class="relative overflow-x-clip">
        <div
          style={{
            backgroundImage: "url(" + backgroundImage + ")",
            backgroundSize: '120%',
            zIndex: -20,
            height: '300vh'
          }}
          class={"max-w-full max-h-full w-full bg-fixed relative" + starsAnimation && 'stars'}
        >
          {cloudImage && Array.from(Array(10), (e, i) => (
            <Image
              width={700}
              src={cloudImage ?? ""}
              alt={cloudImage ?? ""}
              style={{
                top: Math.random() * (200 - -400) + -400 + "px",
                right: Math.random() * (800 - -2000) + -2000 + "px",
                zIndex: -10
              }}
              class={`fixed cloud-animation`}
            />
          ))}
          <h1 
            class="heading-animation text-[transparent] uppercase text-center font-bold text-[200px] fixed top-[15%] left-[10%]"
            style={{
              backgroundImage: "url(" + imageHeadingText + ")",
              '-webkit-text-stroke': '.5vh #fff',
              '-webkit-background-clip': 'text',
              backgroundClip: 'text',
              backgroundSize: 'cover',
              backgroundPosition: 'top'
            }}
          >
            {headingText}
          </h1>
          <Image
            width={300}
            src={image}
            alt={image}
            class="max-w-full w-full fixed top-[-80px] z-20 hero-hidden"
          />
        </div>
      </div>
    </div>
  );
}
