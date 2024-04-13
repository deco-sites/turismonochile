import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  backgroundImage: ImageWidget;
  image: ImageWidget;
  cloudImage?: ImageWidget;
  headingText: string;
  imageHeadingText: ImageWidget;
  starsAnimation?: boolean;
  description?: string;
}

export default function ParalaxHero({
  backgroundImage,
  image,
  cloudImage,
  headingText,
  imageHeadingText,
  starsAnimation = true,
  description,
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
                  animation: stars 50s linear infinite forwards;
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
                  50%, 100% {
                    left: 25vw;
                    font-size: 260px;
                  }
                }

                @media(max-width: 1280px) {
                  @keyframes heading-animation {
                    50%, 100% {
                      top: 40%;
                    }
                  }
                }

                .heading-animation {
                  animation: heading-animation linear forwards;
                  animation-timeline: scroll();
                  background-position: center;
                }
                
                @keyframes description-animation {
                  30% {
                    opacity: 0;
                  }
                  50%, 100% {
                    opacity: 1;
                  }
                }

                .description-animation {
                  opacity: 0;
                  animation: description-animation linear forwards;
                  animation-timeline: scroll();
                }

                @media(min-width: 1556px) {
                  .description-animation {
                    width: 87%;
                  }
                }

                @keyframes dot-animation {
                  75% {
                    box-shadow: 0 0 0 0;
                  }
                  100% {
                    box-shadow: 0 0 1000000px 10000px;
                  }
                }

                .dot {
                  animation: dot-animation linear forwards;
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
            backgroundSize: "120%",
            zIndex: -20,
            height: "700vh",
          }}
          class={"max-w-full max-h-full w-full bg-fixed relative" +
              starsAnimation && "stars"}
        >
          {cloudImage && Array.from(Array(10), (e, i) => (
            <Image
              width={700}
              src={cloudImage ?? ""}
              alt={cloudImage ?? ""}
              style={{
                top: Math.random() * (200 - -400) + -400 + "px",
                right: Math.random() * (800 - -2000) + -2000 + "px",
                zIndex: -10,
              }}
              class={`fixed cloud-animation`}
            />
          ))}
          <h1
            class="heading-animation text-[transparent] uppercase text-center font-bold text-8xl lg:text-[200px] fixed top-[15%] left-[15vw]"
            style={{
              backgroundImage: "url(" + imageHeadingText + ")",
              "-webkit-text-stroke": ".5vh #fff",
              "-webkit-background-clip": "text",
              backgroundClip: "text",
              backgroundSize: "cover",
            }}
          >
            {headingText}
          </h1>
          <p class="fixed w-full text-center text-white text-4xl top-[65%] description-animation">
            {description}{" "}
            <span
              class="dot"
              style={{
                width: "4px",
                height: "4px",
                backgroundColor: "#fff",
                position: "absolute",
                bottom: "5px",
              }}
            >
            </span>
          </p>
          <Image
            width={300}
            src={image}
            alt={image}
            class="max-w-none w-[300%] lg:w-full bottom-0 lg:bottom-[unset] fixed z-20 hero-hidden"
          />
        </div>
      </div>
    </div>
  );
}
