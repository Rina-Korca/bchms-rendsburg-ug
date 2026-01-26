import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";

export function CTABanner() {
  return (
    <section className="relative bg-gradient-to-b from-background via-background to-green-pale/20 pt-20 md:pt-28 pb-8 z-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-light/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-medium/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="relative max-w-6xl mx-auto">
          {/* Main CTA Card */}
          <div
            className="relative bg-gradient-to-br from-green-dark via-green-dark to-green-medium rounded-[2rem] md:rounded-[3rem] overflow-visible"
            style={{ boxShadow: "0 25px 60px -12px rgba(26, 71, 42, 0.4)" }}
          >
            {/* Decorative Pattern Overlay */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-[2rem] md:rounded-[3rem]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5C30 5 20 15 20 25C20 35 30 40 30 50' stroke='white' strokeWidth='1.5' fill='none'/%3E%3Cpath d='M40 10C40 10 35 20 35 28C35 36 40 45 40 55' stroke='white' strokeWidth='1.5' fill='none'/%3E%3C/svg%3E")`,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Glowing Accent Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-green-light to-transparent rounded-full" />

            {/* Decorative Monstera Leaf - Top Left */}
            <div className="absolute -top-8 -left-8 md:-top-12 md:-left-12 w-32 h-32 md:w-48 md:h-48 pointer-events-none opacity-60 rotate-[-20deg]">
              <svg
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M100 180C100 180 60 140 50 100C40 60 60 30 100 20C140 30 160 60 150 100C140 140 100 180 100 180Z"
                  className="fill-green-light/30"
                />
                <path
                  d="M100 20C100 20 100 60 100 100C100 140 100 180 100 180"
                  className="stroke-green-light/50"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M100 60C100 60 70 70 60 90"
                  className="stroke-green-light/40"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M100 60C100 60 130 70 140 90"
                  className="stroke-green-light/40"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M100 100C100 100 65 105 55 130"
                  className="stroke-green-light/40"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M100 100C100 100 135 105 145 130"
                  className="stroke-green-light/40"
                  strokeWidth="2"
                  fill="none"
                />
                <ellipse
                  cx="75"
                  cy="75"
                  rx="15"
                  ry="20"
                  className="fill-green-dark/80"
                  transform="rotate(-30 75 75)"
                />
                <ellipse
                  cx="125"
                  cy="75"
                  rx="15"
                  ry="20"
                  className="fill-green-dark/80"
                  transform="rotate(30 125 75)"
                />
              </svg>
            </div>

            {/* Decorative Leaf - Top Right */}
            <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-28 h-28 md:w-40 md:h-40 pointer-events-none opacity-50 rotate-[25deg]">
              <svg
                viewBox="0 0 150 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M75 190C75 190 20 140 15 80C10 20 50 5 75 10C100 5 140 20 135 80C130 140 75 190 75 190Z"
                  className="fill-green-light/25"
                />
                <path
                  d="M75 10C75 10 75 60 75 100C75 140 75 190 75 190"
                  className="stroke-green-light/40"
                  strokeWidth="2.5"
                  fill="none"
                />
                <path
                  d="M75 50C55 55 40 70 35 85"
                  className="stroke-green-light/30"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M75 50C95 55 110 70 115 85"
                  className="stroke-green-light/30"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M75 90C50 95 35 115 30 135"
                  className="stroke-green-light/30"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M75 90C100 95 115 115 120 135"
                  className="stroke-green-light/30"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </div>

            {/* Decorative Fern - Bottom Left */}
            <div className="absolute -bottom-10 -left-6 md:-bottom-14 md:-left-10 w-36 h-36 md:w-52 md:h-52 pointer-events-none opacity-50 rotate-[15deg]">
              <svg
                viewBox="0 0 200 250"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M100 240C100 240 95 180 100 120C105 60 100 10 100 10"
                  className="stroke-green-light/50"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  d="M100 40C80 35 55 45 45 65"
                  className="stroke-green-light/35"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M100 40C120 35 145 45 155 65"
                  className="stroke-green-light/35"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M100 80C75 75 45 90 35 115"
                  className="stroke-green-light/35"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M100 80C125 75 155 90 165 115"
                  className="stroke-green-light/35"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M100 120C70 115 40 135 25 165"
                  className="stroke-green-light/35"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M100 120C130 115 160 135 175 165"
                  className="stroke-green-light/35"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M100 160C65 155 35 180 20 210"
                  className="stroke-green-light/35"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M100 160C135 155 165 180 180 210"
                  className="stroke-green-light/35"
                  strokeWidth="2"
                  fill="none"
                />
                <ellipse
                  cx="45"
                  cy="55"
                  rx="12"
                  ry="18"
                  className="fill-green-light/20"
                  transform="rotate(-40 45 55)"
                />
                <ellipse
                  cx="155"
                  cy="55"
                  rx="12"
                  ry="18"
                  className="fill-green-light/20"
                  transform="rotate(40 155 55)"
                />
                <ellipse
                  cx="35"
                  cy="105"
                  rx="14"
                  ry="22"
                  className="fill-green-light/20"
                  transform="rotate(-35 35 105)"
                />
                <ellipse
                  cx="165"
                  cy="105"
                  rx="14"
                  ry="22"
                  className="fill-green-light/20"
                  transform="rotate(35 165 105)"
                />
              </svg>
            </div>

            {/* Decorative Palm Leaf - Bottom Right */}
            <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 w-40 h-40 md:w-56 md:h-56 pointer-events-none opacity-40 rotate-[-10deg]">
              <svg
                viewBox="0 0 220 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M110 210C110 210 105 150 110 90C115 30 110 10 110 10"
                  className="stroke-green-light/50"
                  strokeWidth="5"
                  fill="none"
                />
                <path
                  d="M110 30C70 20 30 40 15 80"
                  className="stroke-green-light/30"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M110 30C150 20 190 40 205 80"
                  className="stroke-green-light/30"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M110 70C60 60 20 90 5 140"
                  className="stroke-green-light/30"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M110 70C160 60 200 90 215 140"
                  className="stroke-green-light/30"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M110 120C55 110 15 150 5 200"
                  className="stroke-green-light/30"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M110 120C165 110 205 150 215 200"
                  className="stroke-green-light/30"
                  strokeWidth="2"
                  fill="none"
                />
                <ellipse
                  cx="50"
                  cy="50"
                  rx="20"
                  ry="30"
                  className="fill-green-light/15"
                  transform="rotate(-50 50 50)"
                />
                <ellipse
                  cx="170"
                  cy="50"
                  rx="20"
                  ry="30"
                  className="fill-green-light/15"
                  transform="rotate(50 170 50)"
                />
                <ellipse
                  cx="30"
                  cy="110"
                  rx="22"
                  ry="35"
                  className="fill-green-light/15"
                  transform="rotate(-40 30 110)"
                />
                <ellipse
                  cx="190"
                  cy="110"
                  rx="22"
                  ry="35"
                  className="fill-green-light/15"
                  transform="rotate(40 190 110)"
                />
              </svg>
            </div>

            {/* Small Floating Leaves */}
            <div className="absolute top-1/4 left-[15%] w-8 h-8 md:w-12 md:h-12 pointer-events-none opacity-40 rotate-[45deg] hidden md:block">
              <svg
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M25 45C25 45 10 30 10 20C10 10 20 5 25 5C30 5 40 10 40 20C40 30 25 45 25 45Z"
                  className="fill-green-light/40"
                />
                <path
                  d="M25 5C25 5 25 25 25 45"
                  className="stroke-white/30"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>
            <div className="absolute top-1/3 right-[20%] w-6 h-6 md:w-10 md:h-10 pointer-events-none opacity-30 rotate-[-30deg] hidden md:block">
              <svg
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M25 45C25 45 10 30 10 20C10 10 20 5 25 5C30 5 40 10 40 20C40 30 25 45 25 45Z"
                  className="fill-green-light/50"
                />
                <path
                  d="M25 5C25 5 25 25 25 45"
                  className="stroke-white/30"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>
            <div className="absolute bottom-1/4 left-[25%] w-6 h-6 md:w-8 md:h-8 pointer-events-none opacity-35 rotate-[60deg] hidden lg:block">
              <svg
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M25 45C25 45 10 30 10 20C10 10 20 5 25 5C30 5 40 10 40 20C40 30 25 45 25 45Z"
                  className="fill-green-light/45"
                />
                <path
                  d="M25 5C25 5 25 25 25 45"
                  className="stroke-white/30"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>

            <div className="relative px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
              <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                {/* Monstera Leaf Image - Left side */}
                <div className="relative z-10 flex-shrink-0 w-48 md:w-64 lg:w-80">
                  <img
                    src="/images/monstera-leaf.png"
                    alt="Monstera Blatt"
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>

                {/* Content - Right side */}
                <div className="text-center lg:text-left relative z-10 flex-1">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight text-balance">
                    Naturliche Schonheit fur Ihren{" "}
                    <span className="text-green-light">Aussenbereich</span>
                  </h2>

                  <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                    Von exotischen Pflanzen bis hin zu einheimischen Gewachsen -
                    wir gestalten Ihren Garten mit Liebe zum Detail und
                    botanischem Fachwissen.
                  </p>

                  {/* Feature List */}
                  <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
                    <div className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                      <CheckCircle2 className="w-4 h-4 text-green-light" />
                      <span className="text-sm">Pflanzplanung</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                      <CheckCircle2 className="w-4 h-4 text-green-light" />
                      <span className="text-sm">Beetgestaltung</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                      <CheckCircle2 className="w-4 h-4 text-green-light" />
                      <span className="text-sm">Ganzjahrige Pflege</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 rounded-full px-8 font-semibold text-base bg-transparent transition-all duration-300"
                    >
                      <a href="tel:015225972872">
                        <Phone className="mr-2 h-5 w-5" />
                        01522 5972872
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-light via-green-medium to-green-light opacity-50" />
          </div>

          {/* Floating Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-green-light/20 rounded-full blur-xl pointer-events-none" />
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-green-medium/30 rounded-full blur-2xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
