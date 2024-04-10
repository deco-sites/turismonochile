import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  backgroundImage: ImageWidget;
  image: ImageWidget;
  cloudImage?: ImageWidget;
}

export default function ParalaxHero({
  backgroundImage,
  image,
  cloudImage,
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
                    animation-range: exit;
                }
            `,
        }}
      >
      </style>
      <div class="relative">
        <div
          style={{
            backgroundImage: "url(" + backgroundImage + ")",
            zIndex: -20,
          }}
          class="max-w-full max-h-full w-full bg-fixed"
        >
          {Array.from(Array(10), (e, i) => (
            <Image
              width={700}
              src={cloudImage ?? ""}
              alt={cloudImage ?? ""}
              style={{
                top: Math.random() * (200 - -400) + -400 + "px",
                right: Math.random() * (800 - -2000) + -2000 + "px",
              }}
              class={`fixed cloud-animation`}
            />
          ))}
          <Image
            width={300}
            src={image}
            alt={image}
            class="max-w-full max-h-full w-full relative z-20 hero-hidden"
          />
        </div>
      </div>
    </div>
  );
}
