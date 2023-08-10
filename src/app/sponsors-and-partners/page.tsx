import { Container } from '@/components/Container'
import { Icons } from '@/components/Icons'
import Image from 'next/image'

export default function SponsorPartnerPage() {
  return (
    <>
      <div className="pb-12 pt-16 sm:pb-4 lg:pt-12">
        <Container>
          <div className="prose prose-slate mt-14 [&>h2:nth-of-type(3n)]:before:bg-violet-200 [&>h2:nth-of-type(3n+2)]:before:bg-indigo-200 [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-medium [&>h2]:leading-7 [&>h2]:text-slate-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5 [&>h2]:before:rounded-r-full [&>h2]:before:bg-cyan-200 [&>ul]:mt-6 [&>ul]:list-['\2013\20'] [&>ul]:pl-5">
            <h1>Our Sponsors and Partners</h1>
            <p>
              We are grateful for the support and collaboration of the following
              companies. Their contributions have played an instrumental role in
              making The Job Talk Podcast possible, where we delve into
              conversations with individuals who are passionate about their
              careers. Our podcast aims to inspire and educate our listeners
              about different career options, empowering them to make informed
              decisions about their professional paths.
            </p>
            <p>
              Would you like to sponsor an episode of the podcast? Reach out
              anytime:{' '}
              <a href="mailto:talk@thejobtalk.com">talk@thejobtalk.com</a>
            </p>
            <h2>Partners</h2>
            <p>
              In addition to our sponsors, we have also partnered with several
              companies who have joined us in our podcasting journey. These
              partnerships are built on mutual trust and collaboration, and we
              greatly value their involvement.
            </p>
            <div className="grid grid-cols-2 items-center justify-center gap-x-10 gap-y-5 pt-4 lg:gap-x-20 lg:pt-7">
              <Image
                src="/images/partners/calgary-police-service-logo-jpg.webp"
                alt="Calgary Police Service"
                width={978}
                height={383}
              />
              <Image
                src="/images/partners/gooselaw-logo.png"
                alt="Gooselaw"
                width={978}
                height={383}
              />
              <Image
                src="/images/partners/logo-jpg.webp"
                alt="Tom & Le Wealth Management Group"
                width={978}
                height={383}
              />
              <Image
                src="/images/partners/smart-in-sensing-jpg.webp"
                alt="Smart In Sensing"
                width={978}
                height={383}
              />
              <Image
                src="/images/partners/finning.webp"
                alt="Finning"
                width={978}
                height={383}
              />
              <Image
                src="/images/partners/seminar-tech.webp"
                alt="Seminar Techs Inc. Audio/Visual Support for your live event"
                width={978}
                height={383}
              />
              <Image
                src="/images/partners/atlantic-vet-college.png"
                alt="Atlantic Veterinary College (AVC) at the University of Prince Edward Island"
                width={485}
                height={600}
                className="h-32 w-auto place-self-center"
              />
              <Image
                src="/images/partners/amr-design-jpg.webp"
                alt="AMR Design"
                width={978}
                height={383}
              />
            </div>
            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-2 text-gray-500">
                  <Icons.heart
                    className="h-5 w-5 text-gray-500"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </div>
            <p>
              Our partners share our passion for helping individuals navigate
              their career paths. They bring unique expertise and resources to
              The Job Talk Podcast, enriching the conversations we have with our
              guests. Through their collaboration, we are able to provide
              insightful episodes that shed light on various career options,
              inspiring our listeners to explore new and exciting paths for
              themselves.
            </p>
            <p>
              Would you like to partner on an episode of the podcast? Reach out
              anytime:{' '}
              <a href="mailto:talk@thejobtalk.com">talk@thejobtalk.com</a>
            </p>
          </div>
        </Container>
      </div>
    </>
  )
}
