const ChevronDown = ({ className = '' }) => (
  <svg
    className={className}
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

const OrderSummary = () => {
  return (
    <section className="rounded-[13px] bg-white px-7 py-7 shadow-[0_16px_24px_rgba(0,0,0,0.18)] sm:px-10">
      <div>
        <h2 className="text-3xl font-semibold leading-tight text-[#313640]">
          Hi Prasad Naik,
        </h2>
        <p className="mt-3 text-2xl text-[#313640]">9999999999</p>
      </div>

      <div className="my-6 h-px bg-[#e6e6e8]" />

      <div className="flex items-center justify-between gap-4">
        <p className="text-lg font-semibold text-[#9699a8]">
          Order Order12312 orderNumber
        </p>
        <button
          className="flex shrink-0 items-center gap-3 text-lg text-[#8f91a0]"
          type="button"
        >
          View order
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>

      <div className="mt-9 flex items-start justify-between gap-5">
        <div>
          <p className="text-2xl text-black">Order Value</p>
          <p className="mt-6 text-lg text-black">Discount</p>
        </div>
        <div className="text-right">
          <p className="text-2xl text-black">₹5,00,000.00</p>
          <p className="mt-6 text-lg text-black">₹2,000.00</p>
        </div>
      </div>

      <div className="-mr-7 mt-7 flex justify-end sm:-mr-10">
        <div className="flex w-fit items-center gap-3 bg-[#fde2dc] py-2 pl-2 pr-6 text-base text-[#ff552e]">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#ff7b5c] text-2xl font-bold text-white">
            %
          </span>
          Total saving of 0.4% on this order
        </div>
      </div>

      <div className="my-9 h-px bg-[#e6e6e8]" />

      <div className="flex items-center justify-between gap-5">
        <p className="text-2xl text-[#303744]">Payable Amount</p>
        <p className="text-2xl text-[#303744]">₹4,98,000.00</p>
      </div>
    </section>
  )
}

export default OrderSummary
