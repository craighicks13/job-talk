import { type LucideIcon, LucideProps, Mail, User2, Clock } from 'lucide-react'

export type Icon = LucideIcon

export const Icons = {
  email: Mail,
  person: User2,
  clock: Clock,
  apple: ({ ...props }: LucideProps) => (
    <svg aria-hidden="true" viewBox="0 0 32 32" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.528 24.8c-.232.592-.768 1.424-1.536 2.016-.44.336-.968.664-1.688.88-.768.232-1.72.304-2.904.304H10.6c-1.184 0-2.128-.08-2.904-.304a4.99 4.99 0 0 1-1.688-.88c-.76-.584-1.304-1.424-1.536-2.016C4.008 23.608 4 22.256 4 21.4V10.6c0-.856.008-2.208.472-3.4.232-.592.768-1.424 1.536-2.016.44-.336.968-.664 1.688-.88C8.472 4.08 9.416 4 10.6 4h10.8c1.184 0 2.128.08 2.904.304a4.99 4.99 0 0 1 1.688.88c.76.584 1.304 1.424 1.536 2.016C28 8.392 28 9.752 28 10.6v10.8c0 .856-.008 2.208-.472 3.4Zm-9.471-6.312a1.069 1.069 0 0 0-.32-.688c-.36-.376-.992-.624-1.736-.624-.745 0-1.377.24-1.737.624-.183.2-.287.4-.32.688-.063.558-.024 1.036.04 1.807v.009c.065.736.184 1.72.336 2.712.112.712.2 1.096.28 1.368.136.448.625.832 1.4.832.776 0 1.273-.392 1.4-.832.08-.272.169-.656.28-1.368.152-1 .273-1.976.337-2.712.072-.776.104-1.256.04-1.816ZM16 16.375c1.088 0 1.968-.88 1.968-1.967 0-1.08-.88-1.968-1.968-1.968s-1.968.88-1.968 1.968.88 1.967 1.968 1.967Zm-.024-9.719c-4.592.016-8.352 3.744-8.416 8.336-.048 3.72 2.328 6.904 5.648 8.072.08.032.16-.04.152-.12a35.046 35.046 0 0 0-.041-.288c-.029-.192-.057-.384-.079-.576a.317.317 0 0 0-.168-.232 7.365 7.365 0 0 1-4.424-6.824c.04-4 3.304-7.256 7.296-7.288 4.088-.032 7.424 3.28 7.424 7.36 0 3.016-1.824 5.608-4.424 6.752a.272.272 0 0 0-.168.232l-.12.864c-.016.088.072.152.152.12a8.448 8.448 0 0 0 5.648-7.968c-.016-4.656-3.816-8.448-8.48-8.44Zm-5.624 8.376c.04-2.992 2.44-5.464 5.432-5.576 3.216-.128 5.88 2.456 5.872 5.64a5.661 5.661 0 0 1-2.472 4.672c-.08.056-.184-.008-.176-.096.016-.344.024-.648.008-.96 0-.104.04-.2.112-.272a4.584 4.584 0 0 0 1.448-3.336 4.574 4.574 0 0 0-4.752-4.568 4.585 4.585 0 0 0-4.392 4.448 4.574 4.574 0 0 0 1.448 3.456c.08.072.12.168.112.272-.016.32-.016.624.008.968 0 .088-.104.144-.176.096a5.65 5.65 0 0 1-2.472-4.744Z"
      />
    </svg>
  ),
  spotify: ({ ...props }: LucideProps) => (
    <svg aria-hidden="true" viewBox="0 0 32 32" {...props}>
      <path d="M15.8 3a12.8 12.8 0 1 0 0 25.6 12.8 12.8 0 0 0 0-25.6Zm5.87 18.461a.8.8 0 0 1-1.097.266c-3.006-1.837-6.787-2.252-11.244-1.234a.796.796 0 1 1-.355-1.555c4.875-1.115 9.058-.635 12.432 1.427a.8.8 0 0 1 .265 1.096Zm1.565-3.485a.999.999 0 0 1-1.371.33c-3.44-2.116-8.685-2.728-12.755-1.493a1 1 0 0 1-.58-1.91c4.65-1.41 10.428-.726 14.378 1.7a1 1 0 0 1 .33 1.375l-.002-.002Zm.137-3.629c-4.127-2.45-10.933-2.675-14.871-1.478a1.196 1.196 0 1 1-.695-2.291c4.52-1.374 12.037-1.107 16.785 1.711a1.197 1.197 0 1 1-1.221 2.06" />
    </svg>
  ),
  rss: ({ ...props }: LucideProps) => (
    <svg aria-hidden="true" viewBox="0 0 32 32" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 4h15A4.5 4.5 0 0 1 28 8.5v15a4.5 4.5 0 0 1-4.5 4.5h-15A4.5 4.5 0 0 1 4 23.5v-15A4.5 4.5 0 0 1 8.5 4ZM13 22a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-6-6a9 9 0 0 1 9 9h3A12 12 0 0 0 7 13v3Zm5.74-4.858A15 15 0 0 0 7 10V7a18 18 0 0 1 18 18h-3a15 15 0 0 0-9.26-13.858Z"
      />
    </svg>
  ),
  youtube: ({ ...props }: LucideProps) => (
    <svg
      width="24"
      height="24"
      aria-hidden="true"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
    </svg>
  ),
}