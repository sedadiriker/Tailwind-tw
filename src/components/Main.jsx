
const Main = () => {
  return (
    <section className="flex gap-60  px-44 justify-center py-20">
          <div className=" w-[50%] flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <h1 className="text-[58px] font-[800] leading-[66px]">A special credit card made for Developers.</h1>
              <p className="leading-[26px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.</p>
              <form action="#" method="POST">
                <div className=" relative">
                  <input className="rounded-[15px] border border-1 border-gray-400 placeholder:text-gray-900 ps-[25px] pe-[16px] py-[17px] w-[100%]" type="email" placeholder="Enter email address" required />
                  <div className=" absolute top-1.5 right-1.5">
                    <button className="bg-[#18181B] text-white p-3 px-16 rounded-[10px] " type="submit">Get Free Card</button>
                  </div>
                </div>
              </form>
            </div>

            <div className="flex w-[100%] justify-between items-center">
              <div className="flex gap-2  items-center">
                <p className="text-[42px]">2943</p>
                <p className="text-[13px] text-gray-900">Cards<br />Delivered</p>
              </div>
              <div>
                <svg width={16} height={39} viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975" />
                  <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398" />
                  <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584" />
                  <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584" />
                  <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584" />
                </svg>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[42px]">$1M+</p>
                <p className="text-[13px] text-gray-900">Transaction<br />Completed</p>
              </div>
            </div>
          </div>
          
          <div className="w-[50%] border border-solid">
            <img className="w-[100%]" src="https://d33wubrfki0l68.cloudfront.net/d6f1462500f7670e0db6b76b35054a081679a5a0/0ce15/images/hero/5.1/illustration.png" alt="images" />
          </div>
      </section>
  )
}

export default Main
