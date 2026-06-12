import OrderSummary from '../components/orderSummary/orderSummary'
import PaymentMethods from '../components/paymentMethods/paymentMethods'

const PaymentPage = () => {
  return (
    <main className="min-h-screen bg-[#302f37] px-0 text-[#303744]">
      <section className="mx-auto min-h-screen w-full bg-[#f3f3f4] shadow-2xl sm:w-[40vw] sm:min-w-[390px]">
        <div className="bg-[#302f37] px-8 pb-24 pt-9 sm:px-11">
          <p className="text-base font-semibold text-white">Paying to</p>
          <h1 className="mt-1 text-3xl font-normal leading-none text-[#ff552e]">
            homefood
          </h1>
        </div>

        <div className="relative -mt-16 px-5 pb-0 sm:px-10">
          <OrderSummary />
          <PaymentMethods />
        </div>
      </section>
    </main>
  )
}

export default PaymentPage
