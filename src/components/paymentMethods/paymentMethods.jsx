import { useState } from 'react'

const methods = [
  { id: 'upi', label: 'UPI', icon: 'upi' },
  { id: 'wallet', label: 'Wallet', icon: 'wallet' },
  { id: 'card', label: 'Debit / Credit Card', icon: 'card' },
  { id: 'banking', label: 'Net Banking', icon: 'bank' },
]

const ChevronDown = ({ open }) => (
  <svg
    className={`h-7 w-7 text-[#8f91a0] transition-transform ${open ? 'rotate-180' : ''}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
)

const IconFrame = ({ type }) => (
  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-[#e6e6e8] bg-white">
    {type === 'upi' && (
      <span className="relative h-10 w-8">
        <span className="absolute left-1 top-1 h-9 w-3 skew-x-[-17deg] bg-[#ff6b1a]" />
        <span className="absolute left-3 top-0 h-10 w-3 skew-x-[-17deg] bg-[#008f5a]" />
      </span>
    )}
    {type === 'wallet' && (
      <svg className="h-8 w-8 text-[#777]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 7.5h14.5A2.5 2.5 0 0 1 21 10v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6.8A2.8 2.8 0 0 1 4.8 4H18v3.5" />
        <path d="M16 12h5v4h-5a2 2 0 1 1 0-4Z" />
        <path d="M17.5 14h.01" />
      </svg>
    )}
    {type === 'card' && (
      <svg className="h-8 w-8 text-[#777]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18" />
        <path d="M7 15h3" />
      </svg>
    )}
    {type === 'bank' && (
      <svg className="h-8 w-8 text-[#777]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3 2.8 8.8V10h18.4V8.8L12 3ZM5 11.5V18H3.5v2h17v-2H19v-6.5h-2V18h-2.5v-6.5h-2V18H10v-6.5H8V18H5.5v-6.5H5Z" />
      </svg>
    )}
  </span>
)

const TextInput = ({ placeholder, className = '', type = 'text' }) => (
  <input
    className={`h-[60px] rounded-[14px] bg-[#f1f1f3] px-7 text-[22px] text-[#666b75] outline-none placeholder:text-[#666b75] ${className}`}
    placeholder={placeholder}
    type={type}
  />
)

const FreechargeLogo = () => (
  <div className="flex flex-col items-center gap-5">
    <span className="grid h-12 w-12 place-items-center rounded-full bg-[#e96f48] text-4xl font-bold italic text-white">
      f
    </span>
    <span className="text-lg text-[#5f6470]">Freecharge</span>
  </div>
)

const PayzappLogo = () => (
  <div className="flex flex-col items-center gap-5">
    <span className="grid h-12 w-12 place-items-center rounded-md border border-[#d8d8df] bg-white text-center text-[13px] font-black leading-none text-[#204d9f]">
      PAY<br />
      <span className="text-[#ff3131]">ZAPP</span>
    </span>
    <span className="text-lg text-[#5f6470]">PayZap</span>
  </div>
)

const BankLogo = ({ bank }) => {
  const styles = {
    HDFC: 'border-[7px] border-red-600 bg-blue-700 outline outline-[7px] outline-white',
    SBI: 'bg-[#16ade1]',
    ICICI: 'bg-white text-[#bd1515]',
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <span className={`grid h-14 w-14 place-items-center ${styles[bank]}`}>
        {bank === 'HDFC' && <span className="h-5 w-5 bg-white" />}
        {bank === 'SBI' && <span className="h-5 w-5 rounded-full bg-white shadow-[0_18px_0_0_white]" />}
        {bank === 'ICICI' && <span className="text-5xl font-black italic">i</span>}
      </span>
      <span className="text-lg text-[#5f6470]">
        {bank === 'HDFC' ? 'HDFC Bank' : bank === 'SBI' ? 'SBI' : 'ICICI Bank'}
      </span>
    </div>
  )
}

const SwiftPay = () => (
  <div className="flex items-center justify-center gap-3 py-6 text-lg text-[#5f6470]">
    <span>Powered by</span>
    <span className="flex items-center text-[34px] leading-none tracking-wide text-[#102033]">
      <span className="mr-1 grid h-9 w-10 -skew-x-6 place-items-center bg-[#44ad57] text-2xl font-bold text-white">
        S
      </span>
      WIFT<span className="font-light">PAY</span>
    </span>
  </div>
)

const PaymentMethods = () => {
  const [active, setActive] = useState('upi')

  return (
    <section className="pt-10">
      <p className="mb-6 pl-10 text-lg text-[#5f6470]">Select Payment Method</p>

      <div className="space-y-6">
        {methods.map((method) => {
          const open = active === method.id

          return (
            <article
              className={`rounded-[13px] bg-white shadow-[0_8px_14px_rgba(0,0,0,0.08)] ${
                open ? 'border border-[#ff552e] px-8 py-6' : 'px-8 py-6'
              }`}
              key={method.id}
            >
              <button
                className="flex w-full items-center gap-6 text-left"
                onClick={() => setActive(open ? '' : method.id)}
                type="button"
              >
                <IconFrame type={method.icon} />
                <span className="flex-1 text-[26px] text-[#666b75]">{method.label}</span>
                <ChevronDown open={open} />
              </button>

              {open && method.id === 'upi' && (
                <div className="mt-6">
                  <label className="mb-2 block text-lg text-[#5f6470]">Enter UPI Id</label>
                  <TextInput className="w-full" placeholder="abc@bank" />
                  <button className="mt-4 h-[45px] w-full bg-[#ff552e] text-xl font-semibold text-white" type="button">
                    Verify
                  </button>
                </div>
              )}

              {open && method.id === 'wallet' && (
                <div className="mt-7">
                  <div className="grid grid-cols-2 gap-8 px-6">
                    <FreechargeLogo />
                    <PayzappLogo />
                  </div>
                  <select className="mt-6 h-[45px] w-full border border-[#858585] bg-white px-2 text-[22px] text-[#666b75] outline-none">
                    <option>Select Wallet</option>
                    <option>Freecharge</option>
                    <option>PayZap</option>
                  </select>
                </div>
              )}

              {open && method.id === 'card' && (
                <div className="mt-6">
                  <label className="mb-2 block text-lg text-[#5f6470]">Enter card number</label>
                  <TextInput className="w-full" placeholder="Card Number" />
                  <div className="mt-4 grid grid-cols-[1fr_1fr_1fr] gap-4">
                    <div className="col-span-2">
                      <label className="mb-2 block text-lg text-[#5f6470]">Expiry date</label>
                      <div className="grid grid-cols-2 gap-4">
                        <TextInput placeholder="MM" />
                        <TextInput placeholder="YYYY" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-lg text-[#5f6470]">CVV</label>
                      <TextInput placeholder="CVV" type="password" />
                    </div>
                  </div>
                  <label className="mt-4 block text-lg text-[#5f6470]">Enter card holder's name</label>
                  <TextInput className="mt-2 w-full" placeholder="Name on Card" />
                  <label className="mt-5 flex items-center gap-3 text-base text-[#5f6470]">
                    <input className="h-5 w-5 accent-blue-600" defaultChecked type="checkbox" />
                    Save card as per new RBI guidelines.
                    <span className="text-[#00a23f]">Learn More</span>
                  </label>
                </div>
              )}

              {open && method.id === 'banking' && (
                <div className="mt-8">
                  <div className="grid grid-cols-3 gap-8">
                    <BankLogo bank="HDFC" />
                    <BankLogo bank="SBI" />
                    <BankLogo bank="ICICI" />
                  </div>
                  <select className="mt-6 h-[45px] w-full border border-[#858585] bg-white px-2 text-[22px] text-[#666b75] outline-none">
                    <option>Select Bank</option>
                    <option>HDFC Bank</option>
                    <option>SBI</option>
                    <option>ICICI Bank</option>
                  </select>
                </div>
              )}
            </article>
          )
        })}
      </div>

      <SwiftPay />

      <button className="-mx-5 block h-[100px] w-[calc(100%+2.5rem)] bg-[#8d8e8e] text-3xl font-medium text-white sm:-mx-10 sm:w-[calc(100%+5rem)]" type="button">
        PROCEED TO PAY
      </button>
    </section>
  )
}

export default PaymentMethods
